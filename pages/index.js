import React, { useEffect } from 'react';
import Layout from '../public/components/Layout';
import Skills from '../public/components/skills';
import Contact from '../public/components/contact';
import Portfolio from '../public/components/portfolio';
import About from '../public/components/about';
import HeroSection from '../public/components/HeroSection';
import ProjectDetails from '../public/components/PortfolioDetail';
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
			<section className={`transition-all duration-300 ease-linear z-[100000000] fixed top-0 left-0 h-screen w-full bg-transparent  ${showProject ? 'block' : 'hidden'}`}>
				<ProjectDetails project={newProject} setShowProject={setShowProject} />
			</section>
			<main className='flex flex-col gap-20 w-full overflow-hidden divide-[#3b5998] divide-y-[4rem]'>
				<HeroSection />
				<Skills />
				<Portfolio handleProjectClick={handleProjectClick} />
				<About />
				<Contact />
			</main>
		</Layout>
	);
}
