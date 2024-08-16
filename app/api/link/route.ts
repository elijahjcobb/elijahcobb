import { NextResponse } from "next/server";
import { generateRandomKey } from "./utils";
import { APIError, createEndpoint, verifyBody } from "@elijahjcobb/next-api";
import { kv } from "@vercel/kv";
import { LinkPostResponseType, LinkPostBodySchema } from "#/data/schemas";
import { sql } from "@vercel/postgres";

export const POST = createEndpoint<LinkPostResponseType>(async (req) => {
  const { href } = await verifyBody(req, LinkPostBodySchema);

  let id: string | null = null;
  const attempts = 1000;
  for (let i = 0; i < attempts; i++) {
    const newId = generateRandomKey();
    const exists = await kv.exists(`link:${newId}`);
    if (!exists) {
      id = newId;
      break;
    }
  }

  if (!id)
    throw new APIError({
      code: "failed_to_generate_key",
      statusCode: 300,
      message: `Failed to generate key in ${attempts} times.`,
    });

  await kv.set(`link:${id}`, href);
  await sql`INSERT INTO link_meta (id) VALUES (${id})`;

  return NextResponse.json({
    id,
  });
});
