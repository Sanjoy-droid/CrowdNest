"use client";
import Link from "next/link";
import React from "react";

const MainSection = () => {
  return (
    <>
      <div className="flex flex-col my-10">
        <div className="flex justify-center items-center py-10 px-2 text-blue-300">
          <div className="flex flex-row space-x-6 justify-center items-center w-full text-3xl">
            <span className="font-bold ">CrowdNest </span>{" "}
            <p className="text-gray-400 "> Nest for Future</p>
          </div>
        </div>
        <p className="text-center">
          CrowdNest is a cutting-edge crowdfunding platform dedicated to
          supporting tree-planting projects worldwide. Our mission is to harness
          the power of community funding to combat deforestation and promote
          environmental sustainability.
        </p>

        <Link href={"/projects"} className="">
          <button className="flex justify-center items-center mx-auto mt-20  p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Go to Active Projects
            </span>
          </button>
        </Link>
      </div>
    </>
  );
};

export default MainSection;
