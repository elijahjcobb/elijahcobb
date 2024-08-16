import { OGMetadataType } from "#/data/schemas";
import { NextRequest, NextResponse } from "next/server";
import { fetchOGWithCache } from "./utils";

export async function GET(
  _: NextRequest,
  meta: { params: { id: string } }
): Promise<NextResponse<OGMetadataType | { error: string }>> {
  const id = meta.params.id;
  try {
    const meta = await fetchOGWithCache(id);
    if (!meta) throw new Error("Meta is null");
    return NextResponse.json(meta);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Not found." }, { status: 404 });
  }
}
