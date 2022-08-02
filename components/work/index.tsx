import { useState } from "react";
import styles from "./index.module.css";
import type { PositionType } from "../../data/types";
import { Position } from "./position";
import cn from "clsx";
import { usePositionsContext } from "../../data/contentful-hooks";

export function Positions() {
	const positions = usePositionsContext();
	const [selected, setSelected] = useState(0);
	return <div className={styles.container} id='work'>
		<h1>Work</h1>
		<div className={styles.card}>
			<div className={styles.positions}>
				{positions.map((position, i) => {
					return <button className={cn(styles.position, { [styles.active as string]: selected === i })} key={position.name} onClick={() => setSelected(i)} type="button">{position.shortName ?? position.name}</button>
				})}
			</div>
			<div className={styles.line}>
				<div className={styles.progress} style={{ transform: `translateY(${selected * 56}px)` }} />
			</div>
			{positions[selected] && <Position position={positions[selected] as PositionType} />}
		</div>
	</div>
}
