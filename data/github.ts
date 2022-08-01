import { formatDistance } from "date-fns";
import { fetchShipSlugs } from "./contentful";
import type {
  Gist,
  GistFile,
  GithubRepo,
  RawGithubGistResponse,
  Ship,
} from "./types";

export function fetchGistFileData(url: string): Promise<string> {
  return fetch(url).then((res) => res.text());
}

async function gistFromRawGist({
  fetchContent = false,
  raw,
}: {
  fetchContent?: boolean;
  raw: RawGithubGistResponse;
}): Promise<Gist> {
  const files: GistFile[] = [];
  let content: string | null = null;
  const rawFiles = Object.values(raw.files);
  for (const rawFile of rawFiles) {
    let fileContent: string | null = null;
    if (fetchContent) fileContent = await fetchGistFileData(rawFile.raw_url);
    const file: GistFile = {
      name: rawFile.filename,
      language: rawFile.language,
      content: fileContent,
    };
    if (file.name !== "content.txt") files.push(file);
    else if (fetchContent) content = fileContent;
  }
  return {
    description: raw.description,
    content,
    id: raw.id,
    createdAt: formatDistance(new Date(raw.created_at), new Date(), {
      addSuffix: true,
    }),
    updatedAt: formatDistance(new Date(raw.updated_at), new Date(), {
      addSuffix: true,
    }),
    url: raw.html_url,
    files,
  };
}

export async function fetchGists(skipContent = false): Promise<Gist[]> {
  const rawGists = (await fetch(
    "https://api.github.com/users/elijahjcobb/gists"
  ).then((res) => res.json())) as RawGithubGistResponse[];
  rawGists.sort(
    (a, b) =>
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  );
  const gists: Gist[] = [];
  for (const raw of rawGists)
    gists.push(await gistFromRawGist({ raw, fetchContent: !skipContent }));
  return gists;
}

export async function fetchGist(id: string): Promise<Gist> {
  const raw = (await fetch(`https://api.github.com/gists/${id}`).then((res) =>
    res.json()
  )) as RawGithubGistResponse;
  return await gistFromRawGist({ raw, fetchContent: true });
}

export function fetchLanguage(slug: string): Promise<Record<string, number>> {
  return fetch(`https://api.github.com/repos/${slug}/languages`).then((v) =>
    v.json()
  ) as Promise<Record<string, number>>;
}

export async function fetchShips(): Promise<Ship[]> {
  const slugs = await fetchShipSlugs();

  const ships: Ship[] = [];
  const proms: Promise<void>[] = [];

  async function handleSlug(slug: string): Promise<void> {
    const raw = await fetch(`https://api.github.com/repos/${slug}`);
    const res = (await raw.json()) as GithubRepo;
    ships.push({
      slug,
      name: res.name,
      fullName: res.full_name,
      description: res.description,
      updatedAt: res.updated_at,
      createdAt: res.created_at,
      year: new Date(res.created_at).getFullYear(),
      stars: res.stargazers_count,
      forks: res.forks_count,
      languages: await fetchLanguage(slug),
    });
  }

  for (const slug of slugs) proms.push(handleSlug(slug));
  await Promise.all(proms);

  return ships.sort((a, b) => {
    const aD: Date = new Date(a.createdAt);
    const bD: Date = new Date(b.createdAt);
    return bD.getTime() - aD.getTime();
  });
}
