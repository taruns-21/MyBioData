"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { skills } from "@/lib/data";
import { Icons } from "@/components/ui/Icons";

// Helper to map skill string to the corresponding Icon component
const getIconForSkill = (skillName: string) => {
  const norm = skillName.toLowerCase().replace(/[\s.]/g, "");
  if (norm.includes("next")) return Icons.Nextjs;
  if (norm.includes("react")) return Icons.React;
  if (norm.includes("vue")) return Icons.Vuejs;
  if (norm.includes("javascript")) return Icons.JavaScript;
  if (norm.includes("typescript")) return Icons.TypeScript;
  if (norm.includes("python")) return Icons.Python;
  if (norm.includes("c#")) return Icons.CSharp;
  if (norm.includes("net")) return Icons.DotNet;
  if (norm.includes("postgres")) return Icons.PostgreSQL;
  if (norm.includes("mysql")) return Icons.MySQL;
  if (norm.includes("firebase")) return Icons.Firebase;
  if (norm.includes("supabase")) return Icons.Supabase;
  if (norm.includes("solr")) return Icons.Solr;
  if (norm.includes("rabbit")) return Icons.RabbitMQ;
  if (norm.includes("docker")) return Icons.Docker;
  if (norm.includes("kubernetes")) return Icons.Kubernetes;
  if (norm.includes("git")) return Icons.Git;
  return null;
};

export default function Skills() {
  return (
    <section id="skills" className="py-8 sm:py-12 bg-[var(--card)] border-y border-[var(--border)]">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading
          title="Engineering Stack"
          subtitle="The core technologies and infrastructure I work with."
        />

        <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {Object.entries(skills).map(([category, items], idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className="flex flex-col"
            >
              <h3 className="text-xs font-bold uppercase tracking-widest text-[var(--foreground)] mb-2.5 border-b border-[var(--border)] pb-1.5">{category}</h3>
              <ul className="space-y-1">
                {items.map((skill) => {
                  const IconComponent = getIconForSkill(skill);
                  return (
                    <li key={skill} className="flex items-center gap-2.5 text-sm font-medium text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors py-1">
                      <span className="flex items-center justify-center h-6 w-6 rounded bg-[var(--background)] border border-[var(--border)] text-[var(--accent)]">
                        {IconComponent ? <IconComponent size={14} /> : <span className="text-[10px]">&lt;/&gt;</span>}
                      </span>
                      {skill}
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
