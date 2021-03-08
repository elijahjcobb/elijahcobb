/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";
import {Publication} from "./types";
import {LinkView} from "./LinkView";

export interface PublicationViewProps {
	value: Publication;
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

export function PublicationView(props: PublicationViewProps): React.ReactElement {
	const pub = props.value;
	return (<div className="publication">
		{(props.value.url !== undefined) ? <LinkView url={props.value.url}/> : <div/>}
		<div className={"detail"}>
			<span className={"title"}>{props.value.title}</span>
			<span className={"publication"}>{props.value.publication}</span>
			<span className={"date"}>{`${getDateString(props.value.date.month)} ${pub.date.day}, ${pub.date.year}`}</span>
			<span className={"authors"}>{props.value.authors.join(", ")}</span>
		</div>
	</div>);
}

