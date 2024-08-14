import React from "react";
import Link from "next/link";

const Cards = () => {
  return (
    <>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-72 w-72">
        <img
          className="rounded-t-lg h-40 w-40"
          src="https://img.freepik.com/free-photo/people-planting-tree-countryside_23-2149401191.jpg"
          alt=""
        />
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-sm font-semibold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
          </a>

          <Link
            href="projects/mangroverestoration"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
};

const CardsRow = () => {
  return (
    <div className=" flex justify-between items-center p-10">
      <Cards />
      <Cards />
      <Cards />
    </div>
  );
};

const Project = () => {
  return (
    <>
      <div className="h-[120vh] [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] ">
        {/* columns */}
        <div className="">
          {/* row */}
          {/* <CardsRow /> */}
          <CardsRow />
          <div className="flex flex-row  items-center justify-center space-x-14 py-10">
            <Cards />
            <Cards />
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
