// pages/project/[projectId].js
import React, { useEffect } from 'react';
import Image from 'next/image';
import { FiClock, FiUsers, FiTag } from 'react-icons/fi'; // Replace with your preferred icons
import Link from 'next/link';
import GitBtn from './Buttons/gitBtn';
import DemoBtn from './Buttons/demoBtn';

const ProjectDetails = ({ project }) => {
	return (
		<div className=''>
			<div className='flex flex-col gap-2 w-full items-start justify-between'>
				<h1 className='text-2xl md:text-3xl font-bold'>{project?.name}</h1>
				<div className='flex flex-col  md:gap-6  w-full md:flex-row md:items-center '>
					<div className='flex items-center '>
						<FiClock className='text-base md:text-xl text-gray-600' />
						<span className='ml-2'>{project?.duration}</span>
					</div>
					<div className='flex items-center  '>
						<FiUsers className='text-base md:text-xl text-gray-600' />
						<span className='ml-2  flex'>{`${project?.teamSize} Team Member${project?.teamSize > 1 ? 's' : ''}`} </span>
					</div>
					<div className='flex items-center text-gray-600 '>
						<FiTag className='text-base md:text-xl ' />
						<span className='ml-2'>{project?.category}</span>
					</div>
				</div>
			</div>

			<div className='my-2'>
				<p className='text-gray-600 font-bold text-base md:text-lg'>{project?.technologies}</p>
			</div>
			<div className='my-2'>
				<p className='text-gray-600 text-base md:text-lg'>{project?.description}</p>
			</div>
			<div className='flex flex-row  mt-4 mb-2 w-full gap-4 '>
				<GitBtn github={project?.Github} />
				<DemoBtn liveDemo={project?.liveDemo} />
			</div>

			{/* <div className='my-6 space-y-2'>
				<h2 className='text-lg md:text-xl font-semibold underline tracking-wider'>Key Features:</h2>
				<div className='text-gray-600  space-y-4'>
					{Object?.entries(project?.features).map(([key, value]) => (
						<div key={key}>
							<li className='grid md:grid-cols-9 items-start gap-1 md:gap-3'>
								<span className='md:col-span-2 capitalize font-semibold text-base md:text-lg'>{key}:</span>
								<span className='md:col-span-7 text-base md:text-lg'>{value}</span>
							</li>
						</div>
					))}
				</div>
			</div> */}
		</div>
	);
};

export default ProjectDetails;
