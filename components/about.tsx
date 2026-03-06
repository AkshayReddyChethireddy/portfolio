"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      id="about"
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15 }}
    >
      <SectionHeading>About me</SectionHeading>

      <p className="mb-4">
        I’m a <span className="font-medium">Computer Science undergraduate</span>{" "}
        with a strong interest in building reliable, user-focused software. I
        enjoy working across the stack, from designing clean and responsive
        interfaces to developing backend logic and working with databases. What
        I enjoy most about programming is breaking down complex problems and
        turning them into practical solutions.
      </p>

      <p className="mb-4">
        Through academic projects and internship experience, I’ve worked with{" "}
        <span className="font-medium">
          React, Node.js, REST APIs, SQL, and Java-based backends
        </span>
        . I care a lot about writing clean, maintainable code and understanding
        how systems work end to end, not just getting something to function once.
        I’m always looking to improve my skills and learn technologies that help
        me build better software.
      </p>

      <p>
        Outside of development, I like staying curious and learning new things
        beyond tech. I enjoy problem-solving in general, whether that’s through
        coding, exploring new topics, or working on personal projects. I’m
        currently focused on growing as a{" "}
        <span className="font-medium">full-stack developer</span> and preparing
        for full-time software engineering roles.
      </p>
    </motion.section>
  );
}
