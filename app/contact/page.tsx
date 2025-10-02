export default function Contact() {
  // Wait for map integration later - basic page for now
  return (
    <div className="min-h-dvh bg-white text-gray-900 pt-16">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-600 mb-8">Riyadh-based, KSA-wide metal fabrication services.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="font-semibold mb-2">Contact</h3>
            <p className="text-sm text-gray-600 mb-1">Email: info@rbc-sa.com</p>
            <p className="text-sm text-gray-600 mb-1">Phone: 053 956 0033</p>
            <a href="https://wa.me/0539560033" className="text-sm text-blue-600 hover:text-blue-700">
              WhatsApp: +966 53 956 0033
            </a>
          </div>

          <div className="text-center">
            <h3 className="font-semibold mb-2">Service Area</h3>
            <p className="text-sm text-gray-600">
              Riyadh-based with KSA-wide coverage.<br/>
              Fabrication & installation services.
            </p>
          </div>

          <div className="text-center">
            <h3 className="font-semibold mb-2">Response Time</h3>
            <p className="text-sm text-gray-600">
              Same-day quote response during working hours.<br/>
              Project follow-up within 24 hours.
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8">
          <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="border border-gray-200 rounded p-4">
              <summary className="font-medium cursor-pointer">What materials do you work with?</summary>
              <p className="mt-2 text-sm text-gray-600">Carbon steel (S275/S355), stainless steel (304/316), aluminum (6061/6082).</p>
            </details>

            <details className="border border-gray-200 rounded p-4">
              <summary className="font-medium cursor-pointer">How quickly can you deliver?</summary>
              <p className="mt-2 text-sm text-gray-600">Typical 2-4 weeks depending on complexity and current workload. Rush orders available.</p>
            </details>

            <details className="border border-gray-200 rounded p-4">
              <summary className="font-medium cursor-pointer">Do you offer on-site installation?</summary>
              <p className="mt-2 text-sm text-gray-600">Yes, experienced crews handle installation, coordination, and quality punch-list closeout.</p>
            </details>
          </div>
        </div>
      </div>
    </div>
  )
}
