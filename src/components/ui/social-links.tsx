"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FaLinkedinIn, FaGithub, FaXTwitter, FaInstagram, FaEnvelope } from "react-icons/fa6";
import { Share2, X } from "lucide-react";
import { createPortal } from "react-dom";

const links = [
  { icon: FaLinkedinIn, label: "LinkedIn", href: "https://www.linkedin.com/in/anisahanun", bg: "from-[#0038FF] to-[#0066FF]", color: "text-white" },
  { icon: FaGithub, label: "GitHub", href: "https://github.com/anshanun", bg: "from-[#0038FF] to-[#0066FF]", color: "text-white" },
  { icon: FaInstagram, label: "Instagram", href: "https://www.instagram.com/anshnn_", bg: "from-[#CCFF00] to-[#AAEE00]", color: "text-black" },
  { icon: FaEnvelope, label: "Email", href: "mailto:anisahanun@gmail.com", bg: "from-[#CCFF00] to-[#AAEE00]", color: "text-black" },
];

export function SocialLinks() {
  const [isOpen, setIsOpen] = useState(false);

  // Use createPortal to attach to body to escape parallax transforms
  return createPortal(
    <>
      {/* Desktop Fixed Sidebar */}
      <div className="hidden md:flex fixed top-[30%] left-0 z-40 flex-col gap-5 pointer-events-none">
        {links.map((link, idx) => (
          <motion.a
            key={idx}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ width: "4.5rem", boxShadow: "0px 4px 10px rgba(0,0,0,0.1)" }}
            whileHover={{ 
              width: "14rem", 
              scale: 1.05,
              boxShadow: link.label === "Instagram" || link.label === "Email" ? "0px 0px 20px rgba(204, 255, 0, 0.6)" : "0px 0px 20px rgba(0, 56, 255, 0.6)"
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={`pointer-events-auto flex items-center overflow-hidden rounded-r-2xl bg-gradient-to-r ${link.bg} h-16 md:h-20`}
          >
            <div className={`w-[4.5rem] shrink-0 flex justify-center ${link.color}`}>
              <link.icon className="w-7 h-7 md:w-8 md:h-8" />
            </div>
            <span className={`font-black text-base md:text-lg tracking-wide whitespace-nowrap ${link.color}`}>
              {link.label}
            </span>
          </motion.a>
        ))}
      </div>

      {/* Mobile Floating Button */}
      <div className="md:hidden fixed bottom-6 right-6 z-50">
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              />
              <div className="fixed bottom-24 right-6 flex flex-col gap-3 z-50 items-end">
                {links.map((link, idx) => (
                  <motion.a
                    key={idx}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 20, scale: 0.8 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 20, scale: 0.8 }}
                    transition={{ delay: idx * 0.05, type: "spring", stiffness: 300, damping: 20 }}
                    className={`flex items-center gap-3 px-5 py-3 rounded-full bg-gradient-to-r ${link.bg} shadow-lg`}
                  >
                    <span className={`font-bold text-sm ${link.color}`}>{link.label}</span>
                    <link.icon className={`w-4 h-4 ${link.color}`} />
                  </motion.a>
                ))}
              </div>
            </>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 rounded-full bg-[#0038FF] text-white shadow-2xl flex items-center justify-center relative z-50 border-2 border-white/20"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="share"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Share2 className="w-6 h-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </>,
    document.body
  );
}
