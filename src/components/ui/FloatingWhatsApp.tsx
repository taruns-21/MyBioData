"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { siteConfig } from "@/lib/data";

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const [isManuallyClosed, setIsManuallyClosed] = useState(false);

  useEffect(() => {
    const initialTimer = setTimeout(() => {
      setVisible(true);
      if (!isManuallyClosed) {
        setShowBubble(true);
      }
    }, 3000);
    
    let scrollTimeout: NodeJS.Timeout;
    let hideTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      if (isManuallyClosed) return;
      
      // Hide instantly while scrolling
      setShowBubble(false);
      
      clearTimeout(scrollTimeout);
      clearTimeout(hideTimeout);

      // Detect when scrolling stops
      scrollTimeout = setTimeout(() => {
        setShowBubble(true);
        
        // Hide again after 4 seconds
        hideTimeout = setTimeout(() => {
          setShowBubble(false);
        }, 4000);
      }, 500);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      clearTimeout(initialTimer);
      clearTimeout(scrollTimeout);
      clearTimeout(hideTimeout);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isManuallyClosed]);

  const handleClose = () => {
    setIsManuallyClosed(true);
    setShowBubble(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-end gap-3 sm:bottom-6 sm:right-6">
      {/* Speech Bubble Popup */}
      <AnimatePresence>
        {showBubble && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: 20, transition: { duration: 0.2 } }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="relative flex max-w-[180px] sm:max-w-[220px] flex-col rounded-2xl rounded-br-sm border border-[var(--border)] bg-[var(--card)] p-3 sm:p-3.5 text-[12px] sm:text-[13px] leading-relaxed text-[var(--foreground)] shadow-xl"
          >
            <button 
              onClick={handleClose}
              className="absolute right-2 top-2 p-1 text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors rounded-full bg-[var(--muted)]/50"
              aria-label="Close tooltip"
            >
              <X size={12} strokeWidth={3} />
            </button>
            <span className="font-bold text-sm mb-1 pr-6">Let's connect! 💬</span>
            <span className="text-[var(--muted-foreground)] leading-tight">
              Want to discuss a custom project or a full-time (FTE) opportunity?
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main WhatsApp Button */}
      <motion.a
        href={siteConfig.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform hover:scale-110 active:scale-95"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle fill="currentColor" stroke="none" size={24} />
      </motion.a>
    </div>
  );
}
