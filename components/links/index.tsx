/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { type OGMetadataType } from "#/data/schemas";
import { fetchOG } from "#/app/api/og/[id]/utils";
import styles from "./index.module.css";

function safeHost(href: string): string | null {
  try {
    return new URL(href).host.replace(/^www\./, "");
  } catch {
    return null;
  }
}

export async function OGLink({ href }: { href: string }): Promise<JSX.Element> {
  let data: OGMetadataType | null;
  try {
    data = await fetchOG(href);
  } catch {
    data = null;
  }

  const host = data?.domain ?? safeHost(href);
  const title = data?.title ?? host ?? href;
  const domain = host ?? "—";
  const letter = (host ?? "?").charAt(0).toLowerCase();
  const url = data?.url ?? href;

  return (
    <Link href={url} target="_blank" rel="noopener noreferrer" className={styles.card}>
      <span className={styles.tile}>
        {data?.icon ? (
          <img className={styles.icon} src={data.icon} alt="" />
        ) : (
          letter
        )}
      </span>
      <span className={styles.text}>
        <span className={styles.title}>{title}</span>
        <span className={styles.domain}>{domain}</span>
      </span>
      <span className={styles.arrow}>↗</span>
    </Link>
  );
}
