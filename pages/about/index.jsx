/* eslint-disable react/no-unescaped-entities */
import React from "react";

const About = () => {
  return (
    <div className='w-full h-screen z-[9999] flex justify-center items-center'>
      <main className='grid grid-cols-2 w-4/5 h-screen'>
        <section className='flex flex-col items-center justify-center text-center w-full'>
          <h1>I'm a FRONT END WEB Developer</h1>
          <p>
            who loves to make things look perfect. I create pixel perfect
            Websites that are responsive on all screensizes (small, big and
            Extra large screen sizes) and that are scalable. I'm also a
            Mechanical Engineer. I love learning new things and quickly too. And
            I love to code.
          </p>
        </section>
        <section className='flex items-center text-center w-full'>
          image
        </section>
      </main>
    </div>
  );
};

export default About;
