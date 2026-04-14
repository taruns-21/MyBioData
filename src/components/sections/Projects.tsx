"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="py-10 sm:py-14 bg-[var(--background)]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          title="Selected Work"
          subtitle="Recent applications I've engineered and shipped."
        />

        <div className="mt-8 space-y-12 sm:space-y-16">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
              className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-center"
            >
              
              {/* Massive Bleed Image, scales seamlessly to mobile edges */}
              <div className={`lg:col-span-7 rounded-xl overflow-hidden border border-[var(--border)] shadow-sm ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                 <img 
                   src={project.image} 
                   alt={`${project.title} Interface preview`}
                   className="w-full aspect-[4/3] sm:aspect-video lg:aspect-[4/3] object-cover object-top hover:scale-[1.02] transition-transform duration-700"
                 />
              </div>

              {/* Clean Typography */}
              <div className={`lg:col-span-5 flex flex-col justify-center ${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--foreground)] mb-2">{project.title}</h3>
                
                <p className="text-base sm:text-lg text-[var(--muted-foreground)] leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="mb-4">
                   <h4 className="text-xs font-semibold uppercase tracking-widest text-[var(--foreground)] mb-1">Outcome</h4>
                   <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">{project.businessValue}</p>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map(tech => (
                    <span key={tech} className="px-2.5 py-1 bg-[var(--muted)] border border-[var(--border)] rounded text-xs font-semibold text-[var(--foreground)]">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-11 w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-[var(--accent)] px-5 text-sm font-semibold text-white transition-colors hover:bg-[var(--accent-dark)]"
                    >
                      Visit Website <ExternalLink size={16} />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-11 w-full sm:w-auto items-center justify-center gap-2 rounded-lg border border-[var(--border)] bg-transparent px-5 text-sm font-semibold transition-colors hover:bg-[var(--muted)]"
                    >
                      Source Code <Github size={16} />
                    </a>
                  )}
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
