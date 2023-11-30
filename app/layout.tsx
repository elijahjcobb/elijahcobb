import "../styles/index.css";
import { LeftBar } from "#/components/nav/left";
import { NavBar } from "#/components/nav";
import { RightBar } from "#/components/nav/right";
import styles from "./layout.module.css";
import { Analytics } from '@vercel/analytics/react';
import cn from "clsx";

import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}): JSX.Element {
	return (
		<html className={`${GeistSans.variable} ${GeistMono.variable}`} lang="en">
			<head>
				<title>elijahcobb.dev</title>
				<link href="/favicon.svg" rel="icon" type="image/svg+xml" />
			</head>
			<body className={styles.shell}>
				<Analytics />
				<NavBar />
				<div className={styles.main}>
					<LeftBar className={cn(styles.sidebar, styles.left)} />
					<div className={styles.container}>{children}</div>
					<RightBar className={cn(styles.sidebar, styles.right)} />
				</div>
			</body>
		</html>
	);
}