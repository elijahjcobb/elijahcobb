import { sql } from "@vercel/postgres";
import {
  LinksStorageSchema,
  LinkStorageType,
  PositionsSchema,
  PositionType,
} from "./schemas";

export async function fetchPositions(): Promise<PositionType[]> {
  const { rows } = await sql`
SELECT
    *,
    ARRAY(SELECT id FROM links WHERE position_id = Positions.id ORDER BY id DESC) AS links
FROM
    Positions
ORDER BY
    end_year DESC,
    end_month DESC,
    start_year ASC,
    start_month ASC,
    name ASC
    `;
  return PositionsSchema.parse(rows);
}

export async function fetchLinks(): Promise<LinkStorageType[]> {
  const { rows } = await sql`SELECT * FROM links WHERE position_id IS NULL`;
  return LinksStorageSchema.parse(rows);
}
