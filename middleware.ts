import { kv } from "@vercel/kv";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest): Promise<NextResponse> {
  const pathname = request.nextUrl.pathname.slice(1);
  const [_, slug] = pathname.split("/");
  if (!slug) return NextResponse.next();
  await kv.incr(`views:blog:${slug}`);
  return NextResponse.next();
}

export const config = {
  matcher: "/blog/:path*",
};
