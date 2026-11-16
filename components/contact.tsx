"use client";

import React from "react";
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
      className="py-14 sm:py-20 max-w-5xl mx-auto px-4 sm:px-6 border-t border-slate-200"
    >
      <div className="space-y-10">
        <div className="space-y-1.5">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-700">
            Contact
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 font-sans">
            Direct Inquiries
          </h2>
          <p className="text-sm font-sans text-slate-600 max-w-2xl">
            Available for discussions regarding distributed systems, backend infrastructure, and engineering roles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-start">
          <div className="md:col-span-2 space-y-4">
            <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm space-y-5">
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-700 font-semibold border-b border-slate-100 pb-3">
                Contact Coordinates
              </h3>

              <div className="space-y-3.5 text-xs font-mono">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-3 text-slate-700 hover:text-blue-700 transition"
                >
                  <FiMail className="w-4 h-4 text-slate-400 shrink-0" />
                  <span className="truncate">{personalInfo.email}</span>
                </a>

                <div className="flex items-center gap-3 text-slate-700">
                  <FiPhone className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>{personalInfo.phone}</span>
                </div>

                <div className="flex items-center gap-3 text-slate-700">
                  <FiMapPin className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>{personalInfo.location}</span>
                </div>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-700 hover:text-slate-950 transition"
                >
                  <FiGithub className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>github.com/AkshayReddyChethireddy</span>
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-700 hover:text-blue-700 transition"
                >
                  <FiLinkedin className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>linkedin.com/in/akshayreddy15</span>
                </a>
              </div>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="p-6 sm:p-7 rounded-xl bg-white border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-700 font-semibold border-b border-slate-100 pb-3">
                Send Direct Message
              </h3>

              <form
                className="space-y-3.5"
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
                  <label htmlFor="senderEmail" className="block text-xs font-mono text-slate-600 mb-1">
                    Sender Email
                  </label>
                  <input
                    id="senderEmail"
                    name="senderEmail"
                    type="email"
                    required
                    maxLength={500}
                    placeholder="name@company.com"
                    className="
                      w-full h-10 px-3.5 rounded-lg
                      bg-slate-50 border border-slate-200 text-slate-900 text-xs font-mono
                      outline-none transition
                      focus:bg-white focus:border-blue-600 focus:ring-1 focus:ring-blue-600
                      placeholder:text-slate-400
                    "
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-slate-600 mb-1">
                    Message Body
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    maxLength={5000}
                    rows={4}
                    placeholder="Regarding engineering opportunities, architecture, or system requirements..."
                    className="
                      w-full p-3.5 rounded-lg
                      bg-slate-50 border border-slate-200 text-slate-900 text-xs font-mono
                      outline-none resize-none transition
                      focus:bg-white focus:border-blue-600 focus:ring-1 focus:ring-blue-600
                      placeholder:text-slate-400
                    "
                  />
                </div>

                <div className="pt-1 flex justify-end">
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
