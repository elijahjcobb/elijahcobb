/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import React, {ReactElement} from "react";
import {educations} from "./data/educations";
import {EducationView} from "./EducationView";

export function EducationsView(): ReactElement {
	return (<section className="educations">
		<h2>education</h2>
		<div className={"colleges"}>
			{
				educations.map((education, index) => {
					return (<EducationView value={education} key={index}/>)
				})
			}
		</div>
	</section>);
}
