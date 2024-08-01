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
      <div className="">
        {/* Main */}

        <MainSection />
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
