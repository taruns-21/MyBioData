"use client";

import { Github, Linkedin, Mail, MessageCircle, ArrowUpCircle } from "lucide-react";
import { siteConfig } from "@/lib/data";

export default function Footer() {
  const socials = [
    { icon: Github, href: siteConfig.github, label: "GitHub" },
    { icon: Linkedin, href: siteConfig.linkedin, label: "LinkedIn" },
    { icon: Mail, href: `mailto:${siteConfig.email}`, label: "Email" },
    { icon: MessageCircle, href: siteConfig.whatsapp, label: "WhatsApp" },
  ];

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] w-full">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-10 sm:py-16">
        <div className="grid gap-8 md:grid-cols-[2fr_1fr] lg:grid-cols-[3fr_1fr_1fr]">
          <div className="max-w-md">
            <a href="#home" className="inline-flex items-center gap-3 text-lg font-bold tracking-tight mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--foreground)] text-sm font-black text-[var(--background)]">
                {siteConfig.name.charAt(0)}
              </div>
              <span className="text-[var(--foreground)]">{siteConfig.name}</span>
            </a>
            <p className="text-sm leading-relaxed text-[var(--muted-foreground)] pr-4 sm:pr-0">
              {siteConfig.tagline}
            </p>
          </div>

          <div className="flex flex-col gap-2">
             <h4 className="text-[11px] font-bold uppercase tracking-widest text-[var(--muted-foreground)] mb-1 cursor-default">Platform</h4>
             {socials.map(({ icon: Icon, href, label }) => (
               <a
                 key={label}
                 href={href}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="inline-flex items-center gap-3 text-sm font-medium text-[var(--foreground)] transition-colors hover:text-[var(--accent)] w-full py-1 sm:py-0"
                 aria-label={label}
               >
                 <Icon size={16} className="text-[var(--muted-foreground)]" />
                 {label}
               </a>
             ))}
          </div>

          <div className="flex flex-col gap-3 items-start md:items-end mt-2 md:mt-0">
             <a
               href="#home"
               className="inline-flex items-center gap-2 text-sm font-medium text-[var(--foreground)] transition-colors hover:text-[var(--accent)] py-2 sm:py-0"
               aria-label="Back to top"
             >
               Back to top
               <ArrowUpCircle size={18} className="text-[var(--muted-foreground)]" />
             </a>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-t border-[var(--border)] pt-6 text-[13px] text-[var(--muted-foreground)] font-medium">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p>
            Built with Next.js & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
