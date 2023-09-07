/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';
import portfolio from '../../public/images/FullSizeRender (1).jpg';
import { motion } from 'framer-motion';

const About = () => {
	return (
		<>
			<motion.div transiton={{ duration: 2 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='w-full pb-8 py-40 mb-24  flex justify-center items-center'>
				<main className='flex flex-col-reverse shadow-lg py-16  md:grid grid-cols-2  gap-4'>
					<section className='flex flex-col gap-4 px-4 md:ml-20 items-end  justify-center w-full'>
						<p className='w-full text-center md:text-start text-base tracking-wider '>
							A Software Developer with a proven track record of optimizing user experiences and web performance. Expertise in revamping onboarding processes, integrating authentication methods, and enhancing codebases for efficiency and compatibility. Successful Freelance Web Developer with a strong client base and a history of referrals, specializing in improving page load speed. Skilled in minimizing system downtime and optimizing workflows. Committed to driving digital excellence in frontend
							development.
						</p>

						<p className='w-full text-center md:text-start text-base tracking-wider'>Driven by a passion for innovation and a commitment to excellence, I constantly strive to push the boundaries of web development. With a meticulous attention to detail, I create clean and maintainable code, ensuring long-term scalability and ease of maintenance for the projects I work on..</p>
					</section>
					<section className='flex flex-col items-center w-auto justify-center'>
						<motion.div initial={{ scale: 0.3 }} animate={{ scale: 1 }} transition={{ duration: 3 }} className=''>
							<Image src={portfolio} alt='me' layout='intrinsic' height={350} width={350} className='shadow-xl mx-4  rounded-full ' />
						</motion.div>
					</section>
				</main>
			</motion.div>
		</>
	);
};

export default About;
