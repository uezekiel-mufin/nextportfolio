import React from 'react';

const Footer = () => {
	const date = new Date();

	return (
		<footer className='p-5 flex justify-center border-t border-gray-400 dark:bg-contact-bg-dark text-secondary-text-light dark:text-secondary-text-dark'>
			<p className='capitalize font-semibold'>&copy; Copyright 2021, All rights reserved</p>
		</footer>
	);
};

export default Footer;
