import { pg } from "#/data/pg";
import { OGMetadataType, LinkStorageSchema } from "#/data/schemas";
import * as cheerio from "cheerio";

async function fetchAndParseOGMetadata(url: string): Promise<OGMetadataType> {
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

  function getIconUrlForProperty(prop: string): string | undefined {
    const icon = $(`head link[rel="${prop}"]`);
    let url: string | undefined;
    if (icon) {
      url = $(icon).attr("href");
      if (url) {
        if (url.startsWith("//")) {
          url = `https:${url}`;
        } else if (url.startsWith("/")) {
          url = `${fullUrl.origin}/${url.slice(1)}`;
        }
      }
    }
    return url;
  }

  let iconUrl =
    getIconUrlForProperty("icon") ??
    getIconUrlForProperty("apple-touch-icon") ??
    getIconUrlForProperty("shortcut icon");

  return {
    title: ogData.get("og:title") ?? ogData.get("title"),
    type: ogData.get("og:type"),
    description: ogData.get("og:description"),
    updatedAt: ogData.get("og:updated_time"),
    image: ogData.get("og:image") ?? iconUrl,
    imageAlt: ogData.get("og:image:alt"),
    url: response.url,
    domain: fullUrl.host.replace("www.", ""),
    path: fullUrl.pathname.split("?")[0],
  };
}

export async function fetchOG(id: number): Promise<OGMetadataType | null> {
  try {
    const res = await pg`SELECT * FROM links WHERE id=${id} LIMIT 1`;
    const row = LinkStorageSchema.parse(res.rows[0]);
    const href = row.href;

    const meta = await fetchAndParseOGMetadata(href);

    return meta;
  } catch (e) {
    console.error(e);
    return null;
  }
}
