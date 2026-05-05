"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import profileImg from "@/assets/profile.png";

export function Hero() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div
        className="relative min-h-screen md:h-[110vh] flex flex-col font-sans overflow-hidden w-full"
        style={{ background: "var(--clr-primary)" }}
      >
        {/* Background Grid */}
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Navbar */}
        <nav className="relative z-30 flex items-center justify-between px-6 py-6 md:px-10 md:py-8 max-w-[1440px] mx-auto w-full">
          {/* Top Left Greeting Sticker */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: [-5, 5, -5] }}
            className="bg-white text-black font-bold tracking-widest uppercase text-xs md:text-sm px-6 py-3 rounded-2xl rounded-bl-sm shadow-md rotate-[-3deg] relative cursor-default origin-bottom-left"
          >
            Hello there 👋
            <div
              className="absolute -bottom-2 left-0 w-4 h-4 bg-white"
              style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
            />
          </motion.div>

          {/* Centered Navigation */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center space-x-12">
            {["Work", "About", "Stack", "Blog"].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{
                  y: -2,
                  scale: 1.05,
                  textShadow: "0px 0px 12px rgba(255,255,255,0.8)",
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="text-white text-xl md:text-2xl font-black transition-colors cursor-pointer relative group uppercase tracking-wider"
              >
                {item}
                <span className="absolute -bottom-2 left-0 w-0 h-1 bg-[#CCFF00] transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
          </div>

          <motion.a
            href="mailto:contact@anisahanun.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full border-2 border-white text-white text-sm md:text-base font-bold transition-colors cursor-pointer"
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color =
                "var(--clr-primary)";
              (e.currentTarget as HTMLElement).style.background = "#fff";
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0px 0px 20px rgba(255,255,255,0.6)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color = "#fff";
              (e.currentTarget as HTMLElement).style.background = "transparent";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            Contact Me
          </motion.a>
        </nav>

        {/* Hero Content */}
        <main className="flex-1 relative z-10 pt-2 pb-20 md:pt-6 md:pb-24 px-4 flex flex-col items-center justify-start w-full max-w-[1440px] mx-auto">
          <div className="relative w-full max-w-6xl mx-auto flex flex-col items-center justify-start text-center z-20">
            {/* Badges Stack */}
            <div className="flex flex-col items-center gap-2 md:gap-3 mb-6 md:mb-10 relative z-30 mt-[-10px]">
              <motion.div
                whileHover={{ scale: 1.05, rotate: [-1, 1, -1] }}
                transition={{ duration: 0.2 }}
                className="bg-[#CCFF00] border border-black/10 rounded-full px-5 py-2.5 shadow-lg cursor-pointer"
              >
                <p className="font-black text-[10px] md:text-xs text-black uppercase tracking-widest">
                  Undergraduate Information Systems Student
                </p>
              </motion.div>
              <motion.div
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 0px 15px rgba(255,255,255,0.4)",
                }}
                className="inline-flex items-center gap-2.5 rounded-full px-5 py-2.5 border cursor-pointer backdrop-blur-sm"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  borderColor: "rgba(255,255,255,0.2)",
                }}
              >
                <span className="relative w-2.5 h-2.5">
                  <span className="absolute inset-0 rounded-full animate-ping opacity-70 bg-[#CCFF00]" />
                  <span className="relative block w-2.5 h-2.5 rounded-full bg-[#CCFF00]" />
                </span>
                <span className="text-[10px] md:text-xs font-bold text-white/90 uppercase tracking-widest">
                  Open to internship / collaboration
                </span>
              </motion.div>
            </div>

            {/* Main Content Area: Lanyard (Absolute) + Centered Huge Text */}
            <div className="w-full relative flex flex-col items-center justify-center mt-6 md:mt-12 z-30 min-h-[50vh] md:min-h-[60vh]">
              {/* Profile Image with realistic lanyard animation (Floating independently on the far left) */}
              <motion.div
                drag
                dragConstraints={{ top: -20, bottom: 20, left: -20, right: 20 }}
                dragElastic={0.2}
                onClick={() => setShowModal(true)}
                initial={{ y: "-100vh", opacity: 1, rotate: -15 }}
                animate={{ y: 0, opacity: 1, rotate: [-5, 5, -3, 3, -1, 1, 0] }}
                transition={{
                  y: {
                    type: "spring",
                    stiffness: 40,
                    damping: 10,
                    mass: 1.5,
                    delay: 3.2,
                  },
                  rotate: {
                    type: "spring",
                    stiffness: 30,
                    damping: 10,
                    delay: 3.5,
                    repeat: Infinity,
                    duration: 8,
                    ease: "easeInOut",
                  },
                }}
                whileHover={{ scale: 1.02 }}
                className="absolute top-[-40px] md:top-[-60px] left-0 md:left-[2%] xl:left-[5%] shrink-0 flex justify-center origin-[50%_-300px] cursor-pointer active:cursor-grabbing hover:drop-shadow-[0_20px_50px_rgba(204,255,0,0.4)] transition-all duration-300 z-50"
              >
                {/* Lanyard String (Fabric texture) */}
                <div className="absolute bottom-[100%] left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none drop-shadow-xl">
                  <div
                    className="w-3 md:w-4 h-[50vh] md:h-[800px] rounded-full"
                    style={{
                      background:
                        "repeating-linear-gradient(45deg, #222 0, #222 2px, #333 2px, #333 4px)",
                      boxShadow: "inset 0 0 5px rgba(0,0,0,0.8)",
                    }}
                  />
                  <div className="w-8 md:w-10 h-4 md:h-5 bg-gradient-to-b from-gray-300 to-gray-500 rounded-sm shadow-md border-b-2 border-gray-600 z-10 flex items-center justify-center">
                    <div className="w-4 h-1 bg-gray-600 rounded-full opacity-50" />
                  </div>
                  <div className="w-5 md:w-6 h-6 md:h-8 border-[6px] border-gray-400 rounded-full -mt-2 shadow-sm z-0" />
                </div>

                {/* Card Holder (Realistic Plastic/Glass Effect) */}
                <div className="w-36 h-48 md:w-44 md:h-60 p-2 shrink-0 rounded-2xl md:rounded-[1.5rem] border-[1px] border-white/30 shadow-[0_30px_60px_rgba(0,0,0,0.6)] relative z-20 bg-white/10 backdrop-blur-md flex flex-col items-center justify-between overflow-hidden group">
                  {/* Glass reflection overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-50 pointer-events-none z-20" />
                  <div className="w-full h-4/5 rounded-xl md:rounded-[1rem] overflow-hidden bg-white shadow-inner relative z-10">
                    <img
                      src={profileImg}
                      alt="Anisa Hanun"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="bg-[#CCFF00] text-black font-black text-[10px] md:text-xs px-3 py-2 rounded-full shadow-[0_0_15px_rgba(204,255,0,0.5)] transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 text-center leading-tight">
                        Get to <br /> know me
                      </span>
                    </div>
                  </div>
                  <div className="w-12 md:w-16 h-1.5 bg-white/40 rounded-full mt-2 shadow-inner z-10" />
                </div>
              </motion.div>

              {/* Massive Centered Text with 8-Layer 3D Shadow and Balanced Staggered Layout */}
              <div className="flex flex-col items-center justify-center w-full z-30 pointer-events-none mt-8 md:mt-4">
                <motion.h1
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 3.1 }}
                  className="text-[clamp(3.5rem,9vw,160px)] font-black leading-[0.85] tracking-tighter m-0 p-0 uppercase text-center whitespace-nowrap md:-translate-x-12"
                  style={{
                    fontFamily: '"Arial Black", Impact, sans-serif',
                    color: "#CCFF00",
                    textShadow:
                      "1px 1px 0 #001A99, 2px 2px 0 #001A99, 3px 3px 0 #001A99, 4px 4px 0 #001A99, 5px 5px 0 #001A99, 6px 6px 0 #001A99, 7px 7px 0 #001A99, 8px 8px 0 #001A99, 15px 15px 30px rgba(0,0,0,0.6)",
                  }}
                >
                  ANISA HANUN
                </motion.h1>
                <motion.h2
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 3.3 }}
                  className="text-[clamp(2.5rem,7vw,110px)] font-black leading-[0.9] tracking-tight text-white m-0 p-0 uppercase text-center mt-3 md:mt-4 md:translate-x-12"
                  style={{
                    fontFamily: '"Arial Black", Impact, sans-serif',
                    textShadow:
                      "1px 1px 0 #001A99, 2px 2px 0 #001A99, 3px 3px 0 #001A99, 4px 4px 0 #001A99, 5px 5px 0 #001A99, 6px 6px 0 #001A99, 7px 7px 0 #001A99, 8px 8px 0 #001A99, 15px 15px 30px rgba(0,0,0,0.6)",
                  }}
                >
                  TECH & BUSINESS
                  <br />
                  ENTHUSIAST
                </motion.h2>
              </div>
            </div>

            {/* Floating Stickers (Desktop) - Pushed strictly to edges */}

            {/* Sticker 1: Project (Top Right Corner) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: [0, -15, 0], rotate: [-2, 2, -2] }}
              transition={{
                opacity: { duration: 0.8, delay: 3.5 },
                y: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 5, repeat: Infinity, ease: "easeInOut" },
              }}
              className="hidden md:flex absolute top-[5%] xl:top-[8%] right-[-2%] xl:right-[-4%] z-0"
            >
              <motion.div
                whileHover={{
                  scale: 1.1,
                  y: -5,
                  boxShadow: "0px 20px 40px rgba(0,0,0,0.3)",
                }}
                className="backdrop-blur-md bg-[rgba(200,200,200,0.08)] border border-white/10 rounded-[2rem] p-5 flex flex-col items-center justify-center shadow-xl cursor-pointer transition-shadow"
              >
                <div className="w-36 h-20 rounded-2xl overflow-hidden mb-4 border border-white/10 shadow-inner bg-black/20 flex items-center justify-center relative">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-3xl font-black text-[#CCFF00]"
                  >
                    5+
                  </motion.div>
                  <div className="absolute bottom-2 right-2 w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                </div>
                <p className="font-black text-sm text-white drop-shadow-md tracking-wide">
                  Projects
                </p>
              </motion.div>
            </motion.div>

            {/* Sticker 3: Design System (Bottom Left Corner) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: [0, -15, 0], rotate: [4, 8, 4] }}
              transition={{
                opacity: { duration: 0.8, delay: 3.9 },
                y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 7, repeat: Infinity, ease: "easeInOut" },
              }}
              className="hidden md:flex absolute bottom-[5%] xl:bottom-[8%] left-[-2%] xl:left-[-4%] z-0"
            >
              <motion.div
                whileHover={{
                  scale: 1.1,
                  y: -5,
                  boxShadow: "0px 20px 40px rgba(0,0,0,0.3)",
                }}
                className="backdrop-blur-md bg-[rgba(200,200,200,0.08)] border border-white/10 rounded-[2rem] p-5 flex flex-col items-center justify-center shadow-xl cursor-pointer transition-shadow"
              >
                <div className="w-36 h-20 rounded-2xl overflow-hidden mb-4 border border-white/10 shadow-inner bg-black/20 flex flex-col p-2 gap-2">
                  <div className="w-full h-3 bg-white/20 rounded-md" />
                  <div className="flex gap-2 flex-1">
                    <div className="w-1/3 h-full bg-white/10 rounded-md" />
                    <motion.div
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="flex-1 h-full bg-[#CCFF00]/40 rounded-md border border-[#CCFF00]/50"
                    />
                  </div>
                </div>
                <p className="font-black text-sm text-white drop-shadow-md tracking-wide">
                  Design System
                </p>
              </motion.div>
            </motion.div>

            {/* Sticker 4: Data Analysis (Bottom Right Corner) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: [0, -12, 0], rotate: [-2, 2, -2] }}
              transition={{
                opacity: { duration: 0.8, delay: 4.1 },
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 5, repeat: Infinity, ease: "easeInOut" },
              }}
              className="hidden md:flex absolute bottom-[5%] xl:bottom-[8%] right-[-5%] xl:right-[-6%] z-0"
            >
              <motion.div
                whileHover={{
                  scale: 1.1,
                  y: -5,
                  boxShadow: "0px 20px 40px rgba(0,0,0,0.3)",
                }}
                className="backdrop-blur-md bg-[rgba(200,200,200,0.08)] border border-white/10 rounded-[2rem] p-5 flex flex-col items-center justify-center shadow-xl cursor-pointer transition-shadow"
              >
                <div className="w-36 h-20 rounded-2xl overflow-hidden mb-4 border border-white/10 shadow-inner bg-black/20 flex items-end justify-center relative gap-1.5 p-1.5">
                  <motion.div
                    animate={{ height: ["20%", "60%", "20%"] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="w-4 bg-blue-400 rounded-t-sm"
                  />
                  <motion.div
                    animate={{ height: ["40%", "80%", "40%"] }}
                    transition={{
                      duration: 2,
                      delay: 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="w-4 bg-[#CCFF00] rounded-t-sm"
                  />
                  <motion.div
                    animate={{ height: ["60%", "30%", "60%"] }}
                    transition={{
                      duration: 2,
                      delay: 1,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="w-4 bg-purple-400 rounded-t-sm"
                  />
                  <motion.div
                    animate={{ height: ["80%", "50%", "80%"] }}
                    transition={{
                      duration: 2,
                      delay: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="w-4 bg-white rounded-t-sm"
                  />
                </div>
                <p className="font-black text-sm text-white drop-shadow-md tracking-wide">
                  Data Analysis
                </p>
              </motion.div>
            </motion.div>

            {/* Mobile stickers — md:hidden, in-flow */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 3.5,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
              className="md:hidden grid grid-cols-2 gap-4 mt-8 w-full max-w-sm relative z-0"
            >
              <div className="flex flex-col items-center gap-2 p-3 rounded-2xl backdrop-blur-md border border-white/10 shadow-lg bg-[rgba(200,200,200,0.08)]">
                <div className="w-full h-16 rounded-lg overflow-hidden border border-white/10 bg-black/20 flex items-center justify-center">
                  <span className="text-2xl font-black text-[#CCFF00]">5+</span>
                </div>
                <p className="font-black text-[10px] text-white">Projects</p>
              </div>

              <div className="flex flex-col items-center gap-2 p-3 rounded-2xl backdrop-blur-md border border-white/10 shadow-lg bg-[rgba(200,200,200,0.08)]">
                <div className="w-full h-16 rounded-lg overflow-hidden border border-white/10 bg-black/20 flex items-end justify-center gap-1 p-2">
                  <div className="w-3 bg-blue-400 h-[30%] rounded-t-sm" />
                  <div className="w-3 bg-[#CCFF00] h-[60%] rounded-t-sm" />
                  <div className="w-3 bg-purple-400 h-[40%] rounded-t-sm" />
                  <div className="w-3 bg-white h-[80%] rounded-t-sm" />
                </div>
                <p className="font-black text-[10px] text-white">
                  Data Analysis
                </p>
              </div>

              <div className="flex flex-col items-center gap-2 p-3 rounded-2xl backdrop-blur-md border border-white/10 shadow-lg bg-[rgba(200,200,200,0.08)]">
                <div className="w-full h-16 rounded-lg overflow-hidden border border-white/10 bg-black/20 flex flex-col p-1.5 gap-1.5">
                  <div className="w-full h-3 bg-white/20 rounded-sm" />
                  <div className="flex gap-1.5 flex-1">
                    <div className="w-1/3 h-full bg-white/10 rounded-sm" />
                    <div className="flex-1 h-full bg-[#CCFF00]/40 rounded-sm border border-[#CCFF00]/50" />
                  </div>
                </div>
                <p className="font-black text-[10px] text-white">
                  Design System
                </p>
              </div>

              <div className="flex flex-col items-center gap-2 p-3 rounded-2xl backdrop-blur-md border border-white/10 shadow-lg bg-[rgba(200,200,200,0.08)]">
                <div className="w-full h-16 rounded-lg overflow-hidden border border-white/10 bg-black/20 flex items-center justify-center relative">
                  <div className="absolute w-8 h-8 border-2 border-dashed border-white/30 rounded-full" />
                  <div className="w-4 h-4 bg-[#0038FF] rounded-full z-10 flex items-center justify-center shadow-[0_0_10px_rgba(0,56,255,0.8)]" />
                </div>
                <p className="font-black text-[10px] text-white">
                  Business Process
                </p>
              </div>
            </motion.div>
          </div>
        </main>
      </div>
      {/* Profile Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md bg-white rounded-3xl p-8 shadow-2xl overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-[#CCFF00]" />
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>

              <div className="flex flex-col items-center text-center mt-2">
                <div className="w-24 h-24 rounded-full border-4 border-[#0038FF] overflow-hidden mb-4 shadow-lg">
                  <img
                    src={profileImg}
                    alt="Anisa Hanun"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3
                  className="text-2xl font-black text-gray-900 mb-1"
                  style={{ fontFamily: '"Arial Black", Impact, sans-serif' }}
                >
                  Anisa Hanun
                </h3>
                <p className="text-[#0038FF] font-bold text-sm mb-4">
                  Undergraduate Information Systems Student
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 font-medium">
                  Third-year Information Systems student at Telkom University
                  with hands-on experience as a practicum assistant in
                  programming, databases, and systems analysis. Experienced in
                  troubleshooting, supporting structured sessions, and applying
                  data analysis and TOGAF in academic projects.
                </p>

                <div className="flex flex-wrap justify-center gap-2">
                  {["System Analysis", "Data Analytics"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-bold border border-gray-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
