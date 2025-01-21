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
      transition={{
        delay: 0.175,
      }}
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3 md:text-base text-sm">
        Hey there! I'm Shivam—a Full Stack Developer with a proven track record
        of building scalable solutions for international clients. My journey
        began with a curiosity for web development, which has evolved into
        expertise across the entire tech stack, from crafting intuitive
        frontends to architecting robust backend systems.
        <br />
        <br />
        At QPe, I've led the development of multiple high-impact projects,
        including websites that serve 100k+ monthly visitors. I've engineered
        everything from document management systems to real-time tracking
        features, always focusing on performance and user experience. My work
        with international clients on projects like tore.ai and easyvsl.com has
        honed my ability to deliver solutions that exceed expectations.
        <br />
        <br />
        My background in UX/UI design at FlixStock has given me a unique edge in
        creating applications that are not just functional but also delightful
        to use. I've developed a keen eye for detail through designing
        high-fidelity prototypes and implementing major UI overhauls that
        significantly boosted user engagement.
        <br />
        <br />
        Currently, I'm exploring advanced technologies like AI integration and
        Web3, as seen in my projects Alchemy and Krypt. I'm always excited to
        take on new challenges and create innovative solutions that make a real
        impact. Let's connect and build something extraordinary together! 🚀
      </p>
    </motion.section>
  );
};

export default About;
