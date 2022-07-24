import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className=' w-full fixed flex flex-row h-[80px] items-center justify-between z-[999]'>
      <span className='flex flex-1 text-5xl italic mx-10'>
        <Link href='/'>
          <h1 className=' shadow-md  cursor-pointer font-extrabold shadow-blue-400'>
            EU
          </h1>
        </Link>
      </span>
      <ul className='flex mx-12 justify-around gap-10 items-center  '>
        <Link href='/'>
          <li className='cursor-pointer hover:text-red-500 active:text-red font-sans font-medium text-base '>
            Home
          </li>
        </Link>
        <Link href='/about'>
          <li className='cursor-pointer hover:text-red-500 active:text-red font-sans font-medium text-base'>
            About
          </li>
        </Link>
        <Link href='/portfolio'>
          <li className='cursor-pointer hover:text-red-500 active:text-red font-sans font-medium text-base'>
            Porfolio
          </li>
        </Link>
        <Link href='/contact'>
          <li className='cursor-pointer hover:text-red-500 active:text-red font-sans font-medium text-base'>
            Contact
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
