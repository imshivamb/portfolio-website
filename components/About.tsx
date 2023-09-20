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
      <p className="mb-3">
        Hey there, I'm Shivam—a web developer and designer passionate about
        crafting exceptional online experiences. I began this journey as a
        self-taught enthusiast and quickly fell in love with the creative and
        technical aspects of the field. From mastering HTML and CSS to diving
        into JavaScript and beyond, my journey has been a constant learning
        curve. <br /> I'm not just about the code; I'm all about creating
        seamless solutions that balance functionality and aesthetics. I thrive
        on paying attention to the finer details, ensuring pixel-perfect
        results. Additionally, I've ventured into UI/UX design using tools like
        Figma, focusing on designs that not only look good but also enhance the
        user's journey. <br /> Known for my reliability and knack for
        problem-solving, I tackle challenges head-on. Whether working solo or
        with a team, my goal is to make the web a better place, one project at a
        time. <br /> Got a big idea or project in mind? Let's chat! I'm eager to
        bring my skills, creativity, and a dash of tech magic to your table.
        Let's create something amazing together! 🚀
      </p>
    </motion.section>
  );
};

export default About;
