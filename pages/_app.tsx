import Head from 'next/head'
import type { AppProps } from 'next/app'
import "../styles/index.css";
import { Shell } from '../components/shell';

export default function MyApp({ Component, pageProps }: AppProps) {
	return <>
		<Head>
			<title>elijahcobb.dev</title>
		</Head>
		<Shell>
			<Component {...pageProps} />
		</Shell>
	</ >
} 