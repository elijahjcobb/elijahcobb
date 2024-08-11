import { sql } from "@vercel/postgres";
import type { PositionType } from "./types";

export async function fetchPositions(): Promise<PositionType[]> {
  const { rows } =
    await sql`SELECT * FROM Positions ORDER BY end_year DESC, end_month DESC, start_year ASC, start_month ASC, name ASC;`;
  return rows as PositionType[];
}
