/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import {publications} from "./data/publications";
import {PublicationView} from "./PublicationView";
import * as React from "react";

export interface EducationsViewProps {

}

export interface EducationsViewState {

}

export class PublicationsView extends React.Component<EducationsViewProps, EducationsViewState> {

	public constructor(props: EducationsViewProps) {

		super(props);

		this.state = {};

	}

	public render(): React.ReactElement {
		if (publications.length < 1) return <div/>;
		return (<section className="publications">
			<h2>publications</h2>
			<div className={"publications-table"}>
				{
					publications.map((education, index) => {
						return (<PublicationView value={education} key={index}/>)
					})
				}
			</div>
		</section>);
	}

}
