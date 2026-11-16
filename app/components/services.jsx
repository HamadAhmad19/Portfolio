"use client";
import React from "react";
import { HiArrowRight } from "react-icons/hi2";
import servicesData from "@/app/data/services.json";
import Link from "next/link";

const Services = () => {
  return (
    <section id="services" className="container mx-auto py-16 px-4">
      <div className="mb-12 md:mb-16 max-w-3xl mx-auto text-center">
        <p className="text-cyan-400 text-sm font-semibold uppercase tracking-[0.14em] mb-3">
          Software development services
        </p>
        <h2 className="text-3xl md:text-4xl font-bold gradient-text">
          Different businesses need different kinds of software.
        </h2>
        <p className="text-gray-400 mt-4 text-base md:text-lg leading-relaxed">
          Some need a product built from scratch. Others need to improve an
          existing system, connect their tools, or make an application easier to
          use. Here&apos;s where I can help.
        </p>
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 list-none p-0 m-0">
        {servicesData.map((service) => (
          <li key={service.id}>
            <Link
              href={`/services/${service.slug}`}
              prefetch
              className="h-full rounded-2xl border border-gray-600 bg-gray-900 p-5 md:p-6 flex flex-col gap-2.5 transition-colors duration-150 hover:border-cyan-500/50 block"
            >
              <span className="text-cyan-400 font-mono text-xs font-semibold tracking-wider">
                {service.id}
              </span>
              <strong className="text-white text-lg font-semibold tracking-tight">
                {service.title}
              </strong>
              <p className="text-gray-400 text-sm leading-relaxed flex-grow m-0">
                {service.description}
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-200 mt-1 group">
                Learn more
                <HiArrowRight className="transition-transform duration-150 group-hover:translate-x-1 text-cyan-400" />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Services;
