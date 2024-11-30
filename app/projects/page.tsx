import React from "react";
import Link from "next/link";
import { db } from "../db";
import { usersTable, postsTable, SelectPost } from "../db/schema";

interface CardsProps {
  post: {
    title: string;
    content: string;
    imageURL: string;
    id: number;
  };
}

const Cards: React.FC<CardsProps> = ({ post }) => {
  return (
    <div className="border border-gray-500 rounded-lg shadow-lg w-full sm:w-80 lg:w-96 h-[26rem] overflow-hidden">
      {/* Image Section */}
      <img
        className="w-full h-48 object-cover"
        src={post.imageURL} // Access the correct property
        alt={post.title || "Project Image"}
      />

      {/* Card Content */}
      <div className="p-6">
        <h5 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
          {post.title}
        </h5>
        <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
          {post.content.length > 100
            ? `${post.content.slice(0, 100)}...`
            : post.content}
        </p>

        {/* Read More Button */}
        <Link
          href={`/projects/${post.title.toLowerCase().replace(/\s+/g, "")}`}
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read More
          <svg
            className="w-4 h-4 ml-2"
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
  );
};

const Project = async () => {
  const posts = await db.query.postsTable.findMany();

  return (
    <>
      <div className="flex flex-wrap justify-center items-center gap-6 py-10">
        {posts.map((post) => (
          <Cards key={post.id} post={post} />
        ))}
      </div>
    </>
  );
};

export default Project;
