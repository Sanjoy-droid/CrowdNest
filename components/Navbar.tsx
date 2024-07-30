"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" ">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            {/* Logo */}
            <div>
              <Link href="/">
                <div className="flex items-center py-5 px-2 text-blue-300">
                  {/* Logo */}

                  {/* <Image
                    height={60}
                    width={60}
                    src="../public/logo.png"
                    alt=""
                  /> */}

                  <div />

                  <span className="font-bold">CrowdNest</span>
                </div>
              </Link>
            </div>

            {/* Primary Navbar items */}
            <div className="flex items-center space-x-1">
              <Link href="/">
                <div className="py-5 px-3 text-gray-300 hover:text-gray-900">
                  Home
                </div>
              </Link>
              <Link href="/about">
                <div className="py-5 px-3 text-gray-300 hover:text-gray-900">
                  About
                </div>
              </Link>
              <Link href="/contact">
                <div className="py-5 px-3 text-gray-300 hover:text-gray-900">
                  Contact
                </div>
              </Link>
            </div>
          </div>

          {/* Secondary Navbar items */}
          <div className="flex items-center space-x-1">
            <Link href="/login">
              <div className="py-2 px-3 text-gray-700 hover:text-gray-900">
                Login
              </div>
            </Link>
            <Link href="/signup">
              <div className="py-2 px-3 bg-blue-500 text-white rounded hover:bg-blue-400 transition duration-300">
                Sign Up
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
