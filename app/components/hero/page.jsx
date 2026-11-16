"use client";
import React from "react";
import { HiSparkles } from "react-icons/hi2";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative min-h-[100vh] overflow-hidden">
      <div className="absolute inset-0 w-full z-[-10] top-[-380px] lg:top-[-550px] animate-hero-video">
        <video
          src="/blackhole.webm"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="h-[900px] w-full lg:h-full object-cover"
        />
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 container mx-auto min-h-[100vh] items-center lg:px-12">
        <div className="py-12 lg:py-0">
          <div className="flex justify-center lg:justify-start">
            <div className="flex text-white items-center mt-24 lg:mt-0 gap-2 py-2 h-9 w-[280px] rounded-3xl px-4 bg-black/60">
              <HiSparkles className="text-[#b49bff]" />
              <p>Full Stack Developer Portfolio</p>
            </div>
          </div>

          <div className="text-4xl mt-8">
            <h1 className="text-white text-center lg:text-start font-bold uppercase">
              Providing{" "}
              <span className="gradient-text font-bold">the best</span>
            </h1>
            <h1 className="text-white mt-3 text-center lg:text-start font-bold uppercase">
              project experiences
            </h1>
          </div>

          <p className="text-md mt-8 text-center lg:text-start p-3 lg:p-0">
            Full-Stack MERN & Next.js Developer | React.js, Node.js, MongoDB{" "}
            <br /> Creating High-Performance Web Applications
          </p>

          <div className="flex justify-center lg:justify-start mt-8">
            <Link
              href="/cv.pdf"
              download="My_CV.pdf"
              className="px-4 py-3 hover-scale gradient-bg rounded-lg transition duration-150 inline-block text-center"
            >
              Download CV
            </Link>
          </div>
        </div>

        <div className="flex justify-center mt-12 lg:mt-0">
          <Image
            src="/mainIconsdark.svg"
            alt="Hero Image"
            width={500}
            height={500}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
