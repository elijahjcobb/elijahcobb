/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";
import {HeaderView} from "./HeaderView";
import {ExperiencesView} from "./ExperiencesView";
import {EducationsView} from "./EducationsView";
import {ProjectsView} from "./ProjectsView";
import {ReferencesView} from "./ReferencesView";
import {SkillsView} from "./SkillsView";
import {databases, frameworks, languages} from "./data/skills";
import {PDFFooter} from "./PDFFooter";

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
				<div className="left">
					<ExperiencesView/>
					<EducationsView/>
				</div>
				<div className="right">
					<div className={"allSkills"}>
						<SkillsView value={languages}/>
						<SkillsView value={frameworks}/>
						<SkillsView value={databases}/>
					</div>
					<ProjectsView/>
					<ReferencesView/>
				</div>
			</main>
		</div>);
	}

}