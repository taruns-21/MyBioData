"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

export default function About() {
  return (
    <section id="about" className="pt-6 pb-2 sm:pt-10 sm:pb-4 bg-[var(--background)]">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <SectionHeading
          title="About"
          subtitle="Brief background on my work."
        />

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-6 sm:mt-8 space-y-3 text-base sm:text-lg text-[var(--muted-foreground)] leading-relaxed max-w-3xl"
        >
          <p>
            I'm a software engineer who enjoys building both the frontend interfaces that users touch and the backend systems that actually make them work.
          </p>
          <p>
            Currently, I work at <strong className="font-semibold text-[var(--foreground)]">WebMD</strong>, writing backend services in .NET and building search infrastructure with Apache Solr. It's challenging work that requires handling large amounts of data reliably. 
          </p>
          <p>
            Outside of my day job, I take on freelance projects for small to medium businesses. I've built e-commerce platforms and booking applications from scratch. This keeps me sharp on modern React/Next.js stacks and product design.
          </p>
          <p>
            I believe good engineering means writing clean, straightforward code and trying to solve actual user problems instead of over-engineering for the sake of it.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
