"use client";

import { motion } from "framer-motion";
import { Download, GraduationCap, CheckCircle2, FileText, ExternalLink } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { siteConfig, resumeHighlights, education } from "@/lib/data";

export default function Resume() {
  return (
    <section id="resume" className="py-10 sm:py-14 relative bg-[var(--card)]">
      <div className="mx-auto max-w-5xl px-5 sm:px-8 relative z-10 w-full">
        <SectionHeading
          title="Resume"
          subtitle="A quick summary of my professional credentials."
        />

        <div className="mt-8 grid gap-5 sm:gap-6 lg:grid-cols-[1.5fr_1fr] w-full">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-5 sm:p-6 shadow-sm h-full w-full">
              <div className="flex items-center gap-3 mb-4 border-b border-[var(--border)] pb-3">
                 <FileText className="text-[var(--accent)] shrink-0" size={20} />
                 <h3 className="text-lg font-bold tracking-tight text-[var(--foreground)]">Key Highlights</h3>
              </div>
              <ul className="space-y-3">
                {resumeHighlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-3 text-[var(--muted-foreground)] leading-relaxed group"
                  >
                    <CheckCircle2
                      size={18}
                      strokeWidth={2.5}
                      className="mt-0.5 shrink-0 text-[var(--muted)] group-hover:text-[var(--accent)] transition-colors"
                    />
                    <span className="text-sm font-medium group-hover:text-[var(--foreground)] transition-colors">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="flex flex-col gap-5 sm:gap-6 w-full"
          >
            <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-5 sm:p-6 shadow-sm relative overflow-hidden w-full">
              <div className="absolute top-0 right-0 p-5 opacity-[0.03]">
                 <GraduationCap size={100} />
              </div>
              <div className="flex items-center gap-2 mb-3">
                 <div className="p-1.5 rounded-md bg-[var(--accent)]/10 text-[var(--accent)]">
                   <GraduationCap size={16} />
                 </div>
                 <h3 className="text-[13px] font-bold uppercase tracking-widest text-[var(--muted-foreground)]">Education</h3>
              </div>
              <p className="font-semibold text-[var(--foreground)] mt-2 text-sm sm:text-base">{education.degree}</p>
              <p className="mt-1 text-sm text-[var(--muted-foreground)] leading-snug">
                {education.institution}
              </p>
              <div className="mt-4 pt-4 border-t border-[var(--border)] text-[11px] font-semibold text-[var(--muted-foreground)] uppercase tracking-widest">
                {education.period}
              </div>
            </div>

            <div className="rounded-xl bg-gradient-to-br from-[var(--accent)] to-[var(--accent-dark)] p-5 sm:p-6 text-center shadow-xl shadow-[var(--accent)]/10 relative overflow-hidden group w-full">
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <h3 className="mb-1.5 text-lg sm:text-xl font-bold tracking-tight text-white">
                Get the full picture
              </h3>
              <p className="mb-4 sm:mb-5 text-sm text-white/80 leading-relaxed max-w-[250px] mx-auto">
                View my core resume for a complete technical overview.
              </p>
              <a
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[var(--background)] px-5 h-12 text-sm font-bold text-[var(--accent-dark)] transition-transform hover:scale-[1.02] active:scale-[0.98] shadow-lg relative z-10"
              >
                View Resume
                <ExternalLink size={16} strokeWidth={2.5} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
