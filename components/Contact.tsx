"use client";

import React, { useState } from "react";
import { contactData } from "@/lib/siteData";
import { toast } from "sonner";

/** A mailto link with the form's content, for when sending fails. */
function mailtoFallback(f: { name: string; subject: string; message: string }) {
  const subject = f.subject || `Hello from ${f.name || "eedee.net"}`;
  const body = `${f.message}\n\n${f.name}`;
  return `mailto:${contactData.mainData.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        toast.success("Message sent successfully");
      } else {
        setStatus("error");
        const { message } = await response
          .json()
          .catch(() => ({ message: "Something went wrong" }));
        toast.error(message || "Something went wrong", {
          description: "Use the email link below the form instead.",
        });
      }
    } catch {
      setStatus("error");
      toast.error("Network error. Please try again.");
    }
  };

  return (
    <div
      id="contact"
      className="container max-w-[1320px] mx-auto px-5 md:px-10 xl:px-5 pt-24 xl:pt-28"
    >
      <div className="w-full lg:flex space-y-6 lg:space-y-0">
        <div className="w-full lg:w-1/3">
          <p className="font-doto pl-[20px] relative font-outfit font-medium text-sm uppercase tracking-wider text-white/50 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[12px] before:h-[12px] before:rounded-none before:border-2 before:border-white/30">
            {contactData.mainData.title}
          </p>
          <h2 className="font-outfit font-medium text-4xl md:text-5xl lg:text-6xl text-white mt-2">
            {contactData.mainData.title2}{" "}
            <span className="bg-themeGradient bg-clip-text text-transparent">
              {contactData.mainData.title2Span}
            </span>
          </h2>
        </div>
        <div className="w-full lg:w-2/3">
          {/* Contact Info */}
          <div className="flex">
            <div className="w-1/2">
              <p className="font-doto font-outfit font-medium uppercase text-sm tracking-wider text-white mb-2">
                Email:
              </p>
              <h3 className="font-outfit font-medium text-2xl lg:text-3xl text-white">
                {contactData.mainData.email}
              </h3>
            </div>
          </div>
          {/* Contact Form */}
          <div className="mt-8 lg:text-right">
            <form
              className="space-y-4"
              method="post"
              id="contactform"
              onSubmit={handleSubmit}
            >
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <input
                    className="w-full bg-darkBg px-5 py-4 rounded-none placeholder:text-white/40 text-white/70 focus:outline-none"
                    type="text"
                    id="name"
                    aria-label="Name"
                    autoComplete="name"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="w-1/2">
                  <input
                    className="w-full bg-darkBg px-5 py-4 rounded-none placeholder:text-white/40 text-white/70 focus:outline-none"
                    type="email"
                    id="email"
                    aria-label="E-Mail"
                    autoComplete="email"
                    name="email"
                    placeholder="E-Mail"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <input
                className="w-full bg-darkBg px-5 py-4 rounded-none placeholder:text-white/40 text-white/70 focus:outline-none"
                type="text"
                id="subject"
                    aria-label="Subject"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
              <textarea
                className="w-full bg-darkBg px-5 py-4 rounded-none placeholder:text-white/40 text-white/70 h-[160px] focus:outline-none"
                name="message"
                id="message"
                    aria-label="Message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <button
                className={`inline-block relative group overflow-hidden bg-white/15 px-7 py-3 pr-11 rounded-3xl font-outfit font-medium uppercase text-sm tracking-wider text-white before:content-[''] before:absolute before:-z-[1] before:left-0 before:top-0 before:w-full before:h-full before:bg-themeGradient before:opacity-0 hover:before:opacity-20 before:transition-all before:ease-linear before:duration-100 after:content-[''] after:absolute after:top-1/2 after:right-[28px] after:-translate-y-1/2 after:bg-white after:w-[5px] after:h-[5px] after:rounded-none after:transition-all after:duration-[60ms] hover:after:opacity-40 hover:after:scale-[2.7] ${status === "loading" ? "non-disabled" : ""}`}
                type="submit"
                disabled={status === "loading"}
                aria-busy={status === "loading"}
              >
                {status === "loading" ? (
                  <span className="flex items-center gap-3">
                    Sending
                    {/* Three pixels lighting up in turn. */}
                    <span className="flex gap-[3px]" aria-hidden="true">
                      <span className="send-pixel" />
                      <span className="send-pixel [animation-delay:150ms]" />
                      <span className="send-pixel [animation-delay:300ms]" />
                    </span>
                  </span>
                ) : (
                  <span
                    className="block relative text-transparent before:content-[attr(data-text)] before:absolute before:top-0 before:left-0 before:opacity-100 before:text-white before:transition-all before:ease-out before:duration-200 group-hover:before:-top-full group-hover:before:opacity-0 after:content-[attr(data-text)] after:absolute after:top-full after:left-0 after:opacity-0 after:text-white after:transition-all after:ease-out after:duration-200 group-hover:after:top-0 group-hover:after:opacity-100"
                    data-text="Send Message"
                  >
                    Send Message
                  </span>
                )}
              </button>
            </form>
            {/* Submit result, announced to screen readers. */}
            <div className="mt-4 min-h-6" aria-live="polite">
              {status === "success" && (
                <p className="text-white/80">
                  Thank you! Your message is on its way.
                </p>
              )}
              {status === "error" && (
                <p className="text-white/80">
                  Sending didn’t work this time. Please{" "}
                  <a
                    className="underline text-[#ff82f3]"
                    href={mailtoFallback(formData)}
                  >
                    email us directly
                  </a>{" "}
                  at {contactData.mainData.email}, your message is already
                  filled in.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
