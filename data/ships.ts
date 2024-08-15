import { sql } from "@vercel/postgres";

export async function fetchShips(): Promise<unknown[]> {
  const { rows } =
    await sql`SELECT * FROM Ships ORDER BY year DESC, trophy DESC, wip ASC, name;`;
  return rows as unknown[];
}
