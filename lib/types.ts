import { z } from 'zod'

export const ProjectSchema = z.object({
  id: z.string(),
  name: z.string().min(1, 'Name is required'),
  slug: z.string().min(1, 'Slug is required'),
  createdAt: z.string().datetime(),
  coverUrl: z.string().optional(),
  seo: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    ogImage: z.string().optional(),
  }).optional(),
  isFeatured: z.boolean().optional(),
  featuredRank: z.number().optional(),
})

export const ImageSchema = z.object({
  id: z.string(),
  projectId: z.string(),
  caption: z.string(),
  url: z.string(),
  thumbUrl: z.string().optional(),
  width: z.number().optional(),
  height: z.number().optional(),
  aspect: z.string().optional(),
  createdAt: z.string().datetime(),
})

export type Project = z.infer<typeof ProjectSchema>
export type Image = z.infer<typeof ImageSchema>

export const CreateProjectSchema = z.object({
  name: z.string().min(1),
  slug: z.string().optional(),
})

export const UploadImageSchema = z.object({
  projectId: z.string(),
  caption: z.string().min(1),
  isCover: z.boolean().optional(),
})
