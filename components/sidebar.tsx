import { VscFiles, VscGitMerge, VscAccount, VscSearch } from "react-icons/vsc";
import type { ReactElement } from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SideBarItem } from "./sidebar-item";

export interface SidebarProps {

}

export function Sidebar({ }: SidebarProps): ReactElement {
	return <div className="sidebar">
		<style jsx>{`
			.sidebar {
				background: var(--dark);
				width: var(--side-bar-width);
				color: var(--foreground);
				height: 100vh;
				padding: var(--padding);
				position: fixed;
				left: 0;
				top: 0;
			}
			.sidebar, .section {
				display: flex;
				flex-direction: column;
				align-items: center;
				gap: var(--side-bar-spacing);
			}
			.section {
				flex-grow: 1;
			}
		`}</style>
		<div className="section">
			<SideBarItem icon={VscFiles} href="https://github.com/elijahjcobb/elijahcobb" />
			<SideBarItem icon={VscSearch} href="https://github.com/elijahjcobb/elijahcobb/search?q=%3CSideBarItem+icon%3D%7BVscSearch" />
			<SideBarItem icon={VscGitMerge} href="https://github.com/elijahjcobb/elijahcobb" />
		</div>
		<SideBarItem icon={FaEnvelope} href="mailto:elijah@elijahcobb.com" />
		<SideBarItem icon={FaTwitter} href="https://twitter.com/elijahjcobb" />
		<SideBarItem icon={FaGithub} href="http://github.com/elijahjcobb" />
		<SideBarItem icon={FaLinkedin} href="https://linkedin.com/in/elijahjcobb" />
	</div>
}