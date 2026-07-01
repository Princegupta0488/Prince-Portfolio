import React from "react";
import { FaXTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 py-12 text-white">

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Brand */}
        <div className="text-2xl font-bold">
          The-<span className="text-teal-400">Prince</span>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4">

          <a
            href="#"
            className="p-3 bg-gray-900 rounded-full text-gray-400 hover:text-teal-400 hover:bg-gray-800 transition"
          >
            <FaXTwitter size={18} />
          </a>

          <a
            href="#"
            className="p-3 bg-gray-900 rounded-full text-gray-400 hover:text-teal-400 hover:bg-gray-800 transition"
          >
            <FaGithub size={18} />
          </a>

          <a
            href="#"
            className="p-3 bg-gray-900 rounded-full text-gray-400 hover:text-teal-400 hover:bg-gray-800 transition"
          >
            <FaLinkedin size={18} />
          </a>

        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-500 text-center md:text-right">
          © 2026 The-Prince Developer. All rights reserved.
        </div>

      </div>

    </footer>
  );
};

export default Footer;