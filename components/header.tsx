"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";
import { links } from "@/lib/data";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="relative z-[999]">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 20,
        }}
        className="
          fixed top-0 inset-x-0
          h-[4.5rem]
          bg-white/80 backdrop-blur-md
          border-b border-black/10
          shadow-sm

          sm:top-4
          sm:mx-auto
          sm:h-[3.5rem]
          sm:w-[92%]
          sm:max-w-[38rem]
          sm:rounded-2xl
          sm:border
          sm:shadow-lg

          dark:bg-neutral-900/70
          dark:border-white/10
        "
      >
        <nav className="h-full flex items-center justify-center">
          <ul className="flex items-center gap-1 text-[0.9rem] font-medium text-gray-600 dark:text-gray-400">
            {links.map((link) => (
              <li key={link.hash} className="relative">
                <Link
                  href={link.hash}
                  onClick={() => {
                    setActiveSection(link.name);
                    setTimeOfLastClick(Date.now());
                  }}
                  className={clsx(
                    "relative z-10 px-4 py-2 transition-colors",
                    {
                      "text-gray-900 dark:text-white":
                        activeSection === link.name,
                      "hover:text-gray-900 dark:hover:text-white":
                        activeSection !== link.name,
                    }
                  )}
                >
                  {link.name}

                  {link.name === activeSection && (
                    <motion.span
                      layoutId="activeSection"
                      className="
                        absolute inset-0 -z-10 rounded-xl
                        bg-zinc-200/60 backdrop-blur-md
                        dark:bg-zinc-800/60
                      "
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </header>
  );
}
