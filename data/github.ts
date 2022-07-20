import { formatDistance } from "date-fns";
import type { Gist, GistFile, RawGithubGistResponse } from "./types";

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

export async function fetchGists(
  skipContent: boolean = false
): Promise<Gist[]> {
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
