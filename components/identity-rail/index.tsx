import Image from "next/image";
import headshot from "#/public/profile.png";
import { profile } from "#/data/profile";
import { Socials } from "#/components/socials";
import styles from "./index.module.css";

export function IdentityRail(): JSX.Element {
  return (
    <aside className={styles.rail}>
      <Image
        className={styles.avatar}
        src={headshot}
        width={96}
        height={96}
        alt="Elijah Cobb"
        priority
      />
      <h1 className={styles.name}>{profile.name}</h1>
      <div className={styles.role}>{profile.role}</div>
      <p className={styles.bio}>{profile.bio}</p>
      <div className={styles.affiliations}>
        {profile.affiliations.map((aff) => (
          <span key={aff} className={styles.pill}>
            {aff}
          </span>
        ))}
      </div>
      <Socials />
    </aside>
  );
}
