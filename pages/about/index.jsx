/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';
import portfolio from '../../public/images/FullSizeRender (1).jpg';
import { motion } from 'framer-motion';

const About = () => {
	return (
		<motion.div transiton={{ duration: 2 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='w-full mb-8 pb-8 pt-24 h-full md:h-screen z-[9999] flex justify-center items-center'>
			<main className='flex flex-col-reverse items-center md:grid grid-cols-2 mx-4 md:w-4/5 mt-12  gap-8'>
				<section className='flex flex-col px-4 md:px-8 items-center gap-1 justify-center text-center w-full'>
					<h1 className='text-[#17161A] text-xl md:text-2xl font-extrabold w-full text-center mb-4'>I'm a Full-Stack Web Developer</h1>
					<p className='w-full text-center md:text-start text-lg md:text-xl'>I love to make things look perfect. I create pixel perfect Websites that are responsive on all screensizes (small, big and Extra large screen sizes) and that are scalable. I'm also a Mechanical Engineer. I love learning new things and quickly too and most importantly, I love to code.</p>

					<p className='w-full text-center md:text-start text-lg md:text-xl'>My stacks are HTML, CSS, TailwindCSS, Javascript, TypeScript, Ruby, Ruby on Rails, Material-UI, ReactJS, NextJS, Git, Github, GraphCMS, Redux-Toolkit, MongoDB, Sanity-io.</p>
					<button className='bg-[#17161A] text-[#fff] hover:hover:bg-[#561358] font-semibold text-lg transition-all duration-300 ease-linear  rounded-lg py-2 px-3 md:py-2 md:px-8 mt-8'>
						<a rel='noreferrer' target='_blank' href='https://docs.google.com/document/d/1-MGTwUQV_3dzWssg8PsUPnBJMmnVCsHo8m-FrwKbYXo/edit?usp=sharing'>
							View CV
						</a>
					</button>
				</section>
				<section className='flex justify-center w-full '>
					<div className='  w-full block'>
						<Image src={portfolio} alt='me' layout='responsive' className=' mx-2 scale-90 rounded-xl ' />
					</div>
				</section>
			</main>
		</motion.div>
	);
};

export default About;
