"use client";
import React, { useState, useEffect, useCallback } from "react";
import ExperienceData from "../data/experience.json";
import Image from "next/image";
import { IoClose } from "react-icons/io5";

const Experience = () => {
  const [selectedExp, setSelectedExp] = useState(null);

  const closeModal = useCallback(() => setSelectedExp(null), []);

  useEffect(() => {
    if (!selectedExp) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeModal();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [selectedExp, closeModal]);

  return (
    <div className="container mx-auto py-8 px-4" id="experience">
      <h1 className="text-3xl md:text-4xl font-bold text-center mt-5 mb-12 md:mb-20 gradient-text">
        Experience
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ExperienceData?.map((data) => {
          const locationText = data.location
            ? `${data.duration} • ${data.location}`
            : data.duration;

          return (
            <div
              key={data.index}
              className="rounded-xl overflow-hidden border border-gray-600 bg-gray-900 flex flex-col h-full"
            >
              <div className="overflow-hidden pt-5">
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
              </div>

              <div className="p-5 flex flex-col flex-grow text-center">
                <h2 className="text-xl font-bold gradient-text">
                  {data.job_title}
                </h2>
                <p className="text-gray-200 text-lg font-semibold mt-1">
                  {data.company_name}
                </p>
                <p className="text-cyan-400 text-sm mt-1">{locationText}</p>

                <hr className="border-t border-gray-700 my-4" />

                <div className="mb-4 flex-grow">
                  <p className="text-gray-300 text-sm leading-relaxed text-left">
                    {data.description}
                  </p>
                </div>

                {data.technologies && data.technologies.length > 0 && (
                  <div className="mb-4">
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
                  </div>
                )}

                {data.highlights && data.highlights.length > 0 && (
                  <div className="mt-auto pt-2">
                    <button
                      type="button"
                      onClick={() => setSelectedExp(data)}
                      className="w-full hover-scale py-2.5 px-4 text-center gradient-bg text-white font-medium text-sm rounded-lg"
                    >
                      View Details
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {selectedExp && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
          onClick={closeModal}
        >
          <div
            className="bg-gray-900 border border-gray-700 text-white rounded-2xl p-6 md:p-8 max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
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

            {selectedExp.technologies &&
              selectedExp.technologies.length > 0 && (
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

export default Experience;
