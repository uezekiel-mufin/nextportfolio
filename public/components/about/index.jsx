/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';
import portfolio from '../../images/FullSizeRender (1).jpg';
import { motion, useInView } from 'framer-motion';

const About = () => {
	const textRef = React.useRef(null);
	const textInView = useInView(textRef, { once: true });
	return (
		<main data-aos='fade-up' data-aos-duration='1000'>
			<div className='flex flex-col  items-center gap-4'>
				<div className='w-full text-center mb-8'>
					<h2 className='text-3xl font-bold '>About Me</h2>
					<p className='text-lg text-[#4d4d4e] font-normal '>Get to know a bit more</p>
				</div>
			</div>
			<div id='about' className='w-full pb-8   flex justify-center items-center'>
				<motion.div id='about' className='flex flex-col-reverse   md:grid grid-cols-2  gap-4'>
					<motion.section ref={textRef} transiton={{ duration: 1 }} animate={{ y: textInView ? 0 : 100 }} className='flex flex-col gap-4 px-4 md:ml-20 items-end  justify-center w-full'>
						<p className='w-full text-center md:text-start text-[1.2rem] tracking-wider'>Driven by a passion for innovation and a commitment to excellence, I constantly strive to push the boundaries of web development. With a meticulous attention to detail, I create clean and maintainable code, ensuring long-term scalability and ease of maintenance for the projects I work on..</p>

						<p className='w-full text-center md:text-start text-[1.2rem] tracking-wider '>
							I have a proven track record of optimizing user experiences and web performance. Expertise in revamping onboarding processes, integrating authentication methods, and enhancing codebases for efficiency and compatibility. Successful Freelance Web Developer with a strong client base and a history of referrals, specializing in improving page load speed. Skilled in minimizing system downtime and optimizing workflows. Committed to driving digital excellence in frontend development.
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
