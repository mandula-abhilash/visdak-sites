import { NextResponse } from "next/server";
import { getBusinessBySubdomain } from "./config/businesses";

export function middleware(request) {
  // Get hostname (e.g. vercel.app, localhost:3000)
  const hostname = request.headers.get("host") || "localhost:3000";

  // Get the pathname
  const pathname = request.nextUrl.pathname;

  // Define our development and production domains
  const currentHost =
    process.env.NODE_ENV === "production"
      ? hostname.replace(`.yourdomain.com`, "") // Change this to your actual domain
      : hostname.split(".")[0]; // This will get 'salon' from 'salon.localhost:3000'

  // Exclude static files and API routes
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/static") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // For root localhost without subdomain in development, show the fallback page
  if (hostname === "localhost:3000" || hostname === "localhost") {
    return NextResponse.rewrite(new URL("/fallback", request.url));
  }

  // Check if the business exists
  const business = getBusinessBySubdomain(currentHost);

  // If business doesn't exist, show the fallback page
  if (!business) {
    return NextResponse.rewrite(new URL("/fallback", request.url));
  }

  // Add the subdomain to the search params
  const url = request.nextUrl;
  url.searchParams.set("subdomain", currentHost);

  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!api|_next|_static|examples|[\\w-]+\\.\\w+).*)"],
};
