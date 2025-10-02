import Link from 'next/link'

export const metadata = {
  title: 'Weather Stations — Fabrication & Install (KSA Solar Study)',
  description: 'Nationwide fabrication and installation of weather station assemblies for solar study sites. Robust construction, consistent QA, rapid deployment.',
}

export default function SolarWeatherStationsPage() {
  return (
    <div className="min-h-dvh bg-white text-gray-900 pt-16">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        <header className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Weather Stations — Fabrication & Installation Across KSA</h1>
          <p className="text-lg text-gray-600">
            Nationwide fabrication and installation of weather station assemblies for solar study sites.
          </p>
        </header>

        <div className="prose prose-lg max-w-none mb-12">
          <p><strong>Location:</strong> Multiple sites across Kingdom of Saudi Arabia<br/>
          <strong>Scope:</strong> Nationwide network of meteorological monitoring equipment</p>

          <h2>Weather Station Fabrication</h2>
          <p>
            Complete assembly fabrication including robust structural masts and sensor mounting platforms. Stage 316 stainless steel components for extreme environmental conditions.
            Protective enclosures designed for severe dust, high temperatures, and maintenance access. Power generation integration for remote installations.
          </p>

          <h2>Sensor Integration</h2>
          <p>
            Precision mounting of anemometers, pyranometers, temperature sensors, humidity monitors, and rain gauges. Calibration fixtures maintained during fabrication.
            Data logging system integration with approved meteorological specifications. Quality assurance testing of all sensor connections.
          </p>

          <h2>Nationwide Deployment</h2>
          <p>
            Coordinated logistics for simultaneous installation across KSA. Desert terrain construction considerations with foundation engineering integration.
            Just-in-time delivery schedules to minimize transportation damage. On-site assembly and commissioning by certified technicians.
          </p>

          <h2>Environmental Hardening</h2>
          <p>
            Materials selected for 20-year service life in extreme desert conditions. Lightning protection and electrical grounding systems.
            Anti-corrosion coatings and maintenance access design. Quality inspection protocols for harsh environment operation.
          </p>
        </div>

        <div className="bg-gray-50 rounded-xl p-8 mb-8">
          <h2 className="text-xl font-semibold mb-4">Weather Station Projects</h2>
          <p className="text-gray-600 mb-6">
            We specialize in meteorological equipment fabrication for research and commercial installations. Send your specifications for KSA-compliant weather stations.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="https://wa.me/0539560033"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700"
            >
              Meteorological Quote
            </Link>
            <Link
              href="mailto:info@rbc-sa.com?subject=Weather%20Stations%20Project%20Inquiry"
              className="inline-flex items-center gap-2 rounded-xl border border-gray-300 px-6 py-3 text-sm text-gray-700 hover:border-gray-500"
            >
              Equipment Inquiry
            </Link>
          </div>
        </div>

        <div className="text-center">
          <Link href="/projects" className="text-blue-600 hover:text-blue-700 underline mr-4">
            ← All Projects
          </Link>
          <Link href="/" className="text-blue-600 hover:text-blue-700 underline">
            Home →
          </Link>
        </div>
      </div>
    </div>
  )
}
