"use client";

import Image from "next/image";
import React from "react";
import logo from "@/public/4.png";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { useActiveSectionContext } from "@/context/active-section-context";

const Main = () => {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src={logo}
              alt="Shivam profile picture"
              width={120}
              height={120}
              priority={true}
              className="h-24 w-24 rounded-full border-[0.3rem] border-white object-cover shadow-xl"
            />
          </motion.div>
        </div>
      </div>

      <motion.h1
        className="mb-10 px-4 text-xl font-medium !leading-[1.5] sm:text-3xl py-4"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Hi, I’m{" "}
        <span className="font-bold text-indigo-800 dark:text-indigo-300">
          Shivam
        </span>
        . I’m a{" "}
        <span className="font-bold text-indigo-800 dark:text-indigo-300">
          Full Stack Engineer
        </span>{" "}
        with expertise in{" "}
        <span className="font-semibold">
          Next.js, Tailwind, and Framer Motion
        </span>
        . I’ve built AI SaaS platforms, drag-and-drop workflow builders, and
        multimodal dashboards — blending technical execution with design polish
        to deliver fast, user-friendly applications.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-5 text-lg font-medium px-5"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="group flex items-center gap-2 text-white py-3 rounded-full px-7 bg-gray-900 
            outline-none focus:scale-110 hover:scale-110 hover:bg-gray-900 
            transition active:scale-105 shadow-lg shadow-gray-400 dark:shadow-gray-900 dark:shadow-md"
          onClick={() => {
            setActiveSection("Contact");
            setLastClick(Date.now());
          }}
        >
          Contact me{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a
          className="group cursor-pointer bg-white flex items-center gap-2 py-3 rounded-full px-7
             outline-none focus:scale-110 hover:scale-110 
            transition active:scale-105 shadow-lg shadow-gray-400 borderBlack dark:bg-white/20 dark:shadow-md dark:shadow-gray-900"
          href="/CV.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <a
          className="bg-white flex items-center text-gray-700 gap-2 p-4 rounded-full 
            outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-900 
            transition active:scale-105 shadow-lg shadow-gray-400 borderBlack dark:bg-white/20 dark:shadow-md dark:text-white/60 dark:shadow-gray-900"
          href="https://www.linkedin.com/in/shivam-bhardwaj-645b44286/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          className="bg-white flex items-center text-gray-700 gap-2 p-4 rounded-full 
            outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-900 
            transition active:scale-105 shadow-lg shadow-gray-400 borderBlack dark:bg-white/20 dark:shadow-md dark:text-white/60 dark:shadow-gray-900"
          href="https://github.com/imshivamb"
          target="_blank"
        >
          <FaGithub />
        </a>
      </motion.div>
    </section>
  );
};

export default Main;
