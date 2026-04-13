"use client";

import { motion } from "framer-motion";
import {
  Globe,
  LayoutDashboard,
  Layers,
  Server,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { siteConfig, services, stats } from "@/lib/data";

const serviceIcons = [Globe, LayoutDashboard, Layers, Server];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-1/4 h-72 w-72 rounded-full bg-[var(--accent)]/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          title="About Me"
          subtitle="Building software that drives business outcomes"
        />

        {/* Professional summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-20 max-w-3xl"
        >
          <p className="text-center text-lg leading-relaxed text-[var(--muted-foreground)]">
            {siteConfig.summary}
          </p>
          <div className="mt-6 flex items-center justify-center gap-6 text-sm text-[var(--muted-foreground)]">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
              Available for freelance
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              Open to full-time roles
            </span>
          </div>
        </motion.div>

        {/* Animated stats */}
        <div className="mb-20 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 text-center transition-all hover:border-[var(--accent)]/30 hover:shadow-lg hover:shadow-[var(--accent)]/5"
            >
              <div className="text-3xl font-bold gradient-text sm:text-4xl">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                />
              </div>
              <div className="mt-2 text-xs font-medium text-[var(--muted-foreground)] sm:text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* What I Build */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 text-center text-2xl font-bold"
          >
            What I Build
          </motion.h3>

          <div className="grid gap-6 sm:grid-cols-2">
            {services.map((service, i) => {
              const Icon = serviceIcons[i];
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="group rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 transition-all hover:border-[var(--accent)]/20 hover:shadow-xl hover:shadow-[var(--accent)]/5"
                >
                  <div
                    className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${service.gradient} transition-transform group-hover:scale-110`}
                  >
                    <Icon size={22} className="text-white" />
                  </div>
                  <h4 className="mb-2 text-lg font-semibold">{service.title}</h4>
                  <p className="text-sm leading-relaxed text-[var(--muted-foreground)]">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
