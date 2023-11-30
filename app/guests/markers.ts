"use server";
import { createClient } from "@vercel/kv";

const kv = createClient({
  url: process.env.KV_REST_API_URL!,
  token: process.env.KV_REST_API_TOKEN!,
});

export type Location = [number, number];

export interface Marker {
  location: Location;
  size: number;
}

const RESOLUTION = 3;

const ROOT_KEY = "guests";
export type Key = `${typeof ROOT_KEY}:${string}:${string}`;

function locationToKey(location: Location): Key {
  return `${ROOT_KEY}:${location[0].toFixed(RESOLUTION)}:${location[1].toFixed(
    RESOLUTION
  )}`;
}

function keyToLocation(key: string): Location {
  const [_, lat, lng] = key.split(":");
  return [parseFloat(lat), parseFloat(lng)];
}

export async function addLocation(location: Location): Promise<void> {
  const key = locationToKey(location);
  await kv.incr(key);
}

const MAX_SIZE = 0.2;
const MIN_SIZE = 0.05;
const SIZE_MULTIPLIER = 0.005;

export async function getMarkers(): Promise<Marker[]> {
  const markers: Marker[] = [];
  for await (const key of kv.scanIterator({ match: `${ROOT_KEY}:*` })) {
    const size = (await kv.get<number>(key)) ?? 0;
    markers.push({
      location: keyToLocation(key),
      size: Math.max(Math.min(size * SIZE_MULTIPLIER, MAX_SIZE), MIN_SIZE),
    });
  }
  return markers;
}
