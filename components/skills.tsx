"use client";

import React from "react";
import { skillCategories } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

export default function Skills() {
  const { ref } = useSectionInView("Architecture", 0.2);

  return (
    <section
      ref={ref}
      id="architecture"
      className="py-14 sm:py-20 max-w-5xl mx-auto px-4 sm:px-6 border-t border-slate-200"
    >
      <div className="space-y-10">
        <div className="space-y-1.5">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-700">
            Skills & Infrastructure
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 font-sans">
            Technical Stack & System Tools
          </h2>
          <p className="text-sm font-sans text-slate-600 max-w-2xl">
            Categorized directory of programming languages, microservices frameworks, storage engines, and observability tooling used in production environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((group, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-slate-300 transition flex flex-col justify-between"
            >
              <div className="space-y-1.5">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                  <h3 className="text-sm font-bold text-slate-900 font-sans tracking-wide">
                    {group.name}
                  </h3>
                  <span className="text-[10px] font-mono text-slate-500 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded">
                    {group.skills.length} items
                  </span>
                </div>
                <p className="text-xs text-slate-600 font-sans leading-relaxed">
                  {group.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4 mt-4 border-t border-slate-100">
                {group.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2.5 py-1 rounded bg-slate-50 border border-slate-200 text-xs font-mono text-slate-700 font-medium hover:border-slate-300 hover:text-slate-950 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
