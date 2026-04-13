"use client";

import { motion } from "framer-motion";
import { Download, GraduationCap, CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { siteConfig, resumeHighlights, education } from "@/lib/data";

export default function Resume() {
  return (
    <section id="resume" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[var(--accent)]/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6">
        <SectionHeading
          title="Resume"
          subtitle="Key highlights from my career"
        />

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6">
              <h3 className="mb-5 text-lg font-semibold">Key Highlights</h3>
              <ul className="space-y-3">
                {resumeHighlights.map((highlight, i) => (
                  <motion.li
                    key={highlight}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07, duration: 0.4 }}
                    className="flex gap-3 text-sm text-[var(--muted-foreground)]"
                  >
                    <CheckCircle2
                      size={16}
                      className="mt-0.5 shrink-0 text-[var(--accent)]"
                    />
                    {highlight}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Education + Download */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 lg:col-span-2"
          >
            {/* Education card */}
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent)]/10 text-[var(--accent)]">
                <GraduationCap size={20} />
              </div>
              <h3 className="mb-1 text-lg font-semibold">Education</h3>
              <p className="text-sm font-medium">{education.degree}</p>
              <p className="mt-1 text-sm text-[var(--muted-foreground)]">
                {education.institution}
              </p>
              <p className="text-xs text-[var(--muted-foreground)]">
                {education.period}
              </p>
            </div>

            {/* Download card */}
            <div className="gradient-border rounded-2xl bg-[var(--card)] p-6 text-center">
              <h3 className="mb-2 text-lg font-semibold">
                Get the full picture
              </h3>
              <p className="mb-5 text-sm text-[var(--muted-foreground)]">
                Download my resume for a complete overview of my experience,
                skills, and projects.
              </p>
              <a
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-medium text-white transition-all hover:bg-[var(--accent-dark)] hover:shadow-lg hover:shadow-[var(--accent)]/25"
              >
                <Download
                  size={16}
                  className="transition-transform group-hover:-translate-y-0.5"
                />
                Download Resume
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
