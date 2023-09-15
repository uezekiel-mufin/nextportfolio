import Image from 'next/image';
import data from '../../public/components/portfolioData';
import GitBtn from '../../public/components/Buttons/gitBtn';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import DemoBtn from '../../public/components/Buttons/demoBtn';
import NextArrow from '../../public/components/ArrowNext';
import PrevArrow from '../../public/components/ArrowPrev';

const Portfolio = () => {
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
	return (
		<div className='flex flex-col  w-full  h-full  lg:px-8 xl:px-16'>
			<div className='flex flex-col pt-[150px] md:pt-[100px] items-center gap-4'>
				<div className='w-full text-center mb-8'>
					<h2 className='text-3xl font-bold '>Featured Projects</h2>
				</div>
			</div>
			<section className='relative px-2 md:px-12 lg:px-24 xl:px-16'>
				<Slider {...settings} className='flex flex-col mb-8 pb-8'>
					{data.map((item) => (
						<div key={item.id} className='slide-item h-full relative shadow-lg gap-20 rounded-lg p-4 '>
							<a href={item.liveDemo} target='_blank' rel='noreferrer' className='hover:scale-105 transition-all duration-500 ease-linear'>
								<div className=''>
									<Image src={item.image} alt='image' height={800} layout='responsive' className='rounded-md transition-all duration-300 ease-linear hover:scale-105' />
								</div>
							</a>
							<h1 className='text-shadow font-bold text-2xl my-2'>{item.name}</h1>
							<h4 className=' flex justify-start text-sm font-semibold my-2 italic h-[35px]'>{item.technologies}</h4>
							<p className='text-sm h-[75px]'>{item.description}</p>
							<div className='flex justify-between mt-4 mb-2 w-full gap-4'>
								<GitBtn github={item.Github} />
								<DemoBtn liveDemo={item.liveDemo} />
							</div>
						</div>
					))}
				</Slider>
			</section>
		</div>
	);
};

export default Portfolio;
