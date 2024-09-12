"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { useSectionInView } from "@/lib/hooks";
import profile_image from "@/../public/assets/images/profile_image.jpeg";
import profile_image_dark from "@/../public/assets/images/profile_image_dark.jpeg";
import { useTheme } from "@/context/theme-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { theme } = useTheme();

  return (
    <section
      ref={ref}
      id="home"
      className="flex flex-col-reverse md:flex-row mb-28 max-w-[1024px] xl:max-w-[1024px] text-center scroll-mt-[100rem] gap-10"
    >

      <motion.div className="w-full md:w-[90%] flex flex-col items-center md:items-start justify-center">
        <motion.h1
          className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl text-center text-center md:text-left"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Hello, I am <span className="font-bold">Anurag.</span><br/>
          I'm a <span className="font-bold">Software Developer</span>
          <br/>with <span className="font-bold">1.5 years</span> of experience.
        </motion.h1>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
          }}
        >
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <div className="flex gap-4">
              <a
                className="group bg-white px-4 lg:px-7 py-4 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 transition cursor-pointer borderBlack dark:bg-white/10 text-sm"
                href={`/assets/docs/Anurag_Resume.pdf`}
                download
              >
                My Resume{" "}
                <HiDownload className="opacity-60 transition text-base" />
              </a>
            </div>

            <div className="flex gap-4">
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
          </div>
        </motion.div>
      </motion.div>
      
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
          src={theme === "light" ? profile_image : profile_image_dark}
          alt="Anurag Deol"
          // width={700}
          // height={50}
          priority={true}
          className="h-[250px] md:h-[300px] w-[250px] md:min-w-[300px] rounded-full md:rounded-[100px] object-cover shadow-xl"
        />
      </motion.div>
    </section>
  );
}
