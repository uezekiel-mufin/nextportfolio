import React from 'react';
import { motion } from 'framer-motion';
import { backendSkills, frontendSkills, softSkills } from '../../public/components/SkillsTable.';
import { AiOutlineDash } from 'react-icons/ai';

const Skills = () => {
	return (
		<motion.section className=' pt-[100px] flex flex-col w-full mb-[100px] px-4  lg:px-8 xl:px-16'>
			<div className='flex flex-col items-center gap-4'>
				<div className='w-full md:w-1/2 text-center mb-16 flex-wrap'>
					<h2 className='text-4xl font-bold tracking-wider text-gray-900 flex items-center justify-center gap-2'>Skills</h2>
					<p className='mx-2'>Below is a comprehensive list of my technical skills, showcasing the tools and frameworks that I am proficient in</p>
				</div>
			</div>

			<section className='space-y-16'>
				<section className='flex flex-col bg-gray-50 space-y-4 align-center py-16 pt-8 shadow-xl drop-shadow-lg p-8'>
					<h2 className='text-2xl font-semibold flex items-center gap-1 justify-center uppercase text-gray-900'>
						<AiOutlineDash />
						Front-End
						<AiOutlineDash />
					</h2>
					<article className='flex flex-wrap justify-center gap-4'>
						{frontendSkills.map((item, index) => (
							<span key={index} className='border rounded-md uppercase border-gray-400 text-gray-700  transition-all duration-300 ease-linear cursor-pointer  hover:text-white hover:bg-gray-500 text-sm font-semibold items-center flex gap-2 px-6 py-2 hover:scale-105'>
								{item.name}
								{item.icon}
							</span>
						))}
					</article>
				</section>
				<section className='flex flex-col bg-gray-50  space-y-4 align-center py-16 pt-8 shadow-xl drop-shadow-2xl p-8'>
					<h2 className='text-2xl flex justify-center items-center gap-1 font-semibold text-center text-gray-900'>
						<AiOutlineDash />
						Back-End
						<AiOutlineDash />
					</h2>
					<article className='flex flex-wrap justify-center gap-4'>
						{backendSkills.map((item, index) => (
							<span key={index} className='border rounded-md uppercase border-gray-400 text-gray-700  transition-all duration-300 ease-linear cursor-pointer  hover:text-white hover:bg-gray-500 text-sm font-semibold items-center flex gap-2 px-6 py-2 hover:scale-105'>
								{item.name}
								{item.icon}
							</span>
						))}
					</article>
				</section>
				<section className='flex flex-col bg-gray-50  space-y-4 align-center pb-16 pt-8 shadow-xl drop-shadow-2xl p-4 md:px-8'>
					<h2 className='text-2xl font-semibold text-center text-gray-900 flex items-center justify-center gap-2'>
						{' '}
						<AiOutlineDash />
						Soft SKills <AiOutlineDash />
					</h2>
					<article className='flex flex-wrap justify-center gap-4'>
						{softSkills.map((item, index) => (
							<span key={index} className='border rounded-md uppercase border-gray-400 text-gray-700 transition-all duration-300 ease-linear cursor-pointer  hover:text-white hover:bg-gray-500 text-sm font-semibold items-center flex gap-2 px-6 py-2 hover:scale-105'>
								{item.name}
								{item.icon}
							</span>
						))}
					</article>
				</section>
			</section>
		</motion.section>
	);
};

export default Skills;
