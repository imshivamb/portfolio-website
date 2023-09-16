"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";

import SubmitButton from "./submitButton";
import toast from "react-hot-toast";

const Contact = () => {
  const { ref } = useSectionInView("Contact", 0.5);

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 -mt-5 dark:text-white/70">
        Please contact me directly at{" "}
        <a
          className="underline font-bold"
          href="mailto:shivambhrdwj15@gmail.com"
        >
          shivambhrdwj15@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent Successfully!");
        }}
      >
        <input
          type="email"
          name="senderEmail"
          placeholder="Your email"
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none transition-all"
          required
          maxLength={500}
        />
        <textarea
          placeholder="Your Message"
          name="message"
          className="h-52 my-3 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none transition-all p-4"
          required
          maxLength={5000}
        />
        <SubmitButton />
      </form>
    </motion.section>
  );
};

export default Contact;
