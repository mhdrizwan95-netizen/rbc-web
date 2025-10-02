'use client';
/*
RBC Landing Page – White Theme (Renamer-style)
Framework: React (single-file), Tailwind utility classes
Notes:
- Keep accents blue (#2563EB / Tailwind blue-600) for CTAs and icons.
- Apply reveal/hover utilities (from globals.css) where helpful.
*/

import { useMemo, useState, useEffect } from 'react'
import { ArrowRight, Phone, Mail, MessageCircle, CheckCircle2, Hammer, Ruler, Building2, Factory, Sparkles, PanelsTopLeft } from "lucide-react"
import { useReveal } from "./reveal"

const COMPANY_NAME = "Rabia AlBadia Contracting Co."
const CONTACT_EMAIL = "info@rbc-sa.com"
const CONTACT_PHONE = "053 956 0033"
const WHATSAPP_LINK = "https://wa.me/0539560033"

export default function Site(){
  const year = useMemo(()=> new Date().getFullYear(), [])
  return (
    <div className="min-h-dvh bg-white text-gray-900 antialiased">
      <Header />
      <main>
        <Hero />
        <ProofBar />
        <Services />
        <Workmanship />
        <Projects />
        <Process />
        <CTA />
      </main>
      <Footer year={year} />
    </div>
  )
}

function Container({children}:{children:React.ReactNode}){
  return <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
}

function Header(){
  return (
    <header className="sticky top-0 z-40">
      <div className="absolute inset-0 -z-10 h-14 bg-white/80 backdrop-blur-md border-b border-gray-200"/>
      <Container>
        <div className="flex h-14 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <img
              src="/rbc-logo.png"
              alt="Rabia AlBadia Contracting Co. — logo"
              className="h-8 md:h-10 w-auto"
            />
          </a>
          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#services" className="text-gray-600 hover:text-gray-900">Services</a>
            <a href="#workmanship" className="text-gray-600 hover:text-gray-900">Workmanship</a>
            <a href="/projects" className="text-gray-600 hover:text-gray-900">View All Projects</a>
            <a href="#process" className="text-gray-600 hover:text-gray-900">Process</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
          </nav>
          <div className="flex items-center gap-2 md:gap-3">
            <a href={`mailto:${CONTACT_EMAIL}`} className="hidden rounded-lg border border-gray-300 px-3 py-1.5 text-sm text-gray-700 hover:border-gray-500 md:inline-block">Email</a>
            <a href={WHATSAPP_LINK} className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-700 transition-colors">
              <MessageCircle className="h-4 w-4"/> Get a quote
            </a>
          </div>
        </div>
      </Container>
    </header>
  )
}

function Hero(){
  const ref = useReveal<HTMLDivElement>()
  return (
    <section className="relative overflow-hidden border-b border-gray-200">
      {/* Bilingual header strip at top */}
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 py-6">
        <img
          src="/rbc-header.png"
          alt="Rabia AlBadia Contracting Co. — bilingual name"
          className="h-12 sm:h-16 lg:h-20 w-full object-contain"
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60rem_40rem_at_50%_-10%,rgba(37,99,235,0.12),transparent_60%)]"/>
      <Container>
        <div ref={ref} className="relative grid grid-cols-1 items-center gap-10 py-16 md:grid-cols-2 md:py-24 reveal">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-2 py-1 text-xs text-gray-600">
              <Sparkles className="h-3.5 w-3.5 text-blue-600"/>
              Premium metal fabrication → fast, precise, on‑spec
            </div>
            <h1 className="mt-4 text-balance text-4xl font-semibold leading-tight md:text-5xl">
              Structural & Architectural Steel
              <span className="block text-gray-500">designed, fabricated, installed</span>
            </h1>
            <p className="mt-4 max-w-xl text-pretty text-gray-600">
              We deliver end‑to‑end metal works for landmark builds—shop drawings, precise fabrication, and clean installs. Riyadh‑based, KSA‑wide execution.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={WHATSAPP_LINK} className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 hover-lift">
                Start your project <ArrowRight className="h-4 w-4"/>
              </a>
              <a href={`mailto:${CONTACT_EMAIL}`} className="inline-flex items-center gap-2 rounded-xl border border-gray-300 px-4 py-2 text-sm text-gray-700 hover:border-gray-500 hover-lift">
                Share drawings <Mail className="h-4 w-4"/>
              </a>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-blue-600"/> Shop drawings & site surveys</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-blue-600"/> Fabrication: carbon steel, stainless, aluminum</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-blue-600"/> Installation & punch‑list closeout</li>
            </ul>
          </div>
          <div className="relative">
            <div className="aspect-[16/10] w-full overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 hover-lift">
              <img src="/rbc/hero.jpg" alt="RBC fabrication hero" className="h-full w-full object-cover"/>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

