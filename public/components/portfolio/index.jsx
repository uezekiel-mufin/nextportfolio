import Image from 'next/image';
import data from '../portfolioData';
import SectionHeader from '../sectionHeader/SectionHeader';
import React,{useState} from 'react';
import { BsArrowRightShort } from 'react-icons/bs';
import ProjectDetails from '../PortfolioDetail';

const Portfolio = ({ handleProjectClick }) => {
	const [loading,setLoading]=useState(true)

	return (
		<div id='portfolio' className='flex flex-col  w-full  h-full  lg:px-8 xl:px-10 py-8'>
			<SectionHeader title='Featured Projects' subtitle='Here are some of the projects I have completed.' />
			<section className='relative w-full space-y-20 px-4 md:px-8 lg:px-10 xl:px-10 2xl:px-40'>
				{data.map((item, index) => (
					<div data-aos='fade-up' data-aos-duration='500' data-aos-once='true' key={item.id} className={`grid md:grid-cols-2 gap-4 md:gap-8 items-start  rounded-lg p-2  `}>
						<div className={` relative block h-[200px] md:h-[220px]   ${index % 2 !== 0 ? 'md:order-1' : 'md:-order-1'}`}>
							<Image layout='fill' src={item?.image} alt='image' className={` shadow-xl rounded-md h-auto w-auto hover:scale-105 transition-all duration-300 ${loading ? ' blur-xl shimmer' : ' blur-0'}`}
			onLoadingComplete={() => setLoading(false)} />
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
