"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { workExperience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="pt-2 pb-8 sm:pt-4 sm:pb-12 bg-[var(--background)]">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <SectionHeading
          title="Experience"
          subtitle="My professional background and career progression."
        />

        <div className="mt-8 space-y-12">
          {workExperience.map((job, idx) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="relative md:grid md:grid-cols-[1fr_2.5fr] gap-6 lg:gap-12"
            >
              {/* Left Column: Company Details */}
              <div className="mb-4 md:mb-0">
                <h3 className="text-xl sm:text-2xl font-bold text-[var(--foreground)] tracking-tight">
                  {job.company}
                </h3>
                <p className="mt-1 flex items-center text-sm font-medium text-[var(--muted-foreground)]">
                  {job.location}
                </p>
              </div>

              {/* Right Column: Roles Timeline */}
              <div className="relative">
                {/* Vertical progression line */}
                <div className="absolute left-[7px] top-2 bottom-4 w-px bg-[var(--border)]" />

                <div className="space-y-8">
                  {job.roles.map((role, roleIdx) => (
                    <div key={roleIdx} className="relative pl-6 sm:pl-8">
                      {/* Timeline dot */}
                      <div className="absolute left-0 top-2 h-4 w-4 rounded-full border-4 border-[var(--background)] bg-[var(--accent)]" />

                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                        <h4 className="text-base sm:text-lg font-bold text-[var(--foreground)] leading-snug">
                          {role.title}
                        </h4>
                        <span className="text-xs font-mono font-medium tracking-wide text-[var(--muted-foreground)]">
                          {role.period}
                        </span>
                      </div>

                      <p className="text-sm text-[var(--foreground)] mb-2.5 font-medium leading-relaxed">
                        {role.summary}
                      </p>

                      <ul className="space-y-1.5">
                        {role.points.map((point, pointIdx) => (
                          <li
                            key={pointIdx}
                            className="text-sm leading-relaxed text-[var(--muted-foreground)] flex items-start gap-2.5"
                          >
                            <span className="mt-[6px] block h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--border)]" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
