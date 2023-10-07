import React from 'react';

const SectionHeader = ({ title, subtitle }) => {
	return (
		<div className='py-4 md:py-6 lg:py-8 flex flex-col items-center mb-8'>
			<h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800'>{title}</h2>
			{subtitle && <div className='mt-2 md:mt-3 lg:mt-4 border-b-2 border-gray-400 w-16 md:w-20 lg:w-24'></div>}
			{subtitle && <p className='mt-2 md:mt-3 lg:mt-4 text-lg md:text-xl lg:text-2xl text-gray-600'>{subtitle}</p>}
		</div>
	);
};

export default SectionHeader;
