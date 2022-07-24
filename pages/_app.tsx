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
		</Head>
		<IncludeAllProviders>
			<Shell>
				<Component {...pageProps} />
			</Shell>
		</IncludeAllProviders>
	</ >
} 