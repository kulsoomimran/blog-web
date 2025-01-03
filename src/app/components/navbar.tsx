"use client"
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div>
          <h1 className="text-white font-bold text-xl">My BLOG</h1>
        </div>

        {/* Navigation */}
        <div className="hidden md:flex">
          <ul className="flex gap-6 text-gray-300 font-medium text-lg">
            <Link href="/">
              <li className="hover:text-blue-400 transition-colors duration-300">Home</li>
            </Link>
            <Link href="/about">
              <li className="hover:text-blue-400 transition-colors duration-300">About</li>
            </Link>
            <Link href="/blog">
              <li className="hover:text-blue-400 transition-colors duration-300">Blogs</li>
            </Link>
          </ul>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button onClick={handleMenuToggle} className="text-gray-300 focus:outline-none">
            {/* Hamburger Icon */}
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800">
          <ul className="flex flex-col items-center gap-4 py-4 text-gray-300 font-medium text-lg">
            <Link href="/">
              <li
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-blue-400 transition-colors duration-300"
              >
                Home
              </li>
            </Link>
            <Link href="/about">
              <li
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-blue-400 transition-colors duration-300"
              >
                About
              </li>
            </Link>
            <Link href="/blog">
              <li
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-blue-400 transition-colors duration-300"
              >
                Blogs
              </li>
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
