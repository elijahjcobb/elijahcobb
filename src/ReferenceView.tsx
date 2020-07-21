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

export interface ReferenceViewState {

}

export class ReferenceView extends React.Component<ReferenceViewProps, ReferenceViewState> {

	public constructor(props: ReferenceViewProps) {

		super(props);

		this.state = {};

	}

	public render(): React.ReactElement {
		return (<div className="reference">
			<LinkView url={"mailto:" + this.props.value.email}/>
			<div className="info">
				<span className="name">{this.props.value.name}</span>
				<span className="title">{this.props.value.position}</span>
				<span className="company">{this.props.value.organization}</span>
			</div>
		</div>);
	}

}