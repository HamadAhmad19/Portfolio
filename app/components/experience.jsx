"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ExperienceData from "../data/experience.json";
import Image from "next/image";
import { IoClose } from "react-icons/io5";

const Experience = () => {
  const [selectedExp, setSelectedExp] = useState(null);

  return (
    <div className="container mx-auto py-8 px-4" id="experience">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mt-5 mb-12 md:mb-20 gradient-text"
      >
        Experience
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ExperienceData?.map((data, index) => {
          const locationText = data.location
            ? `${data.duration} • ${data.location}`
            : data.duration;

          return (
            <motion.div
              key={data.index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              className="rounded-xl overflow-hidden border border-gray-600 bg-gray-900 flex flex-col h-full"
            >
              {/* Image or Company Avatar */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.3 }}
                className="overflow-hidden pt-5"
              >
                {data.image ? (
                  <Image
                    src={data.image}
                    alt={data.company_name}
                    width={112}
                    height={112}
                    className="w-28 h-28 mx-auto rounded-full object-cover object-center border border-gray-700"
                  />
                ) : (
                  <div className="w-28 h-28 mx-auto rounded-full bg-gradient-to-tr from-indigo-600 to-cyan-500 flex items-center justify-center text-white text-3xl font-bold shadow-lg border border-cyan-400/30">
                    {data.company_name.charAt(0)}
                  </div>
                )}
              </motion.div>

              {/* Details */}
              <div className="p-5 flex flex-col flex-grow text-center">
                {/* Role Title */}
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="text-xl font-bold gradient-text"
                >
                  {data.job_title}
                </motion.h2>

                {/* Company Name */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="text-gray-200 text-lg font-semibold mt-1"
                >
                  {data.company_name}
                </motion.p>

                {/* Date / Location */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="text-cyan-400 text-sm mt-1"
                >
                  {locationText}
                </motion.p>

                <motion.hr
                  initial={{ opacity: 0, scaleX: 0 }}
                  whileInView={{ opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.5, delay: 0.25 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="border-t border-gray-700 my-4 origin-center"
                />

                {/* Short Description */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="mb-4 flex-grow"
                >
                  <p className="text-gray-300 text-sm leading-relaxed text-left">
                    {data.description}
                  </p>
                </motion.div>

                {/* Technology Tags */}
                {data.technologies && data.technologies.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.35 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="mb-4"
                  >
                    <div className="flex flex-wrap gap-2 justify-center">
                      {data.technologies.map((tech, idx) => (
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
                {data.highlights && data.highlights.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="mt-auto pt-2"
                  >
                    <button
                      onClick={() => setSelectedExp(data)}
                      className="w-full hover-scale py-2.5 px-4 text-center gradient-bg text-white font-medium text-sm rounded-lg transition-all"
                    >
                      View Details
                    </button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Expanded Modal for Highlights */}
      <AnimatePresence>
        {selectedExp && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-900 border border-gray-700 text-white rounded-2xl p-6 md:p-8 max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedExp(null)}
                className="absolute top-5 right-5 text-gray-400 hover:text-white p-2 rounded-full hover:bg-gray-800 transition-colors"
                aria-label="Close details"
              >
                <IoClose size={24} />
              </button>

              <div className="mb-4">
                <h3 className="text-2xl font-bold gradient-text pr-8">
                  {selectedExp.job_title}
                </h3>
                <p className="text-xl font-semibold text-gray-200 mt-1">
                  {selectedExp.company_name}
                </p>
                <p className="text-sm text-cyan-400 mt-1">
                  {selectedExp.location
                    ? `${selectedExp.duration} • ${selectedExp.location}`
                    : selectedExp.duration}
                </p>
              </div>

              <hr className="border-gray-700 my-4" />

              <p className="text-gray-300 mb-6 leading-relaxed">
                {selectedExp.description}
              </p>

              {selectedExp.highlights && selectedExp.highlights.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">
                    Key Responsibilities & Highlights:
                  </h4>
                  <ul className="space-y-2 list-disc list-inside text-gray-300 text-sm leading-relaxed">
                    {selectedExp.highlights.map((highlight, idx) => (
                      <li key={idx} className="pl-1">
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedExp.technologies && selectedExp.technologies.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wider">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedExp.technologies.map((tech, idx) => (
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

              <div className="mt-8 flex justify-end">
                <button
                  onClick={() => setSelectedExp(null)}
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

export default Experience;
