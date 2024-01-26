import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import genie from "@/public/genie.png";
import giftseeker from "@/public/giftseeker.png";
import restaurant from "@/public/restaurant.png";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const experiencesData = [
    {
        title: "Front End Developer",
        location: "Qpe (Appernity Technologies)",
        description:
            "I am working as a front end developer, managing the front end design department and responsible for functioning and seamless websites for business owners.",
        icon: React.createElement(CgWorkAlt),
        date: "Oct 2023 - Present",
    },
    {
        title: "Front End Developer",
        location: "DropTheQ",
        description:
            "I worked as a front end developer, managing the UI design and responsible for functioning and seamless user experience of the company website",
        icon: React.createElement(CgWorkAlt),
        date: "Aug 2022 - Aug 2023",
    },
    {
        title: "UI Designer/Editor",
        location: "Flixstock India Pvt. Ltd",
        description:
            "I worked as a photo editor for 1 year and 8 months in this job. I also upskilled to designer, creating prototypes and wireframes using Figma.",
        icon: React.createElement(CgWorkAlt),
        date: "Dec 2020 - July 2022",
    },
    
    {
        title: "IT Network Specialist",
        location: "Aptech Pvt. Ltd",
        description:
            "Did internship for 4 months, where I was responsible for managing and operating the network system used for online exams in Colleges.",
        icon: React.createElement(CgWorkAlt),
        date: "2019",
    },
   
] as const;

export const projectsData = [
    {
        title: "Genie AI SaaS",
        description:
            "Genie is a cutting-edge AI SaaS app powered by the ChatGPT API. It has the capabilities for chat, code, image, audio, and video creation. ",
        tags: ["React", "Next.js", "MySQL", "TypeScript", "Tailwind", "Prisma", "Stripe", "Clerk", "ChatGPT"],
        imageUrl: genie,
    },
    {
        title: "Gift Seeker",
        description:
            "It is a one-stop site to buy gifts from the internet, it was one of my first projects.",
        tags: ["React", "TypeScript", "Next.js", "Tailwind", "Strapi", "Clerk", "PostGresQL"],
        imageUrl: giftseeker,
    },
    {
        title: "Restaurant App",
        description:
            "A restaurant webapp with functionality for reserving a table and ordering food online.",
        tags: ["React", "Next.js", "JavaScript", "Tailwind", "Figma"],
        imageUrl: restaurant,
    },
] as const;

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Git",
    "Tailwind",
    "Figma",
    "shadcnUI",
    "Prisma",
    "MongoDB",
    "Express",
    "GraphQL",
    "PostgreSQL",
    "MySQL",
    "Python",
    "Django",
    "Recoil",
    "Supabase",
    "C++",
    "Linux",
    "Docker",
    "AWS",
    "Photoshop",
    "Framer Motion",
] as const;
