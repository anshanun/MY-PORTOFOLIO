"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const EMOJIS = [
  { value: 1, label: "Poor", emoji: "😔" },
  { value: 2, label: "Fair", emoji: "😕" },
  { value: 3, label: "Good", emoji: "😐" },
  { value: 4, label: "Great", emoji: "🙂" },
  { value: 5, label: "Awesome", emoji: "😍" },
];

interface EmojiRatingProps {
  onChange?: (rating: number) => void;
}

export function EmojiRating({ onChange }: EmojiRatingProps) {
  const [activeRating, setActiveRating] = useState<number | null>(null);

  const handleClick = (value: number) => {
    setActiveRating(value);
    if (onChange) onChange(value);
  };

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="flex items-center gap-2 sm:gap-4 md:gap-6">
        {EMOJIS.map((item) => {
          const isActive = activeRating === item.value;
          
          return (
            <div key={item.value} className="relative flex flex-col items-center">
              {/* Background Glow when active */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="absolute inset-0 bg-[#CCFF00] rounded-full filter blur-[20px] opacity-40 -z-10"
                  />
                )}
              </AnimatePresence>

              {/* Emoji Button */}
              <motion.button
                onClick={() => handleClick(item.value)}
                animate={isActive ? { scale: 1.15, y: -8 } : { scale: 1, y: 0 }}
                whileHover={{ scale: isActive ? 1.15 : 1.1 }}
                whileTap={{ scale: 0.8 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className={`w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 text-4xl sm:text-5xl md:text-6xl flex items-center justify-center rounded-full transition-all duration-300 ${
                  isActive 
                    ? "grayscale-0 opacity-100 drop-shadow-xl" 
                    : "grayscale opacity-50 hover:grayscale-0 hover:opacity-100"
                }`}
                style={{ WebkitTapHighlightColor: "transparent" }}
              >
                {item.emoji}
              </motion.button>

              {/* Burst animation on click */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    key="burst"
                    initial={{ opacity: 1, scale: 1, borderWidth: "4px" }}
                    animate={{ opacity: 0, scale: 2, borderWidth: "0px" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="absolute inset-0 rounded-full border-[#0038FF] pointer-events-none"
                  />
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Label Box */}
      <div className="h-8 flex items-center justify-center">
        <AnimatePresence mode="wait">
          {activeRating ? (
            <motion.div
              key={activeRating}
              initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
              transition={{ duration: 0.2 }}
              className="bg-black text-white px-6 py-2 rounded-full font-bold text-sm shadow-xl"
            >
              {EMOJIS.find(e => e.value === activeRating)?.label}
            </motion.div>
          ) : (
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-black/30 font-medium text-sm"
            >
              Select an emoji to rate
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
