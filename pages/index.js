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
			<main className='flex flex-col gap-20 w-full overflow-hidden'>
				<HeroSection />
				<Skills />
				<Portfolio />
				<About />
				<Contact />
			</main>
		</Layout>
	);
}
