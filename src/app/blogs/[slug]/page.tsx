import React from 'react';
import { data } from '@/app/data/blog';

const Dynamic = ({ params }: { params: { slug: string } }) => {
  // Find the blog by slug
  const blog = data.find((b) => b.slug === params.slug);

  if (!blog) {
    return (
      <div className="max-w-4xl mx-auto mt-10 px-4 sm:px-6 lg:px-8 py-8 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-white bg-red-600 py-3 px-3 font-bold underline mb-6 rounded-lg">
          Blog Not Found
        </h1>
        <p className="text-gray-600 text-lg">
          Sorry, the blog post you are looking for could not be found.
        </p>
      </div>
    );
  } else {
    return (
      <div className="max-w-4xl mx-auto mt-10 px-4 sm:px-6 lg:px-8 py-8">
        {/* Blog Content Section */}
        <div className="flex flex-col space-y-6 sm:flex-row sm:space-y-0 sm:space-x-6 mb-8">
          <div className="flex-1 sm:pl-8 text-gray-700">
            <h1 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-4">
              {blog.title}
            </h1>
            <p className="text-base sm:text-lg leading-relaxed">{blog.content}</p>
          </div>
        </div>

        {/* Author Section */}
        <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
          <h2 className="text-lg sm:text-xl md:text-2xl mb-4">
            Written by:{' '}
            <span className="text-blue-600 text-xl sm:text-2xl font-medium underline">
              {blog.author}
            </span>
          </h2>
        </div>
      </div>
    );
  }
};

export default Dynamic;
