/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';
import portfolio from '../../public/images/FullSizeRender (1).jpg';
import { motion } from 'framer-motion';

const About = () => {
	return (
		<motion.div transiton={{ duration: 2 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='w-full mb-8 pb-8 pt-32 h-full md:h-screen z-[9999] flex justify-center items-center'>
			<main className='flex flex-col-reverse items-center md:grid grid-cols-2 mx-4 md:w-4/5  gap-8'>
				<section className='flex flex-col px-4 md:px-8 items-center gap-1 justify-center text-center w-full'>
					<h1 className='text-[#17161A] text-xl md:text-3xl font-bold w-full text-center mb-4'>I'm a Full-Stack Web Developer</h1>
					<p className='w-full text-center md:text-start text-lg '>I love to make things look perfect. I create pixel perfect Websites that are responsive on all screensizes (small, big and Extra large screen sizes) and that are scalable. I'm also a Mechanical Engineer. I love learning new things and quickly too and most importantly, I love to code.</p>

					<p className='w-full text-center md:text-start text-lg'>My stacks are HTML, CSS, TailwindCSS, Javascript, TypeScript, Ruby, Ruby on Rails, Material-UI, ReactJS, NextJS, Git, Github, GraphCMS, Redux-Toolkit, MongoDB, Sanity-io.</p>
					<button className='w-[80%] md:w-1/2 mt-8 bg-red-500'>
						<a rel='noreferrer' target='_blank' href='https://docs.google.com/document/d/1-MGTwUQV_3dzWssg8PsUPnBJMmnVCsHo8m-FrwKbYXo/edit?usp=sharing' className='relative inline-block px-4  font-medium group w-full py-3'>
							<span className='absolute inset-0 w-full h-full transition-all duration-400 ease-linear transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0'></span>
							<span className='absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black ransition-all duration-400 ease-linear'></span>
							<span className='relative text-black group-hover:text-white text-2xl'>View Resume</span>
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
