import { sql } from "@vercel/postgres";
import { Ship } from "./types";

export async function fetchShips(): Promise<Ship[]> {
  const { rows } =
    await sql`SELECT * FROM Ships ORDER BY year DESC, trophy, wip ASC, name;`;
  return rows as Ship[];
}
