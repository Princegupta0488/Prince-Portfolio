import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { assets } from "../assets/asstes";

const Hero = () => {
  return (
    <section
      id="Home"
      className="min-h-screen flex items-center bg-black pt-24"
    >
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">

          {/* Left Content */}
          <div className="text-center lg:text-left">

            <p className="text-teal-400 font-semibold text-lg mb-3">
              👋 Hello, I'm
            </p>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight text-white">
              Prince Gupta
              <br />
              <span className="text-teal-400">
                Full Stack Developer
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-400 max-w-xl mx-auto lg:mx-0 leading-8">
              I build modern, responsive, and scalable web applications using
              React, Node.js, Express.js, and MongoDB. I love creating clean,
              user-friendly, and high-performance websites.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 mt-10 justify-center lg:justify-start">

              <a
                href="#Work"
                className="flex items-center justify-center gap-2 bg-teal-500 text-black font-semibold px-8 py-4 rounded-full hover:bg-teal-400 transition-all duration-300 hover:scale-105"
              >
                View My Work
                <FaArrowRight />
              </a>

              <a
                href="#Contact"
                className="flex items-center justify-center gap-2 border-2 border-gray-700 text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-all duration-300"
              >
                Contact Me
                <FaArrowRight />
              </a>

            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <div className="relative">

              {/* glow */}
              <div className="absolute -inset-2 rounded-full bg-teal-500 blur-2xl opacity-20"></div>

              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-teal-500 shadow-2xl">
                <img
                  src={assets.profileImg}
                  alt="Prince Gupta"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;