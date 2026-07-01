import React from "react";
import { skillsData } from "../assets/asstes";

const Skills = () => {
  return (
    <section id="Skills" className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold">
            Technical <span className="text-teal-400">Skills</span>
          </h2>

          <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
            Tools and technologies I use to build modern, scalable web applications
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

          {skillsData.map((skills, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl border border-gray-800 bg-gray-900 shadow-md hover:shadow-teal-500/10 hover:-translate-y-2 transition-all duration-300"
            >

              {/* Icon */}
              <div className="w-14 h-14 mx-auto rounded-full flex items-center justify-center bg-gray-800 group-hover:bg-gray-700 transition">
                <skills.icon className="w-7 h-7 text-teal-400" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-center mt-4 text-white group-hover:text-teal-400 transition">
                {skills.title}
              </h3>

              {/* Technologies */}
              <p className="text-sm text-center text-gray-400 mt-2 leading-relaxed">
                {skills.technologies.join(" • ")}
              </p>

              {/* Bottom accent line */}
              <div className="w-0 group-hover:w-full h-[2px] bg-teal-400 mt-4 mx-auto transition-all duration-300"></div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Skills;