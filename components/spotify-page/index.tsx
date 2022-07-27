import { FaSpotify } from "react-icons/fa";
import { useSpotifyContext } from "../../data/hooks";
import styles from "./index.module.css";

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

export function SpotifyPage() {
	const { data, error, progress } = useSpotifyContext();
	if (!data || error) return <div />

	return <div className={styles.root} id='spotify'>
		<div className={styles.container}>
			<img alt={`${data.album} album cover`} className={styles.backImg} src={data.cover} />
			<div className={styles.backBlur} />
			<div className={styles.content}>
				<FaSpotify className={styles.logo} size={64} />
				<img alt={`${data.album} album cover`} className={styles.cover} src={data.cover} />
				<div className={styles.descriptions}>
					<span className={styles.name}>{data.name}</span>
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
		</div>
	</div>

}