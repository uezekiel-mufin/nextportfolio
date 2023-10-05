'use client';
import React from 'react';
import Navbar from './navbar';
import Footer from './footer';
import TawkToWidget from './Tawk';
import { ToastContainer } from 'react-toastify';
import Particlejs from './particles';
import 'react-toastify/dist/ReactToastify.css';

const Layout = ({ children }) => {
	return (
		<>
			<Navbar />
			<TawkToWidget />
			<ToastContainer position='top-center' />
			{children}
			<Particlejs />
			<Footer />
		</>
	);
};

export default Layout;
