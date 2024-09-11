import deskeraCopilot from "@/../public/assets/images/deskera-copilot.png";
import deskeraWebsite from "@/../public/assets/images/deskera-website.png";
import deskeraBooks from "@/../public/assets/images/deskera-books.png";
import codeial from "@/../public/assets/images/codeial.png";
import findMyMeal from "@/../public/assets/images/find-my-meal.png";
import tenzies from "@/../public/assets/images/tenzies.png";
import musicPlayer from "@/../public/assets/images/music-player.png";
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
  {
    title: "Deskera Books",
    description:
      "Deskera Books is a comprehensive accounting platform that simplifies financial management for businesses.",
      // I contributed to the UI development, ensuring a user-friendly and efficient interface.",
    tags: ["React", "deskera-ui-library"],
    imageUrl: deskeraBooks,
  },
  {
    title: "Codeial",
    description:
      "Codeial is a social media platform where people can interact. It has all the basic features of a social media platform.",
    tags: ["EJS", "Node", "Express", "MongoDB"],
    imageUrl: codeial,
  },
  {
    title: "Find my meal",
    description:
      "Find My Meal is a meal finder app built during my bootcamp, allowing users to search, save, and view meal details with a persistent favorite meals list.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: findMyMeal,
  },
  {
    title: "Tenzies",
    description:
      "Tenzies is a fun little dice-rolling game where players aim to score points by rolling ten matching dice.",
    tags: ["React"],
    imageUrl: tenzies,
  },
  {
    title: "Music Player",
    description:
      "My first ever project, a music player built using HTML, CSS but no JavaScript.",
    tags: ["HTML", "CSS"],
    imageUrl: musicPlayer,
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
      "I worked as a TA for Data Structures and Algorithms at Coding Ninjas' full-stack bootcamp for 4.5 months. During my tenure I resolved 1000+ doubts and received a positive feedback rating of 4.9/5",
    icon: React.createElement(FaRegDotCircle),
    date: "Sept'22 - Jan'23",
  },
  {
    title: "Trainee SDE",
    location: "Remote",
    org: "Deskera",
    description:
      "I worked on Deskera AI Assistant from concept to implementation, evolving it into Deskera Copilot, which is now integrated in Deskera software suite. Also contributed to multiple Deskera projects, resolved support tickets, and gained knowledge of the company's workflows and processes.",
    icon: React.createElement(FaRegDotCircle),
    date: "June'23 - Oct'23",
  },
  {
    title: "SDE-I",
    location: "Remote",
    org: "Deskera",
    description:
      "Presently working as an SDE-I at Deskera, primarily building features for Deskera Copilot. Along with that I've worked in various teams within the company, including Deskera's main website and Deskera Books.",
      icon: React.createElement(FaRegDotCircle),
    date: "Oct'23 - Present",
  },
] as const;