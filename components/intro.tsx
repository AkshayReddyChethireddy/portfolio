"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiOutlineDownload } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.6);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mx-auto max-w-3xl scroll-mt-24 pt-20 text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative mx-auto mb-8 w-fit"
      >
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 blur-md opacity-60" />

        <motion.div
          whileHover={{ y: -4 }}
          transition={{ type: "spring", stiffness: 180 }}
          className="relative rounded-2xl bg-white/80 p-1 shadow-xl backdrop-blur-md dark:bg-white/10"
        >
          <Image
            src="/akshay.png"
            alt="Akshay portrait"
            width={110}
            height={110}
            priority
            className="rounded-xl object-cover"
          />
        </motion.div>
      </motion.div>


      <motion.h1
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="mb-8 px-4 text-xl font-medium leading-relaxed sm:text-2xl"
      >
        <span className="font-bold">Hi, I&apos;m Akshay.</span> A{" "}
        <span className="font-semibold">full-stack developer</span> who enjoys
        building <span className="italic">real-world applications</span>. I work
        across the stack with a focus on{" "}
        <span className="underline">React, Node.js, and SQL</span>.
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="flex flex-wrap items-center justify-center gap-3 px-4 text-base"
      >
        <Link
          href="#contact"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
          className="group flex items-center gap-2 rounded-full bg-black px-6 py-3 text-white transition hover:scale-105 hover:bg-neutral-900"
        >
          Get in touch
          <BsArrowRight className="transition group-hover:translate-x-1" />
        </Link>

        <a
          href="/CV.pdf"
          download
          className="group flex items-center gap-2 rounded-full border border-black/10 bg-white px-6 py-3 transition hover:scale-105 dark:bg-white/10"
        >
          Resume
          <HiOutlineDownload className="transition group-hover:translate-y-1" />
        </a>

        <a
          href="https://www.linkedin.com/in/akshayreddy15/"
          target="_blank"
          className="rounded-full border border-black/10 bg-white p-3 text-xl transition hover:scale-110 hover:text-black dark:bg-white/10"
        >
          <BsLinkedin />
        </a>

        <a
          href="https://github.com/AkshayReddyChethireddy"
          target="_blank"
          className="rounded-full border border-black/10 bg-white p-3 text-xl transition hover:scale-110 hover:text-black dark:bg-white/10"
        >
          <FaGithub />
        </a>
      </motion.div>
    </section>
  );
}
