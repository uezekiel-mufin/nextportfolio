import Image from 'next/image';
import React from 'react';
import data from '../../public/components/portfolioData';
import GitBtn from '../../public/components/Buttons/gitBtn';
import DemoBtn from '../../public/components/Buttons/demoBtn';

const Portfolio = () => {
	return (
		<div className='flex flex-col w-full mb-[100px] px-4  lg:px-8 xl:px-16'>
			<div className='flex flex-col pt-[150px] items-center gap-4'>
				<div className='w-full text-center mb-8'>
					<h6 className='font-bold text-[#686d75]'>Portfolio</h6>
					<h2 className='text-4xl font-bold '>Featured Projects</h2>
				</div>
			</div>
			<div className='flex justify-center items-center h-full  '>
				<div className='m-1 gap-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  md:gap-8 w-[90%] h-full justify-evenly content-evenly'>
					{data.map((item) => (
						<div key={item.id} className='relative grid grid-cols-1 shadow-lg gap-[5px] h-full justify-start  rounded-lg p-4 '>
							<a href={item.liveDemo} target='_blank' rel='noreferrer' className='hover:scale-105 transition-all duration-500 ease-linear'>
								<Image src={item.image} alt='image' height={800} className='aspect-video h-[800px] rounded-md hover:scale-105' layout='responsive' />
							</a>
							<h1 className='text-shadow font-bold text-2xl'>{item.name}</h1>
							<h4 className=' flex justify-start font-semibold'>{item.technologies}</h4>
							<p className='text-sm'>{item.description}</p>
							<div className='flex justify-between mt-4 mb-2 w-full gap-4'>
								<GitBtn liveDemo={item.liveDemo} />
								<DemoBtn github={item.Github} />
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
