import { NextResponse } from 'next/server'

export function middleware(req) {
  if (!isAuthenticated(req))
    return NextResponse.redirect(new URL('/login', req.url))
  return NextResponse.next()
}

const isAuthenticated = (req) => {
  const { cookies } = req
  return !!cookies.get('token')
}

//protected routes
export const config = {
  matcher: '/app/:path*',
}
