"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/data";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);

      const sections = navLinks.map((link) => link.href.substring(1));
      let current = "home";
      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100) {
            current = section;
          }
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 w-full ${
        isScrolled ? "glass shadow-sm py-0" : "bg-transparent py-2"
      }`}
    >
      <div className="mx-auto flex h-[60px] max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#home" className="text-base font-bold tracking-tight text-[var(--foreground)] flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded bg-[var(--foreground)] text-[10px] text-[var(--background)]">
             {siteConfig.name.charAt(0)}
          </span>
          {siteConfig.name}
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm font-semibold transition-colors py-2 ${
                activeSection === link.href.substring(1)
                  ? "text-[var(--accent)]"
                  : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 -mr-2 text-[var(--foreground)] md:hidden flex items-center justify-center"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav (Dropdown) */}
      {mobileMenuOpen && (
        <div className="absolute top-[60px] left-0 w-full border-b border-[var(--border)] bg-[var(--card)] shadow-xl md:hidden">
          <nav className="flex flex-col py-2 px-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`w-full py-4 px-2 text-base font-semibold border-b border-[var(--border)] last:border-none ${
                  activeSection === link.href.substring(1)
                    ? "text-[var(--accent)]"
                    : "text-[var(--foreground)]"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
