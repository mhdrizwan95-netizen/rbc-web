import { NextRequest, NextResponse } from 'next/server'
import { createProject } from '@/lib/db'
import { CreateProjectSchema } from '@/lib/types'
import { revalidateTag } from 'next/cache'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validated = CreateProjectSchema.parse(body)

    const project = await createProject(validated)

    // Revalidate projects tag
    revalidateTag('projects')

    return NextResponse.json({ project })
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Validation error' },
      { status: 400 }
    )
  }
}
