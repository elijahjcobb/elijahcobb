import Link from "next/link";
import { useMemo } from "react";
import { FaSpotify } from "react-icons/fa";
import { truncate, useSpotifyContext } from "../../data/hooks";
import styles from "./index.module.css";

export function SpotifyWidget() {

	const { data } = useSpotifyContext();

	const songName = useMemo(() => {
		if (!data?.name) return "";
		return truncate(data.name, window.innerWidth < 480 ? 18 : 120);
	}, [data?.name]);

	if (!data) return <div />

	return <Link href="/#spotify" passHref>
		<a className={styles.link}>
			<div className={styles.container}>
				<FaSpotify color='var(--spotify)' size={24} />
				<span>{songName}</span>
			</div>
		</a>
	</Link>
}