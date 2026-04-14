"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MessageCircle, ArrowRight, Github, Linkedin, FileText } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { siteConfig } from "@/lib/data";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Inquiry from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.open(`mailto:${siteConfig.email}?subject=${subject}&body=${body}`, "_self");
    setStatus("success");
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <section id="contact" className="py-10 sm:py-14 relative overflow-hidden bg-[var(--background)]">
      <div className="mx-auto max-w-5xl px-5 sm:px-8 relative z-10 w-full">
        <SectionHeading
          title="Connect"
          subtitle="Reach out to discuss projects, technical consulting, or full-time opportunities."
        />

        <div className="mt-8 grid gap-6 lg:grid-cols-5 w-full">
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-3 sm:space-y-4 w-full"
          >
            {/* WhatsApp Premium Link */}
            <a 
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 p-4 sm:p-5 rounded-xl border border-[var(--border)] bg-[var(--card)] transition-colors hover:border-[var(--accent)] group w-full"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-50 text-green-600">
                <MessageCircle size={24} />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">WhatsApp</span>
                <span className="text-sm text-[var(--muted-foreground)] mt-0.5">Start a quick chat with me directly.</span>
              </div>
            </a>

            {/* Email Link */}
            <a 
              href={`mailto:${siteConfig.email}`}
              className="flex items-start gap-3 p-4 sm:p-5 rounded-xl border border-[var(--border)] bg-[var(--card)] transition-colors hover:border-[var(--accent)] group w-full"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--muted)] text-[var(--foreground)]">
                <Mail size={24} />
              </div>
              <div className="flex flex-col overflow-hidden">
                <span className="text-base font-bold text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">Email</span>
                <span className="text-sm text-[var(--muted-foreground)] mt-0.5 truncate">{siteConfig.email}</span>
              </div>
            </a>

             {/* Github Link */}
             <a 
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 p-4 sm:p-5 rounded-xl border border-[var(--border)] bg-[var(--card)] transition-colors hover:border-[var(--accent)] group w-full"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--muted)] text-[var(--foreground)]">
                <Github size={24} />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">GitHub</span>
                <span className="text-sm text-[var(--muted-foreground)] mt-0.5">View my repos and contributions.</span>
              </div>
            </a>

            {/* LinkedIn Link */}
            <a 
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 p-4 sm:p-5 rounded-xl border border-[var(--border)] bg-[var(--card)] transition-colors hover:border-[var(--accent)] group w-full"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--muted)] text-[var(--foreground)]">
                <Linkedin size={24} />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">LinkedIn</span>
                <span className="text-sm text-[var(--muted-foreground)] mt-0.5">Let's connect professionally.</span>
              </div>
            </a>

            {/* Resume Link */}
            <a 
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 p-4 sm:p-5 rounded-xl border border-[var(--border)] bg-[var(--card)] transition-colors hover:border-[var(--accent)] group w-full"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--muted)] text-[var(--accent)]">
                <FileText size={24} />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">Resume</span>
                <span className="text-sm text-[var(--muted-foreground)] mt-0.5">View my full technical background.</span>
              </div>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-3 w-full"
          >
            <form
              onSubmit={handleSubmit}
              className="w-full flex flex-col gap-4 sm:gap-5 rounded-xl border border-[var(--border)] bg-[var(--card)] p-5 sm:p-6"
            >
              <h3 className="mb-1 text-xl font-bold tracking-tight text-[var(--foreground)]">Drop a message</h3>
              
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5 w-full">
                  <label htmlFor="name" className="text-sm font-semibold text-[var(--foreground)]">Name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    className="w-full rounded-lg min-h-[48px] border border-[var(--border)] bg-[var(--background)] px-4 text-base outline-none transition-colors focus:border-[var(--accent)]"
                    placeholder="Jane Doe"
                  />
                </div>
                <div className="flex flex-col gap-1.5 w-full">
                  <label htmlFor="email" className="text-sm font-semibold text-[var(--foreground)]">Email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    className="w-full rounded-lg min-h-[48px] border border-[var(--border)] bg-[var(--background)] px-4 text-base outline-none transition-colors focus:border-[var(--accent)]"
                    placeholder="jane@example.com"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5 w-full">
                <label htmlFor="message" className="text-sm font-semibold text-[var(--foreground)]">Message</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  className="w-full resize-y min-h-[120px] rounded-lg border border-[var(--border)] bg-[var(--background)] p-4 text-base outline-none transition-colors focus:border-[var(--accent)]"
                  placeholder="How can I help you?"
                />
              </div>

              <button
                type="submit"
                className="mt-2 inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-[var(--accent)] px-6 text-sm font-bold text-white transition-opacity hover:bg-[var(--accent-dark)]"
              >
                {status === "success" ? "Opening Mail Client..." : "Send Message"}
                <ArrowRight size={16} />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
