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
		<main data-aos='fade-up' data-aos-duration='1000'>
			<SectionHeader title='About Me' subtitle={'Discover More About Me.'} />
			<div id='about' className='w-full pb-8   flex justify-center items-center'>
				<motion.div id='about' className='flex flex-col-reverse   md:grid grid-cols-2  gap-4'>
					<motion.section ref={textRef} transiton={{ duration: 1 }} animate={{ y: textInView ? 0 : 100 }} className='flex flex-col gap-4 px-4 md:ml-20 items-end  justify-center w-full'>
						<p className='w-full text-center md:text-start text-[1.2rem] tracking-wider'>I'm driven by a passion for innovation and a commitment to excellence, constantly pushing the boundaries of web development. With meticulous attention to detail, I craft clean and maintainable code that ensures long-term scalability and ease of maintenance for my projects.</p>

						<p className='w-full text-center md:text-start text-[1.2rem] tracking-wider '>
							My track record speaks for itself. I excel at optimizing user experiences and web performance. My expertise lies in overhauling onboarding processes, seamlessly integrating authentication methods, and enhancing codebases for efficiency and compatibility. As a successful Freelance Web Developer, I've built a strong client base and earned a history of referrals. My specialization? Improving page load speed and minimizing system downtime while optimizing workflows. I'm dedicated to
							driving digital excellence in frontend development.
						</p>
					</motion.section>
					<section className='flex flex-col items-center w-auto justify-center'>
						<motion.div initial={{ scale: 0.3 }} animate={{ scale: 1 }} transition={{ duration: 3 }} className=''>
							<Image src={portfolio} alt='me' layout='intrinsic' height={350} width={350} className='shadow-xl mx-4  rounded-full ' />
						</motion.div>
					</section>
				</motion.div>
			</div>
		</main>
	);
};

export default About;
