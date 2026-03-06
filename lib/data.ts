import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import { CgWorkAlt } from "react-icons/cg";
import bmsCloneImg from "@/public/bmsCloneImg.png";
import skillSyncImg from "@/public/skillSyncImg.png";


export const links = [
  { name: "Home", hash: "#home" },
  { name: "About", hash: "#about" },
  { name: "Projects", hash: "#projects" },
  { name: "Skills", hash: "#skills" },
  { name: "Experience", hash: "#experience" },
  { name: "Contact", hash: "#contact" },
] as const;

export const experiencesData = [
  {
    title: "Computer Science Student",
    location: "University of Massachusetts Lowell",
    description:
      "Pursuing a Bachelor's degree in Computer Science with a strong foundation in data structures, algorithms, and software engineering. Built multiple academic and personal projects focused on full-stack development, system design, and clean, maintainable code.",
    icon: React.createElement(LuGraduationCap),
    date: "2025 - Present",
  },
  {
    title: "Software Developer Intern",
    location: "IndyaPay",
    description:
      "Worked on building and improving backend services and internal tools. Collaborated with engineers to implement features, debug issues, and optimize database queries, improving system performance and reliability in a production environment.",
    icon: React.createElement(CgWorkAlt),
    date: "Dec 2023 - Dec 2024",
  },
] as const;

export const projectsData = [
  {
    title: "SkillSync",
    description:
      "A learning momentum tracker that measures your skill progression over time. SkillSync detects when you're stagnating, tracks daily practice streaks with grace periods, and sends stagnation alerts so you always know if you're actually improving.",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "REST APIs",
    ],
    imageUrl: skillSyncImg,
  },
  {
    title: "BookMyShow Clone",
    description:
      "Built a BookMyShow-style ticket booking application using Lovable to accelerate UI development while implementing core booking flows, state management, and API integrations. The project focuses on real-world user flows such as browsing events, seat selection, and booking confirmation.",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "Lovable",
      "Tailwind CSS",
      "REST APIs",
    ],
    imageUrl: bmsCloneImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "REST APIs",
  "JWT Authentication",
  "PostgreSQL",
  "MongoDB",
  "SQL",
  "Python",
  "Java",
  "C++",
  "Git",
  "GitHub",
  "Linux",
  "Spring Boot",
  "Framer Motion",
  "Data Structures",
  "Algorithms",
] as const;
