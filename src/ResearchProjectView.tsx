/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";
import {Research} from "./types";
import {LinkView} from "./LinkView";

export interface ProjectViewProps {
	value: Research
}

export function ResearchProjectView(props: ProjectViewProps): React.ReactElement {
	return (<div className="project">
		<div className="header">
			{props.value.url ? <LinkView url={props.value.url}/> : <div/>}
			<span className="name">{props.value.title}</span>
		</div>
		{props.value.description ? <p className={"description"}>{props.value.description}</p> : <div/>}
	</div>);
}
