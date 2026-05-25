import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import { CgWorkAlt } from "react-icons/cg";
import { SiSpeedtest } from "react-icons/si";
import bmsCloneImg from "@/public/bmsCloneImg.png";
import skillSyncImg from "@/public/skillSyncImg.png";
import repoAnalyzerImg from "@/public/repoAnalyzerImg.png";
import mulaiImg from "@/public/mulaiImg.png";

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
    title: "Full-Stack Engineer",
    location: "Mobifintree",
    description:
      "Engineered high-performance product architectures, developing robust backends and dynamic, zero-latency user experiences. Spearheaded optimization workflows that dramatically cut load times and enhanced database security.",
    icon: React.createElement(SiSpeedtest),
    date: "2025 - Present",
  },
  {
    title: "Software Developer",
    location: "IndyaPay",
    description:
      "Constructed and optimized high-throughput backend services. Partnered with engineering leads to design Restful APIs, implement secure JWT authentication protocols, and refine database queries—resulting in improved system reliability in a live financial environment.",
    icon: React.createElement(CgWorkAlt),
    date: "Dec 2023 - Dec 2024",
  },
  {
    title: "Computer Science Undergraduate",
    location: "University of Massachusetts Lowell",
    description:
      "Graduated with a Bachelor of Science in Computer Science. Focused extensively on algorithms, object-oriented programming, and system designs. Researched state-of-the-art architectures in agentic AI.",
    icon: React.createElement(LuGraduationCap),
    date: "May 2025 - May 2026 (Graduated)",
  },
] as const;

export const projectsData = [
  {
    title: "Mulai BI System",
    description:
      "An autonomous, stateful business intelligence pipeline powered by LangGraph. Ingests raw invoices, receipts, and text logs, coordinates vision-enabled extractors, performs outlier/anomaly detection, and persists results securely to PostgreSQL with a SQLite fallback. Features custom secure headers and multi-stage container isolation.",
    tags: [
      "Python",
      "LangGraph",
      "FastAPI",
      "Gemini 1.5 Flash",
      "SQLAlchemy",
      "PostgreSQL",
      "Docker",
    ],
    imageUrl: mulaiImg,
  },
  {
    title: "RepoAnalyzer",
    description:
      "An AI-powered GitHub repository analyzer that instantly understands complex codebases through hierarchical dependency mapping and visual complexity scoring. Employs a Retrieval-Augmented Generation (RAG) agent to answer codebase queries in real-time.",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "RAG",
      "OpenAI",
      "REST APIs",
    ],
    imageUrl: repoAnalyzerImg,
  },
  {
    title: "SkillSync",
    description:
      "A personal practice momentum tracker that monitors learning consistency over time. Automatically detects stagnation cycles, tracks streaks with built-in grace periods, and dispatches automated notifications.",
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
      "A high-fidelity ticket booking application replicating complete live transaction flows. Manages complex client-side seat grids, dynamic booking stages, state persistence, and simulated payment integrations.",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "REST APIs",
    ],
    imageUrl: bmsCloneImg,
  },
] as const;

export const skillsData = [
  // Programming Languages
  "Python",
  "Java",
  "JavaScript",
  "C++",
  "C",
  
  // Frontend
  "React",
  "HTML",
  "CSS",
  "Vite",
  "Axios",
  "Tailwind CSS",
  "Framer Motion",
  
  // Backend
  "Spring Boot",
  "FastAPI",
  "SQLAlchemy",
  "Restful API",
  "JWT Authentication",
  
  // Databases
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "SQL",
  
  // Tools & Platforms
  "Git/GitHub",
  "Linux",
  "VS Code",
  "Jenkins",
  "Vercel",
  "Render",
  "Docker",
  
  // Core Concepts
  "Object-Oriented Programming",
  "Data Structures",
  "Algorithms",
  "Problem Solving",
  "Debugging",
  "Testing",
  "API Design",
  
  // AI / Machine Learning
  "LangGraph",
  "LangChain",
  "Retrieval Augmented Generation (RAG)",
  "LLM Integration",
  "Vector Databases",
] as const;
