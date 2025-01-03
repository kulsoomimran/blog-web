import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-gray-100 py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        {/* Section Heading */}
        <h3 className="text-4xl sm:text-5xl font-bold text-blue-800 mb-8">
          About Us
        </h3>

        {/* Mission and Vision */}
        <div className="mb-10">
          <h4 className="text-2xl font-semibold text-blue-700 mb-4">Mission and Vision</h4>
          <p className="text-lg sm:text-xl text-gray-700 mb-4">
            Our mission is to provide insightful, high-quality, and thought-provoking content that informs, educates, and inspires. Our vision is to build a global community where curiosity meets creativity, and knowledge is shared without boundaries.
          </p>
        </div>

        {/* What We Offer */}
        <div className="mb-10">
          <h4 className="text-2xl font-semibold text-blue-700 mb-4">What We Offer</h4>
          <ul className="list-disc list-inside text-lg sm:text-xl text-gray-700 space-y-3">
            <li><strong>Diverse Topics:</strong> Whether you're a tech enthusiast, a lifestyle lover, or someone looking for the latest trends, we&apos;ve got something for everyone.</li>
            <li><strong>Expert Insights:</strong> Our blogs are written by passionate individuals who are experts in their fields, ensuring credibility and value in every post.</li>
            <li><strong>Engaging Community:</strong> We encourage dialogue and discussions, making this space not just about reading but also about sharing ideas and perspectives.</li>
          </ul>
        </div>

        {/* Our Story */}
        <div className="mb-10">
          <h4 className="text-2xl font-semibold text-blue-700 mb-4">Our Story</h4>
          <p className="text-lg sm:text-xl text-gray-700">
            Our journey began with a simple idea: to create a platform where knowledge meets creativity. From humble beginnings to a growing audience, we&apos;ve stayed true to our core belief — delivering meaningful content that adds value to people&apos;s lives. Today, we&apos;re proud to be a part of your learning journey and aim to keep surprising you with every post.
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;
