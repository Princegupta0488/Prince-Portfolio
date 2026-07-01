import React from "react";
import { FaCode } from "react-icons/fa";
import { profileData, assets } from "../assets/asstes";

const About = () => {
  return (
    <section id="About" className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>

            <h2 className="text-5xl font-extrabold mb-6">
              About <span className="text-teal-400">Me</span>
            </h2>

            <p className="text-gray-400 leading-8 mb-5">
              I am a passionate Full Stack Developer who enjoys building responsive and user-friendly web applications. I love learning new technologies and improving my coding skills.
            </p>

            <p className="text-gray-400 leading-8 mb-8">
              I enjoy solving real-world problems through clean and efficient code. My goal is to create impactful web applications while continuously growing as a developer.
            </p>

            {/* CARDS */}
            <div className="grid sm:grid-cols-2 gap-6 mb-8">

              {profileData.map((data, index) => (
                <div
                  key={index}
                  className="group p-5 rounded-2xl border border-gray-800 bg-gray-900 hover:shadow-teal-500/10 transition-all duration-300"
                >
                  <FaCode className="text-2xl text-teal-400 mb-3" />

                  <h3 className="text-lg font-bold mb-2 group-hover:text-teal-400">
                    {data.title}
                  </h3>

                  <p className="text-sm text-gray-400">
                    {data.technologies.join(" • ")}
                  </p>
                </div>
              ))}

            </div>

            <a 
            href="/Resume.jpeg"
            download="Prince-Gupta-Resume.jpeg"
            className="px-8 py-3 bg-teal-600 text-white shadow-md rounded-full hover:bg-teal-700 transition-all duration-300 inline-block">
              Download Resume
            </a>

          </div>

          {/* IMAGE */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">

              <div className="absolute -inset-2 bg-teal-500/10 blur-2xl rounded-3xl"></div>

              <img
                src={assets.profileImg}
                alt="Profile"
                className="relative rounded-2xl border border-gray-800 shadow-2xl"
              />

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;