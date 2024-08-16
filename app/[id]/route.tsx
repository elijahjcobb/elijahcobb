import { createEndpoint } from "@elijahjcobb/next-api";
import { kv } from "@vercel/kv";
import { NextResponse } from "next/server";
import { z } from "zod";
import { waitUntil } from "@vercel/functions";
import { sql } from "@vercel/postgres";

async function track(id: string): Promise<void> {
	await sql`UPDATE link_meta SET hits = hits + 1, updated_at=NOW() WHERE id=${id}`;
}

export const GET = createEndpoint(async (req, getParam) => {
	try {
		const id = getParam("id");
		const href = z.string().url().parse(await kv.get(`link:${id}`));
		waitUntil(track(id));
		return NextResponse.redirect(href)
	} catch (e) {
		console.error(e);
		const url = req.nextUrl.clone();
		url.pathname = "/";
		return NextResponse.redirect(url)
	}
});