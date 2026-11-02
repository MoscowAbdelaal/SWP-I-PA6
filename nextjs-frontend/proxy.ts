import { NextRequest, NextResponse } from 'next/server';

export function proxy(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/dashboard') && request.cookies.get('demo-auth')?.value !== '1') {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  return NextResponse.next();
}

export const config = { matcher: ['/dashboard/:path*'] };