function ProofBar(){
  const ref = useReveal<HTMLDivElement>()
  return (
    <section>
      <Container>
        <div ref={ref} className="reveal grid grid-cols-2 gap-4 py-10 text-xs text-gray-600 md:grid-cols-4">
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-4 hover-lift">
            <div className="font-semibold text-gray-900">KAFD</div>
            <div>Tadawul Tower – steel & architectural works</div>
          </div>
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-4 hover-lift">
            <div className="font-semibold text-gray-900">Kingdom‑wide</div>
            <div>Solar study – weather stations fabrication & install</div>
          </div>
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-4 hover-lift">
            <div className="font-semibold text-gray-900">Fast lead times</div>
            <div>Shop → site in tight schedules</div>
          </div>
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-4 hover-lift">
            <div className="font-semibold text-gray-900">QC first</div>
            <div>On‑spec materials & weld procedures</div>
          </div>
        </div>
      </Container>
    </section>
  )
}

function Services(){
  const ref = useReveal<HTMLDivElement>()
  const items = [
    {icon: <Hammer className="h-5 w-5 text-blue-600"/>, title:"Structural Steel", slug:"structural-steel", desc:"Beams, trusses, platforms, brackets—fabrication & erection."},
    {icon: <PanelsTopLeft className="h-5 w-5 text-blue-600"/>, title:"Architectural Metalwork", slug:"architectural-metalwork", desc:"Handrails, balustrades, canopies, cladding, bespoke details."},
    {icon: <Factory className="h-5 w-5 text-blue-600"/>, title:"Custom Fabrication", slug:"special-projects", desc:"Carbon steel, stainless, aluminum with CNC accuracy."},
    {icon: <Ruler className="h-5 w-5 text-blue-600"/>, title:"Shop Drawings", slug:"shop-drawings", desc:"Site surveys, as‑builts, and coordinated shop details."},
    {icon: <Building2 className="h-5 w-5 text-blue-600"/>, title:"Installation", slug:"installation", desc:"Experienced crews, site coordination, safety‑first."},
    {icon: <Sparkles className="h-5 w-5 text-blue-600"/>, title:"Special Projects", slug:"special-projects", desc:"Weather stations & technical assemblies across KSA."},
  ]
  return (
    <section id="services" className="border-t border-gray-200">
      <Container>
        <div ref={ref} className="reveal py-14">
          <h2 className="text-2xl font-semibold">Services</h2>
          <p className="mt-2 max-w-2xl text-sm text-gray-600">We turn drawings into delivered metalwork—clear scope, clear timeline, clean finish.</p>
          <p className="mt-2 text-sm">
            See our <a href="/projects" className="text-blue-600 hover:text-blue-700 underline decoration-blue-200 underline-offset-2">completed projects</a> or
            get in <a href="/contact" className="text-blue-600 hover:text-blue-700 underline decoration-blue-200 underline-offset-2 ml-1">touch for a quote</a>.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            {items.map((it)=> (
              <a key={it.title} href={`/services/${it.slug}`} className="rounded-2xl border border-gray-200 bg-white p-5 hover-lift block transition-all duration-200 hover:border-blue-300 hover:shadow-lg">
                <div className="flex items-center gap-2 text-gray-900">{it.icon}<span className="font-medium">{it.title}</span></div>
                <p className="mt-2 text-sm text-gray-600">{it.desc}</p>
                <div className="mt-3 text-sm text-blue-600 font-medium">Learn more →</div>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

function Workmanship(){
  const ref = useReveal<HTMLDivElement>()
  const items = [
    {title:"Laser cutting", img:"/rbc/service-laser-cutting.jpg", alt:"CNC laser cutting sparks across sheet metal", desc:"CNC laser cutting — precise profiles, clean edges."},
    {title:"Sheet bending", img:"/rbc/sheet-bending.jpg", alt:"Press brake operator bending sheet metal", desc:"Press brake bending — repeatable angles and tight tolerances."},
    {title:"Welding & fabrication", img:"/rbc/service-fabrication.webp", alt:"Welder joining structural members", desc:"Welding and fabrication — WPS-driven, QC-checked."},
    {title:"Shearing", img:"/rbc/service-shearing.webp", alt:"Sheet metal shearing machine cutting plate", desc:"Shearing — fast, clean cuts for production runs."},
  ]
  return (
    <section id="workmanship" className="border-t border-gray-200">
      <Container>
        <div ref={ref} className="reveal py-14">
          <h2 className="text-2xl font-semibold">Workmanship</h2>
          <p className="mt-2 max-w-2xl text-sm text-gray-600">Typical operations we run daily—clean, consistent, on-spec.</p>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((it)=> (
              <div key={it.title} className="overflow-hidden rounded-lg border border-gray-200 bg-white">
                <div className="aspect-[16/9] w-full bg-gray-50">
                  <img src={it.img} alt={it.alt} className="h-full w-full object-cover" />
                </div>
                <div className="p-4">
                  <p className="text-sm font-medium">{it.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

function Projects(){
  return (
    <section id="projects" className="border-t border-gray-200">
      <Container>
        <div className="py-14">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl font-semibold">Featured Projects</h2>
            <a href="/projects" className="text-sm text-gray-600 hover:text-gray-900">View All →</a>
          </div>
          <FeaturedProjects />
        </div>
      </Container>
    </section>
  )
}

function FeaturedProjects(){
  // Fetch top 2 featured projects
  const [featured, setFeatured] = useState([])

  useEffect(() => {
    fetch('/api/projects?featured=1')
      .then(res => res.json())
      .then(data => {
        // Show top 2
        setFeatured(data.projects?.slice(0, 2) || [])
      })
      .catch(err => {
        console.error('Failed to load featured projects:', err)
      })
  }, [])

  if (featured.length === 0) {
    return <p className="mt-4 text-gray-600">Featured projects coming soon.</p>
  }

  return (
    <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
      {featured.map((project: any) => (
        <article key={project.id} className="overflow-hidden rounded-2xl border border-gray-200 bg-white hover-lift">
          <a href={`/projects/${project.slug}`}>
            <div className="aspect-[16/9] w-full bg-gray-100">
              <img
                src={project.coverUrl || "/placeholder.jpg"}
                alt={project.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-5">
              <h3 className="mt-1 text-lg font-semibold">{project.name}</h3>
              <p className="mt-2 text-sm text-gray-600">
                Featured Project - Latest work and details inside
              </p>
            </div>
          </a>
        </article>
      ))}
    </div>
  )
}

function Process(){
  const ref = useReveal<HTMLDivElement>()
  const steps = [
    {title:"Share drawings & site info", desc:"Send PDFs/DWGs, photos, and constraints. We confirm scope & materials.", icon: <Mail className="h-4 w-4 text-blue-600"/>},
    {title:"Quote & schedule", desc:"Fixed scope with timelines. We lock logistics and site access windows.", icon: <Ruler className="h-4 w-4 text-blue-600"/>},
    {title:"Fabricate • Install • Close", desc:"WPS‑driven fabrication, clean installs, punch‑list closeout & handover.", icon: <Hammer className="h-4 w-4 text-blue-600"/>},
  ]
  return (
    <section id="process" className="border-t border-gray-200">
      <Container>
        <div ref={ref} className="reveal py-14">
          <h2 className="text-2xl font-semibold">How we work</h2>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            {steps.map((s)=> (
              <div key={s.title} className="rounded-2xl border border-gray-200 bg-white p-5 hover-lift">
                <div className="flex items-center gap-2 text-gray-900">{s.icon}<span className="font-medium">{s.title}</span></div>
                <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

function CTA(){
  const ref = useReveal<HTMLDivElement>()
  return (
    <section id="contact" className="border-t border-gray-200">
      <Container>
        <div ref={ref} className="reveal py-16 text-center">
          <h2 className="text-balance text-3xl font-semibold">Ready to move from drawing to delivered?</h2>
          <p className="mx-auto mt-2 max-w-xl text-gray-600">Send your scope for a fast, on‑spec quote. We respond same‑day during working hours.</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a href={WHATSAPP_LINK} className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 hover-lift"><MessageCircle className="h-4 w-4"/> WhatsApp quote</a>
            <a href={`mailto:${CONTACT_EMAIL}`} className="inline-flex items-center gap-2 rounded-xl border border-gray-300 px-4 py-2 text-sm text-gray-700 hover:border-gray-500 hover-lift"><Mail className="h-4 w-4"/> {CONTACT_EMAIL}</a>
            <a href={`tel:${CONTACT_PHONE}`} className="inline-flex items-center gap-2 rounded-xl border border-gray-300 px-4 py-2 text-sm text-gray-700 hover:border-gray-500 hover-lift"><Phone className="h-4 w-4"/> {CONTACT_PHONE}</a>
          </div>
        </div>
      </Container>
    </section>
  )
}

function Footer({year}:{year:number}){
  return (
    <footer className="border-t border-gray-200 py-10 text-center text-xs text-gray-500">
      <Container>
        <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
          <div>© {year} {COMPANY_NAME}. All rights reserved.</div>
          <div className="flex gap-4">
            <a href="#services" className="hover:text-gray-700">Services</a>
            <a href="#workmanship" className="hover:text-gray-700">Workmanship</a>
            <a href="/projects" className="hover:text-gray-700">Projects</a>
            <a href="/contact" className="hover:text-gray-700">Contact</a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
