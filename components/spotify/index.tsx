import { truncate, useSpotifyContext } from "../../data/hooks"
import { FaSpotify } from "react-icons/fa";
import styles from "./index.module.css";
import { useMemo } from "react";

function padTo2Digits(num: number): string {
	return num.toString().padStart(2, '0');
}

function convertMsToMinutesSeconds(milliseconds: number): string {
	const minutes = Math.floor(milliseconds / 60000);
	const seconds = Math.round((milliseconds % 60000) / 1000);

	return seconds === 60
		? `${minutes + 1}:00`
		: `${minutes}:${padTo2Digits(seconds)}`;
}

export function SpotifyPreview() {

	const { data, progress } = useSpotifyContext();

	const songName = useMemo(() => {
		if (!data?.name) return "";
		return truncate(data.name, 48);
	}, [data?.name]);

	const songArtist = useMemo(() => {
		if (!data?.artist) return "";
		return truncate(data.artist, 32);
	}, [data?.artist]);


	if (!data || data.error) return <div />


	return <div className={styles.container} id='spotify'>
		<div className={styles.middle}>
			<div className={styles.info}>
				<span className={styles.name}>{songName}</span>
				<span className={styles.artist}>{songArtist}</span>
			</div>
			<div
				className={styles.coverContainer}
				style={{ backgroundImage: `url(${data.cover})` }} />
		</div>
		<div className={styles.progressContainer}>
			<span>{convertMsToMinutesSeconds(progress)}</span>
			<div className={styles.progressOuter}>
				<div className={styles.progressInner} style={{ width: `${Math.floor(progress / data.duration * 100)}%` }} />
			</div>
			<span>{convertMsToMinutesSeconds(data.duration)}</span>
		</div>
		<FaSpotify className={styles.logo} size={64} />
	</div>
}