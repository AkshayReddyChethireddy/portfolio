import React from "react";
import { personalInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-[#FAFAFA] py-8 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
        <div>
          <span>&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</span>
        </div>

        <div className="flex items-center gap-4 text-[11px] text-slate-500">
          <span>Next.js &middot; TypeScript &middot; Tailwind CSS</span>
          <span>&middot;</span>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-800 transition"
          >
            GitHub
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-800 transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
