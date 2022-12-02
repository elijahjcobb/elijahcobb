import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  fetch(`${process.env.HIT_API_ENDPOINT ?? ""}/api/hit`, {
    headers: {
      Authorization: `Bearer ${process.env.MY_SECRET ?? ""}`,
    },
    method: "POST",
    body: JSON.stringify({
      city: request.geo?.city ?? null,
      country: request.geo?.country ?? null,
      region: request.geo?.region ?? null,
      lat: request.geo?.latitude ?? null, // lat and long are stored in a redis set, and are not linked to user in any way
      lng: request.geo?.longitude ?? null, // see /pages/api/hit.ts
    }),
  }).catch(console.error);

  const response = NextResponse.next();
  response.cookies.set("city", request.geo?.city ?? "Earth", {
    httpOnly: false,
  });

  const rand = Math.random();
  let long = Number(request.geo?.longitude ?? "-98");
  long = long + Math.floor(rand * 2 - 1);
  response.cookies.set("lng", `${long}`, {
    httpOnly: false,
  });

  response.cookies.set("region", request.geo?.region, { httpOnly: false });
  response.cookies.set("country", request.geo?.country, { httpOnly: false });

  return response;
}

export const config = {
  matcher: "/(.*)",
};
