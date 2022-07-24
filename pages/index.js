/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import Navbar from "../public/components/navbar";
import Particlejs from "../public/components/particles";
import styles from "../styles/Home.module.css";
// import styles from "../styles/globals.css";

export default function Home() {
  return (
    <div className='w-full h-screen z-[9999] flex justify-center items-center'>
      {/* <Particlejs /> */}
      <main className='flex flex-col w-3/5 h-3/5 gap-8 text-center'>
        <h1 className='text-[#17161A] font-bold text-7xl'>
          Hi, I'm Ezekiel<span className='text-red-800'>!</span>
        </h1>
        <h3 className='text-[#17161A] font-bold text-5xl'>
          I Develop Responsive and User-friendly Websites & Web-Applications
        </h3>

        <div className='flex gap-8 justify-center'>
          <Link href='/contact'>
            <button className='bg-[#17161A] text-[#fff] py-4 px-4'>
              Contact Me
            </button>
          </Link>
          <Link href='/portfolio'>
            <button className='bg-[#17161A] text-[#fff] py-4 px-6'>
              PortFolio
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
