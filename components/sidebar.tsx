import { VscFiles, VscGitMerge, VscAccount } from "react-icons/vsc";
import type { ReactElement } from "react";

export interface SidebarProps {

}

export function Sidebar({ }: SidebarProps): ReactElement {
	return <div className="sidebar">
		<style jsx>{`
			.sidebar {
				background: var(--ec-background);
				width: var(--side-bar-width);
				color: var(--ec-foreground);
				height: 100vh;
				padding: var(--ec-padding);
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
			<VscFiles size={24} />
			<VscGitMerge size={24} />
		</div>
		<VscAccount size={24} />
	</div>
}