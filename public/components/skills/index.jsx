import React from 'react';
import { backendSkills, frontendSkills, softSkills } from '../SkillsTable.';
import { AiOutlineDash } from 'react-icons/ai';
import SectionHeader from '../sectionHeader/SectionHeader';

const Skills = () => {
	return (
		<section id='skills' className=' py-8 items-center flex flex-col w-full mb-[100px] px-4  lg:px-16 xl:px-44'>
			<SectionHeader title='Skills' subtitle='Here are my skills to enhance your project.' />
			<section className='space-y-16'>
				<section data-aos='fade-up' data-aos-duration='500' data-aos-once='true' className='flex flex-col rounded-lg bg-gray-50 dark:bg-nav-bg space-y-4 align-center py-16 pt-8 shadow-xl drop-shadow-lg p-8 max-w-[700px]'>
					<h2 className='text-2xl capitalize font-semibold flex items-center gap-1 justify-center text-primary-text-light dark:text-primary-text-dark'>
						<AiOutlineDash />
						Front-End
						<AiOutlineDash />
					</h2>
					<article className='flex flex-wrap justify-center gap-4 text-primary-text-light dark:text-primary-text-dark '>
						{frontendSkills.map((item, index) => (
							<span key={index} className='border rounded-md uppercase border-gray-400  transition-all duration-300 ease-linear cursor-pointer   hover:border-[#3b5998] text-sm font-semibold items-center flex gap-1 px-4 py-2 hover:scale-105'>
								{item.name}
								{item.icon}
							</span>
						))}
					</article>
				</section>
				<section data-aos='fade-up' data-aos-duration='500' data-aos-once='true' className='flex flex-col bg-gray-50 dark:bg-nav-bg   space-y-4 align-center py-16 pt-8 shadow-xl drop-shadow-2xl p-8 max-w-[700px] rounded-lg '>
					<h2 className='text-2xl capitalize flex justify-center items-center gap-1 font-semibold text-center text-primary-text-light dark:text-primary-text-dark'>
						<AiOutlineDash />
						Back-End
						<AiOutlineDash />
					</h2>
					<article className='flex flex-wrap justify-center gap-4 text-primary-text-light dark:text-primary-text-dark'>
						{backendSkills.map((item, index) => (
							<span key={index} className='border rounded-md uppercase border-gray-400  transition-all duration-300 ease-linear cursor-pointer   hover:border-[#3b5998] text-sm font-semibold items-center flex gap-1 px-4 py-2 hover:scale-105'>
								{item.name}
								{item.icon}
							</span>
						))}
					</article>
				</section>
				<section data-aos='fade-up' data-aos-duration='500' data-aos-once='true' className='flex flex-col rounded-lg  bg-gray-50 dark:bg-nav-bg text-primary-text-light dark:text-primary-text-dark  space-y-4 align-center pb-16 pt-8 shadow-xl drop-shadow-2xl p-4 md:px-8 max-w-[700px]'>
					<h2 className='text-2xl font-semibold capitalize text-center  flex items-center justify-center gap-2'>
						<AiOutlineDash />
						Soft SKills <AiOutlineDash />
					</h2>
					<article className='flex flex-wrap justify-center gap-4 '>
						{softSkills.map((item, index) => (
							<span key={index} className='border rounded-md uppercase border-gray-400  transition-all duration-300 ease-linear cursor-pointer  hover:animate-pulse hover:border-[#3b5998] text-sm font-semibold items-center flex gap-1 px-4 py-2 hover:scale-105'>
								{item.name}
								{item.icon}
							</span>
						))}
					</article>
				</section>
			</section>
		</section>
	);
};

export default Skills;
