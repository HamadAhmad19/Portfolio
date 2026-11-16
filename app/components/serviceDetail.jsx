"use client";
import React, { useState } from "react";
import Link from "next/link";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi2";
import { IoChevronDown } from "react-icons/io5";

const ServiceDetail = ({ service }) => {
  const [openFaq, setOpenFaq] = useState(0);

  if (!service) return null;

  return (
    <div className="container mx-auto px-4 pt-24 pb-16">
      <Link
        href="/services"
        prefetch
        className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-300 transition-colors mb-8"
      >
        <HiArrowLeft />
        All Services
      </Link>

      {/* Hero */}
      <section className="mb-16 max-w-4xl">
        <p className="text-cyan-400 text-sm font-semibold uppercase tracking-[0.14em] mb-3">
          {service.title}
        </p>
        <h1 className="text-3xl md:text-5xl font-bold gradient-text leading-tight">
          {service.heroTitle}
        </h1>
        <p className="text-gray-300 mt-6 text-base md:text-lg leading-relaxed max-w-3xl">
          {service.heroLead}
        </p>
        <div className="flex flex-wrap gap-3 mt-8">
          <Link
            href="/contact-us"
            prefetch
            className="inline-flex items-center gap-2 hover-scale gradient-bg text-white font-medium text-sm rounded-lg px-5 py-2.5"
          >
            Discuss Your Project
            <HiArrowRight />
          </Link>
        </div>
      </section>

      {/* Useful when */}
      <section className="mb-16">
        <p className="text-cyan-400 text-xs font-semibold uppercase tracking-[0.14em] mb-2">
          Example Problems
        </p>
        <h2 className="text-2xl md:text-3xl font-bold gradient-text mb-2">
          When this service is useful
        </h2>
        <p className="text-gray-400 mb-8">
          Realistic situations where this kind of work usually makes sense.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {service.usefulWhen?.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-gray-600 bg-gray-900 p-5 md:p-6"
            >
              <h3 className="text-lg font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed m-0">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Capabilities */}
      <section id="capabilities" className="mb-16">
        <p className="text-cyan-400 text-xs font-semibold uppercase tracking-[0.14em] mb-2">
          Capabilities
        </p>
        <h2 className="text-2xl md:text-3xl font-bold gradient-text mb-2">
          What I can deliver
        </h2>
        <p className="text-gray-400 mb-8">
          Tangible deliverables that typically appear in these engagements.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {service.deliverables?.map((item, index) => (
            <div
              key={item.title}
              className="rounded-2xl border border-gray-600 bg-gray-900 p-5 md:p-6 flex flex-col gap-2"
            >
              <span className="text-cyan-400 font-mono text-xs font-semibold">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed m-0">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Technology */}
      <section className="mb-16">
        <p className="text-cyan-400 text-xs font-semibold uppercase tracking-[0.14em] mb-2">
          Technology
        </p>
        <h2 className="text-2xl md:text-3xl font-bold gradient-text mb-2">
          Technology considerations
        </h2>
        <p className="text-gray-400 mb-8">
          Tools and platforms I commonly use when they fit the project
          requirements and constraints.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {service.technology?.map((group) => (
            <div
              key={group.label}
              className="rounded-2xl border border-gray-600 bg-gray-900 p-5"
            >
              <h3 className="text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wider">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-800 text-gray-200 rounded-full text-xs font-medium border border-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="mb-16">
        <p className="text-cyan-400 text-xs font-semibold uppercase tracking-[0.14em] mb-2">
          Execution
        </p>
        <h2 className="text-2xl md:text-3xl font-bold gradient-text mb-2">
          Development Process
        </h2>
        <p className="text-gray-400 mb-8">
          Phased engineering lifecycle from discovery to production handoff.
        </p>
        <div className="space-y-3">
          {service.process?.map((step, index) => (
            <div
              key={step.title}
              className="rounded-2xl border border-gray-600 bg-gray-900 p-5 md:p-6 grid grid-cols-[48px_1fr] gap-4 items-start"
            >
              <span className="text-cyan-400 font-mono text-sm font-bold">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-white">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mt-1 m-0">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="mb-16">
        <p className="text-cyan-400 text-xs font-semibold uppercase tracking-[0.14em] mb-2">
          Questions
        </p>
        <h2 className="text-2xl md:text-3xl font-bold gradient-text mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-3">
          {service.faqs?.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={faq.question}
                className="rounded-2xl border border-gray-600 bg-gray-900 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? -1 : index)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="font-semibold text-white">
                    {faq.question}
                  </span>
                  <IoChevronDown
                    className={`shrink-0 text-cyan-400 transition-transform duration-150 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    size={18}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5">
                    <p className="text-gray-400 text-sm leading-relaxed m-0">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-2xl border border-gray-600 bg-gray-900 p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
        <div>
          <p className="text-cyan-400 text-xs font-semibold uppercase tracking-[0.14em] mb-2">
            Start a Project
          </p>
          <h2 className="text-2xl font-bold gradient-text mb-2">
            {service.ctaTitle || `Ready to discuss ${service.title}?`}
          </h2>
          <p className="text-gray-400 text-sm m-0 max-w-xl">
            Tell me about your product requirements, operational constraints, or
            system goals. I&apos;ll provide practical advice and a realistic
            delivery plan.
          </p>
        </div>
        <Link
          href="/contact-us"
          prefetch
          className="inline-flex items-center justify-center gap-2 hover-scale gradient-bg text-white font-medium text-sm rounded-lg px-5 py-2.5 shrink-0"
        >
          Discuss Your Project
          <HiArrowRight />
        </Link>
      </section>
    </div>
  );
};

export default ServiceDetail;
