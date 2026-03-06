"use client";

import { useRef, useState } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 sm:mb-8 last:mb-0 cursor-pointer"
      onClick={() => setIsExpanded((prev) => !prev)}
    >
      <motion.section
        layout
        transition={{ layout: { duration: 0.35, ease: "easeInOut" } }}
        className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20"
      >
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full justify-between sm:group-even:ml-[18rem]">
          <div>
            <h3 className="text-2xl font-semibold">{title}</h3>

            <motion.p
              layout
              transition={{ duration: 0.3 }}
              className={`mt-2 leading-relaxed text-gray-700 dark:text-white/70 ${
                isExpanded ? "" : "sm:line-clamp-4"
              }`}
            >
              {description}
            </motion.p>

            {!isExpanded && (
              <p className="mt-2 text-xs text-gray-500 dark:text-white/50">
                Click to expand
              </p>
            )}
          </div>

          <ul className="flex flex-wrap gap-2 pt-4">
            {tags.map((tag, index) => (
              <li
                key={index}
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={imageUrl}
          alt="Project preview"
          quality={95}
          className={`absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl transition
            ${
              isExpanded
                ? "scale-100 translate-x-0 translate-y-0 rotate-0"
                : "group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2"
            }

            group-even:right-[initial]
            group-even:-left-40`}
        />
      </motion.section>
    </motion.div>
  );
}
