import { promises as fs } from 'fs'
import path from 'path'
import { z } from 'zod'
import { Project, Image, CreateProjectSchema, ProjectSchema, ImageSchema } from './types'

const DATA_DIR = path.join(process.cwd(), 'data')
const PROJECTS_FILE = path.join(DATA_DIR, 'projects.json')
const IMAGES_FILE = path.join(DATA_DIR, 'images.json')

// In-memory stores
let projects: Project[] = []
let images: Image[] = []

// Initialize data directory
async function ensureDataDir() {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true })
  } catch (error) {
    // Directory exists
  }
}

// Load data from files
async function loadData() {
  await ensureDataDir()

  try {
    const projectsData = await fs.readFile(PROJECTS_FILE, 'utf-8')
    projects = JSON.parse(projectsData)
  } catch (error) {
    projects = []
    await saveProjects()
  }

  try {
    const imagesData = await fs.readFile(IMAGES_FILE, 'utf-8')
    images = JSON.parse(imagesData)
  } catch (error) {
    images = []
    await saveImages()
  }
}

// Save data to files
async function saveProjects() {
  await ensureDataDir()
  await fs.writeFile(PROJECTS_FILE, JSON.stringify(projects, null, 2))
}

async function saveImages() {
  await ensureDataDir()
  await fs.writeFile(IMAGES_FILE, JSON.stringify(images, null, 2))
}

// Initialize on module load
loadData()

// Helper functions
export function createId(): string {
  return crypto.randomUUID()
}

export function generateSlug(name: string, existingProjects: Project[] = []): string {
  let slug = name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

  let counter = 1
  let uniqueSlug = slug

  while (existingProjects.some(p => p.slug === uniqueSlug)) {
    uniqueSlug = `${slug}-${counter++}`
  }

  return uniqueSlug
}

// Project operations
export async function getProjects(options?: { featuredOnly?: boolean }): Promise<Project[]> {
  let result = [...projects]

  if (options?.featuredOnly) {
    result = result.filter(p => p.isFeatured)
  }

  // Sort: featured by rank first (lower rank = higher priority), then by createdAt
  result.sort((a, b) => {
    const rankA = a.featuredRank ?? Infinity
    const rankB = b.featuredRank ?? Infinity

    if (rankA !== rankB) return rankA - rankB // Lower rank first
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime() // Newest first
  })

  return result
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  return projects.find(p => p.slug === slug) || null
}

export async function getFeaturedProjects(): Promise<Project[]> {
  return (await getProjects()).slice(0, 2) // Latest 2 with coverUrl preference (handle in caller)
}

export async function createProject(data: z.infer<typeof CreateProjectSchema>): Promise<Project> {
  const slug = data.slug || generateSlug(data.name, projects)
  const project: Project = {
    id: createId(),
    name: data.name,
    slug,
    createdAt: new Date().toISOString(),
  }

  ProjectSchema.parse(project) // Validate

  projects.push(project)
  await saveProjects()

  return project
}

// Image operations
export async function getImages(projectId?: string): Promise<Image[]> {
  let result = images.slice()

  if (projectId) {
    result = result.filter(img => img.projectId === projectId)
  }

  return result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
}

export async function createImage(projectId: string, caption: string, url: string, setAsCover = false, options: Partial<Image> = {}): Promise<Image> {
  const project = projects.find(p => p.id === projectId)
  if (!project) throw new Error('Project not found')

  const image: Image = {
    id: createId(),
    projectId,
    caption,
    url,
    createdAt: new Date().toISOString(),
    ...options, // Include additional fields like thumbUrl, width, height, aspect
  }

  ImageSchema.parse(image)

  images.push(image)
  await saveImages()

  // Handle cover image
  if (setAsCover || !project.coverUrl) {
    project.coverUrl = url
    await saveProjects()
  }

  return image
}

// For revalidation (will be used in API routes)
export { projects, images }
