import { NextRequest } from "next/server";
import { addLocation } from "../markers";
import { geolocation } from "@vercel/edge";

export const POST = async (request: NextRequest): Promise<Response> => {
  try {
    const { latitude: lat, longitude: lng } = geolocation(request);
    if (!lat || !lng) throw new Error("No location");
    await addLocation([parseFloat(lat), parseFloat(lng)]);
    return Response.json({ error: false });
  } catch (e) {
    return Response.json({ error: true }, { status: 500 });
  }
};
