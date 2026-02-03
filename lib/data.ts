import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import { CgWorkAlt } from "react-icons/cg";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
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
