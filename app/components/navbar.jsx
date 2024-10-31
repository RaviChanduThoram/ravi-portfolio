// @flow strict
"use client";
import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <nav className="bg-transparent">
   <div className="flex items-center justify-between py-5 px-4 md:px-8 w-full">
        {/* Left Side: Logo */}
        <div className="flex flex-shrink-0">
          <Link href="/" className="text-[#16f2b3] text-3xl font-bold">
            Ravi Chandu
          </Link>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex md:space-x-4 items-center">
          <li>
            <Link href="/#about" className="text-sm text-white hover:text-pink-600">
              ABOUT
            </Link>
          </li>
          <li>
            <Link href="/#experience" className="text-sm text-white hover:text-pink-600">
              EXPERIENCE
            </Link>
          </li>
          <li>
            <Link href="/#skills" className="text-sm text-white hover:text-pink-600">
              SKILLS
            </Link>
          </li>
          <li>
            <Link href="/#education" className="text-sm text-white hover:text-pink-600">
              EDUCATION
            </Link>
          </li>
          <li>
            <Link href="/#projects" className="text-sm text-white hover:text-pink-600">
              PROJECTS
            </Link>
          </li>
        </ul>

        {/* Hamburger Menu Icon for Mobile */}
        <button
          onClick={toggleMenu}
          className="text-white md:hidden focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <HiX size={30} /> : <HiMenu size={30} />}
        </button>
      </div>
     
        {isOpen && (
    <ul className="top-16 left-0 right-0 z-20 flex flex-col bg-custom text-white pl-4  pt-4 pb-4 space-y-4 md:hidden">
    <li>
      <Link href="/#about" onClick={toggleMenu} className="hover:text-pink-600">
        ABOUT
      </Link>
    </li>
    <li>
      <Link href="/#experience" onClick={toggleMenu} className="hover:text-pink-600">
        EXPERIENCE
      </Link>
    </li>
    <li>
      <Link href="/#skills" onClick={toggleMenu} className="hover:text-pink-600">
        SKILLS
      </Link>
    </li>
    <li>
      <Link href="/#education" onClick={toggleMenu} className="hover:text-pink-600">
        EDUCATION
      </Link>
    </li>
    <li>
      <Link href="/#projects" onClick={toggleMenu} className="hover:text-pink-600">
        PROJECTS
      </Link>
    </li>
  </ul>
)}


    </nav>
  );
};

export default Navbar;