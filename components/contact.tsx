"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { personalInfo } from "@/lib/data";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin } from "react-icons/fi";

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.3);

  return (
    <section
      ref={ref}
      id="contact"
      className="py-16 sm:py-24 max-w-5xl mx-auto px-4 sm:px-6 border-t border-zinc-900"
    >
      <div className="space-y-12">
        {/* Section Header */}
        <div className="space-y-2">
          <div className="text-xs font-mono font-semibold uppercase tracking-widest text-blue-500">
            Get In Touch
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-sans">
            Direct Communications & Engineering Inquiries
          </h2>
          <p className="text-sm font-sans text-zinc-400 max-w-2xl">
            Currently discussing opportunities in distributed systems, backend infrastructure, and production AI engineering. Direct contact coordinates below.
          </p>
        </div>

        {/* Contact Layout: Info Columns + Minimal Form */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
          {/* Coordinates Column */}
          <div className="md:col-span-2 space-y-4">
            <div className="p-6 rounded-xl bg-[#0c0c0e] border border-zinc-900 space-y-5">
              <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold border-b border-zinc-900 pb-3">
                Direct Coordinates
              </h3>

              <div className="space-y-4 text-xs font-mono">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-3 text-zinc-300 hover:text-white transition group"
                >
                  <FiMail className="w-4 h-4 text-zinc-500 group-hover:text-blue-400 transition" />
                  <span className="truncate">{personalInfo.email}</span>
                </a>

                <div className="flex items-center gap-3 text-zinc-300">
                  <FiPhone className="w-4 h-4 text-zinc-500" />
                  <span>{personalInfo.phone}</span>
                </div>

                <div className="flex items-center gap-3 text-zinc-300">
                  <FiMapPin className="w-4 h-4 text-zinc-500" />
                  <span>{personalInfo.location}</span>
                </div>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-zinc-300 hover:text-white transition group"
                >
                  <FiGithub className="w-4 h-4 text-zinc-500 group-hover:text-white transition" />
                  <span>github.com/AkshayReddyChethireddy</span>
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-zinc-300 hover:text-white transition group"
                >
                  <FiLinkedin className="w-4 h-4 text-zinc-500 group-hover:text-blue-400 transition" />
                  <span>linkedin.com/in/akshayreddy15</span>
                </a>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="md:col-span-3">
            <div className="p-6 sm:p-8 rounded-xl bg-[#0c0c0e] border border-zinc-900 space-y-5">
              <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold border-b border-zinc-900 pb-3">
                Send Direct Message
              </h3>

              <form
                className="space-y-4"
                action={async (formData) => {
                  const { data, error } = await sendEmail(formData);

                  if (error) {
                    toast.error(error);
                    return;
                  }

                  toast.success("Message dispatched successfully.");
                }}
              >
                <div>
                  <label htmlFor="senderEmail" className="block text-xs font-mono text-zinc-400 mb-1.5">
                    Sender Email
                  </label>
                  <input
                    id="senderEmail"
                    name="senderEmail"
                    type="email"
                    required
                    maxLength={500}
                    placeholder="engineering.lead@company.com"
                    className="
                      w-full h-11 px-3.5 rounded-lg
                      bg-[#08080a] border border-zinc-800 text-white text-xs font-mono
                      outline-none transition
                      focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600
                      placeholder:text-zinc-600
                    "
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-zinc-400 mb-1.5">
                    Message Payload
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    maxLength={5000}
                    rows={5}
                    placeholder="Discussing role requirements, architecture, or system scaling..."
                    className="
                      w-full p-3.5 rounded-lg
                      bg-[#08080a] border border-zinc-800 text-white text-xs font-mono
                      outline-none resize-none transition
                      focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600
                      placeholder:text-zinc-600
                    "
                  />
                </div>

                <div className="pt-2 flex justify-end">
                  <SubmitBtn />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
