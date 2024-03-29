import { sql } from "@vercel/postgres";

export type Location = [number, number];

export interface Marker {
  location: Location;
  size: number;
}

const RESOLUTION = 3;

function parsePos(pos: unknown): string {
  let posNum: number | null = null;
  if (typeof pos === "string") posNum = parseFloat(pos);
  else if (typeof pos === "number") posNum = pos;

  if (posNum === null) throw new Error("Invalid position");

  return posNum.toFixed(RESOLUTION);
}

export async function addLocation(lat: unknown, lng: unknown): Promise<void> {
  await sql`INSERT INTO visitors (lat, lng) VALUES (${parsePos(
    lat
  )}, ${parsePos(lng)})`;
}

const MAX_SIZE = 0.2;
const MIN_SIZE = 0.05;
const SIZE_MULTIPLIER = 0.005;

export async function getMarkers(): Promise<Marker[]> {
  const res =
    await sql`SELECT lat, lng, COUNT(*) FROM Visitors GROUP BY lat, lng`;
  return res.rows.map((row) => {
    const { lat, lng, count } = row;
    return {
      location: [lat, lng],
      size: Math.max(
        Math.min(parseInt(count) * SIZE_MULTIPLIER, MAX_SIZE),
        MIN_SIZE
      ),
    };
  });
}
