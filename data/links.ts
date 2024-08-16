import { APIError } from "@elijahjcobb/next-api";
import { kv } from "@vercel/kv";
import { sql } from "@vercel/postgres";
import { z } from "zod";
import { LinkGetType, LinkMetaTableSchema } from "./schemas";

export async function fetchLink(id: string): Promise<LinkGetType> {
  const href = z
    .string()
    .nullable()
    .parse(await kv.get(`link:${id}`));
  if (!href)
    throw new APIError({
      statusCode: 404,
      code: "not_found",
      message: "Cannot find link.",
    });
  const rows = await sql`SELECT * FROM link_meta WHERE id=${id}`;
  const firstRow = rows.rows[0];

  if (!firstRow)
    throw new APIError({
      statusCode: 404,
      code: "not_found",
      message: "Cannot find link.",
    });

  const { created_at, hits, updated_at } = LinkMetaTableSchema.parse(firstRow);

  return {
    id,
    href,
    hits,
    created_at: created_at.toISOString(),
    updated_at: updated_at.toISOString(),
  };
}
