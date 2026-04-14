"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, MapPin, Briefcase, Clock, Code2, ExternalLink } from "lucide-react";
import Typewriter from "@/components/ui/Typewriter";
import { siteConfig } from "@/lib/data";

export default function Hero() {
  return (
    <section id="home" className="relative flex flex-col justify-center min-h-[90dvh] md:min-h-[85dvh] pt-20 pb-8 sm:pb-10 px-5 sm:px-8 bg-[var(--background)] overflow-hidden">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
            className="flex flex-col items-start w-full"
          >
            {/* Credibility Strip */}
            <div className="mb-4 flex flex-wrap gap-x-3 gap-y-1.5 text-[13px] font-medium text-[var(--muted-foreground)]">
              <span className="flex items-center gap-1.5"><Briefcase size={14} className="text-[var(--accent)]" /> {siteConfig.title}</span>
              <span className="hidden sm:block text-[var(--border)]">|</span>
              <span className="flex items-center gap-1.5"><Code2 size={14} className="text-[var(--accent)]" /> WebMD</span>
              <span className="hidden sm:block text-[var(--border)]">|</span>
              <span className="flex items-center gap-1.5"><Clock size={14} className="text-[var(--accent)]" /> 3+ Years Experience</span>
              <span className="hidden sm:block text-[var(--border)]">|</span>
              <span className="flex items-center gap-1.5"><MapPin size={14} className="text-[var(--accent)]" /> Mumbai</span>
            </div>

            <div className="min-h-[100px] sm:min-h-[120px] md:min-h-[140px] flex items-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--foreground)] leading-[1.20] max-w-2xl">
                <Typewriter 
                  prefix="I " 
                  phrases={[
                    "construct robust backend systems.",
                    "am a software engineer at WebMD.",
                    "build modern Next.js web applications.",
                    "develop custom technical products."
                  ]} 
                />
              </h1>
            </div>

            <p className="mt-4 text-base sm:text-lg text-[var(--muted-foreground)] max-w-lg leading-relaxed">
              Hi, I'm Tarun. I engineer scalable API architectures for enterprise healthcare platforms and develop custom products that help businesses operate effectively.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
              <a
                href="#projects"
                className="inline-flex h-12 w-full sm:w-auto min-w-[160px] items-center justify-center gap-2 rounded-lg bg-[var(--accent)] px-6 text-sm font-semibold text-white transition-opacity hover:bg-[var(--accent-dark)]"
              >
                View Selected Work
                <ArrowRight size={16} />
              </a>
              <a
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 w-full sm:w-auto min-w-[140px] items-center justify-center gap-2 rounded-lg border border-[var(--border)] bg-transparent px-6 text-sm font-semibold text-[var(--foreground)] transition-colors hover:bg-[var(--muted)]"
              >
                View Resume
                <ExternalLink size={16} />
              </a>
            </div>
          </motion.div>

          {/* Right Visuals - Stacked elegantly on mobile, floating on Desktop */}
          <motion.div 
             initial={{ opacity: 0, x: 15 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] as const }}
             className="relative w-full h-[320px] sm:h-[450px] lg:h-[500px]"
          >
            <div className="absolute top-0 right-0 sm:right-[15%] w-[85%] sm:w-[75%] rounded-xl overflow-hidden border border-[var(--border)] shadow-lg z-20 hover:-translate-y-1 transition-transform duration-500">
               <img src="/MyBioData/assets/projects/velvet.png" alt="Velvet Salon Booking Application Interface" className="w-full object-cover" />
            </div>
            <div className="absolute top-[20%] sm:top-[30%] left-0 sm:right-0 w-[85%] sm:w-[75%] rounded-xl overflow-hidden border border-[var(--border)] shadow-xl z-30 hover:-translate-y-1 transition-transform duration-500">
               <img src="/MyBioData/assets/projects/hifi.png" alt="HiFi Collection E-commerce Interface" className="w-full object-cover" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
