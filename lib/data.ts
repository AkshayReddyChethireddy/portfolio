import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import { CgWorkAlt } from "react-icons/cg";
import { SiSpeedtest } from "react-icons/si";
import bmsCloneImg from "@/public/bmsCloneImg.png";
import skillSyncImg from "@/public/skillSyncImg.png";
import repoAnalyzerImg from "@/public/repoAnalyzerImg.png";
import mulaiImg from "@/public/mulaiImg.png";
import patientAdvocateImg from "@/public/patientAdvocate.png";

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
    title: "Software Engineer",
    location: "Mobifintree",
    description:
      "Contributed to building IndyaPay, a digital payment fintech platform. Engineered robust Restful APIs and backend services using Java, Spring Boot, and PostgreSQL, reducing latency by 40% and increasing throughput. Built responsive merchant and admin dashboards using React and TypeScript. Integrated third-party payment gateways with AWS API Gateway, OAuth, JWT, and automated CI/CD pipelines with Jenkins and Docker.",
    icon: React.createElement(SiSpeedtest),
    date: "Dec 2023 - Apr 2025",
  },
  {
    title: "Software Developer",
    location: "ThreePointO Labs (3.0 Labs)",
    description:
      "Developed full-stack web applications and AI solutions using Python, FastAPI, React, TypeScript, and Azure. Built scalable Azure cloud-hosted backends with RESTful APIs in Docker containers. Integrated Retrieval-Augmented Generation (RAG) and LLM models using Azure OpenAI Service. Collaborated on key platforms including FundPitch, BFSI Skill Portal, Blue Cross Hyderabad Operations, and VDTS mobility products.",
    icon: React.createElement(CgWorkAlt),
    date: "Nov 2022 - Nov 2023",
  },
  {
    title: "BS in Computer Science",
    location: "University of Massachusetts Lowell",
    description:
      "Graduated with a Bachelor of Science in Computer Science. Achieved a GPA of 3.88/4 and was named a Chancellor's List Student.",
    icon: React.createElement(LuGraduationCap),
    date: "May 2025 - May 2026",
  },
  {
    title: "BS in Computer Science (Abroad Program)",
    location: "SR International Institute of Technology",
    description:
      "Completed a Bachelor of Science in Computer Science with a GPA of 9/10, leading to selection for the prestigious abroad program at UMass Lowell.",
    icon: React.createElement(LuGraduationCap),
    date: "Aug 2022 - Apr 2025",
  },
] as const;

export const projectsData = [
  {
    title: "The Patient Advocate",
    description:
      "An AI-powered medical bill auditing system designed to protect patients from excessive, upcoded charges. Integrates a custom HIPAA Shield interactive PII redactor in the frontend, runs OCR bill extraction, and executes a multi-stage LangGraph backend pipeline to audit CPT codes against official CMS schedules, flagging anomalies and generating customized dispute packages.",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "FastAPI",
      "LangGraph",
      "SQLAlchemy",
      "SQLite",
      "TailwindCSS",
    ],
    imageUrl: patientAdvocateImg,
  },
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
    title: "GitHub Repository Analyzer",
    description:
      "Engineered an AI-powered code intelligence platform that analyzes public GitHub repositories to generate technology stacks, summaries, and dependency maps. Designed a LangChain RAG pipeline using ChromaDB and Jina Embeddings for codebase Q&A. Developed asynchronous distributed workflows with Celery and Redis to support long-running analyzer tasks.",
    tags: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "LangChain",
      "ChromaDB",
      "Redis",
      "Celery",
      "Groq",
      "Docker",
    ],
    imageUrl: repoAnalyzerImg,
  },
  {
    title: "SkillSync",
    description:
      "A learning analytics SaaS platform tracking progression and practice momentum. Developed a FastAPI backend with JWT, SQLAlchemy ORM, and PostgreSQL for activity and streak calculations. Built a React and TypeScript frontend using Zustand for global state management and Axios for secure API transactions.",
    tags: [
      "React",
      "TypeScript",
      "FastAPI",
      "Zustand",
      "SQLAlchemy",
      "PostgreSQL",
      "Render",
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
  "Java",
  "Python",
  "JavaScript",
  "TypeScript",
  "SQL",
  "C++",
  "C",
  
  // Backend
  "Spring Boot",
  "FastAPI",
  "REST APIs",
  "Microservices",
  "JWT Authentication",
  "OAuth 2.0",
  "SQLAlchemy",
  "Celery",
  "Redis",
  
  // Frontend
  "React.js",
  "TypeScript",
  "TailwindCSS",
  "HTML5",
  "CSS3",
  "Axios",
  "Zustand",
  "Vite",
  "Framer Motion",
  
  // Databases
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "ChromaDB",
  
  // Cloud & DevOps
  "AWS",
  "GCP",
  "Azure",
  "Docker",
  "Jenkins",
  "CI/CD",
  "Linux",
  "Git/GitHub",
  "Vercel",
  "Render",
  
  // Testing
  "JUnit",
  "PyTest",
  "Jest",
  
  // AI & Machine Learning
  "LangChain",
  "LangGraph",
  "Retrieval-Augmented Generation (RAG)",
  "Vector Databases",
  "Embeddings",
  "Prompt Engineering",
  
  // Core Concepts
  "Data Structures & Algorithms",
  "Object-Oriented Programming",
  "Design Patterns",
  "Agile/Scrum",
  "System Design",
] as const;
