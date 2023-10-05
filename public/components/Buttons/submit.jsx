import React from 'react';

const SubmitBtn = ({ onClick }) => {
	return (
		<button type='submit' onClick={onClick} className='relative inline-block text-lg group w-full md:w-48'>
			<a transiton={{ duration: 5000 }} initial={{ x: -1000 }} animate={{ x: 0 }} className='relative animate inline-block px-4 py-3 w-[80vw] md:w-[200px] font-medium group'>
				<span className='absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0'></span>
				<span className='absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black'></span>
				<span className='relative text-black text-2xl group-hover:text-white'>Send Message</span>
			</a>
			<span className='absolute bottom-0 right-0 h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0' data-rounded='rounded-lg'></span>
		</button>
	);
};

export default SubmitBtn;
