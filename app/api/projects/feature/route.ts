import { NextRequest, NextResponse } from 'next/server'
import { revalidateTag } from 'next/cache'
import { projects, saveProjects } from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const { projectId, isFeatured, featuredRank } = await request.json()

    if (!projectId) {
      return NextResponse.json({ error: 'projectId required' }, { status: 400 })
    }

    const project = projects.find((p: any) => p.id === projectId)

    if (!project) {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 })
    }

    // Toggle
    if (typeof isFeatured === 'boolean') {
      project.isFeatured = isFeatured
      if (!isFeatured) {
        project.featuredRank = undefined
      }
    }

    // Rank
    if (typeof featuredRank === 'number' && project.isFeatured !== false) {
      // Assign / normalize ranks
      const target = Math.max(1, Math.floor(featuredRank))
      const other = projects.find((p: any) => p.id !== projectId && p.featuredRank === target)
      if (other) {
        // Swap ranks
        const tmp = other.featuredRank
        other.featuredRank = project.featuredRank ?? target
        project.featuredRank = tmp ?? target
    } else {
      project.featuredRank = target
    }
    project.isFeatured = true
  }

    // Persist changes
    await saveProjects()

    // Revalidate
    revalidateTag('projects')

    return NextResponse.json({ project })
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Server error' },
      { status: 500 }
    )
  }
}
