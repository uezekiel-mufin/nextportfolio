/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Link from "next/link";
import useDownloader from "react-use-downloader";

// import styles from "../styles/globals.css";

export default function Home() {
  // const { size, elapsed, percentage, download, cancel, error, isInProgress } =
  //   useDownloader();

  // const fileUrl = "/public/images/Ezekiel Udiomuno.pdf";
  // const filename = "Udiomuno.pdf";

  return (
    <div className='w-full mx-8 h-screen z-[9999] flex justify-center items-center'>
      <main className='flex flex-col w-full md:w-3/5 md:h-3/5 gap-8 text-center'>
        <h1 className='text-[#17161A] font-bold text-7xl'>
          Hi, I'm Ezekiel<span className='text-red-800'>!</span>
        </h1>
        <h3 className='text-[#17161A] font-bold text-2xl md:text-5xl'>
          I Develop Responsive and User-friendly Websites & Web-Applications
        </h3>

        <div className='flex gap-8 justify-center'>
          <Link href='/contact'>
            <button className='bg-[#17161A] text-[#fff]  py-2 px-3 md:py-4 md:px-4'>
              Contact Me
            </button>
          </Link>
          <Link href='/portfolio'>
            <button className='bg-[#17161A] text-[#fff]  py-2 px-3 md:py-4 md:px-6'>
              PortFolio
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
