import React from "react";
import Link from "next/link";
import { data } from "@/app/data/blog";
import CommentSection from "../components/commentSection";

const Blogspage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-16">
      <h1 className="text-4xl font-extrabold text-center text-gray-700 mb-12">Our Blogs</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {data.map((blog) => (
          <div
            key={blog.id}
            className="bg-gray-100 border border-gray-300 rounded-lg overflow-hidden shadow-md hover:shadow-lg transform hover:translate-y-[-4px] transition-all duration-300 ease-in-out"
          >
            {/* Blog Content Section */}
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">{blog.title}</h2>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">{blog.smallText}</p>
              <div className="text-right">
                <Link href={`/blogs/${blog.slug}`}>
                  <p className="inline-block text-blue-600 font-medium hover:text-blue-800 underline-offset-4 hover:underline transition duration-300">
                    Read More
                  </p>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Comment Section */}
      <div className="mt-16">
        <CommentSection />
      </div>
    </div>
  );
};

export default Blogspage;
