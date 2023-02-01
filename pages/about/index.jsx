/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';
import portfolio from '../../public/images/portfolioNew.jpg';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      transiton={{ duration: 2 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='w-full mb-8 pb-8 pt-24 h-full md:h-screen z-[9999] flex justify-center items-center'
    >
      <main className='flex flex-col items-center md:grid grid-cols-2 mx-4 md:w-4/5  gap-8'>
        <section className='flex flex-col px-4 items-center gap-1 justify-center text-center w-full'>
          <h1 className='font-bold text-2xl w-full text-start'>About</h1>
          <h1 className='text-[#17161A] text-lg font-semibold w-full text-start mb-4'>
            I'm a FRONT END WEB Developer
          </h1>
          <p className='w-full text-start text-md'>
            I love to make things look perfect. I create pixel perfect Websites
            that are responsive on all screensizes (small, big and Extra large
            screen sizes) and that are scalable. I'm also a Mechanical Engineer.
            I love learning new things and quickly too and most importantly, I
            love to code.
          </p>

          <p className='w-full text-start'>
            My stacks are HTML, CSS, TailwindCSS, Javascript, Material-UI,
            ReactJS, NextJS, Git, Github, GraphCMS, Redux-Toolkit, MongoDB.
          </p>
          <button className='bg-[#17161A] text-[#fff] py-2 mt-8 mb-8 px-4 hover:bg-gray-700'>
            <a download href='/images/Ezekiel_Udiomuno_CV.pdf'>
              Download CV
            </a>
          </button>
        </section>
        <section className='flex justify-center w-full shadow-lg'>
          <div className='  w-full block'>
            <Image
              src={portfolio}
              alt='me'
              layout='responsive'
              className='rounded-md mx-2 '
              height={500}
              width={500}
            />
          </div>
        </section>
      </main>
    </motion.div>
  );
};

export default About;
