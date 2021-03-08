/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";
import {positions} from "./data/positions";
import {PositionView} from "./PositionView";

export function PositionsView(): React.ReactElement {
	return (<section className="experiences">
		<h2 className="experienceLabel">positions</h2>
		<div className={"businesses"}>
			{positions.map((experience, index) => {
				return (<PositionView value={experience} key={index}/>)
			})}
		</div>
	</section>);
}
