"use client";

import React from "react";
import Link from "next/link";
import Experience from "@/app/components/experience.jsx";
import { FaWhatsapp, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const skillGroups = [
  {
    title: "Frontend Technologies",
    items: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Vite",
      "Responsive Design",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "Backend & Database",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Authentication",
      "RBAC",
      "MySQL",
      "SQL Server (MSSQL)",
      "MongoDB",
    ],
  },
  {
    title: "Enterprise Systems",
    items: [
      "SAP Business One Integration",
      "ERP",
      "Warehouse Management System (WMS)",
      "CRM",
    ],
  },
  {
    title: "Languages",
    items: ["JavaScript", "Python", "Java", "C++", "C", "SQL"],
  },
  {
    title: "Practices",
    items: [
      "Agile Sprints",
      "Unit Testing",
      "Requirements Gathering",
      "Production Support",
      "Audit Logging",
    ],
  },
];

const featuredProjects = [
  {
    title: "Digital Office Management Engine (Enterprise ERP)",
    stack: "React.js, Node.js, MySQL",
    description:
      "A centralized ERP platform for Visole employees with modules for Business, Supply Chain, Inventory, HR, Recruitment, CRM Funnel and Travel & Visit Reporting. It includes sales and inventory dashboards, a Sales Forecast Dashboard for demand planning, complete recruitment and HR workflows, and automated CV parsing that auto-fills application fields to reduce manual data entry.",
  },
  {
    title: "Warehouse & Production Management System",
    stack:
      "React.js, Vite, Tailwind CSS, Node.js, Express.js, SQL Server, SAP Business One",
    description:
      "An enterprise WMS integrated with SAP Business One covering inventory, goods receipt/issue, GRN, purchasing, transfers, dispatch tracking with Proof of Delivery, and production monitoring. It features analytics dashboards (inventory aging, stock health and risk, machine efficiency, production cost analysis), role and permission-based access control, and centralized audit logging.",
  },
  {
    title: "Matrix (Mobile & Web Application)",
    stack: "Field service · Mobile & Web",
    description:
      "A platform to track daily activities, service visits and company instrument assets of field engineers. Mobile workflows capture visit reports with live location to validate visits, advance service tickets record planned activities, and a web module lets managers monitor performance, reports and assets.",
  },
  {
    title: "Nexify HR (SaaS Platform)",
    stack: "SaaS · HR Automation",
    description:
      "An end-to-end SaaS application that automates core HR workflows, including CV parsing, interview scheduling with calendar availability and automated reminders, performance tracking and analytics dashboards, and employee wellness.",
  },
  {
    title: "Advanced Billing System",
    stack: "Java, Java Swing",
    description:
      "A city-wide electricity billing system that automates bill calculation and tracks usage and previous bills, with an interactive GUI, file-based record storage and input validation to protect data integrity.",
  },
];

const achievements = [
  {
    title: "Management Team Lead",
    description:
      "Certificate for exemplary leadership at Career Expo COMSATS (2022/23).",
  },
  {
    title: "Marketing Head",
    description:
      "Badge for outstanding contributions as Marketing Head of the CSS Society, COMSATS.",
  },
  {
    title: "Runner-Up",
    description:
      "Second place in the Robo CI Competition organized by IEEE (2022).",
  },
];

