import { GuestBookMap } from './map';
import styles from "./index.module.css";

export function GuestBook() {
	return <div className={styles.container} id='guestbook'>
		<GuestBookMap pins={[
			{
				lat: 3,
				lng: 3
			},
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
			},
			{
				lat: 49,
				lng: -120
			}
		]} />
	</div>
}