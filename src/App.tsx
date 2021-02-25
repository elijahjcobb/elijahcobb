/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";
import {HeaderView} from "./HeaderView";
import {PositionsView} from "./PositionsView";
import {EducationsView} from "./EducationsView";
import {ResearchProjectsView} from "./ResearchProjectsView";
import {ReferencesView} from "./ReferencesView";
import {PDFFooter} from "./PDFFooter";
import {PublicationsView} from "./PublicationsView";
import {DefaultViewContainer} from "./DefaultViewContainer";
import {research} from "./data/research";
import {presentations} from "./data/presentations";
import {accomplishments} from "./data/accomplishments";

export interface AppProps {

}

export interface AppState {

}

export class App extends React.Component<AppProps, AppState> {

	public constructor(props: AppProps) {

		super(props);

		this.state = {};

	}

	public render(): React.ReactElement {
		return (<div className={"App"}>
			<PDFFooter/>
			<HeaderView/>
			<main>
				<PositionsView/>
				<DefaultViewContainer header={"research"} values={research}/>
				<DefaultViewContainer header={"presentations/conferences"} values={presentations}/>
				<DefaultViewContainer header={"accomplishments"} values={accomplishments}/>
				<PublicationsView/>
				<EducationsView/>
				<ReferencesView/>
			</main>
		</div>);
	}

}
