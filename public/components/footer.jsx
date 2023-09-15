import React from 'react';

const Footer = () => {
	const date = new Date();

	return (
		<footer className='p-5 flex justify-center'>
			<p className='capitalize font-semibold'>&copy; Copyright {date.getFullYear()}, All rights reserved</p>
		</footer>
	);
};

export default Footer;
