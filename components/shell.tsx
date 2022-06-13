import { NavBar } from "./nav-bar";
import { SideBar } from "./side-bar";


export function Shell({ children }: { children: React.ReactNode }) {
	return (
		<div className="shell">
			<style jsx>{`
				.shell {

				}
				.main {
					display: flex;
					width: 100%;
					justify-content: space-between;
				}
				.container {
					flex-grow: 1;
					max-width: 720px;
				}
			`}</style>
			<NavBar />
			<div className="main">
				<SideBar>
					<p>oij</p>
					<p>oij</p>
					<p>oij</p>
				</SideBar>
				<div className="container">{children}</div>
				<SideBar />
			</div>

		</div>
	);
}