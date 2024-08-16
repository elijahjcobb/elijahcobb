import { NextResponse } from "next/server";
import { createLink, doesIdExist, generateRandomKey } from "./utils";
import { APIError, createEndpoint, verifyBody } from "@elijahjcobb/next-api";
import { LinkPostResponseType, LinkPostBodySchema } from "#/data/schemas";

export const POST = createEndpoint<LinkPostResponseType>(async (req) => {
  const { href } = await verifyBody(req, LinkPostBodySchema);

  let id: string | null = null;
  const attempts = 1000;
  for (let i = 0; i < attempts; i++) {
    const newId = generateRandomKey();
    const exists = await doesIdExist(newId);
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

  await createLink(id, href);

  return NextResponse.json({
    id,
  });
});
