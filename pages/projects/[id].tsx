/*
 * Elijah Cobb
 * elijah@elijahcobb.com
 * https://elijahcobb.com
 */

import type { NextPage, GetStaticProps, GetStaticPaths } from "next";
import * as FS from "fs";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import 'katex/dist/katex.min.css'
import Head from 'next/head'
import { IProject, projects } from "../../data/projects";
import markdownStyles from "../../styles/markdownStyles.module.scss";
import { COLOR_blue1, COLOR_blue5, COLOR_orange, COLOR_purple } from "../../components/colors";
import { useCallback } from "react";
import { GitHub, Link } from "@mui/icons-material";
import { PrismAsync as SyntaxHighlighter } from "react-syntax-highlighter";
import { Chips } from "../../components/Chips";
import { ProjectType } from "../../components/ProjectRow";

interface PageProps {
	project: IProject;
	mdManual: string | null;
	mdGitHub: string | null;
}

const Page: NextPage<PageProps> = props => {

	const dateString = useCallback(() => {
		let s = props.project.date[0] + " - ";
		if (props.project.date[1]) s += props.project.date[1]
		else s += "present";
		return s;
	}, [props.project.date]);

	return (<>
		<style jsx>{`
			//* {border: solid red 1px;}
			.page {
				background: ${COLOR_blue1};
				width: 100vw;
				display: flex;
				flex-direction: column;
				align-items: center;
				margin-top: 52px;
				min-height: calc(100vh - 52px);
				color: white;
				user-select: none;
			}
			.container {
				width: 90%;
				max-width: 720px;
				padding: 32px;
			}
			.top {
				display: flex;
				flex-direction: column;
				align-items: center;
				margin: 32px 0;
			}
			.top h1 {
			  text-align: center;
			  width: 100%;
			  font-size: 3em;
			  background: -webkit-linear-gradient(${COLOR_orange} 60%, ${COLOR_purple});
			  -webkit-background-clip: text;
			  -webkit-text-fill-color: transparent;
			  user-select: none;
			}
			.top img {
				width: 80%;
				max-width: 400px;
			}
			.date {
				text-transform: uppercase;
				font-size: 22px;
				font-weight: bold;
			}
			.icon-link {
				display: flex;
				align-items: center;
				margin: 16px 0;
				font-size: 1em;
				color: ${COLOR_blue5};
				transition: 250ms ease-in-out;
				text-decoration: none;
			}
			.icon-link:hover {
				color: ${COLOR_orange};
				transform: scale(1.05);
				cursor: pointer;
				border: none;
			}
			.icon-link span {
				margin-left: 8px;
			}
			@media (min-width: 720px) {
				.top img {
					margin: 64px 0;
				}
				.top, .mid {
					font-size: 2em;
				}
				.date {
					font-size: 1.25em;
				}
			}
		`}</style>
		<div className={"page"}>
			<Head>
				<title>{"Elijah Cobb | " + props.project.title}</title>
			</Head>
			<div className={"container"}>
				<div className={"top"}>
					<h1>{props.project.title}</h1>
					{props.project.img && <img src={props.project.img} alt={props.project.slug} />}
				</div>
				<div className={"mid"}>
					<span className={"date"}>{dateString()}</span>
					{props.project.link && <a
						target={"_blank"} rel={"noreferrer"}
						href={"https://" + props.project.link}
						className={"icon-link"}>
						<Link />
						<span>{props.project.link}</span>
					</a>}
					{props.project.github && <a
						target={"_blank"} rel={"noreferrer"}
						href={"https://github.com/" + props.project.github}
						className={"icon-link"}>
						<GitHub />
						<span>{props.project.github}</span>
					</a>}
					<Chips chips={props.project.chips.concat([props.project.type === ProjectType.PROFESSIONAL ? "💼" : "👨‍💻"])} />
				</div>
				<ReactMarkdown
					className={markdownStyles.container}
					components={{
						a({ children, ...props }) {
							return <a rel="noreferrer" href={props.href} target={"_blank"}>{children}</a>
						},
						code({ node, inline, className, children, ...props }) {
							return !inline ? (
								<code className={markdownStyles.codeBlock} {...props}>
									{children}
								</code>
							) : (
								<code className={markdownStyles.codeInline} {...props}>
									{children}
								</code>
							)
						}
					}}
					remarkPlugins={[remarkMath, remarkGfm]}
					rehypePlugins={[rehypeKatex]}>
					{[(props.mdManual ?? ""), (props.mdGitHub ?? "")].join("\n")}
				</ReactMarkdown>
			</div>
		</div>
	</>);
};

export const getStaticProps: GetStaticProps<PageProps> = async (context) => {

	const url = (context.params as { id: string }).id;
	let project: IProject | undefined = undefined;
	for (const proj of projects) if (proj.slug === url) project = proj;
	let fileData: string | undefined = undefined;
	try {
		console.log(__dirname);
		fileData = FS.readFileSync("data/md/" + url + ".md").toString("utf8");
	} catch (e) { }
	if (!project) return { redirect: { destination: "/", permanent: false } }

	let githubSource: string | undefined;
	if (project.github) {
		try {
			const r = await fetch(`https://raw.githubusercontent.com/${project.github}/master/README.md`)
			githubSource = await r.text();
		} catch (e) {}
	}


	return {
		props: {
			project,
			mdManual: fileData ?? null,
			mdGitHub: githubSource ?? null
		}
	}
}

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: projects.map(project => { return { params: { id: project.slug } } }),
		fallback: false
	}
}

export default Page;
