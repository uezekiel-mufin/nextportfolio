import React from 'react';
import { motion, useInView } from 'framer-motion';
import { backendSkills, frontendSkills, softSkills } from '../SkillsTable.';
import { AiOutlineDash } from 'react-icons/ai';

const Skills = () => {
	const backendRef = React.useRef(null);
	const skillsRef = React.useRef(null);

	const backInView = useInView(backendRef, { once: true });
	const skillsInView = useInView(skillsRef, { once: true });
	return (
		<motion.section data-aos='fade-up' data-aos-duration='1000' id='skills' className=' flex flex-col w-full mb-[100px] px-4  lg:px-8 xl:px-64'>
			<div className='flex flex-col items-center gap-4'>
				<div className='w-full text-center mb-8'>
					<h2 className='text-3xl font-bold '>Skills</h2>
					<p className='text-lg text-[#4d4d4e] font-normal px-8'>Here are my expertise for your ROI</p>
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
							<motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 2 }} key={index} className='border rounded-md uppercase border-gray-400 text-gray-700  transition-all duration-300 ease-linear cursor-pointer  hover:text-white hover:bg-gray-500 text-sm font-semibold items-center flex gap-2 px-6 py-2 hover:scale-105'>
								{item.name}
								{item.icon}
							</motion.span>
						))}
					</article>
				</section>
				<motion.section ref={backendRef} animate={{ y: backInView ? 0 : 300 }} transition={{ duration: 1 }} className='flex flex-col bg-gray-50  space-y-4 align-center py-16 pt-8 shadow-xl drop-shadow-2xl p-8'>
					<h2 className='text-2xl flex justify-center items-center gap-1 font-semibold text-center text-gray-900'>
						<AiOutlineDash />
						Back-End
						<AiOutlineDash />
					</h2>
					<article className='flex flex-wrap justify-center gap-4'>
						{backendSkills.map((item, index) => (
							<motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 1 }} key={index} className='border rounded-md uppercase border-gray-400 text-gray-700  transition-all duration-300 ease-linear cursor-pointer  hover:text-white hover:bg-gray-500 text-sm font-semibold items-center flex gap-2 px-6 py-2 hover:scale-105'>
								{item.name}
								{item.icon}
							</motion.span>
						))}
					</article>
				</motion.section>
				<motion.section ref={skillsRef} animate={{ y: skillsInView ? 0 : 300 }} transition={{ duration: 1 }} className='flex flex-col bg-gray-50  space-y-4 align-center pb-16 pt-8 shadow-xl drop-shadow-2xl p-4 md:px-8'>
					<h2 className='text-2xl font-semibold text-center text-gray-900 flex items-center justify-center gap-2'>
						{' '}
						<AiOutlineDash />
						Soft SKills <AiOutlineDash />
					</h2>
					<article className='flex flex-wrap justify-center gap-4'>
						{softSkills.map((item, index) => (
							<motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 2 }} key={index} className='border rounded-md uppercase border-gray-400 text-gray-700 transition-all duration-300 ease-linear cursor-pointer  hover:text-white hover:bg-gray-500 text-sm font-semibold items-center flex gap-2 px-6 py-2 hover:scale-105'>
								{item.name}
								{item.icon}
							</motion.span>
						))}
					</article>
				</motion.section>
			</section>
		</motion.section>
	);
};

export default Skills;
