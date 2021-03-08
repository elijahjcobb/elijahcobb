/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";
import {Reference} from "./types";
import {LinkView} from "./LinkView";

export interface ReferenceViewProps {
	value: Reference
}

export function ReferenceView(props: ReferenceViewProps): React.ReactElement {
	return (<div className="reference">
		<LinkView url={"mailto:" + props.value.email}/>
		<div className="info">
			<span className="name">{props.value.name}</span>
			<span className="title">{props.value.position}</span>
			<span className="company">{props.value.organization}</span>
		</div>
	</div>);
}
