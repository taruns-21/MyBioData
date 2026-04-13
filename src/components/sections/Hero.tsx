"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  Download,
  Github,
  Linkedin,
  Mail,
  MessageCircle,
} from "lucide-react";
import { siteConfig } from "@/lib/data";

const titles = [
  "Full Stack Developer",
  "Full Stack Engineer",
  "Backend Architect",
  "Product Builder",
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    const speed = isDeleting ? 40 : 80;

    if (!isDeleting && text === currentTitle) {
      const timeout = setTimeout(() => setIsDeleting(true), 2200);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && text === "") {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setText(
        isDeleting
          ? currentTitle.substring(0, text.length - 1)
          : currentTitle.substring(0, text.length + 1)
      );
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, titleIndex]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      {/* Grid background */}
      <div className="grid-bg grid-mask pointer-events-none absolute inset-0" />

      {/* Background gradient orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="pulse-glow absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[var(--accent)]/15 blur-[120px]" />
        <div className="pulse-glow-delayed absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-purple-500/15 blur-[120px]" />
        <div className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/5 blur-[100px]" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto max-w-4xl text-center"
      >
        {/* Status badge */}
        <motion.div variants={item} className="mb-8 flex justify-center">
          <div className="glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            <span className="text-[var(--muted-foreground)]">
              Software Engineer at{" "}
              <span className="font-semibold text-[var(--foreground)]">
                WebMD
              </span>
            </span>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={item}
          className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-8xl"
        >
          {siteConfig.name}
          <span className="gradient-text">.</span>
        </motion.h1>

        {/* Typing animation */}
        <motion.div variants={item} className="mt-4 h-10 sm:mt-6">
          <span className="text-xl font-medium text-[var(--muted-foreground)] sm:text-2xl lg:text-3xl">
            {text}
            <span className="animate-pulse text-[var(--accent)]">|</span>
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={item}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[var(--muted-foreground)] sm:text-lg"
        >
          {siteConfig.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={item}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-7 py-3.5 text-sm font-medium text-white transition-all hover:bg-[var(--accent-dark)] hover:shadow-lg hover:shadow-[var(--accent)]/25"
          >
            View Projects
            <ArrowDown
              size={16}
              className="transition-transform group-hover:translate-y-0.5"
            />
          </a>
          <a
            href={siteConfig.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-7 py-3.5 text-sm font-medium transition-all hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            <Download size={16} />
            Download Resume
          </a>
          <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-7 py-3.5 text-sm font-medium text-green-500 transition-all hover:bg-green-500/20 hover:shadow-lg hover:shadow-green-500/10"
          >
            <MessageCircle size={16} />
            WhatsApp Me
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          variants={item}
          className="mt-10 flex items-center justify-center gap-4"
        >
          {[
            { icon: Github, href: siteConfig.github, label: "GitHub" },
            { icon: Linkedin, href: siteConfig.linkedin, label: "LinkedIn" },
            {
              icon: Mail,
              href: `mailto:${siteConfig.email}`,
              label: "Email",
            },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target={label !== "Email" ? "_blank" : undefined}
              rel={label !== "Email" ? "noopener noreferrer" : undefined}
              className="group flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted-foreground)] transition-all hover:border-[var(--accent)] hover:text-[var(--accent)] hover:shadow-md hover:shadow-[var(--accent)]/10"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              aria-label={label}
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs tracking-wider text-[var(--muted-foreground)]">
            SCROLL
          </span>
          <div className="h-7 w-4 rounded-full border-2 border-[var(--muted-foreground)]/30">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="mx-auto mt-1 h-1.5 w-1.5 rounded-full bg-[var(--accent)]"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
