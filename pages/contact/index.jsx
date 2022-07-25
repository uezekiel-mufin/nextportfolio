/* eslint-disable react/no-unescaped-entities */
import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    shouldFocusError: true,
    reValidateMode: "onSubmit",
    criteriaMode: "firstError",
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
    emailjs.sendForm(
      "service_ezzy",
      "template_lf4fnom",
      form.current,
      "vngt2iIdOB55EqdDp"
    );
    e.target.reset();
  };
  return (
    <div className='flex flex-col pt-[100px]'>
      <div className='my-[20px] mb-[5rem] py-[20px] w-2/5 mx-[4rem]'>
        <h1 className='text-6xl font-bold'>Contact</h1>
        <p>If you'd like us to talk about your project rightaway,</p>
        <p>
          send a mail below and I'll be in touch with you as soon as possible.
        </p>
      </div>
      <div className='bg-[rgba(0,0,0,0.1)] form'>
        <div className='flex flex-col gap-[1rem]'>
          <h2 className='text-4xl'>Work inquiries</h2>
          <p className='font-light'>
            Kindly Fill in this form with your inquiry.
          </p>
        </div>
        <div className='col-start-2  row-span-full'>
          <form
            className='flex flex-col gap-[1rem]'
            onSubmit={(handleSubmit(regForm), sendEmail)}
          >
            <div className='flex flex-col '>
              <label htmlFor='name' className='text-base font-semibold'>
                Your name
              </label>
              <input
                type='text'
                id='name'
                className='w-7/10 rounded-md input bg-[rgba(0,0,0,0.2)] px-[10px]'
              />
            </div>
            <div className='flex flex-col '>
              <label htmlFor='email' className='text-base font-semibold '>
                Your email
              </label>
              <input
                type='email'
                id='email'
                className='w-7/10 rounded-md input bg-[rgba(0,0,0,0.2)] px-[10px]'
              />
            </div>
            <div className='flex flex-col '>
              <label htmlFor='subject' className='text-base font-semibold '>
                Subject
              </label>
              <input
                type='text'
                id='subject'
                className='w-7/10 rounded-md input bg-[rgba(0,0,0,0.2)] px-[10px]'
              />
            </div>
            <div className='flex flex-col '>
              <label htmlFor='message' className='text-base font-semibold '>
                Your Message
              </label>
              <textarea
                type='text'
                id='message'
                className='w-7/10 rounded-md input bg-[rgba(0,0,0,0.2)] px-[10px]'
              />
            </div>
            <button className='flex justify-start w-[2rem]  '>
              <span className='bg-[#17161A] px-[1rem] rounded-md py-[0.6rem] text-white'>
                Submit
              </span>
            </button>
          </form>
        </div>
      </div>
      <div className='p-[50px] capitalize text-blue-700'>
        <h4 className='text-3xl font-semi-bold text-[#17161A]'>
          You can also reach us via:
        </h4>
        <ul>
          <li className='flex gap-2 lowercase'>
            <a
              href='https://www.eudiomuno@yahoo.com'
              className='text-base hover:text-red active:red capitalize '
              target='_blank'
              rel='noreferrer'
            >
              email:
            </a>
            <span>eudiomuno@yahoo</span>
          </li>
          <li>
            <a
              href='https://wa.me/+2348147576669'
              className='text-base hover:text-red active:red '
              target='_blank'
              rel='noreferrer'
            >
              whatsApp
            </a>
          </li>
          <li>
            <a
              href='https://www.twitter.com/EzzyWealth'
              className='text-base hover:text-red active:red '
              target='_blank'
              rel='noreferrer'
            >
              twitter
            </a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/in/ezekiel-udiomuno-b14539150'
              className='text-base hover:text-red active:red '
              target='_blank'
              rel='noreferrer'
            >
              linkedin
            </a>
          </li>
        </ul>
      </div>
      <hr />
      <footer className='p-4'>
        <p>&copy; 2022, All rights reserved</p>
      </footer>
    </div>
  );
};

export default Contact;
