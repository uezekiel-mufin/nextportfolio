import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';

function NextArrow(props) {
	const { className, style, onClick, top, right } = props;
	return (
		<button onClick={onClick} aria-label='icon-left' className={`bg-white rounded-full p-2 shadow-lg -right-4 duration-300 hover:scale-110 transition-all ease-linear z-10 cursor-pointer absolute top-[40%] text-gray-500`}>
			<AiOutlineRight size={30} />
		</button>
	);
}
export default NextArrow;
