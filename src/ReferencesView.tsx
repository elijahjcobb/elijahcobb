/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";
import {references} from "./data/references";
import {ReferenceView} from "./ReferenceView";

export function ReferencesView(): React.ReactElement {
	return (<section className="references">
		<h2>references</h2>
		<div className={"allReferences"}>
			{
				references.map((reference, index) => {
					return (<ReferenceView value={reference} key={index}/>);
				})
			}
		</div>
	</section>);
}
