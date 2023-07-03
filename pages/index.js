import React, { useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
	return (
		<div className='w-full h-[91vh] flex justify-center items-center'>
			<main
				className='mx-1 flex flex-col w-full md:w-3/5 mt-28 md:mt-0
			gap-8 justify-center items-center text-center'>
				<h1 className='text-[#17161A] font-bold text-6xl w-4/5 md:w-full md:text-7xl mx-2 '>
					<span className='text-[#17161A] font-semibold text-2xl md:text-4xl'> Hello, My name is</span>
					<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, duration: 5000 }}>
						Ezekiel Udiomuno
						<span className='text-[#944d97]'>!</span>
					</motion.div>
				</h1>
				<motion.h3 initial={{ y: -3000 }} animate={{ y: 0, duration: 50000 }} className='text-[#17161A] font-semibold text-2xl md:text-3xl w-4/5'>
					I Develop Responsive and User-friendly Websites & Web-Applications
				</motion.h3>

				<div className='flex flex-col md:flex-row mt-20 md:mt-4 gap-4 md:gap-8 justify-center'>
					<Link href='/contact'>
						<motion.a transiton={{ duration: 5000, delay: 5 }} initial={{ x: 10000 }} animate={{ x: 0 }} className='relative animate inline-block px-4 w-[80vw] md:w-[200px] py-3 font-medium group'>
							<span className='absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0'></span>
							<span className='absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black'></span>
							<span className='relative text-black text-2xl group-hover:text-white'>Contact Me</span>
						</motion.a>
					</Link>
					<Link href='/portfolio'>
						<motion.a transiton={{ duration: 5000 }} initial={{ x: -10000 }} animate={{ x: 0 }} className='relative animate inline-block px-4 py-3 w-[80vw] md:w-[200px] font-medium group'>
							<span className='absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0'></span>
							<span className='absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black'></span>
							<span className='relative text-black text-2xl group-hover:text-white'>Portfolio</span>
						</motion.a>
					</Link>
				</div>
			</main>
		</div>
	);
}
