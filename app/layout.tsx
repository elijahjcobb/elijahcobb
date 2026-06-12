import "#/styles/index.css";
import { Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import Link from "next/link";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { ScrollProgress } from "#/components/scroll-progress";
import styles from "./layout.module.css";

const font = Hanken_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font",
  weight: ["400", "500", "600", "700"],
});

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Elijah Cobb",
  description:
    "Software engineer working across operating systems, developer tools, and lunar robotics.",
  icons: { icon: "https://elijahcobb.com/favicon.svg" },
  openGraph: {
    title: "Elijah Cobb",
    description: "A personal portfolio site for Elijah Cobb.",
    url: "https://elijahcobb.com",
    images: ["https://elijahcobb.com/og.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${font.variable} ${monoFont.variable}`}>
      <body>
        <ScrollProgress />
        <header className={styles.header}>
          <Link href="https://elijahcobb.com" className={styles.logo}>
            elijahcobb<span className={styles.logoAccent}>.com</span>
          </Link>
        </header>
        <main>{children}</main>
        <footer className={styles.footer}>
          <span>© 2026 — Elijah Cobb</span>
          <a href="mailto:elijah@elijahcobb.com" className={styles.footerMail}>
            elijah@elijahcobb.com ↗
          </a>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
