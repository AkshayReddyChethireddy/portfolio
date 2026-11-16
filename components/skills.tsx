"use client";

import React from "react";
import { motion } from "framer-motion";
import { skillCategories } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { FiTerminal } from "react-icons/fi";

export default function Skills() {
  const { ref } = useSectionInView("Architecture", 0.2);

  return (
    <section
      ref={ref}
      id="architecture"
      className="py-16 sm:py-24 max-w-5xl mx-auto px-4 sm:px-6 border-t border-zinc-900"
    >
      <div className="space-y-12">
        {/* Section Header */}
        <div className="space-y-2">
          <div className="text-xs font-mono font-semibold uppercase tracking-widest text-blue-500 flex items-center gap-1.5">
            <FiTerminal className="w-3.5 h-3.5" />
            <span>Core Competencies & Tooling</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-sans">
            Technical Stack & System Architecture
          </h2>
          <p className="text-sm font-sans text-zinc-400 max-w-2xl">
            Categorized overview of languages, frameworks, storage engines, distributed brokers, and observability infrastructure actively run in production. Zero arbitrary percentage bars.
          </p>
        </div>

        {/* Categorized Technical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((group, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="p-5 rounded-xl bg-[#0c0c0e] border border-zinc-900 hover:border-zinc-800 transition flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between border-b border-zinc-900 pb-2.5">
                  <h3 className="text-sm font-bold text-white font-sans tracking-wide">
                    {group.name}
                  </h3>
                  <span className="text-[10px] font-mono text-zinc-400 bg-zinc-900 px-2 py-0.5 rounded">
                    {group.skills.length} tools
                  </span>
                </div>
                <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                  {group.description}
                </p>
              </div>

              {/* Skills tags */}
              <div className="flex flex-wrap gap-1.5 pt-4 mt-4 border-t border-zinc-900/80">
                {group.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300 font-medium hover:border-zinc-700 hover:text-white transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
