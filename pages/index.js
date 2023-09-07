import React, { useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
	return (
		<div className='w-full h-[91vh] flex justify-center items-center'>
			<main
				className='mx-1 flex flex-col w-full md:w-3/5 mt-28 md:mt-0
			gap-8 justify-center items-center text-center'>
				<h1 className='text-[#17161A] font-bold text-4xl w-4/5 md:w-full md:text-7xl mx-2 '>
					<span className='text-[#17161A] font-semibold text-xl md:text-3xl'> Hello, My name is</span>
					<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 3 }}>
						Ezekiel Udiomuno
						<span className='text-[#944d97]'>!</span>
					</motion.div>
				</h1>
				<motion.h3 initial={{ y: -3000 }} animate={{ y: 0 }} transition={{ duration: 3 }} className='text-[#17161A] font-semibold text-xl md:text-3xl w-4/5'>
					I Develop Responsive and User-friendly Websites & Web-Applications
				</motion.h3>

				<div className='flex flex-col md:flex-row mt-10 md:mt-4 gap-4 md:gap-8 justify-center'>
					<Link href='/contact'>
						<motion.a initial={{ x: -1000 }} animate={{ x: 0 }} transition={{ duration: 2 }} className='relative animate inline-block cursor-pointer px-4 w-[60vw] md:w-[200px] py-2 font-medium group'>
							<span className='absolute inset-0 w-full h-full transition duration-300 ease-linear transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0'></span>
							<span className='absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black'></span>
							<span className='relative text-black text-2xl transition duration-300 ease-linear group-hover:text-white'>Contact Me</span>
						</motion.a>
					</Link>
					<Link href='/portfolio'>
						<motion.a initial={{ x: 1000 }} animate={{ x: 0 }} transition={{ duration: 2 }} className='relative animate inline-block px-4 cursor-pointer py-2 w-[60vw] md:w-[200px] font-medium group'>
							<span className='absolute inset-0 w-full h-full transition duration-300 ease-linear transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0'></span>
							<span className='absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black'></span>
							<span className='relative text-black text-2xl group-hover:text-white'>Portfolio</span>
						</motion.a>
					</Link>
				</div>
			</main>
		</div>
	);
}
