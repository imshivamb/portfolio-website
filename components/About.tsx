"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

const About = () => {
  const { ref } = useSectionInView("About", 0.75);

  return (
    <motion.section
      ref={ref}
      id="about"
      className="mb-28 max-w-[50rem] text-center leading-8 scroll-mt-36"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3 md:text-base text-sm">
        Hey, I’m Shivam — a Full Stack Engineer with almost 5 years of
        experience building SaaS platforms and AI-powered applications. I’ve
        worked across the stack, but I specialize in frontend development with
        <span className="font-semibold">
          {" "}
          Next.js, Tailwind, and Framer Motion
        </span>
        , turning rough ideas into polished, production-ready UIs.
        <br />
        <br />
        Recently, at <span className="font-semibold">Nutricheck</span>, I built
        a full-scale AI SaaS app with multimodal features like wearable
        integrations (Google Fit, Strava, Garmin), voice mode, image uploads,
        and real-time WebSocket updates. At{" "}
        <span className="font-semibold">KIWIQ.ai</span>, I was the founding
        frontend engineer, designing a drag-and-drop workflow builder for
        AI-driven pipelines that became the product’s core feature.
        <br />
        <br />
        Before that, I led SaaS dashboard development at{" "}
        <span className="font-semibold">QPe</span>, powering 100k+ monthly
        visitors, and I started my journey with frontend + UX design at
        FlixStock. My focus has always been blending technical execution with
        design polish to create user experiences that feel fast and intuitive.
      </p>
    </motion.section>
  );
};

export default About;
