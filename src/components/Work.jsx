import React, { useState, useEffect } from "react";
import { projectData } from "../assets/asstes";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Work = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [index, setIndex] = useState(0);

  const openProject = (project) => {
    setActiveProject(project);
    setIndex(0);
  };

  const closeModal = () => setActiveProject(null);

  const next = () => {
    if (!activeProject) return;
    setIndex((prev) =>
      prev === activeProject.images.length - 1 ? 0 : prev + 1
    );
  };

  const prev = () => {
    if (!activeProject) return;
    setIndex((prev) =>
      prev === 0 ? activeProject.images.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (!activeProject) return;

      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeProject]);

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
              onClick={() => openProject(project)}
              className="group relative rounded-2xl overflow-hidden bg-gray-900 border border-gray-800 shadow-md hover:shadow-teal-500/10 transition-all duration-300 cursor-pointer"
            >

              {/* MAIN IMAGE */}
              <div className="overflow-hidden">
                <img
                  src={project.images[0]}
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

      {/* MODAL */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md">

          {/* Close */}
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 text-white text-3xl hover:text-teal-400 transition"
          >
            <FaTimes />
          </button>

          {/* IMAGE */}
          <div className="relative w-[92%] md:w-[65%]">

            <img
              src={activeProject.images[index]}
              className="w-full h-[500px] object-cover rounded-xl shadow-2xl border border-gray-800"
            />

            {/* nav */}
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 p-3 rounded-full text-white hover:text-teal-400"
            >
              <FaChevronLeft />
            </button>

            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 p-3 rounded-full text-white hover:text-teal-400"
            >
              <FaChevronRight />
            </button>

            {/* dots */}
            <div className="flex justify-center mt-4 gap-2">
              {activeProject.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full transition ${
                    i === index ? "bg-teal-400 scale-125" : "bg-gray-600"
                  }`}
                />
              ))}
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default Work;