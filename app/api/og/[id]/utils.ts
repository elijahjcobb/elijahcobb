import {
  OGMetadataType,
  OGMetadataSchema,
  LinkStorageSchema,
} from "#/data/schemas";
import * as cheerio from "cheerio";
import { sql } from "@vercel/postgres";
import { kv } from "@vercel/kv";

function createKey(id: string): string {
  return `og:${id}`;
}

async function fetchOG(url: string): Promise<OGMetadataType> {
  const response = await fetch(url, { redirect: "follow" });
  const body = await response.text();
  const $ = cheerio.load(body);

  let ogData = new Map<string, string>();

  for (const item of Array.from($('head meta[property^="og:"]'))) {
    const property = $(item).attr("property");
    const content = $(item).attr("content");

    if (property && content) {
      ogData.set(property, content);
    }
  }

  const head = $("head title").first();
  const title = $(head).html();
  if (title) ogData.set("title", title);

  const fullUrl = new URL(response.url);

  return {
    title: ogData.get("og:title") ?? ogData.get("title"),
    type: ogData.get("og:type"),
    description: ogData.get("og:description"),
    updatedAt: ogData.get("og:updated_time"),
    image: ogData.get("og:image"),
    imageAlt: ogData.get("og:image:alt"),
    url: response.url,
    domain: fullUrl.host.replace("www.", ""),
    path: fullUrl.pathname.split("?")[0],
  };
}

async function fetchFromCache(id: string): Promise<OGMetadataType | null> {
  try {
    const key = createKey(id);
    const res = await kv.get(key);
    if (!res) return null;
    return OGMetadataSchema.parse(res);
  } catch (e) {
    console.error(e);
    return null;
  }
}

export async function fetchOGWithCache(
  id: string
): Promise<OGMetadataType | null> {
  try {
    const cached = await fetchFromCache(id);
    if (cached) {
      return cached;
    }

    const res = await sql`SELECT * FROM links WHERE id=${id}`;
    const row = LinkStorageSchema.parse(res.rows[0]);
    const href = row.href;

    const meta = await fetchOG(href);
    await kv.set(createKey(id), JSON.stringify(meta));

    return meta;
  } catch (e) {
    console.error(e);
    return null;
  }
}
