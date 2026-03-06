"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.02 * index,
      type: "spring",
      stiffness: 260,
      damping: 18,
      mass: 0.6,
    },
  }),
};


export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] px-4 scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>

      <ul className="flex flex-wrap justify-center gap-2 sm:gap-3">
        {skillsData.map((skill, index) => (
          <motion.li
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
            className="
              rounded-full
              border border-black/10
              bg-white/70 backdrop-blur-sm
              px-4 py-2
              text-sm font-medium text-gray-800
              shadow-sm
              transition
              hover:bg-white
              dark:border-white/10
              dark:bg-white/10
              dark:text-white/80
            "
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
