import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaLinkedinIn, FaTwitter, FaWhatsapp, FaGithub } from 'react-icons/fa';

export default function HeroSection() {
	return (
		<div data-aos='fade-up' data-aos-duration='500' data-aos-once='true' className='w-full gap-20  md:gap-8 mt-8 md:mt-[90px] lg:h-[80vh] overflow-hidden flex flex-col md:flex-row items-center  justify-center  px-4 md:px-4 lg:px-10 xl:px-36'>
			<main
				className='mx-1 flex xl:pl-2 flex-col w-full min-h-[60vh] md:min-h-[80vh] md:mt-0
			gap-8 justify-end md:justify-center items-center md:items-start '>
				<motion.section initial={{ x: 200 }} animate={{ x: 0 }} transition={{ duration: 1 }} className='flex flex-col items-center w-full'>
					<h1 className=' text-[#17161A] font-bold text-4xl md:text-5xl w-full lg:text-6xl xl:text-6xl flex flex-col items-center gap-4'>
						<span className='text-gray-700 w-full font-semibold text-center md:text-center lg:text-start text-xl md:text-xl '> Hello, My name is</span>
						<div className='w-full text-center md:text-center  lg:text-start'>
							Ezekiel Udiomuno
							<span className='text-[#3b5998]'>!</span>
						</div>
					</h1>
					<h3 className='text-gray-600 mt-4 text-center md:text-center lg:text-start font-semibold text-xl md:text-2xl w-full'>
						I build highly efficient web solutions that <br className='hidden md:block' /> drive results and make a difference.
					</h3>
				</motion.section>
				<ul className='flex items-start gap-8'>
					<li className='text-[#212121] hover:text-[#3b5998] '>
						<a href='https://wa.me/+2348147576669' className='text-bas ' target='_blank' rel='noreferrer'>
							<FaWhatsapp size={25} />
						</a>
					</li>
					<li className='text-[#212121] hover:text-[#3b5998] '>
						<a href='http://github.com/Ezzywealth/' className='text-base ' target='_blank' rel='noreferrer'>
							<FaGithub size={25} />
						</a>
					</li>
					<li className='text-[#212121] hover:text-[#3b5998] '>
						<a href='https://www.twitter.com/EzzyWealth' className='text-base ' target='_blank' rel='noreferrer'>
							<FaTwitter size={25} />
						</a>
					</li>
					<li className='text-[#212121] hover:text-[#3b5998] '>
						<a href='https://www.linkedin.com/in/ezekiel-udiomuno' className='text-base' target='_blank' rel='noreferrer'>
							<FaLinkedinIn size={25} />
						</a>
					</li>
				</ul>

				<motion.div initial={{ y: 500 }} animate={{ y: 0 }} transition={{ duration: 2 }} className='flex flex-col md:flex-row  w-full mt-1  gap-4 md:gap-8 justify-center items-center lg:justify-start'>
					<a href='#contact' className='w-[160px]'>
						<li className='relative animate flex justify-center cursor-pointer px-4  py-2 font-medium group'>
							<span className='absolute inset-0 w-full h-full transition duration-700 ease-linear transform translate-x-1 translate-y-1 bg-[#3b5998]  group-hover:-translate-x-0 group-hover:-translate-y-0'></span>
							<span className='absolute inset-0 w-full h-full bg-white border-2 border-[#3b5998] group-hover:bg-[#3b5998]'></span>
							<span className='relative text-black text-2xl transition duration-300 ease-linear group-hover:text-white text-center'>Contact Me</span>
						</li>
					</a>
					<a href='#portfolio'>
						<li className='relative animate  flex justify-center px-4 cursor-pointer py-2 w-[160px] font-medium group'>
							<span className='absolute inset-0 w-full h-full transition duration-300 ease-linear transform translate-x-1 translate-y-1 bg-[#3b5998] group-hover:-translate-x-0 group-hover:-translate-y-0'></span>
							<span className='absolute inset-0 w-full h-full bg-white border-2 border-[#3b5998] group-hover:bg-[#3b5998]'></span>
							<span className='relative text-black text-2xl text-center group-hover:text-white'>Portfolio</span>
						</li>
					</a>
				</motion.div>
			</main>
			<motion.div initial={{ x: -200 }} animate={{ x: 0 }} transition={{ duration: 0.5 }} className='flex justify-center lg:flex  '>
				<Image src='/images/heroImg.svg' alt='hero' width={800} height={600} />
			</motion.div>
		</div>
	);
}
