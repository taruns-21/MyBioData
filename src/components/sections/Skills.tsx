"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { skills, skillCategoryMeta } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-1/2 h-72 w-72 rounded-full bg-purple-500/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Skills & Tools"
          subtitle="Technologies I work with daily"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skills).map(([category, items], catIdx) => {
            const meta = skillCategoryMeta[category];
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIdx * 0.08, duration: 0.5 }}
                className="group rounded-2xl border border-[var(--border)] bg-[var(--card)] p-4 transition-all hover:border-[var(--accent)]/20 hover:shadow-lg hover:shadow-[var(--accent)]/5 sm:p-6"
              >
                <div
                  className={`mb-5 inline-flex rounded-lg bg-gradient-to-br ${meta.gradient} px-3 py-1.5`}
                >
                  <span className={`text-sm font-semibold ${meta.accent}`}>
                    {category}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {items.map((skill, i) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: catIdx * 0.08 + i * 0.04 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="inline-flex items-center gap-2 rounded-xl bg-[var(--muted)] px-3 py-2 text-xs font-medium transition-colors hover:bg-[var(--accent)]/10 hover:text-[var(--accent)] sm:px-3.5 sm:py-2.5 sm:text-sm"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]/60" />
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
