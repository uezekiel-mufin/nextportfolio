import Image from 'next/image';
import data from '../portfolioData';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import NextArrow from '../ArrowNext';
import PrevArrow from '../ArrowPrev';
import SectionHeader from '../sectionHeader/SectionHeader';
import React from 'react';

const Portfolio = ({ handleProjectClick }) => {
	const [showName, setShowName] = React.useState(false);
	const [activeSlide, setActiveSlide] = React.useState(null);
	const [showProject, setShowProject] = React.useState(false); // This is for the modal
	const [newProject, setNewProject] = React.useState(data[0]);
	const settings = {
		infinite: true,
		autoplay: true,
		speed: 2000,
		autoplaySpeed: 5000,
		slidesToShow: 3,
		slidesToScroll: 1,
		nextArrow: <NextArrow top='40%' right='-0.7rem' />,
		prevArrow: <PrevArrow top='40%' left='-0.8rem' />,
		useCss: true,
		rtl: false, // Right to left movement for infinite scrolling
		responsive: [
			{
				breakpoint: 1300,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 700,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	const handleHover = (index) => {
		setActiveSlide(index);
		setShowName(true);
	};
	const handleOut = () => {
		setActiveSlide(null);
		setShowName(false);
	};

	return (
		<div data-aos='fade-up' data-aos-duration='1000' data-aos-once='true' id='portfolio' className='flex flex-col  w-full  h-full  lg:px-8 xl:px-16'>
			<SectionHeader title='Featured Projects' subtitle='Here are some of the projects I have completed.' />
			<section className='relative  md:px-12 lg:px-24 xl:px-16'>
				<Slider {...settings} className='flex flex-col '>
					{data.map((item) => (
						<div onClick={() => handleProjectClick(item.id)} key={item.id} onMouseOver={() => handleHover(item.id)} onMouseLeave={() => handleOut()} className='cursor-pointer slide-item h-[300px] w-[400px] relative shadow-lg gap-20 rounded-lg p-4 '>
							<div className='shadow-xl'>
								<Image src={item?.image} alt='image' layout='fill' className='rounded-md ' />
							</div>
							<h1 className={`text-shadow  transition-all duration-1000 ease-linear  -bottom-2 px-4 py-3 w-full bg-[rgba(0,0,0,0.7)] text-white left-0 font-bold text-2xl my-2 ${showName && activeSlide === item.id ? 'flex absolute' : 'hidden'}`}>{item.name}</h1>
						</div>
					))}
				</Slider>
			</section>
		</div>
	);
};

export default Portfolio;
