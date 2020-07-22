/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";
import {references} from "./data/references";
import {ReferenceView} from "./ReferenceView";

export interface ReferencesViewProps {

}

export interface ReferencesViewState {

}

export class ReferencesView extends React.Component<ReferencesViewProps, ReferencesViewState> {

	public constructor(props: ReferencesViewProps) {

		super(props);

		this.state = {};

	}

	public render(): React.ReactElement {
		return (<div className="references">
			<h2>references</h2>
			<div className={"allReferences"}>
				{
					references.map((reference, index) => {
						return (<ReferenceView value={reference} key={index}/>);
					})
				}
			</div>
		</div>);
	}

}