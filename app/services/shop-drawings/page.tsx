import Link from 'next/link'

export const metadata = {
  title: 'Shop Drawings & Site Survey — Riyadh',
  description: 'Coordinated shop drawings, as-builts, and site surveys for error-free fabrication and install. DWG/DXF workflows aligned to your program.',
}

export default function ShopDrawingsPage() {
  return (
    <div className="min-h-dvh bg-white text-gray-900 pt-16">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        <header className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Shop Drawings & Site Surveys</h1>
          <p className="text-lg text-gray-600">
            Coordinated shop drawings, as-builts, and site surveys for error-free fabrication and install.
          </p>
        </header>

        <div className="prose prose-lg max-w-none mb-12">
          <h2>Coordination Services</h2>
          <p>
            Interface management between architects, engineers, and fabricators. Clash detection and resolution in shop drawing phase.
            Dimensional verification and tolerance coordination across all trades involved in metalwork installation.
          </p>

          <h2>Survey & Documentation</h2>
          <p>
            On-site dimensional surveys using laser measurement tools. As-built documentation for existing conditions.
            Fabrication tolerance analysis and deviation calculations. Quality control checklists and inspection reports.
          </p>

          <h2>Digital Workflow</h2>
          <p>
            Autocad coordination drawings in DWG/DXF formats. BIM compatibility for modern project workflows.
            Cloud-based drawing repositories for real-time access by all stakeholders. Version control and change tracking.
          </p>
        </div>

        <div className="bg-gray-50 rounded-xl p-8 mb-8">
          <h2 className="text-xl font-semibold mb-4">Send Architectural & Structural Drawings</h2>
          <p className="text-gray-600 mb-6">
            Provide PDFs, DWGs, or access to BIM models. We produce coordinated shop drawings and conduct site surveys for accurate fabrication.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="https://wa.me/0539560033"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700"
            >
              Coordination Quote
            </Link>
            <Link
              href="mailto:info@rbc-sa.com?subject=Shop%20Drawings%20%26%20Survey%20Inquiry"
              className="inline-flex items-center gap-2 rounded-xl border border-gray-300 px-6 py-3 text-sm text-gray-700 hover:border-gray-500"
            >
              Send Email
            </Link>
          </div>
        </div>

        <div className="text-center">
          <Link href="/" className="text-blue-600 hover:text-blue-700 underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
