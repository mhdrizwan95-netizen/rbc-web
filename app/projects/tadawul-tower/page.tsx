import Link from 'next/link'

export const metadata = {
  title: 'Tadawul Tower — Structural & Architectural Steel (KAFD)',
  description: 'Fabrication and installation of premium architectural and structural steel at Tadawul Tower, KAFD. On-spec materials, WPS-driven QA, clean finishes.',
}

export default function TadawulTowerPage() {
  return (
    <div className="min-h-dvh bg-white text-gray-900 pt-16">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        <header className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Tadawul Tower — Structural & Architectural Steel, KAFD</h1>
          <p className="text-lg text-gray-600">
            Fabrication and installation of premium architectural and structural steel at Tadawul Tower, KAFD.
          </p>
        </header>

        <div className="prose prose-lg max-w-none mb-12">
          <p><strong>Location:</strong> KAFD Block, Riyadh<br/>
          <strong>Scope:</strong> 50,000 sqm premium office development</p>

          <h2>Structural Steel Elements</h2>
          <p>
            Fabricated and installed primary structural steel framework including transfer beams, floor joists, and roof trusses.
            S355 steel grade throughout with mill certificates. Node points designed for architectural finishes and MEP penetrations.
          </p>

          <h2>Architectural Integration</h2>
          <p>
            Premium balustrade systems for executive floors with mirror-finished stainless steel. Feature staircases with custom curved handrails.
            Brise soleil panels fabricated to architect specifications. QC-welded connections throughout.
          </p>

          <h2>Execution Challenges</h2>
          <p>
            Live-site installation on high-rise construction. Coordinated with main contractor's crane usage. Finished ahead of mechanical trades for clean interfaces.
            Material delivered just-in-time to minimize double-handling. Quality surface finishes maintained throughout construction phase.
          </p>

          <h2>Quality Assurance</h2>
          <p>
            WPS procedures followed for all welding operations. NDT testing on 15% of structural welds. Dimensional verification at key stages.
            Surface finish inspection before architectural cladding installation. Punch-list closeout with zero defects on handoff.
          </p>
        </div>

        <div className="bg-gray-50 rounded-xl p-8 mb-8">
          <h2 className="text-xl font-semibold mb-4">Questions About Our Work?</h2>
          <p className="text-gray-600 mb-6">
            We execute complex architectural steel packages for premium developments like Tadawul Tower. Send us your project details for a technical proposal.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="https://wa.me/0539560033"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700"
            >
              Project Discussion
            </Link>
            <Link
              href="mailto:info@rbc-sa.com?subject=Tadawul%20Tower%20Project%20Inquiry"
              className="inline-flex items-center gap-2 rounded-xl border border-gray-300 px-6 py-3 text-sm text-gray-700 hover:border-gray-500"
            >
              Technical Inquiry
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