const AboutMe = () => {
  return (
    <div className="container mx-auto text-gray-100 mt-20">
      <div className="mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="relative inline-block mb-6">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full blur opacity-75"></div>
            <div className="relative bg-gray-900 border border-gray-800 rounded-full p-2">
              <div className="bg-gray-800 rounded-full p-3">
                <div className="bg-gradient-to-br from-indigo-500 to-purple-600 w-24 h-24 rounded-full mx-auto flex items-center justify-center">
                  <span className="text-3xl font-bold">HA</span>
                </div>
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent gradient-text">
              Muhammad Hamad Ahmad
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Full Stack Developer | React &amp; Node.js Specialist | Enterprise
            ERP &amp; WMS Systems
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors flex items-center gap-2 text-sm"
            >
              <FaWhatsapp className="text-cyan-400" />
              WhatsApp
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors flex items-center gap-2 text-sm"
            >
              <FaLinkedin className="text-cyan-400" />
              LinkedIn
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors flex items-center gap-2 text-sm"
            >
              <FaGithub className="text-cyan-400" />
              GitHub
            </a>
            <a
              href="mailto:hamad1919ahmad@gmail.com"
              className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors flex items-center gap-2 text-sm"
            >
              <FaEnvelope className="text-cyan-400" />
              hamad1919ahmad@gmail.com
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <section className="lg:col-span-2 bg-gray-800/50 border border-gray-700 rounded-2xl p-6 shadow-xl">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <div className="w-2 h-8 gradient-bg rounded-full"></div>
              <span className="gradient-text">About Me</span>
            </h2>

            <div className="space-y-4 text-gray-300">
              <p>
                Hi, I&apos;m{" "}
                <span className="font-semibold text-indigo-300">
                  Muhammad Hamad Ahmad
                </span>
                , a Full Stack Developer from Islamabad who loves building
                software that real teams use every day, from clean, responsive
                interfaces to secure, scalable backends with Node.js, Express.js
                and SQL.
              </p>
              <p>
                At{" "}
                <span className="font-semibold text-indigo-300">
                  Visole Group of Companies
                </span>
                , I develop and maintain customized enterprise solutions,
                including the{" "}
                <span className="font-semibold text-indigo-300">
                  Digital Office Management Engine
                </span>
                , an ERP platform used across sales, inventory, HR and
                recruitment. I also work on a Warehouse and Production
                Management System integrated with SAP Business One. I work
                directly with core management to gather requirements and turn
                them into production-ready software.
              </p>
              <p>
                My projects range from ERP and warehouse systems to HR and CRM
                platforms, a field-engineer tracking app and a SaaS HR product.
                I regularly use REST APIs, JWT authentication, role-based access
                control and audit logging to deliver complete, secure solutions.
              </p>
              <p>
                Earlier in my journey, I built live client applications at{" "}
                <span className="font-semibold text-indigo-300">
                  Octaloop Technologies
                </span>{" "}
                with React.js, Next.js, Node.js and MongoDB, and started as a
                Front-End Developer Intern at Prodigy InfoTech. Beyond coding,
                I&apos;ve led teams at university as Management Team Lead and
                Marketing Head of the CSS Society, and I was runner-up in the
                Robo CI Competition organized by IEEE.
              </p>
            </div>
          </section>

          <section className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6 shadow-xl">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <div className="w-2 h-8 gradient-bg rounded-full"></div>
              <span className="gradient-text">Education</span>
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold">
                  COMSATS University Islamabad
                </h3>
                <p className="text-cyan-300">
                  Bachelor of Science in Computer Science (BS-CS)
                </p>
                <p className="text-gray-400">
                  2021 – 2026 | Islamabad, Pakistan
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold">GPGC Muzaffargarh</h3>
                <p className="text-cyan-300">
                  Intermediate in Computer Science (ICS)
                </p>
                <p className="text-gray-400">
                  2019 – 2021 | Muzaffargarh, Pakistan
                </p>
              </div>
            </div>
          </section>

          <section className="lg:col-span-3 bg-gray-800/50 border border-gray-700 rounded-2xl p-6 shadow-xl">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <div className="w-2 h-8 gradient-bg rounded-full"></div>
              <span className="gradient-text">Core Skills</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {skillGroups.map((group) => (
                <div key={group.title}>
                  <h3 className="text-lg font-semibold gradient-text mb-3">
                    {group.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 bg-indigo-900/50 text-indigo-200 rounded-full text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <section className="mt-12 bg-gray-800/50 border border-gray-700 rounded-2xl p-6 shadow-xl">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <div className="w-2 h-8 gradient-bg rounded-full"></div>
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <div className="space-y-6">
            {featuredProjects.map((project) => (
              <div
                key={project.title}
                className="bg-gray-900/60 border border-gray-700 rounded-xl p-5"
              >
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <p className="text-cyan-400 text-sm mt-1">{project.stack}</p>
                <p className="text-gray-300 mt-3 leading-relaxed">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Link
              href="/work"
              prefetch
              className="inline-flex items-center hover-scale gradient-bg text-white font-medium text-sm rounded-lg px-5 py-2.5"
            >
              View full work portfolio
            </Link>
          </div>
        </section>

        <section className="mt-12 bg-gradient-to-r from-indigo-900/30 to-purple-900/30 border border-indigo-500/30 rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-center gradient-text">
            Key Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((item) => (
              <div
                key={item.title}
                className="bg-gray-800/50 p-6 rounded-xl border border-indigo-500/30"
              >
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Experience />
    </div>
  );
};

export default AboutMe;
