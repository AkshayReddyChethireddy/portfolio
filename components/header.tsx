"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";
import { links, personalInfo } from "@/lib/data";
import { useActiveSectionContext } from "@/context/active-section-context";
import { FiGithub, FiFileText } from "react-icons/fi";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="fixed top-0 inset-x-0 z-50 flex justify-center pt-0 sm:pt-4 pointer-events-none">
      <div className="w-full sm:w-auto px-0 sm:px-4 pointer-events-auto">
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="
            flex items-center justify-between
            h-14 px-4 sm:px-5
            bg-white/95 backdrop-blur-md
            border-b sm:border border-slate-200
            sm:rounded-full shadow-sm
          "
        >
          <Link
            href="#overview"
            onClick={() => {
              setActiveSection("Overview");
              setTimeOfLastClick(Date.now());
            }}
            className="flex items-center gap-2 mr-3 sm:mr-6 text-xs font-mono font-medium tracking-tight text-slate-800 hover:text-slate-950 transition"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-600" />
            <span className="font-semibold text-slate-900">akshay</span>
            <span className="text-slate-400">{"//"}</span>
            <span className="text-slate-600 hidden sm:inline">systems</span>
          </Link>

          <nav className="flex items-center gap-1 sm:gap-1.5 text-xs font-medium">
            {links.map((link) => {
              const isActive = activeSection === link.name;
              return (
                <Link
                  key={link.hash}
                  href={link.hash}
                  onClick={() => {
                    setActiveSection(link.name);
                    setTimeOfLastClick(Date.now());
                  }}
                  className={clsx(
                    "relative px-2.5 sm:px-3 py-1.5 rounded-full transition-colors font-mono tracking-tight",
                    {
                      "text-slate-900 font-semibold": isActive,
                      "text-slate-600 hover:text-slate-900": !isActive,
                    }
                  )}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activePill"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      className="absolute inset-0 -z-10 rounded-full bg-slate-100 border border-slate-200"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-2 ml-4 pl-4 border-l border-slate-200 text-xs">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-full transition"
              title="GitHub Profile"
            >
              <FiGithub className="w-3.5 h-3.5" />
            </a>
            <a
              href={personalInfo.resumePath}
              download
              className="flex items-center gap-1.5 px-3 py-1 bg-blue-700 text-white font-mono font-semibold rounded-full hover:bg-blue-800 transition text-[11px]"
              title="Download Resume"
            >
              <FiFileText className="w-3 h-3" />
              <span>Resume</span>
            </a>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
