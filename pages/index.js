import React, { useEffect } from 'react';
import Layout from '../public/components/Layout';
import Skills from '../public/components/skills';
import Contact from '../public/components/contact';
import Portfolio from '../public/components/portfolio';
import About from '../public/components/about';
import HeroSection from '../public/components/HeroSection';

export default function Home() {
	return (
		<Layout>
			<main className='flex  bg-primary-bg-light dark:bg-primary-bg-dark flex-col gap-20 w-full overflow-hidden divide-[#c4d5fa] divide-y-[0.2rem]'>
				<HeroSection />
				<Skills />
				<Portfolio />
				<About />
				<Contact />
			</main>
		</Layout>
	);
}
