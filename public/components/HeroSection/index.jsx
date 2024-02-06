import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaLinkedinIn, FaTwitter, FaWhatsapp, FaGithub } from 'react-icons/fa';
import { ReactTyped } from 'react-typed';
import ContactIcon from '../../svgs/ContactIcon';
import PortfolioIcon from '../../svgs/PortfolioIcon';

export default function HeroSection() {
	const [loading, setLoading] = useState(true);
	return (
		<div data-aos='fade-up' data-aos-duration='500' data-aos-once='true' className='w-full gap-28  md:gap-8 mt-[120px] lg:mt-[90px]  md:min-h-[100vh] lg:min-h-[80vh] overflow-hidden flex flex-col lg:flex-row items-center  justify-center  px-4 md:px-4 lg:px-10 xl:px-16 2xl:px-32'>
			<main
				className='mx-1 flex xl:pl-2 flex-col w-full h-full
			gap-5 justify-center items-center md:items-start '>
				<motion.section initial={{ x: 200 }} animate={{ x: 0 }} transition={{ duration: 1 }} className='flex flex-col items-center w-full gap-2'>
					<h1 className=' text-primary-text-light dark:text-primary-text-dark  font-bold text-4xl md:text-5xl 2xl:text-6xl w-full flex flex-col items-center '>
						<div className='w-full text-center md:text-center  lg:text-start'>Ezekiel Udiomuno</div>
					</h1>
					<ReactTyped className='text-secondary-text-light dark:text-secondary-text-dark  text-center md:text-center lg:text-start font-semibold text-xl  w-full ' strings={['A Passionate and Enthusiastic Front-End Engineer.', 'With a strong adherence to industry standards.']} typeSpeed={50} backSpeed={5} loop />

					<h3 className='text-secondary-text-light dark:text-secondary-text-dark   capitalize  text-center md:text-center lg:text-start font-semibold text-lbase w-full'>Fueled by a commitment to define industry-leading standards for pixel-perfect frontend excellence, I specialize in crafting highly efficient web solutions.</h3>
				</motion.section>
				<ul className='flex text-primary-text-light dark:text-primary-text-dark items-start justify-center w-full lg:justify-start gap-5 m-0'>
					<li className=' hover:text-[#3b5998] hover:scale-105 transition-all duration-300'>
						<a href='https://wa.me/+2348147576669' className='text-bas ' target='_blank' rel='noreferrer'>
							<FaWhatsapp size={20} />
						</a>
					</li>
					<li className=' hover:text-[#3b5998] hover:scale-105 transition-all duration-300'>
						<a href='http://github.com/Ezzywealth/' className='text-base ' target='_blank' rel='noreferrer'>
							<FaGithub size={20} />
						</a>
					</li>
					<li className=' hover:text-[#3b5998] hover:scale-105 transition-all duration-300'>
						<a href='https://www.twitter.com/EzzyWealth' className='text-base ' target='_blank' rel='noreferrer'>
							<FaTwitter size={20} />
						</a>
					</li>
					<li className=' hover:text-[#3b5998] hover:scale-105 transition-all duration-300'>
						<a href='https://www.linkedin.com/in/ezekiel-udiomuno' className='text-base' target='_blank' rel='noreferrer'>
							<FaLinkedinIn size={20} />
						</a>
					</li>
				</ul>

				<motion.div initial={{ y: 500 }} animate={{ y: 0 }} transition={{ duration: 2 }} className='flex flex-col md:flex-row  w-full mt-1  gap-4 md:gap-8 justify-center items-center lg:justify-start'>
					<a href='#contact' className='w-[150px]'>
						<li className='relative animate flex justify-center cursor-pointer py-2 font-medium group'>
							<span className='absolute inset-0 w-full h-full transition duration-700 ease-linear transform translate-x-1 translate-y-1 bg-[#3b5998]  group-hover:-translate-x-0 group-hover:-translate-y-0'></span>
							<span className='absolute inset-0 w-full h-full transition duration-400 ease-linear transform  bg-white border-2 border-[#3b5998] group-hover:bg-[#3b5998]'></span>
							<span className='relative gap-1 text-gray-700 flex items-center justify-center text-xl transition duration-300 ease-linear group-hover:text-white text-center'>
								Contact Me <ContactIcon />{' '}
							</span>
						</li>
					</a>
					<a href='#portfolio'>
						<li className='relative animate  flex justify-center px-4 cursor-pointer py-2 w-[140px] font-medium group'>
							<span className='absolute inset-0 w-full h-full transition duration-300 ease-linear transform translate-x-1 translate-y-1 bg-[#3b5998] group-hover:-translate-x-0 group-hover:-translate-y-0'></span>
							<span className='absolute inset-0 w-full h-full bg-white border-2 transition duration-400 ease-linear transform   border-[#3b5998] group-hover:bg-[#3b5998]'></span>
							<span className='relative gap-1 flex items-center justify-center text-gray-700 text-xl text-center group-hover:text-white'>
								Portfolio <PortfolioIcon />
							</span>
						</li>
					</a>
				</motion.div>
			</main>
			<motion.div initial={{ x: -200 }} animate={{ x: 0 }} transition={{ duration: 0.5 }} className='flex justify-center lg:flex  '>
				<Image src='/images/heroImg.svg' alt='hero' width={800} height={600} className={` ${loading ? ' blur-xl shimmer' : ' blur-0'}`} onLoadingComplete={() => setLoading(false)} />
			</motion.div>
		</div>
	);
}
