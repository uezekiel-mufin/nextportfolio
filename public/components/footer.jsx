import React from 'react';

const Footer = () => {
	const date = new Date();

	return (
		<footer className='p-1 mb-4 md:p-3 flex justify-center'>
			<p className='capitalize font-semibold'>&copy; Copyright {date.getFullYear()}, All rights reserved</p>
		</footer>
	);
};

export default Footer;
