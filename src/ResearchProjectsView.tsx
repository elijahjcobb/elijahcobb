/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";
import {research} from "./data/research";
import {ResearchProjectView} from "./ResearchProjectView";

export function ResearchProjectsView(): React.ReactElement {
	return (<section className="projects">
		<h2>Research</h2>
		{
			research.map((project, index) => {
				return (<ResearchProjectView value={project} key={index}/>);
			})
		}
	</section>);
}
