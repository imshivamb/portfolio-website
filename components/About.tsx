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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, sint
        inventore quae architecto, quos voluptatum ut eum at ratione, saepe sit
        corrupti aspernatur tenetur voluptate perspiciatis necessitatibus
        voluptatem quibusdam libero? Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Dignissimos qui quos voluptates natus, porro sunt
        debitis quod facere, eos doloribus velit quia explicabo saepe illum
        voluptatibus aspernatur dolorum magnam. Delectus? <br />
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo quis ad
        magnam eos quos? Deleniti quasi a accusamus molestiae natus, in non
        minima voluptatibus, ratione quis hic vero optio impedit!
      </p>
    </motion.section>
  );
};

export default About;
