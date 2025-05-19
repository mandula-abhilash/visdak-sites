import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Get hostname (e.g. vercel.app, localhost:3000)
  const hostname = request.headers.get("host") || "localhost:3000";
  const url = request.nextUrl;

  // Define our development and production domains
  const currentHost =
    process.env.NODE_ENV === "production"
      ? hostname.replace(`.yourdomain.com`, "") // Change this to your actual domain
      : hostname.split(".")[0]; // This will get 'salon' from 'salon.localhost:3000'

  // Exclude static files, API routes, etc.
  if (
    url.pathname.startsWith("/_next") ||
    url.pathname.startsWith("/api") ||
    url.pathname.startsWith("/static") ||
    url.pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // For root localhost without subdomain in development, redirect to a default subdomain
  if (hostname === "localhost:3000" || hostname === "localhost") {
    return NextResponse.redirect(
      new URL(`http://salon.localhost:3000${url.pathname}${url.search}`)
    );
  }

  // Add the subdomain to the search params to make it available in the page
  url.searchParams.set("subdomain", currentHost);

  // Create a new response
  return NextResponse.rewrite(url);
}

// Match all paths except for specific excluded ones
export const config = {
  matcher: ["/((?!api|_next|_static|examples|[\\w-]+\\.\\w+).*)"],
};
