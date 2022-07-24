/* eslint-disable react/no-unescaped-entities */
import React from "react";

const Contact = () => {
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
          <p>Kindly Fill in this form with your inquiry.</p>
        </div>
        <div className='col-start-2  row-span-full'>
          <form className='flex flex-col gap-[1rem]'>
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
      <div>
        <div>logo</div>
        <div>email</div>
        <div>social</div>
      </div>
    </div>
  );
};

export default Contact;
