"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="mb-10 text-center sm:mb-16"
    >
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
        {title}
        <span className="gradient-text">.</span>
      </h2>
      {subtitle && (
        <p className="mt-3 text-[var(--muted-foreground)]">{subtitle}</p>
      )}
      <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-[var(--accent)]" />
    </motion.div>
  );
}
