import Link from 'next/link'

export const metadata = {
  title: 'Special Projects & Custom Fabrication — KSA',
  description: 'Non-standard assemblies and technical builds, including weather stations and bespoke metalwork. Rapid prototyping to delivered install.',
}

export default function SpecialProjectsPage() {
  return (
    <div className="min-h-dvh bg-white text-gray-900 pt-16">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        <header className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Special Projects & Custom Fabrication</h1>
          <p className="text-lg text-gray-600">
            Non-standard assemblies and technical builds, including weather stations and bespoke metalwork.
          </p>
        </header>

        <div className="prose prose-lg max-w-none mb-12">
          <h2>Weather Stations & Scientific Assemblies</h2>
          <p>
            Complete fabrication and deployment of meteorological monitoring equipment. Corrosive-resistant construction for long-term exposure.
            Sensor mounting, data logging integration, and maintenance access designed into initial fabrication. KSA extreme environment considerations.
          </p>

          <h2>Bespoke Metalwork</h2>
          <p>
            One-off architectural features, display pieces, and functional prototypes. Complex curvatures, structural integrity combined with aesthetic requirements.
            Material selection for weathering, finish durability, and maintenance requirements. Conceptual design support available.
          </p>

          <h2>Rapid Prototyping</h2>
          <p>
            Proof-of-concept fabrication with short turnaround times. Design iteration support through multiple prototype cycles.
            Functional testing and validation before full production commitment. Cost-effective approach to novel metalwork solutions.
          </p>
        </div>

        <div className="bg-gray-50 rounded-xl p-8 mb-8">
          <h2 className="text-xl font-semibold mb-4">Describe Your Custom Requirements</h2>
          <p className="text-gray-600 mb-6">
            Send sketches, specifications, or conceptual details. We excel at transforming unique challenges into deliverable metalwork solutions.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="https://wa.me/0539560033"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700"
            >
              Custom Project Quote
            </Link>
            <Link
              href="mailto:info@rbc-sa.com?subject=Special%20Projects%20Inquiry"
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
