import { kv } from "@vercel/kv";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const slug = request.nextUrl.pathname.replace("/blog/", "");
  kv.incr(`views:${slug}`);
  return NextResponse.next();
}

export const config = {
  matcher: "/blog/:path*",
};
