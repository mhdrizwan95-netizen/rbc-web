import Link from 'next/link'

export const metadata = {
  title: 'Sheet & Plate Shearing — Riyadh',
  description: 'Fast, clean shearing for production runs. Consistent cut quality across gauges and lengths. Send material spec and sizes for a quick quote.',
}

export default function ShearingPage() {
  return (
    <div className="min-h-dvh bg-white text-gray-900 pt-16">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        <header className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Sheet & Plate Shearing</h1>
          <p className="text-lg text-gray-600">
            Fast, clean shearing for production runs. Consistent cut quality across gauges and lengths.
          </p>
        </header>

        <div className="prose prose-lg max-w-none mb-12">
          <h2>Shearing Capacities</h2>
          <p>
            Hydraulic shearing machine with 8mm capacity and 3m cutting length. Capable of producing straight cuts with minimal distortion.
            Guillotine-style for clean burr-free edges. Automatic backstop for consistent dimensions across multiple parts.
          </p>

          <h2>Materials & Quality</h2>
          <p>
            Suitable for mild steel, stainless steel, aluminum up to 8mm thick. Cutting speed: 15-25 cuts per minute depending on thickness.
            Tolerance: ±0.2mm on dimensions, ±0.1mm on squareness. Edge finish suitable for laser welding and assembly.
          </p>

          <h2>Production Efficiency</h2>
          <p>
            Ideal for high-volume production runs. Parts marked and stacked for delivery. Bulk material optimization minimizes waste.
            Cut-to-size service for incoming stock preparation and secondary operations.
          </p>
        </div>

        <div className="bg-gray-50 rounded-xl p-8 mb-8">
          <h2 className="text-xl font-semibold mb-4">Send Material Specs & Sizes</h2>
          <p className="text-gray-600 mb-6">
            Include material grade, thickness, dimensions, and quantities. We calculate most efficient cutting layouts for cost optimization.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="https://wa.me/0539560033"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700"
            >
              Shearing Quote
            </Link>
            <Link
              href="mailto:info@rbc-sa.com?subject=Shearing%20Inquiry"
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
