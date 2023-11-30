import "../styles/index.css";
import { LeftBar } from "#/components/nav/left";
import { NavBar } from "#/components/nav";
import { RightBar } from "#/components/nav/right";
import styles from "./layout.module.css";
import cn from "clsx";
import { lato, roboto_mono } from "#/components/fonts";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}): JSX.Element {
	return (
		<html className={`${lato.variable} ${roboto_mono.variable}`} lang="en">
			<head>
				<title>elijahcobb.dev</title>
				<link href="/favicon.svg" rel="icon" type="image/svg+xml" />
				<script async src="https://cdn.splitbee.io/sb.js" />
			</head>
			<body className={styles.shell}>
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