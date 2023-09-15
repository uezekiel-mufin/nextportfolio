import React from 'react';
import { AiOutlineLeft } from 'react-icons/ai';

const PrevArrow = (props) => {
	const { className, style, onClick, top, left } = props;
	return (
		<button aria-label='icon-left' onClick={onClick} className={`bg-white duration-300 hover:scale-110 transition-all ease-linear rounded-full p-2 shadow-lg -left-4 z-10 cursor-pointer absolute top-[40%] text-gray-500`}>
			<AiOutlineLeft size={30} />
		</button>
	);
};
export default PrevArrow;
