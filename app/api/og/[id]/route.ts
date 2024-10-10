import { OGMetadataType } from "#/data/schemas";
import { NextRequest, NextResponse } from "next/server";
import { fetchOG } from "./utils";
import { positionForID } from "#/data/positions";

export async function GET(
  _: NextRequest,
  meta: { params: { id: string } }
): Promise<NextResponse<OGMetadataType | { error: string }>> {
  const id = meta.params.id;
  try {
    const position = positionForID(id);
    if (!position) throw new Error("Position is null");
    const meta = await fetchOG(position.href);
    if (!meta) throw new Error("Meta is null");
    return NextResponse.json(meta);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Not found." }, { status: 404 });
  }
}
