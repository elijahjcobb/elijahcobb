import Head from 'next/head'
import type { AppProps } from 'next/app'
import { MDXProvider } from '@mdx-js/react'
import { components } from '../components/md'
import { Shell } from '../components/shell'
import "../styles/index.css";

export default function MyApp({ Component, pageProps }: AppProps) {
	return <>
		<Head>
			<title>elijahcobb.dev</title>
		</Head>
		<Shell>
			<MDXProvider components={components}>
				<Component {...pageProps} />
			</MDXProvider>
		</Shell>
	</ >
}