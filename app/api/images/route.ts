import { NextRequest, NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'
import sharp from 'sharp'
import crypto from 'node:crypto'

import { getImages, createImage, getProjects } from '@/lib/db'
import { UploadImageSchema } from '@/lib/types'
import { revalidateTag } from 'next/cache'
import { createId } from '@/lib/db'

export const runtime = 'nodejs' // Required for Sharp on Vercel
export const maxDuration = 60 // Allow up to 60s for image processing

const UPLOADS_DIR = path.join(process.cwd(), 'public', 'uploads')

// Ensure uploads directory exists
async function ensureUploadsDir() {
  try {
    await fs.mkdir(UPLOADS_DIR, { recursive: true })
  } catch (error) {
    // Directory exists
  }
}

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const projectId = searchParams.get('projectId') || undefined

    const images = await getImages(projectId)

    // If no projectId, include projects for admin UI
    let projects
    if (!projectId) {
      projects = await getProjects()
    }

    return NextResponse.json({ images, projects })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch images' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const runtime = "nodejs"
    const dynamic = "force-dynamic"
    const maxDuration = 60

    const formData = await request.formData()
    const file = formData.get('file') as File | null
    const projectId = String(formData.get('projectId') || '')
    const caption = String(formData.get('caption') || '')
    const isCover = String(formData.get('isCover') || '') === 'true'
    const aspect = String(formData.get('aspect') || '16:9')

    if (!file || !projectId) {
      return NextResponse.json({ error: 'file and projectId are required' }, { status: 400 })
    }

    const buf = Buffer.from(await file.arrayBuffer())

    // 1) Load in Sharp
    const image = sharp(buf, { failOnError: false }).rotate()

    // 2) Compute center-crop to target aspect (in case client didn't crop)
    const [aw, ah] = aspect.split(':').map(Number)
    const meta = await image.metadata()
    const iw = meta.width || 0, ih = meta.height || 0
    if (!iw || !ih) return NextResponse.json({ error: 'Invalid image' }, { status: 400 })

    // compute target crop rect maintaining 16:9
    const targetW = iw
    const targetH = Math.round((iw * ah) / aw)
    let cropW = iw, cropH = targetH, left = 0, top = 0

    if (targetH > ih) {
      // too tall; base on height
      cropH = ih
      cropW = Math.round((ih * aw) / ah)
    }
    left = Math.max(0, Math.round((iw - cropW) / 2))
    top = Math.max(0, Math.round((ih - cropH) / 2))

    // 3) Derivatives
    const webW = 1600, webH = Math.round((webW * ah) / aw)
    const thumbW = 640, thumbH = Math.round((thumbW * ah) / aw)

    const cropped = image.extract({ left, top, width: cropW, height: cropH })

    const webBuf = await cropped.resize(webW, webH).webp({ quality: 82 }).toBuffer()
    const thumbBuf = await cropped.resize(thumbW, thumbH).webp({ quality: 78 }).toBuffer()

    // 4) Save files
    const base = `${projectId}-${Date.now()}-${crypto.randomBytes(4).toString('hex')}`
    const dir = await ensureUploadsDir()
    await fs.writeFile(path.join(UPLOADS_DIR, `${base}.webp`), webBuf)
    await fs.writeFile(path.join(UPLOADS_DIR, `${base}-thumb.webp`), thumbBuf)

    const webUrl = `/uploads/${base}.webp`
    const thumbUrl = `/uploads/${base}-thumb.webp`

    // 5) Record
    const imageRecord = await createImage(projectId, caption, webUrl, isCover, {
      thumbUrl,
      aspect,
      width: webW,
      height: webH,
    })

    // Revalidate tags
    revalidateTag('images')
    revalidateTag(`images:project:${projectId}`)
    if (isCover) revalidateTag('projects')

    return NextResponse.json({ image: imageRecord })
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Upload failed' },
      { status: 400 }
    )
  }
}
