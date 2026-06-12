"use client";

import { useEffect, useRef } from "react";
import styles from "./index.module.css";

export function ScrollProgress(): JSX.Element {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const el = document.scrollingElement || document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      const p = max > 0 ? el.scrollTop / max : 0;
      if (ref.current) ref.current.style.width = `${p * 100}%`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <div ref={ref} className={styles.bar} />;
}
