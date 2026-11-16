"use client";

import React from "react";
import { personalInfo } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowRight } from "react-icons/fi";

export default function Intro() {
  const { ref } = useSectionInView("Overview", 0.3);

  return (
    <section
      ref={ref}
      id="overview"
      className="pt-24 pb-14 sm:pt-32 sm:pb-16 max-w-5xl mx-auto px-4 sm:px-6"
    >
      <div className="space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-mono text-slate-700 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-600" />
          <span className="font-medium">Open to Software Engineering Roles</span>
          <span className="text-slate-300">|</span>
          <span className="text-slate-500">Lowell, MA (Relocating or Remote)</span>
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 font-sans">
            Akshay Chethireddy
          </h1>
          <div className="text-lg sm:text-xl font-mono text-blue-700 font-semibold tracking-tight">
            Distributed Systems &middot; Payment Microservices &middot; Backend Infrastructure
          </div>
        </div>

        <p className="max-w-3xl text-sm sm:text-base leading-relaxed text-slate-600 font-sans">
          {personalInfo.summary}
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-1">
          <a
            href={personalInfo.resumePath}
            download
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-blue-700 text-white font-mono text-xs font-semibold hover:bg-blue-800 transition shadow-sm"
          >
            <FiDownload className="w-4 h-4" />
            <span>Download Resume</span>
          </a>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white border border-slate-200 text-slate-700 font-mono text-xs font-medium hover:bg-slate-50 hover:border-slate-300 transition shadow-sm"
          >
            <FiGithub className="w-4 h-4" />
            <span>GitHub</span>
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white border border-slate-200 text-slate-700 font-mono text-xs font-medium hover:bg-slate-50 hover:border-slate-300 transition shadow-sm"
          >
            <FiLinkedin className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>

          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white border border-slate-200 text-slate-700 font-mono text-xs font-medium hover:bg-slate-50 hover:border-slate-300 transition shadow-sm"
          >
            <FiMail className="w-4 h-4" />
            <span>{personalInfo.email}</span>
          </a>

          <a
            href="#projects"
            className="inline-flex items-center gap-1.5 px-3 py-2.5 text-slate-600 hover:text-slate-900 font-mono text-xs transition"
          >
            <span>Inspect Projects</span>
            <FiArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="pt-4 grid grid-cols-2 md:grid-cols-4 gap-3 border-t border-slate-200">
          {personalInfo.metrics.map((metric, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-lg bg-white border border-slate-200 shadow-sm space-y-1"
            >
              <div className="text-xl sm:text-2xl font-mono font-bold text-slate-900 tracking-tight">
                {metric.value}
              </div>
              <div className="text-[11px] font-mono text-slate-700 font-medium">
                {metric.label}
              </div>
              <div className="text-[11px] text-slate-500 font-sans leading-tight">
                {metric.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
