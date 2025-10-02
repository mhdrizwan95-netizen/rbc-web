import Link from 'next/link'

export const metadata = {
  title: 'Metalwork Installation & Erection — Riyadh, KSA',
  description: 'Experienced on-site teams for erection and fit-out. Coordinated logistics, safety-first execution, punch-list closeout. Nationwide deployment.',
}

export default function InstallationPage() {
  return (
    <div className="min-h-dvh bg-white text-gray-900 pt-16">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        <header className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Metalwork Installation & Erection</h1>
          <p className="text-lg text-gray-600">
            Experienced on-site teams for erection and fit-out. Coordinated logistics, safety-first execution, punch-list closeout.
          </p>
        </header>

        <div className="prose prose-lg max-w-none mb-12">
          <h2>Installation Services</h2>
          <p>
            Complete erection packages including base preparations, anchoring, alignment and leveling. Specialized crews for structural steel beams,
            columns, and joists. Stainless steel fixings and custom connection solutions.
          </p>

          <h2>Site Coordination</h2>
          <p>
            Interface coordination with general contractors, mechanical, and electrical trades. Lift planning and equipment requirements.
            Temporary bracing, shoring, and security measures during construction phases.
          </p>

          <h2>Quality & Safety</h2>
          <p>
            Certified rigging personnel with current safety training. Punch-list compilation and closeout. Final inspections and documentation.
            Adherence to Saudi Building Code requirements and client QA procedures.
          </p>
        </div>

        <div className="bg-gray-50 rounded-xl p-8 mb-8">
          <h2 className="text-xl font-semibold mb-4">Discuss Project Requirements</h2>
          <p className="text-gray-600 mb-6">
            Send site plans, structural drawings, access details, and timelines. We coordinate comprehensive installation solutions nationwide.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="https://wa.me/0539560033"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700"
            >
              Installation Quote
            </Link>
            <Link
              href="mailto:info@rbc-sa.com?subject=Installation%20Services%20Inquiry"
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
