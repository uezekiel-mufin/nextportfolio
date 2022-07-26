/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      transiton={{ duration: 5 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='w-full md:mx-8 h-screen z-[9999] flex justify-center items-center'
    >
      <main className='mx-1 flex flex-col w-full md:w-3/5 md:h-3/5 gap-8 justify-center items-center text-center'>
        <h1 className='text-[#17161A] font-bold text-5xl w-4/5 md:w-full md:text-6xl mx-2 '>
          Hi, I'm Ezekiel Udiomuno<span className='text-red-800'>!</span>
        </h1>
        <h3 className='text-[#17161A] font-semibold text-2xl md:text-4xl w-4/5'>
          I Develop Responsive and User-friendly Websites & Web-Applications
        </h3>

        <div className='flex gap-8 justify-center'>
          <Link href='/contact'>
            <button className='bg-[#17161A] text-[#fff] hover:bg-gray-700  py-1 px-3 md:py-2 md:px-4'>
              Contact Me
            </button>
          </Link>
          <Link href='/portfolio'>
            <button className='bg-[#17161A] text-[#fff] hover:bg-gray-700  py-1 px-3 md:py-2 md:px-6'>
              PortFolio
            </button>
          </Link>
        </div>
      </main>
    </motion.div>
  );
}
