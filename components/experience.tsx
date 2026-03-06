"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  return (
    <section
      id="experience"
      ref={ref}
      className="mb-28 scroll-mt-28 px-4 sm:mb-40"
    >
      <SectionHeading>My experience</SectionHeading>

      <div className="relative mx-auto max-w-4xl">
        {/* Vertical line */}
        <div
          className="
            absolute left-4 top-0 h-full w-[2px]
            bg-gray-300 dark:bg-gray-700
            sm:left-1/2 sm:-translate-x-1/2
          "
        />

        <ul className="flex flex-col gap-16">
          {experiencesData.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className={`
                  relative flex flex-col gap-4
                  sm:w-1/2
                  ${isLeft ? "sm:pr-12 sm:self-start" : "sm:pl-12 sm:self-end"}
                `}
              >
                {/* Dot */}
                <span
                  className="
                    absolute left-3 top-2 h-4 w-4 rounded-full
                    bg-gray-900 dark:bg-white
                    sm:left-1/2 sm:-translate-x-1/2
                  "
                />

                {/* Card */}
                <motion.div
                  whileHover={{ y: -4 }}
                  className="
                    rounded-2xl
                    bg-white/70 backdrop-blur-md
                    border border-black/10
                    p-6
                    shadow-lg
                    transition
                    dark:bg-neutral-900/60 dark:border-white/10
                  "
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{item.icon}</span>
                    <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                      {item.title}
                    </h3>
                  </div>

                  <p className="mt-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                    {item.location}
                  </p>

                  <p className="mt-3 text-sm leading-relaxed text-gray-700 dark:text-white/75">
                    {item.description}
                  </p>

                  <span className="mt-4 inline-block text-xs font-medium text-gray-400 dark:text-gray-500">
                    {item.date}
                  </span>
                </motion.div>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
