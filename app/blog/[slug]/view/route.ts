import { kv } from "@vercel/kv";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (
  _: NextRequest,
  { params }: { params: { slug: string } }
): Promise<NextResponse> => {
  kv.incr(`views:blog:${params.slug}`);
  return NextResponse.json({});
};
