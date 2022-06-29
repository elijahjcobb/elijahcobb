import { useSpotify } from "../../data/hooks"
import { FaSpotify, FaPlay, FaPause } from "react-icons/fa";
import Image from "next/image";
import styles from "./index.module.css";
import { useEffect, useState } from "react";

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

	const { data, error } = useSpotify();
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		setProgress(data?.progress ?? 0);
		const interval = setInterval(() => {
			setProgress(v => v + 1000);
		}, 1000);
		return () => clearInterval(interval);
	}, [data?.progress])

	if (error) return <p>Error: {error.message}</p>;
	if (!data) return <p>Loading...</p>

	return <div className={styles.container}>
		<div className={styles.middle}>
			<div className={styles.info}>
				<span className={styles.name}>{data.name}</span>
				<span className={styles.album}>{data.album}</span>
				<span className={styles.artist}>{data.artist}</span>
			</div>
			<div className={styles.progressContainer}>
				<span>{convertMsToMinutesSeconds(progress)}</span>
				<div className={styles.progressOuter}>
					<div className={styles.progressInner} style={{ width: `${Math.floor(progress / data.duration * 100)}%` }} />
				</div>
				<span>{convertMsToMinutesSeconds(data.duration)}</span>
			</div>
		</div>
		<div
			style={{ backgroundImage: `url(${data.cover})` }}
			className={styles.coverContainer}>
		</div>
		<FaSpotify className={styles.logo} size={48} />
	</div>
}