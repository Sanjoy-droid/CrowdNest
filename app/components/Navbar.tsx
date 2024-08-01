"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();
  // if (session) {
  //   return (
  //     <>
  //       Signed in as {session?.user?.email} <br />
  //       <button onClick={() => signOut()}>Sign out</button>
  //     </>
  //   );
  // }

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

                  <span className="font-bold text-xl">CrowdNest</span>
                </div>
              </Link>
            </div>

            {/* Primary Navbar items */}
            <div className="flex items-center space-x-1">
              <Link href="/">
                <div className="py-5 px-3 text-gray-300 hover:text-violet-600 font-semibold">
                  Home
                </div>
              </Link>
              <Link href="/about">
                <div className="py-5 px-3 text-gray-300   hover:text-violet-600 font-semibold">
                  About
                </div>
              </Link>
            </div>
          </div>

          {/* Secondary Navbar items */}

          {/* if not logged in */}
          {!session && (
            <div className="flex items-center space-x-4">
              <Link href="/login">
                <div className="py-2 px-3 text-gray-100 hover:bg-blue-400 transition duration-300 rounded">
                  Login
                </div>
              </Link>
              <Link href="/signup">
                <div className="py-2 px-3 text-white rounded hover:bg-blue-400 transition duration-300">
                  Sign Up
                </div>
              </Link>
            </div>
          )}

          {/* if logged in */}
          {session && (
            <div className="flex items-center space-x-4">
              <Link href="/dashboard">
                <div className="py-2 px-3 text-gray-100 hover:bg-blue-400 transition duration-300 rounded">
                  Go to Dashboard
                </div>
              </Link>
              <button onClick={() => signOut()}>
                <div className="py-2 px-3 text-white rounded hover:bg-red-600 transition duration-300">
                  Logout
                </div>
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
