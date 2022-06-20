import Head from 'next/head'
import type { AppProps } from 'next/app'
import "../styles/index.css";
import { Shell } from '../components/shell';

export default function MyApp({ Component, pageProps }: AppProps) {
	return <>
		<Head>
			<title>elijahcobb.dev</title>
			<link rel="icon" type="image/png" href="/favicon-16.png" sizes="16x16" />
			<link rel="icon" type="image/png" href="/favicon-32.png" sizes="32x32" />
		</Head>
		<Shell>
			<Component {...pageProps} />
		</Shell>
	</ >
} 