"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 w-full max-w-[38rem] px-4 text-center sm:mb-28 mx-auto"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 20,
      }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="mt-2 mb-10 text-sm leading-relaxed text-gray-600 dark:text-white/80">
        Feel free to reach out directly at{" "}
        <a
          className="underline underline-offset-4 hover:text-gray-900 dark:hover:text-white transition"
          href="mailto:example@gmail.com"
        >
          akshayreddych1508@gmail.com
        </a>{" "}
        or send a message using the form below.
      </p>

      <div
        className="
          rounded-2xl
          bg-white/70 backdrop-blur-md
          border border-black/10
          shadow-lg
          dark:bg-neutral-900/60 dark:border-white/10
        "
      >
        <form
          className="flex flex-col gap-4 p-6 dark:text-black"
          action={async (formData) => {
            const { data, error } = await sendEmail(formData);

            if (error) {
              toast.error(error);
              return;
            }

            toast.success("Email sent successfully!");
          }}
        >
          <input
            className="
              h-14 rounded-lg px-4 text-sm
              border border-black/10
              bg-white
              outline-none
              transition
              focus:border-gray-900
              focus:ring-2 focus:ring-gray-900/10
              dark:bg-white/90
            "
            name="senderEmail"
            type="email"
            required
            maxLength={500}
            placeholder="Your email"
          />

          <textarea
            className="
              h-40 rounded-lg p-4 text-sm
              border border-black/10
              bg-white
              outline-none
              resize-none
              transition
              focus:border-gray-900
              focus:ring-2 focus:ring-gray-900/10
              dark:bg-white/90
            "
            name="message"
            placeholder="Your message"
            required
            maxLength={5000}
          />

          <SubmitBtn />
        </form>
      </div>
    </motion.section>
  );
}
