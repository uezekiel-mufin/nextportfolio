import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HeroSection() {
	return (
		<div data-aos='fade-up' data-aos-duration='1000' className='w-full gap-8 mt-[12rem] lg:mt-4 lg:h-screen overflow-hidden grid lg:grid-cols-2 justify-center items-center px-4 md:px-4 lg:px-10 xl:px-16'>
			<main
				className='mx-1 flex xl:pl-12 flex-col w-full  md:mt-0
			gap-8 justify-center items-center md:items-start '>
				<motion.section initial={{ x: 200 }} animate={{ x: 0 }} transition={{ duration: 1 }}>
					<h1 className='text-[#17161A] font-bold text-4xl md:text-5xl w-full lg:text-5xl xl:text-6xl flex flex-col items-center gap-4'>
						<span className='text-[#333235] w-full font-semibold text-center md:text-center lg:text-start text-xl md:text-3xl'> Hello, My name is</span>
						<div className='w-full text-center md:text-center lg:text-start'>
							Ezekiel Udiomuno
							<span className='text-[#944d97]'>!</span>
						</div>
					</h1>
					<h3 className='text-[#525253] mt-4 text-center md:text-center lg:text-start font-semibold text-xl md:text-2xl w-full'>
						I Develop Highly Responsive and User-friendly <br /> Websites & Web-Applications
					</h3>
				</motion.section>

				<motion.div initial={{ y: 500 }} animate={{ y: 0 }} transition={{ duration: 2 }} className='flex flex-col md:flex-row w-full mt-10 md:mt-4 gap-4 md:gap-8 justify-center items-center lg:justify-start'>
					<a href='#contact'>
						<li className='relative animate flex justify-center cursor-pointer px-4 w-[60vw] md:w-[200px] py-2 font-medium group'>
							<span className='absolute inset-0 w-full h-full transition duration-700 ease-linear transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0'></span>
							<span className='absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black'></span>
							<span className='relative text-black text-2xl transition duration-300 ease-linear group-hover:text-white text-center'>Contact Me</span>
						</li>
					</a>
					<a href='#portfolio'>
						<li className='relative animate  flex justify-center px-4 cursor-pointer py-2 w-[60vw] md:w-[200px] font-medium group'>
							<span className='absolute inset-0 w-full h-full transition duration-300 ease-linear transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0'></span>
							<span className='absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black'></span>
							<span className='relative text-black text-2xl text-center group-hover:text-white'>Portfolio</span>
						</li>
					</a>
				</motion.div>
			</main>
			<motion.div initial={{ x: -200 }} animate={{ x: 0 }} transition={{ duration: 1 }} className='flex justify-center md:hidden lg:flex  '>
				<Image src='/images/heroImg.svg' alt='hero' width={600} height={600} />
			</motion.div>
		</div>
	);
}
