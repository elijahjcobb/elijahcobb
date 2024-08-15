import { fetchPositions } from "#/data/positions";
import { ResponseType } from "#/data/schemas";
import { NextResponse } from "next/server";

export async function GET(): Promise<NextResponse<ResponseType>> {
  const positions = await fetchPositions();

  return NextResponse.json({
    name: "Elijah Cobb",
    title: "Software Engineer",
    socials: [
      {
        type: "linkedin",
        href: "http://linkedin.com/in/elijahjcobb",
      },
      {
        type: "github",
        href: "https://github.com/elijahjcobb",
      },
      {
        type: "mail",
        href: "mailto:elijah@elijahcobb.com",
      },
    ],
    positions,
  });
}
