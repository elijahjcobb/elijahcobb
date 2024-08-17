import { LinkGetType } from "#/data/schemas";
import { APIError, createEndpoint } from "@elijahjcobb/next-api";
import { NextResponse } from "next/server";
import { fetchLink } from "../utils";

export const GET = createEndpoint<LinkGetType>(async (_, getParam) => {
  throw new APIError({
    message: "Feature Disabled",
    statusCode: 400,
    code: "disabled",
  });

  // const id = getParam("id");
  // const { href, hits, created_at, updated_at } = await fetchLink(id);

  // return NextResponse.json({
  //   id,
  //   href,
  //   hits,
  //   created_at,
  //   updated_at,
  // });
});
