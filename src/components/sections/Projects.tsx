"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight, Sparkles } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects, siteConfig } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 bottom-1/4 h-72 w-72 rounded-full bg-purple-500/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Featured Projects"
          subtitle="Real products built for real businesses"
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="group relative"
            >
              <div className="h-full overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] transition-all hover:border-[var(--accent)]/30 hover:shadow-2xl hover:shadow-[var(--accent)]/5">
                {/* Gradient visual placeholder */}
                <div
                  className={`relative h-48 overflow-hidden bg-gradient-to-br ${project.gradient} sm:h-56`}
                >
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl font-bold tracking-tight text-white/90 sm:text-4xl">
                      {project.title}
                    </span>
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
                  <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-white/10 blur-2xl" />

                  {/* Live badge */}
                  {project.live && (
                    <div className="absolute right-4 top-4">
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm transition-all hover:bg-white/30"
                      >
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-400" />
                        </span>
                        Live
                      </a>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-3 flex items-start justify-between">
                    <h3 className="text-xl font-bold transition-colors group-hover:text-[var(--accent)]">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-lg p-2 text-[var(--muted-foreground)] transition-colors hover:bg-[var(--muted)] hover:text-[var(--accent)]"
                          aria-label={`${project.title} GitHub`}
                        >
                          <Github size={18} />
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-lg p-2 text-[var(--muted-foreground)] transition-colors hover:bg-[var(--muted)] hover:text-[var(--accent)]"
                          aria-label={`${project.title} live demo`}
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="mb-4 text-sm leading-relaxed text-[var(--muted-foreground)]">
                    {project.description}
                  </p>

                  {/* Business value */}
                  <div className="mb-5 rounded-xl bg-[var(--accent)]/5 p-4">
                    <div className="mb-1 flex items-center gap-2 text-xs font-semibold text-[var(--accent)]">
                      <Sparkles size={14} />
                      Business Impact
                    </div>
                    <p className="text-sm leading-relaxed text-[var(--muted-foreground)]">
                      {project.businessValue}
                    </p>
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-[var(--muted)] px-3 py-1 text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Visit CTA */}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[var(--accent)] transition-all hover:gap-3"
                    >
                      Visit Live Site
                      <ArrowUpRight size={16} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More on GitHub */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-6 py-3 text-sm font-medium transition-all hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            <Github size={18} />
            View more on GitHub
            <ArrowUpRight
              size={14}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
