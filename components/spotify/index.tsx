import { useSpotify } from "../../data/hooks"
import { FaSpotify, FaSpinner } from "react-icons/fa";
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
		if (!data?.isPlaying) return;
		const interval = setInterval(() => {
			setProgress(v => v + 1000);
		}, 1000);
		return () => clearInterval(interval);
	}, [data?.progress, data?.isPlaying])


	if (error) return <p>Error: {error}</p>;
	if (!data) return <div className={styles.container} style={{ justifyContent: "center" }}>
		<FaSpinner className={styles.spinner} size={48} />
		<FaSpotify className={styles.logo} size={64} />
	</div>

	// if (data.error) return <div className={styles.container} style={{ justifyContent: "center" }}>
	// 	<span>Elijah is currently living a music-less existence.</span>
	// 	<FaSpotify className={styles.logo} size={64} />
	// </div>

	if (data.error) return <div />


	return <div className={styles.container} id='spotify'>
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
			className={styles.coverContainer}
			style={{ backgroundImage: `url(${data.cover})` }} />
		<FaSpotify className={styles.logo} size={64} />
	</div>
}