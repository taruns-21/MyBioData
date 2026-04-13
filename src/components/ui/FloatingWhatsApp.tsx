"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { siteConfig } from "@/lib/data";

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);
  const [tooltipDismissed, setTooltipDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!visible || tooltipDismissed) return;
    const timer = setTimeout(() => setTooltipDismissed(true), 8000);
    return () => clearTimeout(timer);
  }, [visible, tooltipDismissed]);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3">
      {/* Tooltip */}
      <AnimatePresence>
        {!tooltipDismissed && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.9 }}
            className="glass mb-2 flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm shadow-lg"
          >
            <span className="text-[var(--muted-foreground)]">
              Have a project in mind?
            </span>
            <button
              onClick={() => setTooltipDismissed(true)}
              className="text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
              aria-label="Dismiss"
            >
              <X size={14} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp button */}
      <motion.a
        href={siteConfig.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 transition-shadow hover:shadow-xl hover:shadow-[#25D366]/40"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={24} />
      </motion.a>
    </div>
  );
}
