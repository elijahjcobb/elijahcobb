/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import React, {FC} from "react";
import styles from "../styles/updates.module.scss";
import {Update} from "./update-loader";

export type UpdateRowProps = Update;

export const UpdateRow: FC<UpdateRowProps> = props => {

	return (<a
		href={props.url}
		className={styles.item}>
		<div className={styles.top}>
			<span className={styles.title}>{props.title}</span>
			<span className={styles.date}>{new Date(props.date).toLocaleDateString()}</span>
		</div>
		{((props.description?.length ?? 0) > 0) && <span className={styles.description}>{props.description}</span>}
		{props.readMore && <span className={styles.read}>Read more...</span>}
	</a>);

};
