/* eslint-disable react/no-unescaped-entities */
import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
	const {
		handleSubmit,
		register,
		reset,
		formState: { errors },
	} = useForm({
		mode: 'onTouched',
		shouldFocusError: true,
		reValidateMode: 'onSubmit',
		criteriaMode: 'firstError',
	});
	const [userData, setUserData] = useState({});

	const regForm = (data, e) => {
		e.preventDefault();
		reset();
		setUserData(data);
	};

	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();
		emailjs.sendForm('service_ezzy', 'template_lf4fnom', form.current, 'vngt2iIdOB55EqdDp');
		e.target.reset();
	};
	return (
		<motion.div transiton={{ duration: 2 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='flex gap-8 flex-col pt-[100px] mx-2 my-4'>
			<div className='md:my-[20px] flex flex-col  md:mb-[3rem] w-full   py-[20px] md:w-2/5 md:mx-[4rem]'>
				<h1 className='text-3xl md:text-5xl mb-4 mx-2 font-bold '>Contact</h1>
				<p className='mx-2'>If you'd like us to talk about your project rightaway,</p>
				<p className='mx-2'>send a mail below and I'll be in touch with you as soon as possible.</p>
			</div>
			<div className='bg-[rgba(0,0,0,0.1)] form'>
				<div className='flex flex-col gap-[1rem]'>
					<h2 className='text-4xl'>Work inquiries</h2>
					<p className='font-light mb-4 '>Kindly Fill in this form with your inquiry.</p>
				</div>
				<div className='col-start-2  row-span-full'>
					<form className='flex flex-col gap-[1rem]' onSubmit={(handleSubmit(regForm), sendEmail)} ref={form}>
						<div className='flex flex-col '>
							<label htmlFor='name' className='text-base font-semibold'>
								Your name
							</label>
							<input type='text' id='name' className='w-7/10 rounded-md input bg-[rgba(0,0,0,0.2)] px-[10px]' />
						</div>
						<div className='flex flex-col '>
							<label htmlFor='email' className='text-base font-semibold '>
								Your email
							</label>
							<input type='email' id='email' className='w-7/10 rounded-md input bg-[rgba(0,0,0,0.2)] px-[10px]' />
						</div>
						<div className='flex flex-col '>
							<label htmlFor='subject' className='text-base font-semibold '>
								Subject
							</label>
							<input type='text' id='subject' className='w-7/10 rounded-md input bg-[rgba(0,0,0,0.2)] px-[10px]' />
						</div>
						<div className='flex flex-col '>
							<label htmlFor='message' className='text-base font-semibold '>
								Your Message
							</label>
							<textarea type='text' id='message' className='w-7/10 rounded-md input bg-[rgba(0,0,0,0.2)] px-[10px]' />
						</div>
						<button className='bg-[#944d97] text-[#fff] hover:hover:bg-[#561358] font-semibold text-lg transition-all duration-300 ease-linear md:w-[200px]  rounded-lg py-2 px-3 md:py-2 md:px-4 mt-8'>Submit</button>
					</form>
				</div>
			</div>
			<div className='md:p-[50px] capitalize'>
				<h4 className='text-2xl md:text-3xl font-semibold text-[#17161A]'>You can also reach us via:</h4>
				<ul>
					<li className='flex gap-2 lowercase'>
						<a href='https://www.eudiomuno@yahoo.com' className='text-base  active:red capitalize ' target='_blank' rel='noreferrer'>
							email:
						</a>
						<span>eudiomuno@yahoo</span>
					</li>
					<li>
						<a href='https://wa.me/+2348147576669' className='text-base hover:text-red-500 active:red  ' target='_blank' rel='noreferrer'>
							whatsApp
						</a>
					</li>
					<li>
						<a href='https://www.twitter.com/EzzyWealth' className='text-base hover:text-red-500 active:red  ' target='_blank' rel='noreferrer'>
							twitter
						</a>
					</li>
					<li>
						<a href='https://www.linkedin.com/in/ezekiel-udiomuno-b14539150' className='text-base hover:text-red-500 active:red  ' target='_blank' rel='noreferrer'>
							linkedin
						</a>
					</li>
				</ul>
			</div>
		</motion.div>
	);
};

export default Contact;
