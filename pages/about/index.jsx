/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';
import portfolio from '../../public/images/FullSizeRender (1).jpg';
import { motion } from 'framer-motion';

const About = () => {
	return (
		<>
			<motion.div transiton={{ duration: 2 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='w-full mb-8 pb-8 py-40 h-full  flex justify-center items-center'>
				<main className='flex flex-col-reverse shadow-2xl py-8  md:grid grid-cols-2  gap-4'>
					<section className='flex flex-col gap-4 px-4 md:ml-20 items-end  justify-center w-full'>
						<p className='w-full text-center md:text-start text-base tracking-wider '>
							<span className='text-xl font-bold'> Ezekiel</span> is a dedicated full-stack developer with a wealth of experience in freelancing projects and remote work. Proficient in both front-end and back-end development, I have a proven track record of delivering high-quality web applications. With my expertise in modern technologies and a passion for problem-solving, I consistently strive to create user-friendly and innovative solutions.
						</p>

						<p className='w-full text-center md:text-start text-base tracking-wider'>Driven by a passion for innovation and a commitment to excellence, I constantly strive to push the boundaries of web development. With a meticulous attention to detail, I create clean and maintainable code, ensuring long-term scalability and ease of maintenance for the projects I work on..</p>
						<p className='w-full text-center md:text-start text-base tracking-wider'>Overall, I am a dedicated full-stack developer who thrives in the fast-paced and dynamic world of software development. I bring a unique blend of technical expertise, project management skills, and a strong commitment to delivering outstanding results to every client and project I undertake.</p>
						<div className='flex w-full justify-start'>
							<button className='w-[60%] lg:w-[200px]'>
								<a rel='noreferrer' target='_blank' href='https://docs.google.com/document/d/1-MGTwUQV_3dzWssg8PsUPnBJMmnVCsHo8m-FrwKbYXo/edit?usp=sharing' className='relative inline-block px-4  font-medium group w-full py-2'>
									<span className='absolute inset-0 w-full h-full transition-all duration-400 ease-linear transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0'></span>
									<span className='absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black ransition-all duration-400 ease-linear'></span>
									<span className='relative text-black group-hover:text-white text-xl'>View Resume</span>
								</a>
							</button>
						</div>
					</section>
					<section className='flex flex-col items-center w-auto justify-center'>
						<div className=''>
							<Image src={portfolio} alt='me' layout='intrinsic' height={350} width={350} className='shadow-xl mx-4  rounded-full ' />
						</div>
					</section>
				</main>
			</motion.div>
		</>
	);
};

export default About;
