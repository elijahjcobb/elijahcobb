/*
 * Elijah Cobb
 * github.com/elijahjcobb
 * ejcobb@mtu.edu
 */

import {FC} from "react";
import {ProjectRow} from "./ProjectRow";
import {COLOR_blue5} from "./colors";

export interface ProjectsTableProps {

}

export const ProjectsTable: FC<ProjectsTableProps> = props => {

	return <>
		<style jsx>{`
			//* { border: solid 1px red; }
			.container {
				width: 100%;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: flex-start;
				margin: 64px 0;
			}
			.title {
				color: ${COLOR_blue5};
				font-size: 2em;
			}
			.subtitle {
				margin: 16px 0;
			}
			.body {
				max-width: 720px;
			}
			.projects {
				margin-top: 32px;
				display: grid;
				grid-template-columns: 100%;
				grid-template-rows: auto;
				grid-gap: 32px;
				justify-items: center;
			}
			@media (min-width: 780px) {
				.projects {
					grid-template-columns: repeat(2, 50%);
				}
			}
		`}</style>
		<div className={"container"}>
			<div className={"body"}>
				<h2 className={"title"}>Recent projects...</h2>
				<p className={"subtitle"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo id ipsum ut tincidunt. Nullam sit amet quam nec metus dignissim fermentum non malesuada enim. Etiam massa erat, egestas et lectus non, ultricies gravida sapien. Nulla pulvinar, sapien sagittis scelerisque vestibulum, diam erat rutrum lectus, sed tristique tortor lectus et arcu. Maecenas tempor scelerisque mauris, at dictum tellus iaculis sit amet. Vivamus aliquet mauris eget quam egestas, consequat consequat nisi vehicula. Aliquam posuere massa ac augue dapibus aliquam. Donec velit ex, viverra quis mi nec, posuere semper mauris.</p>
				<div className={"projects"}>
					<ProjectRow
						description={"Wordle meets scrabble with a fun timed component."}
						date={[2020, 2022]}
						slug={"wramble"}
						chips={["SCSS", "React Native"]}
						img={"/ampel.jpg"}
						title={"wramlbe"}/>
					<ProjectRow
						description={"Wordle meets scrabble with a fun timed component."}
						date={[2020, 2022]}
						slug={"wramble"}
						chips={["SCSS", "React Native"]}
						img={"/ampel.jpg"}
						title={"wramlbe"}/>
					<ProjectRow
						description={"Wordle meets scrabble with a fun timed component."}
						date={[2020, 2022]}
						slug={"wramble"}
						chips={["SCSS", "React Native"]}
						img={"/ampel.jpg"}
						title={"wramlbe"}/>
					<ProjectRow
						description={"Wordle meets scrabble with a fun timed component."}
						date={[2020, 2022]}
						slug={"wramble"}
						chips={["SCSS", "React Native"]}
						img={"/ampel.jpg"}
						title={"wramlbe"}/>
					<ProjectRow
						description={"Wordle meets scrabble with a fun timed component."}
						date={[2020, 2022]}
						slug={"wramble"}
						chips={["SCSS", "React Native"]}
						img={"/ampel.jpg"}
						title={"wramlbe"}/>
				</div>
			</div>
		</div>
	</>;

};