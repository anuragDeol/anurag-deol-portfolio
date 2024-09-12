"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";


export default function Project({
  title,
  description,
  tags,
  imageUrl,
  actions
}: {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  actions: {
    title: string;
    url: string;
    color?: string;
  }[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  const getActionButton = ({ title, url, className, index }: { title: string, url: string, className: string, index: number }) => {
    return (
      <a
        target="_blank"
        key={index}
        href={url}
        className={`relative flex p-4 text-left transition-opacity duration-100 ${className}`}
      >
        <span className="text-base font-bold">{title}</span>
        <FaArrowUpRightFromSquare className="text-base absolute bottom-5 right-5" />
      </a>
    );
  };

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0 hover:cursor-pointer"
    >
      <section className="position-relative bg-gray-100 max-w-[42rem] border border-black/5 sm:rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] transition sm:group-even:pl-8 dark:text-white dark:bg-white/10">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-40"
        />
        <div className="hidden sm:flex gap-5 absolute bottom-[10px] right-[15px] group-even:right-[initial] group-even:left-[15px]">
          {actions?.map((item, index) => (
            getActionButton({
              title: item.title,
              url: item.url,
              className: `h-[120px] w-[120px] rounded-2xl bg-black bg-opacity-40 backdrop-filter backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-100 text-gray-50`,
              index: index
            })
          ))}
        </div>
      </section>
      <div className="flex sm:hidden bottom-[10px] right-[15px] group-even:right-[initial] group-even:left-[15px]">
        {actions?.map((item, index) => (
          getActionButton({
            title: item.title,
            url: item.url,
            className: "flex-1 text-gray-70 bg-gray-100 dark:text-white/70 dark:bg-white/10 border-t-[1px] border-slate-300 dark:border-slate-700",
            index: index
          })
        ))}
      </div>
    </motion.div>
  );
}
