import { useState } from "react";
import styles from "./index.module.css";
import { POSITIONS } from "../../data";
import type { PositionType } from "../../data/types";
import { Position } from "./position";
import cn from "classnames";

export function Positions() {
	const [selected, setSelected] = useState(0);
	return <div className={styles.container} id='work'>
		<h1>Work</h1>
		<div className={styles.card}>
			<div className={styles.positions}>
				{POSITIONS.map((position, i) => {
					return <button className={cn(styles.position, { [styles.active as string]: selected === i })} key={i} onClick={() => setSelected(i)}>{position.shortName ?? position.name}</button>
				})}
			</div>
			<div className={styles.line}>
				<div className={styles.progress} style={{ transform: `translateY(${selected * 56}px)` }} />
			</div>
			<Position position={POSITIONS[selected] as PositionType} />
		</div>
	</div>
}
