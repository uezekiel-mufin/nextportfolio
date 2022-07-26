import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineMenuFold } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isMenu, setIsMenu] = useState(true);

  const openMenu = () => {
    setIsMenu((prev) => !prev);
    const el = document.querySelector(".hidden");
    el?.classList.remove("hidden");
    el?.classList.add("menuList");
  };
  const closeMenu = () => {
    setIsMenu((prev) => !prev);
    const el = document.querySelector(".menuList");
    el?.classList.remove("menuList");
    el?.classList.add("hidden");
  };

  // const handleLink = () => {
  //   const el = document.querySelector(".menuList");
  //   el.classList.remove("menuList");
  //   el.classList.add("hidden");
  // };

  return (
    <nav className=' w-full fixed flex flex-row h-[80px] items-center justify-between bg-white z-[999]'>
      <span className='flex flex-1 text-5xl italic mx-2 md:mx-10'>
        <Link href='/'>
          <h1 className=' shadow-md  cursor-pointer font-extrabold shadow-blue-400'>
            EU
          </h1>
        </Link>
      </span>

      <div className='flex relative'>
        <div className='flex mx-2 w-full md:hidden'>
          {isMenu ? (
            <span className='text-5xl' onClick={openMenu}>
              <AiOutlineMenuFold />
            </span>
          ) : (
            <span className='text-5xl' onClick={closeMenu}>
              <AiOutlineClose />
            </span>
          )}
        </div>
        <ul
          id='Menu'
          className='hidden  md:flex md:mx-12 justify-around gap-10 items-center  '
        >
          <Link href='/'>
            <li
              onClick={() => closeMenu()}
              className='cursor-pointer hover:text-red-500 active:text-red font-sans font-medium text-base '
            >
              Home
            </li>
          </Link>
          <Link href='/about'>
            <li
              onClick={() => closeMenu()}
              className='cursor-pointer hover:text-red-500 active:text-red font-sans font-medium text-base'
            >
              About
            </li>
          </Link>
          <Link href='/portfolio'>
            <li
              onClick={() => closeMenu()}
              className='cursor-pointer hover:text-red-500 active:text-red font-sans font-medium text-base'
            >
              Porfolio
            </li>
          </Link>
          <Link href='/contact'>
            <li
              onClick={() => closeMenu()}
              className='cursor-pointer hover:text-red-500 active:text-red font-sans font-medium text-base'
            >
              Contact
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
