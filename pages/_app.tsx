import Head from 'next/head'
import type { AppProps } from 'next/app'
import "../styles/index.css"

function MyApp({ Component, pageProps }: AppProps) {
	return <>
		<Head>
			<title>elijahcobb.dev</title>
		</Head>
		<Component {...pageProps} />
	</ >
}

// eslint-disable-next-line import/no-default-export
export default MyApp
