import Link from 'next/link'

export const metadata = {
  title: 'Architectural Metalwork — Riyadh, KSA',
  description: 'Balustrades, handrails, canopies, cladding, bespoke details. Premium finishes and precise fit on live sites. Send DWG/DXF for pricing.',
}

export default function ArchitecturalMetalworkPage() {
  return (
    <div className="min-h-dvh bg-white text-gray-900 pt-16">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        <header className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Architectural Metalwork</h1>
          <p className="text-lg text-gray-600">
            Balustrades, handrails, canopies, cladding, bespoke details. Premium finishes and precise fit on live sites.
          </p>
        </header>

        <div className="prose prose-lg max-w-none mb-12">
          <h2>Materials & Finishes</h2>
          <p>
            Available in stainless steel 304/316 mirror, brushed, and satin finishes. Standard steel with powder coating and galvanizing options.
            Glass and timber combinations for hybrid balustrades available. Custom curvatures and complex geometries supported.
          </p>

          <h2>Installation Expertise</h2>
          <p>
            Live-site installation with minimal disruption. Experienced crews for high-rise balustrades, staircase handrails, and canopy erection.
            Temporary bracing, safety protocols, and finish protection during construction phases.
          </p>
        </div>

        <div className="bg-gray-50 rounded-xl p-8 mb-8">
          <h2 className="text-xl font-semibold mb-4">Provide Drawings for Pricing</h2>
          <p className="text-gray-600 mb-6">
            Send floor plans, section details, connection details, and specific finish requirements.
            Dimensions, quantities, and site access considerations.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="https://wa.me/0539560033"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700"
            >
              Quote via WhatsApp
            </Link>
            <Link
              href="mailto:info@rbc-sa.com?subject=Architectural%20Metalwork%20Inquiry"
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
