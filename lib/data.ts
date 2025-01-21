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
        title: "Full Stack Engineer",
        location: "QPe (Appernity Technologies)",
        description:
            "Leading full-stack development for international clients, building scalable systems serving 100k+ monthly users. Developed multiple successful projects using Next.js, Django, and cloud services while managing complex data processing workflows.",
        icon: React.createElement(CgWorkAlt),
        date: "Sept 2023 - Nov 2024",
    },
    {
        title: "Frontend Developer",
        location: "DropTheQ",
        description:
            "Engineered responsive React components for restaurant service platform, reducing page load time by 0.5s. Implemented key features and UI optimizations achieving 4.5/5 user satisfaction rating.",
        icon: React.createElement(CgWorkAlt),
        date: "Aug 2022 - Aug 2023",
    },
    {
        title: "UX/UI Designer / Frontend Developer",
        location: "FlixStock India Pvt. Ltd",
        description:
            "Created high-fidelity Figma prototypes for 10+ key features, driving rapid product adoption. Led 3 major UI overhauls in 6 months while maintaining aggressive 2-week sprint cycles.",
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
    "FastAPI",
    "Redis",
    "Docker",
    "AWS",
    "Vue.js",
    "Solidity",
    "Web3.js",
    "Supabase",
    "Drizzle",
    "Linux",
    "Nginx",
    "CI/CD",
    "Framer Motion",
    "AdobeXD",
    "Fabric.js",
] as const;