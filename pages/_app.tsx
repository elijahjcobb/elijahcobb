import Head from 'next/head'
import type { AppProps } from 'next/app'
import "../styles/index.css";
import { Shell } from '../components/shell';
import { IncludeAllProviders } from '../data/providers';

export default function MyApp({ Component, pageProps }: AppProps) {
	return <>
		<Head>
			<title>elijahcobb.dev</title>
			<link href="/favicon.svg" rel="icon" type="image/svg+xml" />
			<script async src="https://cdn.splitbee.io/sb.js" />
		</Head>
		<IncludeAllProviders>
			<Shell>
				<Component {...pageProps} />
			</Shell>
		</IncludeAllProviders>
	</ >
} 