"use client";

import React from "react";
import { motion } from "framer-motion";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { FiBriefcase, FiCheckCircle } from "react-icons/fi";

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.2);

  return (
    <section
      ref={ref}
      id="experience"
      className="py-16 sm:py-24 max-w-5xl mx-auto px-4 sm:px-6 border-t border-zinc-900"
    >
      <div className="space-y-12">
        {/* Section Header */}
        <div className="space-y-2">
          <div className="text-xs font-mono font-semibold uppercase tracking-widest text-blue-500">
            Career & Engineering History
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-sans">
            Production Experience
          </h2>
          <p className="text-sm font-sans text-zinc-400 max-w-2xl">
            Track record designing high-availability payment systems, distributed microservices, and enterprise AI workflows.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative border-l border-zinc-800 ml-2 sm:ml-4 pl-6 sm:pl-8 space-y-12">
          {experiencesData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Timeline marker */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-3.5 h-3.5 rounded-full bg-[#09090b] border-2 border-zinc-600 group-hover:border-blue-500 transition-colors" />

              <div className="p-6 rounded-xl bg-[#0c0c0e] border border-zinc-900 hover:border-zinc-800 transition space-y-4">
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 border-b border-zinc-900/80 pb-4">
                  <div>
                    <h3 className="text-lg font-bold text-white font-sans flex items-center gap-2">
                      <span>{item.role}</span>
                      <span className="text-zinc-600 font-normal">/</span>
                      <span className="text-zinc-300 font-medium">{item.company}</span>
                    </h3>
                    <div className="text-xs font-mono text-zinc-400 mt-1">
                      {item.headline}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 shrink-0">
                    <span className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800">
                      {item.period}
                    </span>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-2.5">
                  {item.bullets.map((bullet, bIdx) => (
                    <li
                      key={bIdx}
                      className="text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed flex items-start gap-2.5"
                    >
                      <FiCheckCircle className="w-4 h-4 text-emerald-500/80 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Technology tags */}
                <div className="pt-2 flex flex-wrap gap-1.5 border-t border-zinc-900/80">
                  {item.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded bg-zinc-900/60 border border-zinc-800/80 text-[11px] font-mono text-zinc-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
