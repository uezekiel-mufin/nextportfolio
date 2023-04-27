'use client';
import React, { useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import Link from 'next/link';
import { FaHome, FaNetworkWired, FaInfoCircle, FaPhoneAlt } from 'react-icons/fa';

const links = [
	{
		id: 1,
		name: 'Home',
		link: '/',
		icon: <FaHome />,
	},
	{
		id: 2,
		name: 'About',
		link: '/about',
		icon: <FaInfoCircle />,
	},
	{
		id: 3,
		name: 'Portfolio',
		link: '/portfolio',
		icon: <FaNetworkWired />,
	},
	{
		id: 4,
		name: 'Contact Us',
		link: '/contact',
		icon: <FaPhoneAlt />,
	},
];

const SideNav = ({ closeMenu }) => {
	const [activeLink, setActiveLink] = useState(0);

	const linkClick = (id) => {
		closeMenu();
		setActiveLink(id);
	};

	return (
		<div className='fixed top-0 left-0 right-0 bg-white w-full z-10 flex  px-4 md:px-24 pb-4 md:py-7 h-screen'>
			<div className='flex flex-col gap-4 w-full '>
				<div className='flex justify-between items-center'>
					<h1 className='logo'>EU</h1>
					<span className='md:hidden cursor-pointer flex p-3 text-2xl' aria-hidden='true'>
						<AiOutlineCloseCircle onClick={() => closeMenu()} className='h-8 w-8 text-[#944d97]' />
					</span>
				</div>

				<section className='border-t pt-8 flex flex-col gap-4 text-xl border-[#411742]'>
					{links.map((link) => (
						<li key={link.id} onClick={() => linkClick(link.id)} className='list-none cursor-pointer hover:scale-105 transaition-all duration-300 ease-in-out'>
							<Link href={link.link}>
								<a className='flex items-center gap-3 list-none'>
									<span className='text-skin-name text-[#411742]'>{link.icon}</span>
									<span className='text-[#411742]'>{link.name}</span>
								</a>
							</Link>
						</li>
					))}
				</section>
			</div>
		</div>
	);
};

export default SideNav;
