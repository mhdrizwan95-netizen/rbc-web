import Link from 'next/link'
import { getProjects } from '@/lib/db'

// Force dynamic to ensure fresh data
export const dynamic = 'force-dynamic'

export default async function ProjectsPage() {
  const projectList = await getProjects()

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-200 py-12 text-center">
        <div className="mx-auto max-w-2xl px-4">
          <h1 className="text-3xl font-semibold">Our Projects</h1>
          <p className="mt-4 text-gray-600">
            Showcase of our metal fabrication and installation work across Saudi Arabia.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectList.map((project: any) => (
            <article key={project.id} className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
              <Link href={`/projects/${project.slug}`}>
                <div className="aspect-[16/9] overflow-hidden bg-gray-100">
                  <img
                    src={project.coverUrl || "/placeholder.jpg"}
                    alt={project.name}
                    className="h-full w-full object-cover transition group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h2 className="font-semibold text-lg">{project.name}</h2>
                  <p className="mt-2 text-sm text-gray-600">
                    {new Date(project.createdAt).getFullYear()}
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {projectList.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No projects yet. Check back soon!</p>
          </div>
        )}
      </main>
    </div>
  )
}
