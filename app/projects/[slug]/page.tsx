import { getProjectBySlug, getImages } from '../../../lib/db'
import { notFound } from 'next/navigation'

export const dynamic = 'force-dynamic'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps) {
  const slug = (await params).slug
  const project = await getProjectBySlug(slug)

  if (!project) {
    return { title: 'Project Not Found' }
  }

  return {
    title: project.seo?.title || project.name,
    description: project.seo?.description,
    openGraph: {
      title: project.seo?.title || project.name,
      description: project.seo?.description,
      images: project.seo?.ogImage ? [project.seo.ogImage] : [],
    },
  }
}

export default async function ProjectPage({ params }: PageProps) {
  const slug = (await params).slug
  const project = await getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  const imageList = await getImages(project.id)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero section */}
      <section className="relative border-b border-gray-200 py-12 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-semibold">{project.name}</h1>
              <p className="mt-4 text-gray-600">
                Created on {new Date(project.createdAt).toLocaleDateString()}
              </p>
            </div>
            {project.coverUrl && (
              <div className="aspect-[16/9] overflow-hidden rounded-lg bg-gray-100">
                <img
                  src={project.coverUrl}
                  alt={project.name}
                  className="h-full w-full object-cover"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <main className="mx-auto max-w-6xl px-4 py-12">
        {imageList.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">No images uploaded yet.</p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {imageList.map((image: any) => (
              <article
                key={image.id}
                className="group overflow-hidden rounded-xl border border-gray-200 bg-gray-50 transition hover:shadow-md"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={image.thumbUrl || image.url}
                    alt={image.caption || 'Project image'}
                    className="h-full w-full object-cover transition group-hover:scale-105"
                  />
                </div>
                <div className="p-3">
                  <p className="text-sm font-medium truncate">{image.caption}</p>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
