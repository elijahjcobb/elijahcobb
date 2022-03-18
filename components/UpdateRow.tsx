/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import React, {FC} from "react";
import styles from "../styles/updates.module.scss";
import {Update} from "./update-loader";
import formatDuration from "date-fns/formatDuration";
import {intervalToDuration} from "date-fns";

export type UpdateRowProps = Update;

export const UpdateRow: FC<UpdateRowProps> = props => {

	let d = formatDuration(intervalToDuration({start: new Date(props.date.replaceAll("-", "/")), end: new Date()}), {
		format: ["years", "months", "weeks"]
	});
	if (d.length === 0) d = "today"
	else d += " ago";

	return (<a
		href={props.url}
		className={styles.item}>
		<div className={styles.top}>
			<span className={styles.title}>{props.title}</span>
		</div>
		<span className={styles.date}>{d}</span>
		{((props.description?.length ?? 0) > 0) && <span className={styles.description}>{props.description}</span>}
		{props.readMore && <span className={styles.read}>Read more...</span>}
	</a>);

};
