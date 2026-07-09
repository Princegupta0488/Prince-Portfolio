import React from "react";
import { projectData } from "../assets/asstes";

const Work = () => {
  return (
    <section id="Work" className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold">
            My <span className="text-teal-400">Work</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A collection of projects where design meets functionality.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectData.map((project, i) => (
            <div
              key={i}
              className="group relative rounded-2xl overflow-hidden bg-gray-900 border border-gray-800 shadow-md hover:shadow-teal-500/10 transition-all duration-300"
            >

              {/* MAIN IMAGE */}
              <div className="overflow-hidden">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="h-56 w-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-white group-hover:text-teal-400 transition">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-400 mt-2 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 bg-gray-800 text-gray-300 rounded-full border border-gray-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Work;