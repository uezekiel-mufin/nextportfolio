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
import ProjectDetails from '../PortfolioDetail';

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
		<div id='portfolio' className='flex flex-col  w-full  h-full  lg:px-8 xl:px-10 py-8'>
			<SectionHeader title='Featured Projects' subtitle='Here are some of the projects I have completed.' />
			<section className='relative w-full space-y-20 px-4 md:px-8 lg:px-10 xl:px-10 2xl:px-40'>
				{data.map((item, index) => (
					<div data-aos='fade-up' data-aos-duration='500' data-aos-once='true' key={item.id} className={`grid md:grid-cols-2 gap-4 md:gap-8 items-start  rounded-lg p-2  `}>
						<div className={`shadow-xl    ${index % 2 !== 0 ? 'md:order-1' : 'md:-order-1'}`}>
							<img src={item?.image} alt='image' className='rounded-md h-full w-auto hover:scale-105 transition-all duration-300 ' />
						</div>
						<div className={`${index % 2 !== 0 ? 'md:-order-1' : 'md:order-1'}`}>
							<ProjectDetails project={item} />
						</div>
					</div>
				))}
			</section>
		</div>
	);
};

export default Portfolio;
