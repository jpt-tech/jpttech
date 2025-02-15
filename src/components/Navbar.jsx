import React from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50   shadow-md flex items-center justify-between py-4 px-6 mt-5 ">
      {/* Logo linking to Home */}
      <div className="flex flex-shrink-0 items-center">
        <a
          href="/"
          className="text-white text-2xl font-bold hover:text-gray-400 transition flex items-center"
        >
          <span className="text-purple-300">&lt; /&gt; </span> JPT
        </a>
      </div>

      {/* Social Media Links */}
      <div className="flex items-center justify-center gap-4 text-xl text-white">
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition"
        >
          <FaTwitter />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500 transition"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
