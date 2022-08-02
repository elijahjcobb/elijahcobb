import type { UnsplashRaw, Unsplash } from "./types";

const CLIENT_ID = process.env.UNSPLASH_CLIENT_ID;

export async function fetchUnsplash(): Promise<Unsplash[]> {
  const res = (await fetch(
    `https://api.unsplash.com/users/elijahjcobb/photos?client_id=${CLIENT_ID}`
  ).then((r) => r.json())) as UnsplashRaw[];

  return res
    .sort(() => Math.random() - 0.5)
    .map(
      (raw): Unsplash => ({
        width: raw.width,
        height: raw.height,
        date: raw.created_at,
        description: raw.alt_description ?? "unable to provide alt",
        src: raw.urls.full,
        id: raw.id,
      })
    );
}
