import { Client, QueryResult } from "pg";
import { Sql } from "sql-template-tag";

type SupportedValue =
  | string
  | null
  | number
  | SupportedValue[]
  | { [key: string]: SupportedValue };

function sql(
  strings: ReadonlyArray<string>,
  ...values: Array<SupportedValue | Sql>
) {
  return new Sql(strings, values);
}

let client: Client | undefined;

export async function pg(
  strings: ReadonlyArray<string>,
  ...values: Array<SupportedValue | Sql>
): Promise<QueryResult> {
  if (!client) {
    client = new Client(process.env.PG_URL);
    await client.connect();
  }

  const query = sql(strings, ...values);

  return await client.query(query.text, query.values);
}
