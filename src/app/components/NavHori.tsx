"use client";
import Image from "next/image";
import React, { useState } from "react";
import my_prof from "../../../public/my_prof.png";
import Link from "next/link";

const NavVerti = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex">
      <div className="w-64 hidden md:flex bg-gray-900">
        <div className="ml-10">
          <div className="justify-left">
            <Image src={my_prof} alt="myimage" className="w-48 h-48" />
          </div>
          <div className="flex justify-left">
            <ul>
              <li className="hover:bg-blue-500 hover:text-white w-full md:w-40 h-10 my-5 px-5">
                <Link href="/">HOME</Link>
              </li>
              <li className="hover:bg-blue-500 hover:text-white w-full md:w-40 h-10 my-5 px-5">
                <Link href="/about">ABOUT</Link>
              </li>
              <li className="hover:bg-blue-500 hover:text-white w-full md:w-40 h-10 my-5 px-5">
                <Link href="/project">PROJECTS</Link>
              </li>
              <li className="hover:bg-blue-500 hover:text-white w-full md:w-40 h-10 my-5 px-5">
                <Link href="/education">EDUCATION</Link>
              </li>
              <li className="hover:bg-blue-500 hover:text-white w-full md:w-40 h-10 my-5 px-5">
                <Link href="/skills">SKILLS</Link>
              </li>
              <li className="hover:bg-blue-500 hover:text-white w-full md:w-40 h-10 my-5 px-5">
                <Link href="/experience">EXPERIENCE</Link>
              </li>
              <li className="hover:bg-blue-500 hover:text-white w-full md:w-40 h-10 my-5 px-5">
                <Link href="/contact">CONTACT ME</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div
          className={`fixed left-0 w-64 bg-gray-900 md:hidden h-auto menu-animation ${
            isMenuOpen ? "slide-in" : "slide-out"
          }`}
        >
          <div className="ml-10">
            <div className="hidden md:flex justify-left">
              <Image src={my_prof} alt="myimage" className="w-48 h-48" />
            </div>
            <div className="flex justify-left">
              <ul>
                <li className="hover:bg-blue-500 hover:text-white w-full md:w-40 h-10 my-5 px-5">
                  <Link href="/">HOME</Link>
                </li>
                <li className="hover:bg-blue-500 hover:text-white w-full md:w-40 h-10 my-5 px-5">
                  <Link href="/about">ABOUT</Link>
                </li>
                <li className="hover:bg-blue-500 hover:text-white w-full md:w-40 h-10 my-5 px-5">
                  <Link href="/project">PROJECT</Link>
                </li>
                <li className="hover:bg-blue-500 hover:text-white w-full md:w-40 h-10 my-5 px-5">
                  <Link href="/education">EDUCATION</Link>
                </li>
                <li className="hover:bg-blue-500 hover:text-white w-full md:w-40 h-10 my-5 px-5">
                  <Link href="/skills">SKILL</Link>
                </li>
                <li className="hover:bg-blue-500 hover:text-white w-full md:w-40 h-10 my-5 px-5">
                  <Link href="/experience">EXPERIENCE</Link>
                </li>
                <li className="hover:bg-blue-500 hover:text-white w-full md:w-40 h-10 my-5 px-5">
                  <Link href="/contact">CONTACT ME</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      <div>
        <div className="relative md:hidden flex justify-end px-4 py-3">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d={
                  isMenuOpen
                    ? "M19 13H5v-2h14v2z"
                    : "M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"
                }
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavVerti;
