import { pg } from "./pg";

export async function fetchShips(): Promise<unknown[]> {
  const { rows } =
    await pg`SELECT * FROM Ships ORDER BY year DESC, trophy DESC, wip ASC, name;`;
  return rows as unknown[];
}
