"use client";

import React from "react";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.2);

  return (
    <section
      ref={ref}
      id="experience"
      className="py-14 sm:py-20 max-w-5xl mx-auto px-4 sm:px-6 border-t border-slate-200"
    >
      <div className="space-y-10">
        <div className="space-y-1.5">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-700">
            Work Experience
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 font-sans">
            Engineering Background
          </h2>
          <p className="text-sm font-sans text-slate-600 max-w-2xl">
            Direct production experience across payment microservices, distributed transaction processing, and enterprise AI platforms.
          </p>
        </div>

        <div className="relative border-l border-slate-200 ml-2 sm:ml-4 pl-6 sm:pl-8 space-y-10">
          {experiencesData.map((item, idx) => (
            <div key={idx} className="relative group">
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-white border-2 border-slate-400 group-hover:border-blue-600 transition-colors" />

              <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-slate-300 transition space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 border-b border-slate-100 pb-3">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 font-sans">
                      {item.role} <span className="text-slate-400 font-normal">/</span> {item.company}
                    </h3>
                    <div className="text-xs font-mono text-slate-600 mt-0.5">
                      {item.headline}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-500 shrink-0">
                    <span className="px-2.5 py-1 rounded bg-slate-50 border border-slate-200 font-medium">
                      {item.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2.5">
                  {item.bullets.map((bullet, bIdx) => (
                    <li
                      key={bIdx}
                      className="text-xs sm:text-sm text-slate-700 font-sans leading-relaxed flex items-start gap-2.5"
                    >
                      <span className="text-blue-700 font-bold shrink-0 mt-0.5">&bull;</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-2 flex flex-wrap gap-1.5 border-t border-slate-100">
                  {item.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-[11px] font-mono text-slate-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
