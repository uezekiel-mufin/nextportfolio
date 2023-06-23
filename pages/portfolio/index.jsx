import Image from 'next/image';
import React from 'react';
import data from '../../public/components/portfolioData';
import { motion } from 'framer-motion';
const Portfolio = () => {
	const portVariant = {
		hidden: { y: 200 },
	};
	return (
		<motion.div transiton={{ ease: 'easeOut', duration: 2 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='flex flex-col w-full mb-[100px] '>
			<div className='flex flex-col items-center mb-8 mt-[150px]  gap-4'>
				<div className='w-4/5'>
					<h6 className='font-bold text-[#686d75]'>Portfolio</h6>
					<h2 className='text-4xl font-bold '>Featured Projects</h2>
				</div>
			</div>
			<div className='flex justify-center items-center h-full  '>
				<div className='relative flex flex-col m-1 gap-12 md:grid md:grid-cols-3  md:gap-8 w-4/5 h-full justify-evenly content-evenly'>
					{data.map((item) => (
						<div key={item.id} className='flex shadow-lg flex-col gap-[5px] h-full justify-start shadow-pink-800 rounded-lg p-4 '>
							<a href={item.liveDemo} target='_blank' rel='noreferrer' className='hover:scale-105 transition-all duration-500 ease-linear'>
								<Image src={item.image} alt='image' className='rounded-md hover:scale-105' />
							</a>
							<h1 className='text-shadow font-bold'>{item.name}</h1>
							<h4 className=' flex justify-start font-semibold'>{item.technologies}</h4>
							<p className='text-sm'>{item.description}</p>
							<div className=' flex justify-between mt-4 mb-2 w-full gap-4'>
								<a href={item.liveDemo} rel='noreferrer' target='_blank' className='w-full'>
									<button className='bg-pink-600 rounded-md text-white w-full px-2  md:px-3 py-2 transition-all duration-500 ease-out hover:font-bold hover:bg-pink-700'>live Demo</button>
								</a>
								<a href={item.Github} rel='noreferrer' target='_blank' className='w-full'>
									<button className='bg-pink-600 rounded-md text-white px-2  md:px- w-full py-2 transition-all duration-500 ease-out hover:font-bold hover:bg-pink-700'>Github</button>
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
		</motion.div>
	);
};

export default Portfolio;
