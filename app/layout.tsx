import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Rabia AlBadia Contracting — Structural & Architectural Steel (Riyadh, KSA)',
  description: 'CNC precision metal fabrication in Riyadh. Structural steel, architectural metalwork, laser cutting, bending. On-time delivery, WPS-driven quality. Send drawings for quotes.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Canonical URL */}
        <link rel="canonical" href="https://rbc-sa.com" />

        {/* Organization Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Rabia AlBadia Contracting Co.",
              "url": "https://rbc-sa.com",
              "logo": "https://rbc-sa.com/rbc-logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+966539560033",
                "contactType": "sales",
                "areaServed": "SA",
                "availableLanguage": "English"
              },
              "areaServed": {
                "@type": "Country",
                "name": "Saudi Arabia"
              }
            })
          }}
        />
      </head>
      <body className="min-h-dvh bg-white text-black antialiased [--accent:#4195D9] [--accent-dark:#1D4A73]">
        {children}
      </body>
    </html>
  )
}
