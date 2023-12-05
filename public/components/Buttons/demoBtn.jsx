import React from 'react';

const DemoBtn = ({ liveDemo }) => {
	return (
		<a href={liveDemo} rel='noreferrer' target='_blank' className='relative w-full md:w-[120px] flex justify-center items-center px-4 py-1 h-auto font-medium group'>
			<span className='absolute inset-0 w-full  transition duration-300 ease-out transform translate-x-1 translate-y-1 bg-[#3b5998] group-hover:-translate-x-0 group-hover:-translate-y-0'></span>
			<span className='absolute transition duration-400 ease-linear transform   inset-0 w-full h-full bg-white border-2 border-[#3b5998] group-hover:bg-[#3b5998]'></span>
			<span className='relative text-black group-hover:text-white text-lg'>Live Demo</span>
		</a>
	);
};

export default DemoBtn;
