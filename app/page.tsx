import { Position } from "#/components/positions";
import { IdentityRail } from "#/components/identity-rail";
import { fetchPositions } from "#/data/positions";
import styles from "./page.module.css";

export default async function Page() {
  const positions = await fetchPositions();
  return (
    <div className={styles.grid}>
      <IdentityRail />
      <section className={styles.positions}>
        <div className={styles.sectionHead}>
          <span className={styles.label}>Positions</span>
          <span className={styles.count}>{positions.length} entries</span>
        </div>
        {positions.map((pos, i) => (
          <Position position={pos} index={i + 1} key={pos.id} />
        ))}
      </section>
    </div>
  );
}
