import React, { useEffect } from 'react';
import Layout from '../public/components/Layout';
import Skills from '../public/components/skills';
import Contact from '../public/components/contact';
import Portfolio from '../public/components/portfolio';
import About from '../public/components/about';
import HeroSection from '../public/components/HeroSection';
import data from '../public/components/portfolioData';

export default function Home() {
	const [showProject, setShowProject] = React.useState(false); // This is for the modal
	const [newProject, setNewProject] = React.useState(data[0]);

	const handleProjectClick = (id) => {
		const project = data.find((item) => item.id === id);
		setNewProject(() => project);
		setShowProject(true);
	};
	return (
		<Layout>
			<main className='flex  bg-primary-bg-light dark:bg-primary-bg-dark flex-col gap-20 w-full overflow-hidden divide-[#c4d5fa] divide-y-[0.2rem]'>
				<HeroSection />
				<Skills />
				<Portfolio handleProjectClick={handleProjectClick} />
				<About />
				<Contact />
			</main>
		</Layout>
	);
}
