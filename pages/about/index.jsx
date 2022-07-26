/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import portfolio from "../../public/images/portfolio.jpg";

const About = () => {
  return (
    <div className='w-full pb-8 pt-8 h-full md:h-screen z-[9999] flex justify-center items-center'>
      <main className='flex flex-col-reverse md:grid grid-cols-2 mx-4 md:w-4/5 h-screen gap-8'>
        <section className='flex flex-col items-center gap-4 justify-center text-center w-full'>
          <h1>I'm a FRONT END WEB Developer</h1>
          <p>
            who loves to make things look perfect. I create pixel perfect
            Websites that are responsive on all screensizes (small, big and
            Extra large screen sizes) and that are scalable. I'm also a
            Mechanical Engineer. I love learning new things and quickly too and
            most importantly, I love to code.
          </p>

          <p>
            My stacks are HTML, CSS, TailwindCSS, Javascript, ReactJS, NextJS.
          </p>
          <button className='bg-[#17161A] text-[#fff] py-2 mb-8 px-8'>
            <a download href='public/images/certificate.pdf'>
              CV
            </a>
          </button>
        </section>
        <section className='flex items-center text-center w-full'>
          <Image
            src={portfolio}
            alt='me'
            width={400}
            height={450}
            className='rounded-md'
          />
        </section>
      </main>
    </div>
  );
};

export default About;
