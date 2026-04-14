"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Building2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-[var(--accent)]/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6">
        <SectionHeading
          title="Experience"
          subtitle="My journey building production systems at scale"
        />

        {/* Company header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-col items-center gap-3 text-center"
        >
          <div className="inline-flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--card)] px-6 py-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent)]/10 text-[var(--accent)]">
              <Building2 size={20} />
            </div>
            <div className="text-left">
              <h3 className="text-lg font-bold">WebMD</h3>
              <div className="flex items-center gap-2 text-xs text-[var(--muted-foreground)]">
                <MapPin size={12} />
                Mumbai, Maharashtra, India
                <span className="mx-1">&middot;</span>
                Full-time
              </div>
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[23px] top-0 h-full w-px bg-gradient-to-b from-[var(--accent)] via-[var(--accent)]/40 to-transparent sm:left-[27px]" />

          <div className="space-y-10">
            {experience.map((exp, idx) => {
              const isCurrent = idx === 0;

              return (
                <motion.div
                  key={exp.role}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15, duration: 0.6 }}
                  className="relative pl-14 sm:pl-20"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-3 top-1 flex h-10 w-10 items-center justify-center rounded-full border-2 border-[var(--accent)]/40 bg-[var(--background)] sm:left-3.5">
                    {isCurrent ? (
                      <span className="relative flex h-3 w-3">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-75" />
                        <span className="relative inline-flex h-3 w-3 rounded-full bg-[var(--accent)]" />
                      </span>
                    ) : (
                      <Briefcase
                        size={16}
                        className="text-[var(--muted-foreground)]"
                      />
                    )}
                  </div>

                  <div className="group rounded-2xl border border-[var(--border)] bg-[var(--card)] p-4 transition-all hover:border-[var(--accent)]/30 hover:shadow-xl hover:shadow-[var(--accent)]/5 sm:p-6">
                    {/* Header */}
                    <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-lg font-bold">{exp.role}</h3>
                          {isCurrent && (
                            <span className="rounded-full bg-green-500/10 px-2.5 py-0.5 text-xs font-medium text-green-500">
                              Current
                            </span>
                          )}
                        </div>
                        <p className="mt-0.5 text-sm text-[var(--muted-foreground)]">
                          {exp.period}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="mb-4 text-sm leading-relaxed text-[var(--muted-foreground)]">
                      {exp.description}
                    </p>

                    {/* Highlights */}
                    <ul className="mb-5 space-y-2">
                      {exp.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex gap-3 text-sm text-[var(--muted-foreground)]"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" />
                          {highlight}
                        </li>
                      ))}
                    </ul>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-[var(--accent)]/10 px-3 py-1 text-xs font-medium text-[var(--accent)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
