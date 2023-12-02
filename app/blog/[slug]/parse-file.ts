import { kv } from "@vercel/kv";
import { formatDistance } from "date-fns";
import { readFile } from "fs/promises";
import matter from "gray-matter";
import path from "node:path";

export interface MDFile {
  title: string;
  description: string;
  date: string;
  releaseTiming: string;
  readTime: string;
  views: number;
  content: string;
  slug: string;
}

export async function parseFile(slug: string): Promise<MDFile> {
  const file = await readFile(
    path.join(process.cwd(), "posts", `${slug}.mdx`),
    "utf8"
  );
  const { data, content } = matter(file);
  const title = data.title as string;
  const description = data.description as string;
  const dateString = data.date as string;
  const date = new Date(dateString);
  const releaseTiming = formatDistance(date, new Date(), { addSuffix: true });
  const words = content.split(/\s+/g).length;
  const minutes = Math.ceil(words / 238) * 60 * 1000;
  const views = ((await kv.get(`views:${slug}`)) ?? 0) as number;
  return {
    title,
    description,
    date: dateString,
    releaseTiming,
    readTime: formatDistance(0, minutes),
    views,
    content,
    slug,
  };
}
