import deskeraCopilot from "@/../public/assets/images/deskera-copilot.png";
import deskeraWebsite from "@/../public/assets/images/deskera-website.png";
import React from "react";
import { FaRegDotCircle } from "react-icons/fa";

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

export const projectsData = [
  {
    title: "Deskera Copilot",
    description:
      "Deskera Copilot is an AI assistant streamlining accounting, automating tasks, and enabling data-driven decisions for businesses.",
      // "Deskera Copilot is an AI-powered assistant, that automate routine tasks, generate insightful reports, and provide intelligent recommendations, enhancing productivity and decision-making for businesses. Streamlined accounting processes, improved accuracy, and enabled data-driven decisions through automation and optimization of business operations. I worked as a front-end developer on this project and took ownership of complete UI/UX implementation. The app is highly polished and each small consideration has been taken care of with user's perspective in mind.",
    tags: ["React", "deskera-ui-library"],
    imageUrl: deskeraCopilot,
  },
  {
    title: "Deskera Website",
    description:
      "Migrated Deskera's main website from Gatsby to Next.js, improving performance and scalability while ensuring seamless user experience.",
      // "Deskera Copilot is an AI-powered assistant, that automate routine tasks, generate insightful reports, and provide intelligent recommendations, enhancing productivity and decision-making for businesses. Streamlined accounting processes, improved accuracy, and enabled data-driven decisions through automation and optimization of business operations. I worked as a front-end developer on this project and took ownership of complete UI/UX implementation. The app is highly polished and each small consideration has been taken care of with user's perspective in mind.",
    tags: ["React", "Next", "Tailwind"],
    imageUrl: deskeraWebsite,
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
  "MongoDB",
  "Express",
  "Java",
  "Data Structures & Algorithms"
] as const;

export const experiencesData = [
  {
    title: "Teaching Assistant",
    location: "Remote",
    org: "Coding Ninjas",
    description:
      "I worked as a TA for Data Structures and Algorithms at Coding Ninjas' full-stack bootcamp for 4.5 months. During my tenure I resolved 1000+ doubts and received an extremely positive feedback rating of 4.9/5",
    icon: React.createElement(FaRegDotCircle),
    date: "Sept'22 - Jan'23",
  },
  {
    title: "Trainee SDE",
    location: "Remote",
    org: "Deskera",
    description:
      "4 months internship",
    icon: React.createElement(FaRegDotCircle),
    date: "June'23 - Oct'23",
  },
  {
    title: "SDE-I",
    location: "Remote",
    org: "Deskera",
    description:
      "I'm now a working as an SDE-I at Deskera.",
      icon: React.createElement(FaRegDotCircle),
    date: "Oct'23 - Present",
  },
] as const;