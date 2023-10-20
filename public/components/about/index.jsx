/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';
import portfolio from '../../images/FullSizeRender (1).jpg';
import { motion, useInView } from 'framer-motion';
import SectionHeader from '../sectionHeader/SectionHeader';

const About = () => {
	const textRef = React.useRef(null);
	const textInView = useInView(textRef, { once: true });
	return (
		<main className='py-8'>
			<SectionHeader title='About Me' subtitle={'Discover More About Me.'} />
			<div id='about' className='w-full pb-8   flex justify-center items-center'>
				<motion.div id='about' className='flex flex-col-reverse   md:grid grid-cols-2  gap-4'>
					<motion.section data-aos='fade-up' data-aos-duration='500' data-aos-once='true' className='flex flex-col gap-4 px-4 xl:ml-20 items-end  justify-center w-full'>
						<div className='w-full text-center md:text-start text-base md:text-[1.2rem] tracking-wider'>
							<p>With over 2 years of experience in web development, I'm driven by a passion for innovation and a steadfast commitment to excellence. My journey in this dynamic field has allowed me to continually push the boundaries of what's possible. I'm not just a developer; I'm an architect of digital experiences. My meticulous attention to detail and focus on crafting clean and maintainable code ensures long-term scalability and ease of maintenance for my projects.</p>

							<p>
								My track record speaks for itself. I excel at optimizing user experiences and enhancing web performance. I specialize in overhauling onboarding processes, seamlessly integrating authentication methods, and elevating codebases for efficiency and cross-platform compatibility. As a successful Freelance Web Developer, I've built a strong client base and earned a history of referrals, which speaks volumes about the quality of my work. My true expertise? Elevating page load speed,
								minimizing system downtime, and streamlining workflows. I am dedicated to advancing digital excellence in frontend development, pushing the boundaries of what can be achieved in the digital realm.
							</p>
						</div>
					</motion.section>
					<section className='flex flex-col items-center w-auto px-4 justify-center'>
						<motion.div data-aos='fade-up' data-aos-duration='500' data-aos-once='true' className=''>
							<Image src={portfolio} alt='me' layout='intrinsic' height={400} width={400} className='shadow-xl mx-4  rounded-2xl ' />
						</motion.div>
					</section>
				</motion.div>
			</div>
		</main>
	);
};

export default About;
