import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = new URL(request.url)

  // Protect /admin and everything under it
  if (pathname.startsWith('/admin')) {
    const auth = request.headers.get('authorization') || ''
    const user = process.env.ADMIN_USER || 'admin'
    const pass = process.env.ADMIN_PASS || 'change-me'
    const expected = 'Basic ' + btoa(`${user}:${pass}`)

    if (auth !== expected) {
      return new NextResponse('Unauthorized', {
        status: 401,
        headers: { 'WWW-Authenticate': 'Basic realm="Admin"' },
      })
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/admin/:path*',
}
