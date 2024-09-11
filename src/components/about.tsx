"use client";

import React from "react";
import SectionHeading from "@/components/section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import Link from "next/link";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a B.tech degree in Food technology from <Link href={`https://niftem.ac.in/`} target="_blank" className="underline">National Institute of Food Technology Entrepreneurship and Management, Kundli</Link>, I decided to pursue my passion for programming. It all started when I was in my third year of college, I came across an NPTEL course <Link href={`https://onlinecourses.nptel.ac.in/noc22_cs101/preview`} target="_blank" className="underline">Problem solving through programming in C</Link>. I was fascinated by the course, which increased my curiosity about programming and led me to enroll in a coding bootcamp. I learned Java, Data Structures & Algorithms and Full-Stack Web Development. After completing the bootcamp, I was selected to work as a <Link href={`https://www.codingninjas.com/`} target="_blank" className="underline">Teaching Assistant</Link>, where I helped students with Java and Data Structures & Algorithms.
      </p>

      <p>
        Currently, I am working as an SDE-I at <Link href={`https://www.deskera.com/`} target="_blank" className="underline">Deskera</Link>. My core stack is React, Next.js, Node.js, MongoDB and Express. I have hands-on experience in building responsive web apps using mentioned technologies along with TypeScript and Tailwind CSS. I'm currently looking for opportunities to work as a full-stack developer. If you have any opportunities, please feel free to <Link href={`#contact`} className="underline">reach out to me</Link>.
      </p>
    </motion.section>
  );
}
