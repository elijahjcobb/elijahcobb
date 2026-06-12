"use client";

import { useRef, useState } from "react";
import { profile, type Social } from "#/data/profile";
import styles from "./index.module.css";

export function Socials(): JSX.Element {
  const [copied, setCopied] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout>>();

  const copyEmail = () => {
    try {
      navigator.clipboard?.writeText(profile.email);
    } catch {
      /* clipboard unavailable */
    }
    setCopied(true);
    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => setCopied(false), 1600);
  };

  const handleClick = (social: Social) => (e: React.MouseEvent) => {
    if (social.email) {
      e.preventDefault();
      copyEmail();
    }
  };

  return (
    <div className={styles.list}>
      {profile.socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick(social)}
          className={styles.row}
        >
          <span className={styles.label}>{social.label}</span>
          <span className={styles.handle}>
            {social.email && copied ? "Copied ✓" : social.handle} ↗
          </span>
        </a>
      ))}
    </div>
  );
}
