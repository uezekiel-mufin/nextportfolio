import React, { useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

export default function Home() {
	useEffect(() => {
		const message = new SpeechSynthesisUtterance('Hello, Welcome to my portfolio website, we are glad to have you here!');
		window.speechSynthesis.speak(message);
	}, []);
	return (
		<motion.div transiton={{ duration: 5 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='w-full h-screen flex justify-center items-center'>
			<main
				className='mx-1 flex flex-col w-full md:w-3/5 mt-20 md:mt-0
			gap-8 justify-center items-center text-center'>
				<h1 className='text-[#17161A] font-bold text-5xl w-4/5 md:w-full md:text-6xl mx-2 '>
					<span className='text-[#17161A] font-semibold text-2xl md:text-4xl'> Hi, My name is</span>
					<div>
						<Typewriter words={['Ezekiel Udiomuno']} deleteAllOnFinish={true} cursor cursorStyle='|' loop={true} typeSpeed={200} deleteSpeed={200} delaySpeed={1000} />
						<span className='text-[#944d97]'>!</span>
					</div>
				</h1>
				<h3 className='text-[#17161A] font-semibold text-2xl md:text-4xl w-4/5'>I Develop Responsive and User-friendly Websites & Web-Applications</h3>

				<div className='flex flex-col md:flex-row mt-20 md:mt-4 gap-4 md:gap-8 justify-center'>
					<Link href='/contact'>
						<a href='#_' className='relative inline-block px-4 w-[150px] py-3 font-medium group'>
							<span className='absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0'></span>
							<span className='absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black'></span>
							<span className='relative text-black group-hover:text-white'>Contact Me</span>
						</a>
					</Link>
					<Link href='/portfolio'>
						<a href='#_' className='relative inline-block px-4 py-3 w-[150px] font-medium group'>
							<span className='absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0'></span>
							<span className='absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black'></span>
							<span className='relative text-black group-hover:text-white'>Portfolio</span>
						</a>
					</Link>
				</div>
			</main>
		</motion.div>
	);
}
