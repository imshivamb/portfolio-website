import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import genie from "@/public/genie.png";
import giftseeker from "@/public/giftseeker.png";
import restaurant from "@/public/restaurant.png";

export const links = [
  { name: "Home", hash: "#home" },
  { name: "About", hash: "#about" },
  { name: "Projects", hash: "#projects" },
  { name: "Skills", hash: "#skills" },
  { name: "Experience", hash: "#experience" },
  { name: "Contact", hash: "#contact" },
] as const;

export const experiencesData = [
  {
    title: "Full Stack Engineer (Contract)",
    location: "Nutricheck (Remote)",
    description:
      "Built a full-scale AI SaaS frontend in Next.js, Tailwind, and Framer Motion with dashboards (biomarkers, food plans, chat, lab reports). Added multimodal features including wearables (Google Fit, Strava, Garmin), real-time WebSockets, voice mode (Speech-to-Text), and AI-powered Q&A. Also engineered backend APIs in Nest.js and a no-code admin builder with Vue/Nuxt.",
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2025 – Present",
  },
  {
    title: "Founding Frontend Engineer (Contract)",
    location: "KIWIQ.ai (Remote)",
    description:
      "Led the rebuild of an AI automation platform frontend in Next.js, Tailwind, and Framer Motion. Architected drag-and-drop workflows for agentic pipelines, built component libraries, and delivered polished UIs from sketches to production. Created demos for LinkedIn APIs leading to full platform access.",
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2025 – Jun 2025",
  },
  {
    title: "Full Stack Engineer",
    location: "QPe (Appernity Technologies, New Delhi)",
    description:
      "Built and scaled Next.js dashboards and storefront UIs for SaaS powering 100k+ monthly users. Delivered client projects (tore.ai, easyvsl.com, tribetale.com, surveytale.com, usertale.com) using React, Vue, Ember, and Ruby. Designed secure multi-user systems and managed AWS/GCP deployments.",
    icon: React.createElement(CgWorkAlt),
    date: "Sept 2023 – Dec 2024",
  },
  {
    title: "Frontend Developer",
    location: "DropTheQ (Noida)",
    description:
      "Engineered responsive React components for a restaurant service platform, cutting load times from 3s to 2.5s and boosting retention. Shipped new features and UI optimizations leading to a 4.5/5 user satisfaction rating.",
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2022 – Aug 2023",
  },
  {
    title: "UX/UI Designer / Frontend Developer",
    location: "FlixStock India Pvt. Ltd (Remote)",
    description:
      "Created high-fidelity Figma prototypes for 10+ features, driving adoption across markets. Designed and shipped 3 major UI overhauls in 6 months within 2-week sprint cycles.",
    icon: React.createElement(CgWorkAlt),
    date: "Dec 2020 – Jul 2022",
  },
] as const;

export const projectsData = [
  {
    title: "Draw Together",
    description:
      "Real-time collaborative drawing app for 50+ users with custom tools and scalable state management.",
    tags: ["Next.js", "TypeScript", "WebSockets", "Redis"],
    imageUrl: genie,
  },
  {
    title: "Paperly",
    description:
      "Research paper organizer with AI-powered analysis, PDF management, and collaborative notes.",
    tags: ["Next.js", "Prisma", "PostgreSQL", "OpenAI API"],
    imageUrl: giftseeker,
  },
  {
    title: "Lingo",
    description:
      "Video captioning tool with keyboard shortcuts, SRT/VTT export, and FFmpeg integration.",
    tags: ["Next.js", "Tailwind", "PostgreSQL"],
    imageUrl: restaurant,
  }
  
] as const;

export const skillsData = [
  "React.js",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind",
  "Framer Motion",
  "Zustand",
  "Redux",
  "Vue.js",
  "Nuxt.js",
  "Ember.js",
  "React Native",
  "Django",
  "FastAPI",
  "Node.js",
  "Nest.js",
  "Express",
  "Ruby on Rails",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Prisma",
  "Drizzle",
  "Supabase",
  "Sequelize",
  "Redis",
  "Celery",
  "Prefect",
  "Kafka",
  "GraphQL",
  "Python",
  "PyTorch",
  "LangGraph",
  "LangChain",
  "OpenAI API",
  "Vector DBs",
  "WebSockets",
  "Docker",
  "AWS",
  "GCP",
  "Nginx",
  "CI/CD",
  "Kubernetes",
  "Google Cloud Storage",
  "Figma",
  "Adobe XD",
  "shadcnUI",
  "Fabric.js",
  "Git",
  "GitHub Actions",
  "Linear",
  "Slack",
  "Discord",
  "Trello",
] as const;
