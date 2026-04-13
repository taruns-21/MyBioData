"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  MessageCircle,
  Copy,
  Check,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { siteConfig } from "@/lib/data";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.open(
      `mailto:${siteConfig.email}?subject=${subject}&body=${body}`,
      "_self"
    );
    setStatus("success");
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setStatus("idle"), 4000);
  };

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
      copyable: true,
    },
    {
      icon: Phone,
      label: "Phone",
      value: siteConfig.phone,
      href: `tel:${siteConfig.phone.replace(/-/g, "")}`,
      copyable: true,
    },
    {
      icon: MapPin,
      label: "Location",
      value: siteConfig.location,
      href: null,
      copyable: false,
    },
  ];

  const socials = [
    { icon: Github, href: siteConfig.github, label: "GitHub" },
    { icon: Linkedin, href: siteConfig.linkedin, label: "LinkedIn" },
    { icon: Mail, href: `mailto:${siteConfig.email}`, label: "Email" },
  ];

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[var(--accent)]/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Get In Touch"
          subtitle="Have a project in mind? Let's build something together."
        />

        {/* Availability CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 flex flex-wrap justify-center gap-3"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-sm">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            Available for freelance projects
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-sm">
            <span className="h-2 w-2 rounded-full bg-blue-500" />
            Open to full-time opportunities
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-sm">
            <span className="h-2 w-2 rounded-full bg-purple-500" />
            Building business websites
          </span>
        </motion.div>

        {/* WhatsApp CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-2xl border border-green-500/20 bg-green-500/10 px-8 py-4 text-base font-medium text-green-500 transition-all hover:bg-green-500/15 hover:shadow-lg hover:shadow-green-500/10"
          >
            <MessageCircle size={22} />
            Message me on WhatsApp
            <span className="text-sm text-green-500/60">— Quick response</span>
          </a>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="space-y-5">
              {contactInfo.map(
                ({ icon: Icon, label, value, href, copyable }) => (
                  <div key={label} className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--accent)]/10 text-[var(--accent)]">
                      <Icon size={20} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs text-[var(--muted-foreground)]">
                        {label}
                      </p>
                      <div className="flex items-center gap-2">
                        {href ? (
                          <a
                            href={href}
                            className="truncate text-sm font-medium transition-colors hover:text-[var(--accent)]"
                          >
                            {value}
                          </a>
                        ) : (
                          <span className="text-sm font-medium">{value}</span>
                        )}
                        {copyable && (
                          <button
                            onClick={() => copyToClipboard(value, label)}
                            className="shrink-0 rounded-md p-1 text-[var(--muted-foreground)] transition-colors hover:bg-[var(--muted)] hover:text-[var(--accent)]"
                            aria-label={`Copy ${label}`}
                          >
                            {copiedField === label ? (
                              <Check size={14} className="text-green-500" />
                            ) : (
                              <Copy size={14} />
                            )}
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>

            {/* Social links */}
            <div className="mt-8">
              <p className="mb-3 text-sm font-medium text-[var(--muted-foreground)]">
                Connect with me
              </p>
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target={label !== "Email" ? "_blank" : undefined}
                    rel={label !== "Email" ? "noopener noreferrer" : undefined}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border)] text-[var(--muted-foreground)] transition-all hover:border-[var(--accent)] hover:text-[var(--accent)]"
                    aria-label={label}
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6"
            >
              <h3 className="mb-5 text-lg font-semibold">Send a message</h3>
              <div className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, name: e.target.value }))
                      }
                      className="w-full rounded-xl border border-[var(--border)] bg-[var(--muted)] px-4 py-3 text-sm outline-none transition-all focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, email: e.target.value }))
                      }
                      className="w-full rounded-xl border border-[var(--border)] bg-[var(--muted)] px-4 py-3 text-sm outline-none transition-all focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, message: e.target.value }))
                    }
                    className="w-full resize-none rounded-xl border border-[var(--border)] bg-[var(--muted)] px-4 py-3 text-sm outline-none transition-all focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--accent)] px-6 py-3.5 text-sm font-medium text-white transition-all hover:bg-[var(--accent-dark)] hover:shadow-lg hover:shadow-[var(--accent)]/25 sm:w-auto"
                >
                  {status === "success" ? (
                    <>
                      <Check size={16} />
                      Opening mail client...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
