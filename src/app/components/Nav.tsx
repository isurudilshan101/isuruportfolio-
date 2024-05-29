'use client'

import { useState } from 'react';
import Link from 'next/link';

const VerticalNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <div className="bg-gray-800 w-30 sm:w-40 lg:w-1/3 xl:w-1/4 p-4 text-white">
        <div className="flex items-center justify-between mb-4">
          <span className="text-lg font-bold">Menu</span>
          {/* Hamburger icon for mobile */}
          <button
            className="block sm:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
        {/* Navigation links */}
        <nav className={isOpen ? 'block' : 'hidden'}>
          <ul className="space-y-2">
            <li>
              <Link href="#home">
                Home 
              </Link>
            </li>
            <li>
              <Link href="#about">
                 About 
              </Link>
            </li>
            <li>
              <Link href="#skills">
                Skills 
              </Link>
            </li>
            <li>
              <Link href="#education">
                 Education 
              </Link>
            </li>
            <li>
              <Link href="#projects">
                 Projects 
              </Link>
            </li>
            <li>
              <Link href="#contact">
                Contact Me 
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Content */}
      <div className="flex-grow p-4">
        {/* Your content goes here */}
      </div>
    </div>
  );
};

export default VerticalNavbar;

