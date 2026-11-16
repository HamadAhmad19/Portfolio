"use client";
import React, { useState, useEffect, useCallback } from "react";
import projectsData from "@/app/data/project.json";
import Link from "next/link";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import { HiOutlineSparkles } from "react-icons/hi";

const Projects = ({ showSeeMoreLink = true }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const closeModal = useCallback(() => setSelectedProject(null), []);

  useEffect(() => {
    if (!selectedProject) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeModal();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [selectedProject, closeModal]);

  return (
    <div className="container mx-auto py-8 px-4" id="projects">
      <h1 className="text-3xl md:text-4xl font-bold text-center mt-5 mb-12 md:mb-20 gradient-text">
        My Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData?.map((project) => (
          <div
            key={project.id}
            className={`rounded-xl overflow-hidden border bg-gray-900 flex flex-col h-full relative ${
              project.isFeatured
                ? "border-cyan-500/60 shadow-lg shadow-cyan-500/10"
                : "border-gray-600"
            }`}
          >
            {project.isFeatured && (
              <div className="absolute top-3 right-3 z-10 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5 shadow-md">
                <HiOutlineSparkles className="text-amber-300" />
                Featured Project
              </div>
            )}

            <div className="overflow-hidden relative h-48">
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            <div className="p-5 flex flex-col flex-grow">
              <div className="text-center mb-2">
                <h2 className="text-xl font-bold gradient-text">
                  {project.name}
                </h2>
                {project.subtitle && (
                  <p className="text-xs font-semibold text-cyan-400 mt-1 uppercase tracking-wider">
                    {project.subtitle}
                  </p>
                )}
              </div>

              <hr className="border-t border-gray-700 my-3" />

              <div className="mb-4 flex-grow">
                <p className="text-gray-300 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              {Array.isArray(project.techStack) &&
                project.techStack.length > 0 && (
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-800 text-gray-200 rounded-full text-xs font-medium border border-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

              <div className="mt-auto pt-2">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="w-full hover-scale py-2.5 px-4 text-center gradient-bg text-white font-medium text-sm rounded-lg"
                >
                  View Details &amp; Modules
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showSeeMoreLink && (
        <div className="flex justify-center mt-16 mb-12">
          <Link
            href="/work"
            prefetch
            className="block py-3 hover-scale px-6 text-center gradient-bg text-white font-medium rounded-lg"
          >
            See all projects
          </Link>
        </div>
      )}

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
          onClick={closeModal}
        >
          <div
            className="bg-gray-900 border border-gray-700 text-white rounded-2xl p-6 md:p-8 max-w-3xl w-full max-h-[85vh] overflow-y-auto shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-5 right-5 text-gray-400 hover:text-white p-2 rounded-full hover:bg-gray-800 transition-colors"
              aria-label="Close project details"
            >
              <IoClose size={24} />
            </button>

            <div className="mb-4">
              <h3 className="text-2xl md:text-3xl font-bold gradient-text pr-8">
                {selectedProject.name}
              </h3>
              {selectedProject.subtitle && (
                <p className="text-sm font-semibold text-cyan-400 mt-1 uppercase tracking-wider">
                  {selectedProject.subtitle}
                </p>
              )}
            </div>

            <hr className="border-gray-700 my-4" />

            <p className="text-gray-300 mb-6 leading-relaxed text-base">
              {selectedProject.description}
            </p>

            {Array.isArray(selectedProject.techStack) &&
              selectedProject.techStack.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wider">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-800 text-cyan-300 rounded-full text-xs font-medium border border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

            {Array.isArray(selectedProject.modules) &&
              selectedProject.modules.length > 0 && (
                <div className="mb-6 space-y-5">
                  <h4 className="text-lg font-bold text-white border-b border-gray-800 pb-2">
                    Platform Modules &amp; Architecture:
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedProject.modules.map((mod, idx) => (
                      <div
                        key={idx}
                        className="bg-gray-800/60 p-4 rounded-xl border border-gray-700/80"
                      >
                        <h5 className="font-semibold text-cyan-300 text-base mb-2">
                          {mod.title}
                        </h5>
                        <ul className="space-y-1 list-disc list-inside text-gray-300 text-xs leading-relaxed">
                          {Array.isArray(mod.items) &&
                            mod.items.map((item, iIdx) => (
                              <li key={iIdx} className="pl-1">
                                {item}
                              </li>
                            ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            {Array.isArray(selectedProject.features) &&
              selectedProject.features.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-white border-b border-gray-800 pb-2 mb-3">
                    Key Features &amp; Capabilities:
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 list-disc list-inside text-gray-300 text-sm leading-relaxed">
                    {selectedProject.features.map((feature, idx) => (
                      <li key={idx} className="pl-1">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            <div className="mt-8 flex justify-end">
              <button
                onClick={closeModal}
                className="px-6 py-2.5 bg-gray-800 hover:bg-gray-700 text-white font-medium text-sm rounded-lg transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
