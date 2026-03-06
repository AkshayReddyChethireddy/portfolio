"use server";

import React from "react";
import { Resend } from "resend";
import ContactFormEmail from "@/email/contact-form-email";
import { validateString, getErrorMessage } from "@/lib/utils";

export const sendEmail = async (formData: FormData) => {
  // 🛑 Safety guard — never crash portfolio
  if (!process.env.RESEND_API_KEY) {
    return {
      error:
        "Email service is temporarily unavailable. Please contact me directly via email.",
    };
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // ✅ Validation
  if (!validateString(senderEmail, 500)) {
    return { error: "Invalid email address." };
  }

  if (!validateString(message, 5000)) {
    return { error: "Message is too long." };
  }

  try {
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",

      // 🔐 REQUIRED: Resend test mode allows ONLY this email
      to: "akshayreddych1508@gmail.com",

      subject: "New message from portfolio",
      reply_to: senderEmail as string,

      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });

    return { data: true };
  } catch (error: unknown) {
    return { error: getErrorMessage(error) };
  }
};
