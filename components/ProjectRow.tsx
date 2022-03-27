/*
 * Elijah Cobb
 * github.com/elijahjcobb
 * ejcobb@mtu.edu
 */

import {FC} from "react";
import {COLOR_blue2, COLOR_orange, COLOR_purple} from "./colors";

export interface ProjectRowProps {
	title: string;
	slug: string;
	date: [number, number?];
	description: string;
	chips: string[];
	img: string;
}

export const ProjectRow: FC<ProjectRowProps> = props => {

	return (<>
		<style jsx>{`
          * {
            //border: solid 1px red;
          }

          .container {
            border-radius: 16px;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 16px;
            min-width: 360px;
            max-width: 360px;
            box-shadow: 0 0 16px ${COLOR_blue2};
            transition: all 250ms ease-in-out;
            color: white;
            text-decoration: none;
            border: none;
          }
          
          .container:hover {
          	background: linear-gradient(${COLOR_orange}, ${COLOR_purple});
          	transform: scale(1.05);
          	cursor: pointer;
          	box-shadow: 0 0 16px ${COLOR_orange};
          	text-decoration: none;
            border: none;
          }

          .img {
            width: 100%;
            max-height: 200px;
            object-fit: contain;
            margin-bottom: 32px;
            filter: grayscale(100%) blur(4px);
            transition: 250ms ease-in-out;
          }
          
          .container:hover .img {
          	filter: none;
          }

          .titleRow {
            display: flex;
            width: 100%;
            justify-content: space-between;
            font-size: 18px;
          }

          .titleRow b {
            font-size: 24px;
          }

          .titleRow span {
            width: 120px;
          }

          .desc {
            margin-top: 16px;
          }

          .chipsContainer {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
          }

          .chip {
          	margin-top: 16px;
          	margin-right: 16px;
          	background: #333;
          	padding: 4px;
          	font-family: 'Roboto Mono', monospace;
          	font-size: 14px;
          	border-radius: 4px;
          	transition: all 250ms ease-in-out;
          }
          
          .container:hover .chip {
          	background: black;
          }
		`}</style>
		<a href={"/projects/" + props.slug} className={"container"}>
			<img alt={"preview"} className={"img"} src={props.img}/>
			<div className={"titleRow"}>
				<b>{props.title}</b>
				<span>{props.date[0]} - {props.date[1]}</span>
			</div>
			<p className={"desc"}>{props.description}</p>
			<div className={"chipsContainer"}>
				{props.chips.map((chip, i) => <span className={"chip"} key={i}>{chip}</span>)}
			</div>
		</a>
	</>);

};