import { kv } from "@vercel/kv";
import { formatDistance } from "date-fns";
import { readFile, readdir } from "fs/promises";
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
  const title = data.title as string | undefined;
  if (!title) {
    console.error(data);
    throw new Error("No title");
  }
  const description = data.description as string | undefined;
  if (!description) {
    console.error(data);
    throw new Error("No title");
  }
  const dateString = data.date as string;
  const date = new Date(dateString);
  const releaseTiming = formatDistance(date, new Date(), { addSuffix: true });
  const words = content.split(/\s+/g).length;
  const minutes = Math.ceil(words / 238) * 60 * 1000;
  const views = ((await kv.get(`views:blog:${slug}`)) ?? 0) as number;
  return {
    title,
    description,
    date: date.toLocaleDateString(undefined, { dateStyle: "medium" }),
    releaseTiming,
    readTime: formatDistance(0, minutes),
    views,
    content,
    slug,
  };
}

export async function getFileNames(): Promise<string[]> {
  const files = await readdir("./posts");
  return files.map((file) => file.replace(".mdx", ""));
}

export async function getFiles(): Promise<MDFile[]> {
  const fileNames = await getFileNames();
  const files = await Promise.all(fileNames.map(parseFile));
  return files.sort((a, b) => {
    const aDate = new Date(a.date);
    const bDate = new Date(b.date);
    return bDate.getTime() - aDate.getTime();
  });
}
