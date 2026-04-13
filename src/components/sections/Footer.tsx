"use client";

import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/data";

export default function Footer() {
  const socials = [
    { icon: Github, href: siteConfig.github, label: "GitHub" },
    { icon: Linkedin, href: siteConfig.linkedin, label: "LinkedIn" },
    { icon: Mail, href: `mailto:${siteConfig.email}`, label: "Email" },
    { icon: MessageCircle, href: siteConfig.whatsapp, label: "WhatsApp" },
  ];

  return (
    <footer className="border-t border-[var(--border)]">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          {/* Brand */}
          <div>
            <a
              href="#home"
              className="text-lg font-bold tracking-tight transition-colors hover:text-[var(--accent)]"
            >
              {siteConfig.name}
              <span className="text-[var(--accent)]">.</span>
            </a>
            <p className="mt-1 max-w-xs text-sm text-[var(--muted-foreground)]">
              Building modern web solutions and scalable business applications.
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted-foreground)] transition-all hover:border-[var(--accent)] hover:text-[var(--accent)]"
                aria-label={label}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="section-divider mt-8" />

        {/* Bottom row */}
        <div className="mt-6 flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="text-xs text-[var(--muted-foreground)]">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <p className="text-xs text-[var(--muted-foreground)]">
            Engineered with precision. Built with Next.js.
          </p>
        </div>
      </div>
    </footer>
  );
}
