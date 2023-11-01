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
		<main className='py-4'>
			<SectionHeader title='About Me' subtitle={'Discover More About Me.'} />
			<div id='about' className='w-full pb-8 lg:px-44  flex justify-center items-center'>
				<motion.div id='about' className='flex flex-col-reverse  md:justify-center md:grid grid-cols-2  gap-4'>
					<motion.section data-aos='fade-up' data-aos-duration='500' data-aos-once='true' className='flex flex-col gap-4 px-4  items-end  justify-start w-full'>
						<div className='w-full text-center md:text-start text-base md:text-[1.2rem] tracking-wider leading-8'>
							<p>With over 2 years of experience in web development, I'm driven by a passion for innovation and a steadfast commitment to excellence. My journey in this dynamic field has allowed me to continually push the boundaries of what's possible. I'm not just a developer; I'm an architect of digital experiences. My meticulous attention to detail and focus on crafting clean and maintainable code ensures long-term scalability and ease of maintenance for my projects.</p>

							<p>Aside coding, I love to play football, watch movies, and play video games. I also love to learn new things and I'm always open to new opportunities. I'm currently open to new opportunities, so feel free to reach out to me if you have any questions or would like to work together on a project.</p>
						</div>
					</motion.section>
					<section className='flex flex-col items-center w-auto px-4 justify-center'>
						<motion.div data-aos='fade-up' data-aos-duration='500' data-aos-once='true' className=''>
							<Image src={portfolio} alt='me' layout='intrinsic' height={400} width={450} className='shadow-xl mx-4  rounded-2xl ' />
						</motion.div>
					</section>
				</motion.div>
			</div>
		</main>
	);
};

export default About;
