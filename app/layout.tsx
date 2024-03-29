import "../styles/index.css";
import { LeftBar } from "#/components/nav/left";
import { NavBar } from "#/components/nav";
import { RightBar } from "#/components/nav/right";
import styles from "./layout.module.css";
import { Analytics } from '@vercel/analytics/react';
import cn from "clsx";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Toaster } from "react-hot-toast";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}): JSX.Element {
	return (
		<html className={`${GeistSans.variable} ${GeistMono.variable}`} lang="en">
			<head>
				<title>Elijah Cobb</title>
				<link href="https://elijahcobb.dev/favicon.svg" rel="icon" type="image/svg+xml" />
				<meta name="og:image" content="https://elijahcobb.dev/og.png" />
				<meta name="title" content="Elijah Cobb" />
				<meta name="og:title" content="Elijah Cobb" />
				<meta name="description" content="The personal portfolio of Elijah Cobb." />
				<meta name="og:description" content="The personal portfolio of Elijah Cobb." />
				<meta name="og:url" content="elijahcobb.dev" />
			</head>
			<body className={styles.shell}>
				<Analytics />
				<NavBar />
				<Toaster position="bottom-right" />
				<div className={styles.main}>
					<LeftBar className={cn(styles.sidebar, styles.left)} />
					<div className={styles.container}>{children}</div>
					<RightBar className={cn(styles.sidebar, styles.right)} />
				</div>
			</body>
		</html>
	);
}