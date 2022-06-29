import { About } from "../components/about";
import { Icon } from "../components/icon";
import { Positions } from "../components/positions";
import { FaArrowDown } from "react-icons/fa";
import Link from "next/link";


export function HomePage() {
	return <div className="container">
		<style jsx>{`
				.container {
					width: 100%;
					display: flex;
					flex-direction: column;
					align-items: flex-start;
					gap: var(--padding-xl)
				}
				.header {
					display: flex;
					flex-direction: column;
					gap: var(--padding);
					font-size: 1.125em;
				}
				.text {
					display: flex;
					flex-direction: column;
					gap: var(--padding-xs);
				}
				.head {
					font-weight: lighter;
				}
				.name {
					color: var(--secondary);
					font-weight: 900;
				}
				.subheader {
					color: var(--accent-8);
				}
				.down {
					display: none;
				}
				@media (min-width: 800px) {
					.header {
						font-size: 2em;
						flex-direction: row;
						align-items: center;
						justify-content: center;
						gap: var(--padding-xl);
						padding-bottom: var(--padding-xxl);
						min-height: calc(100vh - var(--nav-height));
					}
					.text {
						gap: var(--padding-s);
					}
					.down {
						display: flex;
						align-items: center;
						justify-content: center;
						position: absolute;
						bottom: var(--padding-l);
						left: calc(50vw - 16px);
					}
				}
			`}</style>
		<div className="header">
			<div><Icon size={320} animate /></div>
			<div className="text">
				<span className="head">Hello, my name is</span>
				<h1 className="name">Elijah Cobb</h1>
				<span className="subheader">I am a Full Stack Engineer in Seattle, WA.</span>
				<Link href={"/#about"} passHref>
					<a className="down">
						<FaArrowDown size={32} color='var(--secondary)' />
					</a>
				</Link>
			</div>
		</div>
		<About />
		<Positions />
	</div>
}