import Image from 'next/image';
import data from '../portfolioData';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import NextArrow from '../ArrowNext';
import PrevArrow from '../ArrowPrev';
import SectionHeader from '../sectionHeader/SectionHeader';
import React from 'react';
import { BsArrowRightShort } from 'react-icons/bs';

const Portfolio = ({ handleProjectClick }) => {
	const settings = {
		infinite: true,
		autoplay: true,
		speed: 1500,
		autoplaySpeed: 5000,
		slidesToShow: 3,
		slidesToScroll: 1,
		nextArrow: <NextArrow top='40%' right='-0.7rem' />,
		prevArrow: <PrevArrow top='40%' left='-0.8rem' />,
		responsive: [
			{
				breakpoint: 1300,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 700,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	};

	return (
		<div data-aos='fade-up' data-aos-duration='500' data-aos-once='true' id='portfolio' className='flex flex-col  w-full  h-full  lg:px-8 xl:px-10 py-8'>
			<SectionHeader title='Featured Projects' subtitle='Here are some of the projects I have completed.' />
			<section className='relative  md:px-12 lg:px-24 xl:px-16'>
				<Slider {...settings} className='flex flex-col '>
					{data.map((item) => (
						<div key={item.id} className=' slide-it border border-gray-200  shadow-lg rounded-lg p-2 '>
							<div className='shadow-xl relative block h-[300px] w-full md:w-[450px] '>
								<Image src={item?.image} alt='image' layout='fill' className='rounded-md ' />
							</div>
							<div className='flex items-center justify-between p-2'>
								<h1 className={`text-shadow text-gray-700 w-full   left-0 font-bold text-2xl `}>{item.name}</h1>
								<button className='w-full hover:scale-105 transition-all duration-200 ease-linear flex font-semibold text-gray-700 justify-end' onClick={() => handleProjectClick(item.id)}></button>
								<div onClick={() => handleProjectClick(item.id)} className=' w-full cursor-pointer relative flex items-center justify-center py-2 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group'>
									<span className='absolute w-0 h-0 transition-all duration-500 ease-out text-gray-100 bg-green-500 rounded-full group-hover:w-56 group-hover:h-56'></span>
									<span className='absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent '></span>
									<button className='w-full z-50 text-sm transition-all   flex font-semibold  justify-center'>
										View Project
										<BsArrowRightShort size={20} />
									</button>
								</div>
							</div>
						</div>
					))}
				</Slider>
			</section>
		</div>
	);
};

export default Portfolio;
