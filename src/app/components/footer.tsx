import { BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-gray-300 py-8">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 gap-8">
        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3 border-b border-gray-500 pb-1">
            Quick Links
          </h4>
          <ul className="space-y-2">
            <li>
              <a
                href="/"
                className="hover:text-blue-400 transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/blog"
                className="hover:text-blue-400 transition-colors duration-300"
              >
                Blogs
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-blue-400 transition-colors duration-300"
              >
                About
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="sm:col-span-1 flex flex-col items-start sm:items-center">
          <h4 className="text-lg font-semibold text-white mb-3 border-b border-gray-500 pb-1">
            Follow Us
          </h4>
          <ul className="flex space-x-6">
            <li>
              <a
                href="https://github.com/kulsoomimran"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-300 hover:text-blue-400 transition-colors duration-300"
              >
                <BsGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/kulsoom-imran-b89b0530a"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-300 hover:text-blue-400 transition-colors duration-300"
              >
                <BsLinkedin />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center text-sm mt-6 border-t border-gray-600 pt-3 text-gray-400">
        © 2025 My Blog Website. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
