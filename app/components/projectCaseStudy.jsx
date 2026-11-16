"use client";
import React, { useMemo, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  HiArrowLeft,
  HiArrowRight,
  HiChevronLeft,
  HiChevronRight,
  HiArrowsPointingOut,
  HiXMark,
  HiOutlineLightBulb,
  HiOutlineChartBar,
  HiOutlineViewfinderCircle,
} from "react-icons/hi2";
const encodeSrc = (src) =>
  src
    .split("/")
    .map((part, index) => (index === 0 ? part : encodeURIComponent(part)))
    .join("/")
    .replace(/%2F/g, "/");

const ProjectCaseStudy = ({ project }) => {
  const images = useMemo(() => {
    if (!project) return [];
    if (Array.isArray(project.gallery) && project.gallery.length > 0) {
      return project.gallery;
    }
    return project.image ? [project.image] : [];
  }, [project]);

  const canLoop = images.length > 1;

  const loopSlides = useMemo(() => {
    if (!canLoop) return images;
    return [images[images.length - 1], ...images, images[0]];
  }, [images, canLoop]);

  const [trackIndex, setTrackIndex] = useState(canLoop ? 1 : 0);
  const [withTransition, setWithTransition] = useState(true);
  const [isLocked, setIsLocked] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const activeIndex = useMemo(() => {
    if (!canLoop) return 0;
    if (trackIndex === 0) return images.length - 1;
    if (trackIndex === images.length + 1) return 0;
    return trackIndex - 1;
  }, [canLoop, trackIndex, images.length]);

  const goNext = useCallback(() => {
    if (!canLoop || isLocked) return;
    setWithTransition(true);
    setIsLocked(true);
    setTrackIndex((prev) => prev + 1);
  }, [canLoop, isLocked]);

  const goPrev = useCallback(() => {
    if (!canLoop || isLocked) return;
    setWithTransition(true);
    setIsLocked(true);
    setTrackIndex((prev) => prev - 1);
  }, [canLoop, isLocked]);

  const goTo = useCallback(
    (index) => {
      if (!canLoop || isLocked) return;
      setWithTransition(true);
      setIsLocked(true);
      setTrackIndex(index + 1);
    },
    [canLoop, isLocked]
  );

  const handleTransitionEnd = useCallback(() => {
    if (!canLoop) {
      setIsLocked(false);
      return;
    }

    if (trackIndex === images.length + 1) {
      setWithTransition(false);
      setTrackIndex(1);
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          setWithTransition(true);
          setIsLocked(false);
        });
      });
      return;
    }

    if (trackIndex === 0) {
      setWithTransition(false);
      setTrackIndex(images.length);
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          setWithTransition(true);
          setIsLocked(false);
        });
      });
      return;
    }

    setIsLocked(false);
  }, [canLoop, trackIndex, images.length]);

  useEffect(() => {
    setWithTransition(false);
    setTrackIndex(canLoop ? 1 : 0);
    setIsLocked(false);
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => setWithTransition(true));
    });
  }, [project?.slug, canLoop]);

  useEffect(() => {
    if (!canLoop || lightboxOpen) return undefined;

    const timer = window.setInterval(() => {
      goNext();
    }, 4000);

    return () => window.clearInterval(timer);
  }, [canLoop, lightboxOpen, goNext, trackIndex]);

  useEffect(() => {
    if (!lightboxOpen) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") setLightboxOpen(false);
      if (event.key === "ArrowLeft") goPrev();
      if (event.key === "ArrowRight") goNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [lightboxOpen, goPrev, goNext]);

  if (!project) return null;

  const displayTags =
    project.displayTags?.length > 0
      ? project.displayTags
      : [project.category, ...(project.tags || [])].filter(Boolean).slice(0, 3);

  const activeImage = images[activeIndex];

  return (
    <div className="container mx-auto px-4 pt-24 pb-16">
      <div className="flex flex-wrap items-center gap-2 text-sm text-gray-400 mb-8">
        <Link
          href="/work"
          prefetch
          className="inline-flex items-center gap-2 hover:text-cyan-300 transition-colors"
        >
          <HiArrowLeft />
          All Work
        </Link>
        <span className="text-gray-600">/</span>
        <span className="text-gray-300">{project.category}</span>
      </div>

      {/* Hero split */}
      <section className="mb-10 grid grid-cols-1 xl:grid-cols-[0.95fr_1.05fr] gap-6 lg:gap-8 items-start">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold gradient-text leading-tight mb-4">
            {project.name}
          </h1>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-4 max-w-xl">
            {project.heroDescription}
          </p>

          {project.overview && (
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-5 max-w-xl">
              {project.overview}
            </p>
          )}

          <div className="flex flex-wrap gap-2 mb-6">
            {displayTags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 rounded-full text-xs font-medium border border-purple-500/40 bg-purple-500/10 text-purple-200"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 mb-2">
            <button
              type="button"
              onClick={() => setLightboxOpen(true)}
              className="inline-flex items-center justify-center gap-2 hover-scale gradient-bg text-white font-medium text-sm rounded-xl px-5 py-2.5"
            >
              View Full Preview
            </button>
          </div>
        </div>

        {/* Gallery */}
        <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-gray-700 bg-[#0b1220]">
          <div
            className={`flex h-full w-full ease-out ${
              withTransition ? "transition-transform duration-700" : ""
            }`}
            style={{ transform: `translateX(-${trackIndex * 100}%)` }}
            onTransitionEnd={handleTransitionEnd}
          >
            {loopSlides.map((src, index) => (
              <div
                key={`${src}-${index}`}
                className="relative h-full w-full shrink-0 grow-0 basis-full"
              >
                <Image
                  src={encodeSrc(src)}
                  alt={`${project.name} preview ${index + 1}`}
                  fill
                  priority={index <= 1}
                  className="object-fill"
                  sizes="(max-width: 1280px) 100vw, 55vw"
                />
              </div>
            ))}
          </div>

          {canLoop && (
            <>
              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous image"
                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-black/55 border border-white/10 text-white flex items-center justify-center hover:bg-black/75 transition-colors"
              >
                <HiChevronLeft size={22} />
              </button>
              <button
                type="button"
                onClick={goNext}
                aria-label="Next image"
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-black/55 border border-white/10 text-white flex items-center justify-center hover:bg-black/75 transition-colors"
              >
                <HiChevronRight size={22} />
              </button>
            </>
          )}

          <button
            type="button"
            onClick={() => setLightboxOpen(true)}
            aria-label="Expand image"
            className="absolute top-3 right-3 z-10 h-9 w-9 rounded-full bg-black/55 border border-white/10 text-white flex items-center justify-center hover:bg-black/75 transition-colors"
          >
            <HiArrowsPointingOut size={16} />
          </button>

          {canLoop && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5">
              {images.map((src, index) => (
                <button
                  key={src}
                  type="button"
                  aria-label={`Go to image ${index + 1}`}
                  onClick={() => goTo(index)}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    index === activeIndex
                      ? "bg-purple-400"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Challenge / Solution / Outcome */}
      <section className="mb-10 grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="rounded-2xl border border-gray-700 bg-gray-900/80 p-6">
          <div className="h-10 w-10 rounded-xl bg-purple-500/15 border border-purple-500/30 text-purple-300 flex items-center justify-center mb-4">
            <HiOutlineViewfinderCircle size={20} />
          </div>
          <h2 className="text-xl font-bold text-white mb-3">The Challenge</h2>
          <p className="text-gray-300 text-sm leading-relaxed m-0">
            {project.challenge}
          </p>
        </div>
        <div className="rounded-2xl border border-gray-700 bg-gray-900/80 p-6">
          <div className="h-10 w-10 rounded-xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 flex items-center justify-center mb-4">
            <HiOutlineLightBulb size={20} />
          </div>
          <h2 className="text-xl font-bold text-white mb-3">The Solution</h2>
          <p className="text-gray-300 text-sm leading-relaxed m-0">
            {project.solution}
          </p>
        </div>
        <div className="rounded-2xl border border-gray-700 bg-gray-900/80 p-6">
          <div className="h-10 w-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 flex items-center justify-center mb-4">
            <HiOutlineChartBar size={20} />
          </div>
          <h2 className="text-xl font-bold text-white mb-3">The Outcome</h2>
          <p className="text-gray-300 text-sm leading-relaxed m-0">
            {project.outcome}
          </p>
        </div>
      </section>

      {/* Features */}
      {project.features?.length > 0 && (
        <section className="mb-10">
          <p className="text-cyan-400 text-xs font-semibold uppercase tracking-[0.14em] mb-2">
            Key features
          </p>
          <h2 className="text-2xl md:text-3xl font-bold gradient-text mb-6">
            What was built
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.features.map((feature, index) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-gray-700 bg-gray-900/80 p-5"
              >
                <span className="text-cyan-400 font-mono text-xs font-semibold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-semibold text-white mt-2 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed m-0">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Tech */}
      {project.techStack?.length > 0 && (
        <section className="mb-10 rounded-2xl border border-gray-700 bg-gray-900/80 p-6">
          <p className="text-cyan-400 text-xs font-semibold uppercase tracking-[0.14em] mb-3">
            Technology stack
          </p>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 bg-gray-800 text-cyan-200 rounded-full text-xs font-medium border border-gray-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="rounded-2xl border border-purple-500/30 bg-gradient-to-r from-purple-900/40 via-gray-900 to-cyan-900/20 p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">
            Build something similar?
          </h2>
          <p className="text-gray-400 text-sm m-0 max-w-xl">
            Tell me about the workflow, users, and constraints. I&apos;ll review
            the requirements and discuss next steps.
          </p>
        </div>
        <Link
          href="/contact-us"
          prefetch
          className="inline-flex items-center justify-center gap-2 hover-scale gradient-bg text-white font-medium text-sm rounded-xl px-5 py-2.5 shrink-0"
        >
          Discuss a Project
          <HiArrowRight />
        </Link>
      </section>

      {/* Lightbox */}
      {lightboxOpen && activeImage && (
        <div
          className="fixed inset-0 z-[80] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            type="button"
            aria-label="Close preview"
            className="absolute top-5 right-5 h-10 w-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20"
            onClick={() => setLightboxOpen(false)}
          >
            <HiXMark size={22} />
          </button>

          {images.length > 1 && (
            <>
              <button
                type="button"
                aria-label="Previous image"
                className="absolute left-4 md:left-8 h-11 w-11 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20"
                onClick={(event) => {
                  event.stopPropagation();
                  goPrev();
                }}
              >
                <HiChevronLeft size={24} />
              </button>
              <button
                type="button"
                aria-label="Next image"
                className="absolute right-4 md:right-8 h-11 w-11 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20"
                onClick={(event) => {
                  event.stopPropagation();
                  goNext();
                }}
              >
                <HiChevronRight size={24} />
              </button>
            </>
          )}

          <div
            className="relative w-full max-w-5xl h-[75vh]"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={encodeSrc(activeImage)}
              alt={`${project.name} full preview`}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCaseStudy;
