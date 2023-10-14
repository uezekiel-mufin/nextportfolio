import React from 'react';

const DemoBtn = ({ liveDemo }) => {
	return (
		<a href={liveDemo} rel='noreferrer' target='_blank' className='relative w-full flex justify-center items-center px-4 py-3 font-medium group'>
			<span className='absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0'></span>
			<span className='absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black'></span>
			<span className='relative text-black group-hover:text-white text-lg'>Live Demo</span>
		</a>
	);
};

export default DemoBtn;
