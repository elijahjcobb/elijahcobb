import { kv } from "@vercel/kv";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest): Promise<NextResponse> {
  const slug = request.nextUrl.pathname.replace("/blog/", "");
  await kv.incr(`views:${slug}`);
  return NextResponse.next();
}

export const config = {
  matcher: "/blog/:path*",
};
