import { Icon } from "../components/icon";

export default function Page() {
	return (
		<div className="container">
			<style jsx>{`
				.container {
					width: 100%;
					display: flex;
					flex-direction: column;
					align-items: flex-start;
				}
				.center {
				}
				.text {

				}
				.header {
					font-weight: lighter;
				}
				.name {
					color: var(--secondary);
					font-weight: 900;
				}
				.subheader {
					color: var(--accent-8);
				}
			`}</style>
			<div className="center">
				<Icon size={128} animate />
				<div className="text">
					<span className="header">Hello, my name is</span>
					<h1 className="name">Elijah Cobb</h1>
					<span className="subheader">I am a Full Stack Engineer in Seattle, WA</span>
				</div>
			</div>
		</div>
	);
}