import '../styles/globals.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		AOS.init({
			duration: 1000,
			easing: 'ease-in-out',
		});
	}, []);
	return (
		<>
			<Head>
				<link rel='icon' href='/images/newlogo2.png' className='rounded-full' />
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
