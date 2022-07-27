import { GuestBookMap } from './map';
import styles from "./index.module.css";

export function GuestBookPage() {
	return <div className={styles.container}>
		<GuestBookMap pins={[
			{
				lat: 3,
				lng: 3
			},
			{
				lat: 48,
				lng: -120
			},
			{
				lat: 49,
				lng: -120
			}
		]} />
	</div>
}