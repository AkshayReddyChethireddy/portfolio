"use client";

import React from "react";
import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowRight } from "react-icons/fi";

export default function Intro() {
  const { ref } = useSectionInView("Overview", 0.3);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="overview"
      className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 max-w-5xl mx-auto px-4 sm:px-6"
    >
      <div className="space-y-8">
        {/* Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Available for Software Engineering Roles</span>
          <span className="text-zinc-600">|</span>
          <span className="text-zinc-400">Lowell, MA &middot; Relocating / Remote</span>
        </motion.div>

        {/* Headline */}
        <div className="space-y-3">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="text-4xl sm:text-6xl font-bold tracking-tight text-white font-sans"
          >
            Akshay Chethireddy
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-xl sm:text-2xl font-mono text-zinc-400 tracking-tight"
          >
            Distributed Systems <span className="text-zinc-600">&middot;</span> Payment Microservices <span className="text-zinc-600">&middot;</span> Production AI
          </motion.div>
        </div>

        {/* 2-Sentence Production Summary */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="max-w-3xl text-base sm:text-lg leading-relaxed text-zinc-300 font-sans font-normal"
        >
          {personalInfo.summary}
        </motion.p>

        {/* Direct Action Links */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-wrap items-center gap-3 pt-2"
        >
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-zinc-100 text-zinc-950 font-mono text-xs font-semibold hover:bg-white transition"
          >
            <FiGithub className="w-4 h-4" />
            <span>GitHub</span>
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-200 font-mono text-xs font-medium hover:bg-zinc-800 hover:text-white transition"
          >
            <FiLinkedin className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>

          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-200 font-mono text-xs font-medium hover:bg-zinc-800 hover:text-white transition"
          >
            <FiMail className="w-4 h-4" />
            <span>{personalInfo.email}</span>
          </a>

          <a
            href={personalInfo.resumePath}
            download
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-200 font-mono text-xs font-medium hover:bg-zinc-800 hover:text-white transition"
          >
            <FiDownload className="w-4 h-4" />
            <span>Resume (PDF)</span>
          </a>

          <a
            href="#projects"
            onClick={() => {
              setActiveSection("Projects");
              setTimeOfLastClick(Date.now());
            }}
            className="inline-flex items-center gap-1.5 px-3 py-2.5 text-zinc-400 hover:text-white font-mono text-xs transition ml-1"
          >
            <span>View Architecture</span>
            <FiArrowRight className="w-3.5 h-3.5" />
          </a>
        </motion.div>

        {/* Benchmarks / Metrics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="pt-6 grid grid-cols-2 md:grid-cols-4 gap-3 border-t border-zinc-900"
        >
          {personalInfo.metrics.map((metric, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-lg bg-[#0c0c0e] border border-zinc-900 space-y-1"
            >
              <div className="text-xl sm:text-2xl font-mono font-bold text-white tracking-tight">
                {metric.value}
              </div>
              <div className="text-[11px] font-mono text-zinc-400 font-medium">
                {metric.label}
              </div>
              <div className="text-[10px] text-zinc-500 font-sans leading-tight">
                {metric.detail}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
