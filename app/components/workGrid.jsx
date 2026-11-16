"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";
import workProjects from "@/app/data/workProjects.json";

const encodeSrc = (src) =>
  src
    .split("/")
    .map((part, index) => (index === 0 ? part : encodeURIComponent(part)))
    .join("/")
    .replace(/%2F/g, "/");

const WorkGrid = () => {
  return (
    <section className="container mx-auto px-4 pt-24 pb-16">
      <div className="max-w-3xl mb-12 md:mb-16">
        <p className="text-cyan-400 text-sm font-semibold uppercase tracking-[0.14em] mb-3">
          Selected work
        </p>
        <h1 className="text-3xl md:text-5xl font-bold gradient-text leading-tight">
          Software projects and selected work
        </h1>
        <p className="text-gray-400 mt-4 text-base md:text-lg leading-relaxed">
          A look at software projects, the requirements behind them, and the
          development work involved. Each case study explains the system, its
          functionality, and the decisions that shaped the implementation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {workProjects.map((project) => (
          <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            prefetch
            className="group rounded-2xl border border-gray-600 bg-gray-900 overflow-hidden flex flex-col transition-colors duration-150 hover:border-cyan-500/50"
          >
            <div className="relative h-52 bg-gray-950 overflow-hidden">
              <Image
                src={encodeSrc(project.image)}
                alt={`${project.name} preview`}
                fill
                className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              />
              <div className="absolute top-3 left-3 bg-black/70 rounded-lg px-3 py-1.5">
                <span className="text-cyan-400 text-[11px] font-bold uppercase tracking-widest">
                  {project.category}
                </span>
              </div>
            </div>

            <div className="p-5 flex flex-col flex-grow gap-2">
              <span className="text-cyan-400 text-[11px] font-bold uppercase tracking-[0.14em]">
                {project.label}
              </span>
              <div className="flex items-start justify-between gap-3">
                <h2 className="text-xl font-bold text-white m-0">
                  {project.name}
                </h2>
                <HiArrowUpRight
                  className="text-gray-500 group-hover:text-cyan-400 transition-colors shrink-0 mt-1"
                  size={18}
                />
              </div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                {project.subtitle}
              </p>
              <p className="text-gray-400 text-sm leading-relaxed m-0 flex-grow">
                {project.cardDescription}
              </p>
              {Array.isArray(project.techStack) &&
                project.techStack.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-gray-800 text-gray-300 rounded-full text-[11px] border border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default WorkGrid;
