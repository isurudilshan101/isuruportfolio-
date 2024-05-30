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
    <div className="flex h-screen">
      <div className="w-64 hidden lg:flex bg-gray-900 overflow-y-auto max-h-screen  custom-scrollbar nav-verti relative">
        {/* overflow-y-auto max-h-screen custom-scrollbar bg-gray-900 */}
        <div className="ml-10">
          <div className="justify-left">
            <Image src={my_prof} alt="myimage" className="w-48 h-48" />
          </div>
          <div className="flex justify-left">
            <ul>
              <Link href="/">
                <li className="hover:bg-blue-500 hover:text-white w-full md:w-40 h-10 my-5 px-5">
                  HOME
                </li>
              </Link>
              <Link href="/about">
                <li className="hover:bg-blue-500 hover:text-white w-full md:w-40 h-10 my-5 px-5">
                  ABOUT
                </li>
              </Link>
              <Link href="/education">
                <li className="hover:bg-blue-500 hover:text-white w-full md:w-40 h-10 my-5 px-5">
                  EDUCATION
                </li>
              </Link>{" "}
              <Link href="/skills">
                <li className="hover:bg-blue-500 hover:text-white w-full md:w-40 h-10 my-5 px-5">
                  SKILLS
                </li>
              </Link>
              <Link href="/project">
                <li className="hover:bg-blue-500 hover:text-white w-full md:w-40 h-10 my-5 px-5">
                  PROJECTS
                </li>
              </Link>
              <Link href="/experience">
                <li className="hover:bg-blue-500 hover:text-white w-full md:w-40 h-10 my-5 px-5">
                  EXPERIENCE
                </li>
              </Link>
              <Link href="/contact">
                <li className="hover:bg-blue-500 hover:text-white w-full md:w-40 h-10 my-5 px-5">
                  CONTACT ME
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="lg:hidden close-btn" onClick={toggleMenu}>
          <span>X</span>
        </div>
      </div>

      {isMenuOpen && (
        <div
          className={`fixed left-0 w-64 bg-gray-900 lg:hidden h-screen menu-animation ${
            isMenuOpen ? "slide-in" : "slide-out"
          }`}
        >
          <div className="ml-10 relative">
            <div className="lg:flex justify-left">
              <Image src={my_prof} alt="myimage" className="w-48 h-48" />
            </div>
            <div className="flex justify-left">
              {/* <ul>
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
              </ul> */}
              <ul>
                <Link href="/">
                  <li className="hover:bg-blue-500 hover:text-white w-full md:w-40 h-10 my-5 px-5">
                    HOME
                  </li>
                </Link>
                <Link href="/about">
                  <li className="hover:bg-blue-500 hover:text-white w-full md:w-40 h-10 my-5 px-5">
                    ABOUT
                  </li>
                </Link>
                <Link href="/education">
                  <li className="hover:bg-blue-500 hover:text-white w-full md:w-40 h-10 my-5 px-5">
                    EDUCATION
                  </li>
                </Link>{" "}
                <Link href="/skills">
                  <li className="hover:bg-blue-500 hover:text-white w-full md:w-40 h-10 my-5 px-5">
                    SKILLS
                  </li>
                </Link>
                <Link href="/project">
                  <li className="hover:bg-blue-500 hover:text-white w-full md:w-40 h-10 my-5 px-5">
                    PROJECTS
                  </li>
                </Link>
                <Link href="/experience">
                  <li className="hover:bg-blue-500 hover:text-white w-full md:w-40 h-10 my-5 px-5">
                    EXPERIENCE
                  </li>
                </Link>
                <Link href="/contact">
                  <li className="hover:bg-blue-500 hover:text-white w-full md:w-40 h-10 my-5 px-5">
                    CONTACT ME
                  </li>
                </Link>
              </ul>
            </div>
            <div className="close-btn" onClick={toggleMenu}>
              <span>X</span>
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path fill="currentColor" d="M18 6L6 18M6 6l12 12" />
              </svg>
            </div>
          </div>
        </div>
      )}

      <div>
        <div className="relative lg:hidden flex justify-end px-4 py-3">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d={
                  isMenuOpen
                    ? "M18 6L6 18M6 6l12 12"
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
