export function Contact() {
	return <div id='contact' className='container'>
		<style jsx>{`
			@media (min-width: 800px) {
				.container {
					height: calc(100vh - var(--nav-height));
				}
			}
		`}</style>
		<h1>Contact</h1>
	</div>
}