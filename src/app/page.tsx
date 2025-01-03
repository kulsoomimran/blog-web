const Homepage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-1">
        <section className="flex flex-col justify-center items-center text-center py-24 px-6">
          <h2 className="text-5xl sm:text-6xl font-extrabold text-gray-800 mb-6">
            Welcome to My Blog Website
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Discover amazing content, insightful blogs, and stay updated with the latest trends. Dive into a world of knowledge and creativity, where every post opens a new horizon of ideas.
          </p>
          <a href="/blog">
            <button className="px-8 py-4 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 shadow-lg transition-all duration-300">
              Explore Blogs
            </button>
          </a>
        </section>
      </main>
    </div>
  );
};

export default Homepage;
