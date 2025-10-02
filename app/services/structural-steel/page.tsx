import Link from 'next/link'

export const metadata = {
  title: 'Structural Steel Fabrication — Riyadh, KSA',
  description: 'Heavy and light structural steel: beams, trusses, platforms, brackets. WPS-driven welding, tight tolerances, clean installs. Same-day quotes from drawings.',
}

export default function StructuralSteelPage() {
  return (
    <div className="min-h-dvh bg-white text-gray-900 pt-16">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        <header className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Structural Steel Fabrication in Riyadh</h1>
          <p className="text-lg text-gray-600">
            Heavy and light structural steel: beams, trusses, platforms, brackets. WPS-driven welding, tight tolerances, clean installs.
          </p>
        </header>

        <div className="prose prose-lg max-w-none mb-12">
          <h2>Materials & Capabilities</h2>
          <p>
            We fabricate structural steel elements from carbon steel grades S275, S355, and stainless steel 304/316.
            Available in heavy welded sections up to 50mm thick and light gauge work from 2mm steel plate.
            All welding procedures follow WPS standards with certified welders and NDT inspection available.
          </p>

          <h2>Ranges & Tolerances</h2>
          <p>
            Maximum beam lengths: 12 meters. Plate sizes: up to 3m x 1.5m. Typical tolerances:
            ±1mm on dimensions, ±2mm on assemblies. Custom brackets and connections designed to specification.
          </p>

          <h2>Lead Times & QA</h2>
          <p>
            Standard production: 10-14 days for conventional work, 4-6 weeks for complex fabrications.
            All elements receive surface preparation and corrosion protection. Final inspection and quality certification provided.
          </p>
        </div>

        <div className="bg-gray-50 rounded-xl p-8 mb-8">
          <h2 className="text-xl font-semibold mb-4">Send Drawings for a Quote</h2>
          <p className="text-gray-600 mb-6">
            DWG, PDF, or DXF formats accepted. Include loads, dimensions, materials, and site access details.
            Same-day response during working hours.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="https://wa.me/0539560033"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700"
            >
              Quote via WhatsApp
            </Link>
            <Link
              href="mailto:info@rbc-sa.com?subject=Structural%20Steel%20Inquiry"
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
