import React from 'react';
import { toast } from 'react-toastify';

const GitBtn = ({ github }) => {
	const notify = () => toast.info('This is a private repository');
	return (
		<>
			{github ? (
				<a href={github} rel='noreferrer' target='_blank' className='relative cursor-pointer w-full flex justify-center md:w-[120px] items-center px-4 py-1 font-medium group'>
					<span className=' absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-1 translate-y-1 bg-[#3b5998] group-hover:-translate-x-0 group-hover:-translate-y-0'></span>
					<span className='absolute inset-0 w-full h-full bg-white border-2 border-[#3b5998] group-hover:bg-[#3b5998]'></span>
					<span className='relative text-black group-hover:text-white text-lg'>Github</span>
				</a>
			) : (
				<button onClick={notify} className='relative cursor-pointer w-full md:w-[120px] flex justify-center items-center px-4 py-1 font-medium group'>
					<span className=' absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-1 translate-y-1 bg-[#3b5998] group-hover:-translate-x-0 group-hover:-translate-y-0'></span>
					<span className='absolute inset-0 w-full h-full bg-white border-2 border-[#3b5998] group-hover:bg-[#3b5998]'></span>
					<span className='relative text-black group-hover:text-white text-lg'>Github</span>
				</button>
			)}
		</>
	);
};

export default GitBtn;
