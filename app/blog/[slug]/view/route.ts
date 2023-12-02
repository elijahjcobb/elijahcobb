import { kv } from "@vercel/kv";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (
  _: NextRequest,
  { params }: { params: { slug: string } }
): Promise<NextResponse> => {
  if (process.env.VERCEL_ENV === "development")
    return NextResponse.json({ status: "skipped" });
  kv.incr(`views:blog:${params.slug}`);
  return NextResponse.json({ status: "ok" });
};
