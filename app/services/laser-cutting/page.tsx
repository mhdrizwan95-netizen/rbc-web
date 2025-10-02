import Link from 'next/link'

export const metadata = {
  title: 'CNC Laser Cutting — Riyadh',
  description: 'High-precision CNC laser cutting for sheet and plate. Clean edges, consistent quality, fast lead times. DWG/DXF accepted for same-day quotes.',
}

export default function LaserCuttingPage() {
  return (
    <div className="min-h-dvh bg-white text-gray-900 pt-16">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        <header className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">CNC Laser Cutting</h1>
          <p className="text-lg text-gray-600">
            High-precision CNC laser cutting for sheet and plate. Clean edges, consistent quality, fast lead times.
          </p>
        </header>

        <div className="prose prose-lg max-w-none mb-12">
          <h2>Capacities & Materials</h2>
          <p>
            Fiber laser technology for mild steel up to 25mm, stainless steel to 15mm, aluminum to 12mm.
            Bed size: 3m × 1.5m. N2 assist gas for clean stainless steel cutting, no dross.
            Special alloys and coated materials upon request.
          </p>

          <h2>Precision & Speed</h2>
          <p>
            ±0.1mm accuracy on most profiles. Complex shapes, perforation patterns, and engraving capabilities.
            Average cutting speed: 500-1000 mm/min depending on material and thickness.
            Dual-head configuration for higher throughput on production runs.
          </p>
        </div>

        <div className="bg-gray-50 rounded-xl p-8 mb-8">
          <h2 className="text-xl font-semibold mb-4">Send Files for Same-Day Quotes</h2>
          <p className="text-gray-600 mb-6">
            DWG or DXF formats preferred. Include material type, thickness, and required edge finish.
            Part quantities for production pricing optimization.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="https://wa.me/0539560033"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700"
            >
              Laser Cutting Quote
            </Link>
            <Link
              href="mailto:info@rbc-sa.com?subject=Laser%20Cutting%20Inquiry"
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
