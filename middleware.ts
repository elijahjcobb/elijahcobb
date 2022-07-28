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
      lat: request.geo?.latitude ?? null,
      lng: request.geo?.longitude ?? null,
    }),
  }).catch(console.error);

  const response = NextResponse.next();
  response.cookies.set("city", request.geo?.city ?? "Earth", {
    httpOnly: false,
  });
  response.cookies.set("region", request.geo?.region, { httpOnly: true });
  response.cookies.set("country", request.geo?.country, { httpOnly: true });
  response.cookies.set("lng", request.geo?.latitude ?? "-98", {
    httpOnly: false,
  });

  return response;
}

export const config = {
  matcher: "/",
};
