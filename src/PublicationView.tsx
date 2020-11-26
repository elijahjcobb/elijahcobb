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

export interface PublicationViewState {

}

export class PublicationView extends React.Component<PublicationViewProps, PublicationViewState> {

	public constructor(props: PublicationViewProps) {

		super(props);

		this.state = {};
		this.getDateString = this.getDateString.bind(this);

	}

	private getDateString(): string {
		switch (this.props.value.date.month) {
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

	public render(): React.ReactElement {
		const pub = this.props.value;
		return (<div className="publication">
			{(this.props.value.url !== undefined) ? <LinkView url={this.props.value.url}/> : <div/>}
			<div className={"detail"}>
				<span className={"title"}>{this.props.value.title}</span>
				<span className={"publication"}>{this.props.value.publication}</span>
				<span className={"date"}>{`${this.getDateString()} ${pub.date.day}, ${pub.date.year}`}</span>
				<span className={"authors"}>{this.props.value.authors.join(", ")}</span>
			</div>
		</div>);
	}

}
