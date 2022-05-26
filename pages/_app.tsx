import Head from 'next/head'
import type { AppProps } from 'next/app'
import "../styles/index.css"

export default function MyApp({ Component, pageProps }: AppProps) {
	return <>
		<Head>
			<title>elijahcobb.dev</title>
		</Head>
		<Component {...pageProps} />
	</ >
}