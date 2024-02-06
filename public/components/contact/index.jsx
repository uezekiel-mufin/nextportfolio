/* eslint-disable react/no-unescaped-entities */
import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { motion, useInView } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import SubmitBtn from '../Buttons/submit';
import SectionHeader from '../sectionHeader/SectionHeader';

const Contact = () => {
	const formRef = React.useRef(null);

	const formInView = useInView(formRef, { once: true });
	const {
		handleSubmit,
		register,
		reset,
		formState: { errors },
	} = useForm();
	const form = useRef();

	const regForm = (data, e) => {
		emailjs.sendForm(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, form.current, process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY).then(
			(response) => {
				toast.success('Message sent successfully');
			},
			(err) => {
				toast.error('Message not sent');
			}
		);
		reset();
	};

	return (
		<div data-aos='fade-up' data-aos-duration='500' data-aos-once='true' id='contact' transiton={{ duration: 2 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='flex  gap-8 flex-col w-full'>
			<SectionHeader title='Contact Me' subtitle={"send a message and I'll be in touch with you as soon as possible."} />

			<div className='bg-contact-bg-light dark:bg-contact-bg-dark grid grid-col-1 md:grid-cols-3 px-4 md:px-12 lg:px-16 py-20'>
				<div className='flex flex-col items-start gap-2 md:col-span-1'>
					<h2 className='text-4xl font-bold text-primary-text-light dark:text-primary-text-dark'>Work inquiries</h2>
					<p className='font-normal mb-4 text-secondary-text-light dark:text-secondary-text-dark'>Kindly Fill in this form with your inquiry.</p>
				</div>
				<div className=' md:col-span-2 justify-center flex w-full'>
					<form className='flex flex-col gap-[1rem] items-center max-w-xl w-full ' onSubmit={handleSubmit(regForm)} ref={form}>
						<div className='flex flex-col w-full'>
							<label htmlFor='name' className=' text-secondary-text-light dark:text-secondary-text-dark  font-semibold'>
								Your name
							</label>
							<input type='text' id='name' name='from_name' className='w-full rounded-md  text-primary-text-light dark:text-primary-text-dark dark:bg-transparent  px-[10px] py-4' {...register('from_name', { required: 'Please enter your name' })} />
							{errors?.from_name && <span className='text-red-500'>{errors?.from_name?.message}</span>}
						</div>
						<div className='flex flex-col w-full'>
							<label htmlFor='email' className='text-secondary-text-light dark:text-secondary-text-dark  font-semibold '>
								Your email
							</label>
							<input type='email' id='email' name='from_email' {...register('from_email', { required: 'Please enter your email address' })} className='w-7/10 rounded-md text-primary-text-light dark:text-primary-text-dark  py-4 dark:bg-transparent  px-[10px]' />
							{errors?.from_email && <span className='text-red-500'>{errors?.from_email?.message}</span>}
						</div>
						<div className='flex flex-col w-full'>
							<label htmlFor='subject' className='text-secondary-text-light dark:text-secondary-text-dark  font-semibold '>
								Subject
							</label>
							<input type='text' id='subject' name='from_subject' className='w-7/10 rounded-md text-primary-text-light dark:text-primary-text-dark dark:bg-transparent  px-[10px] py-4' {...register('from_subject', { required: 'Please enter a subject' })} />
							{errors.from_subject && <span className='text-red-500'>{errors?.from_subject?.message}</span>}
						</div>
						<div className='flex flex-col w-full'>
							<label htmlFor='message' className='text-secondary-text-light dark:text-secondary-text-dark  font-semibold '>
								Your Message
							</label>
							<textarea type='text' id='message' rows={6} {...register('message', { required: 'Please enter your message' })} name='message' className='w-7/10 rounded-md text-primary-text-light dark:text-primary-text-dark   px-[10px] dark:bg-transparent' />
							{errors?.message && <span className='text-red-500'>{errors.message?.message}</span>}
						</div>
						<div className='w-full flex justify-start'>
							<SubmitBtn onClick={() => handleSubmit(regForm)} />
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
