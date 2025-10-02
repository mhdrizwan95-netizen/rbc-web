import Link from 'next/link'

export const metadata = {
  title: 'Sheet Metal Bending (Press Brake) — Riyadh',
  description: 'Accurate press brake bending for complex profiles and repeatable angles. Tight tolerances, quick turnarounds. Share drawings for pricing.',
}

export default function SheetBendingPage() {
  return (
    <div className="min-h-dvh bg-white text-gray-900 pt-16">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        <header className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Sheet Metal Bending (Press Brake)</h1>
          <p className="text-lg text-gray-600">
            Accurate press brake bending for complex profiles and repeatable angles. Tight tolerances, quick turnarounds.
          </p>
        </header>

        <div className="prose prose-lg max-w-none mb-12">
          <h2>Press Brake Specifications</h2>
          <p>
            CNC press brake with 160-ton capacity and 4m bending length. Capable of handling sheet metal from 0.5mm to 12mm thick.
            Crowning system for consistent bend angles across long parts. Multi-axis back gauging for precision positioning.
          </p>

          <h2>Profiles & Tolerances</h2>
          <p>
            Box sections, channels, angles, and custom profiles. Bend radius from 1mm to 200mm depending on material.
            Angular tolerances: ±0.5 degrees. Linear dimensions: ±0.2mm. Surface finish preserved throughout bending process.
          </p>

          <h2>Turnaround</h2>
          <p>
            Standard bends: 1-2 days. Complex multi-bend parts: 3-5 days. Tooling for production runs available for cost-effective large quantities.
          </p>
        </div>

        <div className="bg-gray-50 rounded-xl p-8 mb-8">
          <h2 className="text-xl font-semibold mb-4">Share Drawings for Pricing</h2>
          <p className="text-gray-600 mb-6">
            Provide sheet thickness, material type, bend angles, inside radii, and quantities.
            We optimize bend sequences for cost efficiency.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="https://wa.me/0539560033"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700"
            >
              Bending Quote
            </Link>
            <Link
              href="mailto:info@rbc-sa.com?subject=Sheet%20Bending%20Inquiry"
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
