import React from 'react';
import { motion, useInView } from 'framer-motion';
import { backendSkills, frontendSkills, softSkills } from '../../public/components/SkillsTable.';
import { AiOutlineDash } from 'react-icons/ai';

const Skills = () => {
	const backendRef = React.useRef(null);
	const skillsRef = React.useRef(null);

	const backInView = useInView(backendRef);
	const skillsInView = useInView(skillsRef);
	console.log(backInView);
	return (
		<motion.section className=' pt-[100px] flex flex-col w-full mb-[100px] px-4  lg:px-8 xl:px-64'>
			<div className='flex flex-col items-center gap-4'>
				<div className='w-full md:w-1/2 text-center mb-10 flex-wrap font-semibold'>
					<p className='px-16 md:px-4 md:text-3xl font-bold '>The skills you get from hiring me</p>
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
