import '../styles/global.scss'
import type { AppProps } from 'next/app'
import {NavBar} from "../components/navbar";
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
	return <div>
		<Head>
			<title>Elijah Cobb</title>
			<link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-touch-icon.png"/>
			<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
			<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
			<link rel="manifest" href="/favicon/site.webmanifest"/>
			<link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5"/>
			<link rel="shortcut icon" href="/favicon/favicon.ico"/>
			<meta name="msapplication-TileColor" content="#da532c"/>
			<meta name="msapplication-config" content="/favicon/browserconfig.xml"/>
			<meta name="theme-color" content="#ffffff"/>
		</Head>
		<NavBar/>
		<Component {...pageProps} />
	</div>
}

export default MyApp
