import * as contentful from "contentful";
import type {
  ContentFullResponsePosition,
  ContentFullResponseShips,
  PositionType,
} from "./types";

const CONTENTFUL_SPACE: string = process.env.CONTENTFUL_SPACE ?? "";
const CONTENTFUL_KEY: string = process.env.CONTENTFUL_KEY ?? "";

export const client = contentful.createClient({
  space: CONTENTFUL_SPACE,
  accessToken: CONTENTFUL_KEY,
});

function fetchEntriesForType(type: string) {
  return client.getEntries({
    content_type: type,
  });
}

function formatDateString(value: string | null): string {
  if (!value) return "Current";
  const date = new Date(value);
  return date.toLocaleString("default", {
    month: "short",
    year: "numeric",
  });
}

export async function fetchPositions(): Promise<PositionType[]> {
  const positionsRaw = (await fetchEntriesForType(
    "position"
  )) as ContentFullResponsePosition;
  return positionsRaw.items
    .sort((a, b) => {
      const aDate: Date = new Date(a.fields.startDate);
      const bDate: Date = new Date(b.fields.startDate);
      return bDate.getTime() - aDate.getTime();
    })
    .map(({ fields }) => ({
      shortName: fields.shortName ?? null,
      name: fields.name,
      href: fields.href,
      startDate: formatDateString(fields.startDate),
      endDate: formatDateString(fields.endDate ?? null),
      position: fields.position,
      tasks: fields.tasks.content.map((task) => task.content[0]?.value ?? ""),
    }));
}

export async function fetchShipSlugs(): Promise<string[]> {
  const raw = (await fetchEntriesForType("ship")) as ContentFullResponseShips;
  return raw.items.map((ship) => {
    let slug = ship.fields.id;
    // eslint-disable-next-line @typescript-eslint/prefer-includes
    if (slug.indexOf("/") === -1) slug = "elijahjcobb/" + slug;
    return slug;
  });
}
