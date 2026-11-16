"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HiArrowRight, HiArrowUpRight } from "react-icons/hi2";
import workProjects from "@/app/data/workProjects.json";

const encodeSrc = (src) =>
  src
    .split("/")
    .map((part, index) => (index === 0 ? part : encodeURIComponent(part)))
    .join("/")
    .replace(/%2F/g, "/");

const Work = ({ showViewAllLink = true }) => {
  const featured = workProjects[0];
  const sideProjects = workProjects.slice(1, 4);

  return (
    <section id="work" className="container mx-auto py-16 px-4">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-12">
        <div className="max-w-2xl">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-[0.14em] mb-3">
            A closer look at my work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold gradient-text">
            Projects, requirements, and what was built.
          </h2>
          <p className="text-gray-400 mt-4 text-base leading-relaxed">
            Browse examples of software projects I&apos;ve worked on, including
            the problems they address, features developed, and technical
            decisions involved.
          </p>
        </div>
        {showViewAllLink && (
          <Link
            href="/work"
            prefetch
            className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-cyan-300 transition-colors"
          >
            View Projects
            <HiArrowRight className="text-cyan-400" />
          </Link>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-4 md:gap-5">
        <Link
          href={`/work/${featured.slug}`}
          prefetch
          className="group text-left rounded-2xl border border-gray-600 bg-gray-900 overflow-hidden flex flex-col min-h-[420px] md:min-h-[520px] transition-colors duration-150 hover:border-cyan-500/50"
        >
          <div className="relative flex-grow min-h-[260px] md:min-h-[340px] overflow-hidden bg-gray-950">
            <Image
              src={encodeSrc(featured.image)}
              alt={`${featured.name} project`}
              fill
              priority
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
            <div className="absolute bottom-3 left-3 bg-black/70 rounded-lg px-3 py-1.5">
              <span className="text-cyan-400 text-[11px] font-bold uppercase tracking-widest">
                {featured.category}
              </span>
              <p className="text-white text-sm font-semibold m-0">
                {featured.name}
              </p>
            </div>
          </div>
          <div className="p-5 md:p-6 flex flex-col gap-2 bg-gradient-to-b from-gray-900 to-gray-950">
            <span className="text-cyan-400 text-[11px] font-bold uppercase tracking-[0.14em]">
              {featured.label}
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-white m-0">
              {featured.name}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed m-0">
              {featured.cardDescription}
            </p>
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-white mt-2">
              View case study
              <HiArrowUpRight className="text-cyan-400" />
            </span>
          </div>
        </Link>

        <div className="flex flex-col gap-3.5">
          {sideProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              prefetch
              className="group text-left grid grid-cols-[88px_1fr_auto] sm:grid-cols-[118px_1fr_auto] items-center gap-3.5 p-2.5 rounded-2xl border border-gray-600 bg-gray-900 min-h-[100px] sm:min-h-[116px] transition-colors duration-150 hover:border-cyan-500/50 hover:bg-gray-800/80"
            >
              <div className="relative h-[78px] sm:h-24 rounded-xl overflow-hidden bg-gray-950">
                <Image
                  src={encodeSrc(project.image)}
                  alt={`${project.name} preview`}
                  fill
                  className="object-cover"
                  sizes="118px"
                />
              </div>
              <div className="min-w-0 flex flex-col gap-1">
                <span className="text-cyan-400 text-[11px] font-bold uppercase tracking-[0.14em]">
                  {project.label}
                </span>
                <strong className="text-white text-base font-semibold tracking-tight">
                  {project.name}
                </strong>
                <p className="text-gray-400 text-sm leading-snug m-0 line-clamp-2">
                  {project.cardDescription}
                </p>
              </div>
              <HiArrowUpRight
                className="text-gray-500 group-hover:text-cyan-400 transition-colors mr-1 sm:mr-2 shrink-0"
                size={18}
              />
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-2xl border border-gray-600 bg-gray-900 px-5 py-5">
        <p className="text-gray-300 text-[15px] m-0 max-w-xl">
          Need operations software, reporting, or a similar internal system?
        </p>
        <Link
          href="/contact-us"
          prefetch
          className="inline-flex items-center justify-center gap-2 hover-scale gradient-bg text-white font-medium text-sm rounded-lg px-5 py-2.5 shrink-0"
        >
          Build Something Similar
          <HiArrowRight />
        </Link>
      </div>
    </section>
  );
};

export default Work;
