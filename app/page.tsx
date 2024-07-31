"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MainSection from "./components/MainSection";

export default function Home() {
  const [first, setfirst] = useState(0);
  return (
    <>
      <div className="flex flex-col min-h-screen [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
        {/* Navbar */}
        <nav className="">
          <Navbar />
        </nav>

        {/* Main */}

        <main className="flex-grow flex flex-col items-center justify-center text-white">
          <MainSection />
        </main>

        {/* Footer */}
        <footer className="">
          <Footer />
        </footer>
      </div>
    </>
  );
}

{
  /* Logo */
}
{
  /* <Image
                    height={60}
                    width={60}
                    src="../public/logo.png"
                    alt=""
                  /> */
}
