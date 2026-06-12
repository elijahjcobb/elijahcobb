import Link from "next/link";
import { PositionType } from "#/data/schemas";
import { OGLink } from "../links";
import styles from "./index.module.css";

function formatYears(position: PositionType): string {
  if (position.end_year && position.end_year !== position.start_year) {
    return `${position.start_year} — ${position.end_year}`;
  }
  return `${position.start_year}`;
}

export function Position({
  position,
  index,
}: {
  position: PositionType;
  index: number;
}): JSX.Element {
  const n = String(index).padStart(2, "0");

  return (
    <article className={styles.position}>
      <div className={styles.index}>{n}</div>
      <div className={styles.body}>
        <div className={styles.top}>
          <Link
            href={position.href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.name}
          >
            {position.name}
          </Link>
          <span className={styles.years}>{formatYears(position)}</span>
        </div>
        <div className={styles.role}>{position.position}</div>
        {position.tasks ? (
          <ul className={styles.tasks}>
            {position.tasks.map((task) => (
              <li key={task} className={styles.task}>
                <span className={styles.dash}>—</span>
                <span className={styles.taskText}>{task}</span>
              </li>
            ))}
          </ul>
        ) : null}
        {position.links ? (
          <div className={styles.links}>
            {position.links.map((link) => (
              <OGLink key={link} href={link} />
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}
