/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";
import {Experience} from "./types";
import {LinkView} from "./LinkView";

export interface PositionViewProps {
	value: Experience;
}

export function PositionView(props: PositionViewProps): React.ReactElement {
	return (<div className="business">
		<div className="header">
			{props.value.url ? (
				<LinkView url={props.value.url}/>
			) : <div/>}
			<div className="info">
				<span className="name">{props.value.title}</span>
				{props.value.subtitle ? (
					<span className="subname">{props.value.subtitle}</span>
				): <div/>}
				<span className="location">{props.value.location}</span>
			</div>
		</div>
		{
			props.value.positions.map((position, index) => {
				return (<div className="position" key={index}>
					<span className="title">{position.title}</span>
					<span className="date">{position.start + " - " + position.end}</span>
					<p className="description">{position.description}</p>
				</div>)
			})
		}
	</div>);
}
