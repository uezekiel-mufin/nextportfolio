// pages/project/[projectId].js
import React, { useEffect } from 'react';
import Image from 'next/image';
import { FiClock, FiUsers, FiTag } from 'react-icons/fi'; // Replace with your preferred icons
import Link from 'next/link';
import GitBtn from './Buttons/gitBtn';
import DemoBtn from './Buttons/demoBtn';

const ProjectDetails = ({ project }) => {
	return (
		<div className='flex  flex-col justify-between h-full'>
			<div>
				<div className='flex flex-col gap-2 w-full items-start justify-between'>
					<h3 className='text-2xl text-primary-text-light dark:text-primary-text-dark  font-bold'>{project?.name}</h3>
				</div>

				<div className='text-secondary-text-light dark:text-secondary-text-dark'>
					<p className=' font-bold text-base '>{project?.technologies}</p>
				</div>
				<div className='text-secondary-text-light dark:text-secondary-text-dark'>
					<p className=' text-base '>{project?.description}</p>
				</div>
			</div>
			<div className='flex flex-row  mt-4 mb-2 w-full gap-4 '>
				<GitBtn github={project?.Github} />
				<DemoBtn liveDemo={project?.liveDemo} />
			</div>
		</div>
	);
};

export default ProjectDetails;
