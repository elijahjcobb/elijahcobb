/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import React, {ReactElement, PropsWithChildren} from "react";
import {LinkView} from "./LinkView";
import {DefaultItem} from "./types";

export interface DefaultViewRowProps {
	value: DefaultItem
}

function getDateString(month: number): string {
	switch (month) {
		case 1:
			return "Jan";
		case 2:
			return "Feb";
		case 3:
			return "Mar";
		case 4:
			return "Apr";
		case 5:
			return "May";
		case 6:
			return "Jun";
		case 7:
			return "Jul";
		case 8:
			return "Aug";
		case 9:
			return "Sep";
		case 10:
			return "Oct";
		case 11:
			return "Nov";
		case 12:
			return "Dec";
		default:
			return "";
	}
}

export function DefaultViewRow(props: PropsWithChildren<DefaultViewRowProps>): ReactElement {

	return (<div className="project">
		<div className="header">
			{props.value.url ? <LinkView url={props.value.url}/> : <div/>}
			<div className={"title"}>
				<span className="name">{props.value.title}</span>
				{props.value.date ? <span className={"date"}>{`${getDateString(props.value.date.month)} ${props.value.date.day}, ${props.value.date.year}`}</span> : <div/>}
			</div>
		</div>
		{props.value.description ? <p className={"description"}>{props.value.description}</p> : <div/>}
	</div>);

}
