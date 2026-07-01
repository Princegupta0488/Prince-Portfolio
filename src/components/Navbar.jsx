import React, { useState } from "react";
import { navMenu } from "../assets/asstes";
import { FaBars, FaTimes, FaArrowRight } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-5">

        <div className="flex items-center justify-between 
        bg-gray-900/80 backdrop-blur-xl 
        border border-gray-800 
        rounded-full px-8 py-4 shadow-lg">

          {/* Logo */}
          <a href="#" className="text-2xl font-bold tracking-wide">
            <span className="text-white">Prince</span>
            <span className="text-teal-400">.</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navMenu.map((item, index) => (
              <a
                key={index}
                href={`#${item}`}
                className="text-gray-300 hover:text-teal-400 transition duration-300 relative group"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Resume Button (FIXED) */}
          <div className="hidden md:block">
            <a
              href="/Resume.jpeg"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-teal-500 hover:bg-teal-400 text-black font-semibold px-6 py-3 rounded-full flex items-center gap-2 transition duration-300 hover:scale-105"
            >
              Resume
              <FaArrowRight />
            </a>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white text-2xl"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 
          bg-gray-900 
          border border-gray-800 
          rounded-3xl p-6 shadow-xl">

            {navMenu.map((item, index) => (
              <a
                key={index}
                href={`#${item}`}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-gray-300 hover:text-teal-400 transition"
              >
                {item}
              </a>
            ))}

            {/* Mobile Resume (FIXED) */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 w-full bg-teal-500 hover:bg-teal-400 text-black font-semibold py-3 rounded-full flex items-center justify-center gap-2"
            >
              Resume
              <FaArrowRight />
            </a>

          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;