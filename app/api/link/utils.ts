import { LinkGetType, LinkMetaTableSchema } from "#/data/schemas";
import { APIError } from "@elijahjcobb/next-api";
import { kv } from "@vercel/kv";
import { sql } from "@vercel/postgres";
import { randomBytes } from "node:crypto";
import { z } from "zod";

export function generateRandomKey() {
  const characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";
  for (let i = 0; i < 4; i++) {
    const index = randomBytes(4).readUInt32BE(0) % (characters.length - 1);
    result += characters[index];
  }

  return result;
}

export async function doesIdExist(id: string): Promise<boolean> {
  const res = await sql`SELECT COUNT(*) FROM url_shortener WHERE id=${id}`;
  const schema = z.object({
    count: z.coerce.number(),
  });
  const { count } = schema.parse(res.rows[0]);
  return count > 0;
}

export async function getCachedLink(id: string): Promise<string | null> {
  try {
    const value = await kv.get(`link:${id}`);
    const href = z.string().parse(value);
    return href;
  } catch {
    return null;
  }
}

export async function createLink(id: string, href: string): Promise<void> {
  await sql`INSERT INTO url_shortener (id, href) VALUES (${id}, ${href})`;
  await kv.set(`link:${id}`, href);
}

export async function fetchLink(id: string): Promise<LinkGetType> {
  const rows = await sql`SELECT * FROM url_shortener WHERE id=${id}`;
  const firstRow = rows.rows[0];

  if (!firstRow)
    throw new APIError({
      statusCode: 404,
      code: "not_found",
      message: "Cannot find link.",
    });

  const { created_at, hits, updated_at, href } =
    LinkMetaTableSchema.parse(firstRow);

  return {
    id,
    href,
    hits,
    created_at: created_at.toISOString(),
    updated_at: updated_at.toISOString(),
  };
}

export async function incrementHitCount(id: string): Promise<void> {
  await sql`UPDATE url_shortener SET hits = hits + 1, updated_at=NOW() WHERE id=${id}`;
}

export async function getURLForLinkId(id: string): Promise<string> {
  const res = await sql`SELECT href FROM url_shortener WHERE id=${id}`;
  const schema = z.object({
    href: z.string(),
  });
  const { href } = schema.parse(res.rows[0]);
  await kv.set(`link:${id}`, href);
  return href;
}

export async function getLatestLinks(count: number): Promise<LinkGetType[]> {
  const res =
    await sql`SELECT * FROM url_shortener ORDER BY created_at DESC LIMIT ${count}`;

  const rows = res.rows
    .map((r) => LinkMetaTableSchema.parse(r))
    .map((r) => ({
      ...r,
      updated_at: r.updated_at.toUTCString(),
      created_at: r.created_at.toUTCString(),
    }));
  return rows;
}

export async function countLinks(): Promise<number> {
  const res = await sql`SELECT COUNT(*) FROM url_shortener`;
  const schema = z.object({
    count: z.coerce.number(),
  });
  const { count } = schema.parse(res.rows[0]);
  return count;
}
