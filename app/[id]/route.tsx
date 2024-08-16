import { createEndpoint } from "@elijahjcobb/next-api";
import { kv } from "@vercel/kv";
import { NextResponse } from "next/server";
import { z } from "zod";
import { waitUntil } from "@vercel/functions";
import { getURLForLinkId, incrementHitCount } from "../api/link/utils";

export const GET = createEndpoint(async (req, getParam) => {
	try {
		const id = getParam("id");
		const href = await getURLForLinkId(id);
		waitUntil(incrementHitCount(id));
		return NextResponse.redirect(href)
	} catch (e) {
		console.error(e);
		const url = req.nextUrl.clone();
		url.pathname = "/";
		return NextResponse.redirect(url)
	}
});