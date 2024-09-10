"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
// import { useSectionInView } from "@/lib/hooks";
// import { useActiveSectionContext } from "@/context/active-section-context";
import profile_image from "@/../public/assets/images/profile_image.jpg";

export default function Intro() {
  // const { ref } = useSectionInView("Home", 0.5);
  // const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      // ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <motion.div
        className="flex items-center justify-center"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "tween",
          duration: 0.2,
        }}
      >
        <Image
          src={profile_image}
          alt="Anurag Deol"
          width="192"
          height="192"
          priority={true}
          className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
        />
      </motion.div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I am Anurag.</span> I'm a{" "}
        <span className="font-bold">Software Developer</span> with{" "}
        <span className="font-bold">more than a year</span> of experience.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            // setActiveSection("Contact");
            // setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 transition cursor-pointer borderBlack dark:bg-white/10"
          href={`/assets/docs/Anurag_Resume.pdf`}
          download
        >
          Download Resume{" "}
          <HiDownload className="opacity-60 transition" />
        </a>

        <div className="flex gap-[6px]">
        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/anuragdeol/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/anuragDeol"
          target="_blank"
        >
          <FaGithubSquare />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://leetcode.com/anuragdeol"
          target="_blank"
        >
          <SiLeetcode />
        </a>
        </div>
      </motion.div>
    </section>
  );
}
