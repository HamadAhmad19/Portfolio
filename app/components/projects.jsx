"use client";
import React, { useState } from "react";
import projectsData from "@/app/data/project.json";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import { HiOutlineSparkles } from "react-icons/hi";

const Projects = ({ showSeeMoreLink = true }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="container mx-auto py-8 px-4" id="projects">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-3xl md:text-4xl font-bold text-center mt-5 mb-12 md:mb-20 gradient-text"
      >
        My Projects
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData?.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className={`rounded-xl overflow-hidden border bg-gray-900 flex flex-col h-full relative transition-all ${
              project.isFeatured
                ? "border-cyan-500/60 shadow-lg shadow-cyan-500/10"
                : "border-gray-600"
            }`}
          >
            {/* Featured Prominence Badge */}
            {project.isFeatured && (
              <div className="absolute top-3 right-3 z-10 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5 shadow-md">
                <HiOutlineSparkles className="text-amber-300" />
                Featured Project
              </div>
            )}

            {/* Image Area */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
              className="overflow-hidden relative"
            >
              <Image
                src={project.image}
                alt={project.name}
                width={800}
                height={192}
                className="w-full h-48 object-cover object-center"
              />
            </motion.div>

            {/* Details */}
            <div className="p-5 flex flex-col flex-grow">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                className="text-center mb-2"
              >
                <h2 className="text-xl font-bold gradient-text">
                  {project.name}
                </h2>
                {project.subtitle && (
                  <p className="text-xs font-semibold text-cyan-400 mt-1 uppercase tracking-wider">
                    {project.subtitle}
                  </p>
                )}
              </motion.div>

              <motion.hr
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                viewport={{ once: true, amount: 0.3 }}
                className="border-t border-gray-700 my-3 origin-center"
              />

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
                className="mb-4 flex-grow"
              >
                <p className="text-gray-300 text-sm leading-relaxed">
                  {project.description}
                </p>
              </motion.div>

              {/* Tech Stack */}
              {Array.isArray(project.techStack) && project.techStack.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.25 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="mb-4"
                >
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
                </motion.div>
              )}

              {/* View Details Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true, amount: 0.3 }}
                className="mt-auto pt-2"
              >
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full hover-scale py-2.5 px-4 text-center gradient-bg text-white font-medium text-sm rounded-lg transition-all"
                >
                  View Details &amp; Modules
                </button>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {showSeeMoreLink && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex justify-center mt-16 mb-12"
        >
          <Link
            href="/projects"
            className="block py-3 hover-scale px-6 text-center gradient-bg text-white font-medium rounded-lg transition-colors"
          >
            See all projects
          </Link>
        </motion.div>
      )}

      {/* Expanded Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-900 border border-gray-700 text-white rounded-2xl p-6 md:p-8 max-w-3xl w-full max-h-[85vh] overflow-y-auto shadow-2xl relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 text-gray-400 hover:text-white p-2 rounded-full hover:bg-gray-800 transition-colors"
                aria-label="Close project details"
              >
                <IoClose size={24} />
              </button>

              <div className="mb-4">
                <div className="flex items-center gap-2">
                  <h3 className="text-2xl md:text-3xl font-bold gradient-text pr-8">
                    {selectedProject.name}
                  </h3>
                </div>
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

              {/* Technologies */}
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

              {/* Modules breakdown for Digital Office Management Engine */}
              {Array.isArray(selectedProject.modules) && selectedProject.modules.length > 0 && (
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

              {/* Features list for other projects */}
              {Array.isArray(selectedProject.features) && selectedProject.features.length > 0 && (
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
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-2.5 bg-gray-800 hover:bg-gray-700 text-white font-medium text-sm rounded-lg transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
