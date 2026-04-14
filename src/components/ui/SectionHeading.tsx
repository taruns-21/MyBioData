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
      className="mb-6 text-center sm:mb-8"
    >
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
        {title}
        <span className="text-[var(--accent)]">.</span>
      </h2>
      {subtitle && (
        <p className="mt-1.5 text-sm text-[var(--muted-foreground)] sm:text-base">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
