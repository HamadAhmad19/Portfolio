"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const About = () => {
  const [activeCard, setActiveCard] = useState(0);

const skills = [
  // Frontend
  { name: "React.js", level: 88 },
  { name: "Next.js", level: 86 },
  { name: "Tailwind CSS", level: 90 },
  { name: "JavaScript (ES6+)", level: 82 },
  { name: "Responsive Design", level: 95 },

  // Backend
  { name: "Node.js", level: 80 },
  { name: "Express.js", level: 78 },

  // Database
  { name: "MongoDB", level: 83 },
  { name: "Mongoose", level: 80 },

  // Full-Stack / API
  { name: "REST APIs", level: 80 },
  { name: "Authentication (JWT)", level: 82 },

  // Tools / Cloud / DevOps
  { name: "Cloudinary (Image Cloud)", level: 88 },
  { name: "Git & GitHub", level: 84 },
  { name: "Postman / API Testing", level: 88 },
  { name: "Deployment (Vercel / Render)", level: 80 }
];


const timeline = [
  {
    year: "2022",
    title: "Started My Web Development Journey",
    description:
      "Began learning the fundamentals of HTML, CSS, and JavaScript. Built my first simple projects and became passionate about web development.",
  },
  {
    year: "2023",
    title: "Focused on Frontend Development",
    description:
      "Mastered React, Next.js, and Tailwind CSS. Built responsive, modern UIs and improved my understanding of frontend architecture.",
  },
  {
    year: "2024",
    title: "Expanded Into Backend Development",
    description:
      "Learned Node.js, Express, and MongoDB. Created REST APIs, handled authentication, connected databases, and deployed full-stack applications.",
  },
  {
    year: "2024",
    title: "Built Full-Stack Projects",
    description:
      "Worked on complete applications including dashboards, e-commerce modules, authentication systems, and real-world CRUD solutions.",
  },
  {
    year: "2025",
    title: "Growing as a Full-Stack Developer",
    description:
      "Actively building scalable, production-ready apps using the MERN stack. Continuously improving skills and staying updated with modern web technologies.",
  },
];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % timeline.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [timeline.length]);

  // Create refs for each text element
  const headerRef = useRef(null);
  const paragraph1Ref = useRef(null);
  const paragraph2Ref = useRef(null);
  const paragraph3Ref = useRef(null);
  const skillsRef = useRef(null);
  const timelineRef = useRef(null);

  // Check if elements are in view
  const headerInView = useInView(headerRef, {
    once: true,
    margin: "-100px 0px 0px 0px",
  });
  const p1InView = useInView(paragraph1Ref, {
    once: true,
    margin: "-100px 0px 0px 0px",
  });
  const p2InView = useInView(paragraph2Ref, {
    once: true,
    margin: "-100px 0px 0px 0px",
  });
  const p3InView = useInView(paragraph3Ref, {
    once: true,
    margin: "-100px 0px 0px 0px",
  });
  const skillsInView = useInView(skillsRef, {
    once: true,
    margin: "-100px 0px 0px 0px",
  });
  const timelineInView = useInView(timelineRef, {
    once: true,
    margin: "-100px 0px 0px 0px",
  });

  // Animation variants
  const fadeUp = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <section
        id="about"
        className="relative bg-gradient-to-br text-white py-20 "
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-soft-light filter blur-3xl animate-blob"></div>
          <div className="absolute top-40 right-20 w-64 h-64 bg-emerald-500 rounded-full mix-blend-soft-light filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/3 w-60 h-60 bg-cyan-500 rounded-full mix-blend-soft-light filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto">
          <div className="mb-16" ref={headerRef}>
            <motion.h2
              className="text-center text-4xl gradient-text font-bold"
              variants={fadeUp}
              initial="hidden"
              animate={headerInView ? "visible" : "hidden"}
            >
              About Me
            </motion.h2>
            <motion.p
              className="text-center text-2xl gradient-text mt-2"
              variants={fadeUp}
              initial="hidden"
              animate={headerInView ? "visible" : "hidden"}
              transition={{ delay: 0.1 }}
            >
              Full-stack JavaScript developer crafting performant, end-to-end
              web experiences
            </motion.p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[8fr_5fr] gap-8 px-4 lg:px-12">
            {/* Left Column - Content Section */}
            <div className="rounded-2xl p-6 md:p-8 border border-gray-700/50">
              <div ref={paragraph1Ref}>
                <motion.p
                  className="text-gray-200 mb-6 text-lg"
                  variants={fadeUp}
                  initial="hidden"
                  animate={p1InView ? "visible" : "hidden"}
                >
                  I&apos;m a passionate Full-Stack Developer focused on building
                  modern, scalable web applications from front to back. On the
                  frontend I work with React, Next.js, and Tailwind CSS, while
                  on the backend I build robust APIs using Node.js, Express, and
                  MongoDB.
                </motion.p>
              </div>

              <div ref={paragraph2Ref}>
                <motion.p
                  className="text-gray-400 mb-6"
                  variants={fadeUp}
                  initial="hidden"
                  animate={p2InView ? "visible" : "hidden"}
                  transition={{ delay: 0.1 }}
                >
                  My journey started with frontend development, but I was always
                  curious about what happens behind the scenes—how APIs work,
                  how data is stored, and how everything connects. That
                  curiosity pushed me into backend development, where I learned
                  to design REST APIs, handle authentication, and work with
                  databases.
                </motion.p>
              </div>

              <div ref={paragraph3Ref}>
                <motion.p
                  className="text-gray-400 mb-10"
                  variants={fadeUp}
                  initial="hidden"
                  animate={p3InView ? "visible" : "hidden"}
                  transition={{ delay: 0.2 }}
                >
                  Today, I build full-stack applications with performance,
                  security, and user experience in mind. I enjoy taking projects
                  from idea to deployment, connecting clean UIs with reliable
                  backend logic, and I&apos;m always learning new tools and best
                  practices across the entire web stack.
                </motion.p>
              </div>

              <div ref={skillsRef} className="mt-10">
                <motion.h3
                  className="text-xl gradient-text font-bold mb-6"
                  variants={fadeUp}
                  initial="hidden"
                  animate={skillsInView ? "visible" : "hidden"}
                >
                  My Skills
                </motion.h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      className="bg-gray-800/50 p-4 rounded-xl border border-gray-700 hover:border-cyan-500/30 transition-all hover:scale-[1.03]"
                      variants={fadeUp}
                      initial="hidden"
                      animate={skillsInView ? "visible" : "hidden"}
                      transition={{ delay: 0.1 * (index + 1) }}
                    >
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-cyan-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-cyan-500 to-indigo-500 h-2 rounded-full"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Timeline */}
            <div ref={timelineRef}>
              <motion.h3
                className="text-xl font-bold mb-6 text-center gradient-text"
                variants={fadeUp}
                initial="hidden"
                animate={timelineInView ? "visible" : "hidden"}
              >
                My Journey
              </motion.h3>
              <motion.div
                className="relative"
                variants={fadeUp}
                initial="hidden"
                animate={timelineInView ? "visible" : "hidden"}
                transition={{ delay: 0.1 }}
              >
                {/* Vertical line */}
                <div className="absolute left-[7px] top-0 h-full w-0.5 gradient-bg z-0"></div>

                <div className="relative space-y-8 pl-12">
                  {timeline.map((item, index) => (
                    <div
                      key={index}
                      className={`relative transition-all duration-500 transform ${
                        activeCard === index
                          ? "scale-105"
                          : "scale-95 opacity-70"
                      }`}
                    >
                      <div className="absolute -left-12 top-0 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-600 to-indigo-600 flex items-center justify-center z-10 shadow-lg">
                        <span className="text-xs font-bold">{item.year}</span>
                      </div>
                      <div
                        className={`bg-gray-800/50 backdrop-blur-sm p-5 rounded-xl border ${
                          activeCard === index
                            ? "border-cyan-500/50"
                            : "border-gray-700"
                        } transition-all cursor-pointer`}
                        onClick={() => setActiveCard(index)}
                      >
                        <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                        <p className="text-gray-400">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
