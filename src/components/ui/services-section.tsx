import { motion } from "motion/react";
import { RevealImageList } from "./reveal-images";
import { SiMysql, SiPython, SiSap } from "react-icons/si";
import { IoLogoTableau } from "react-icons/io5";

export function ServicesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 300, damping: 20 } }
  };

  return (
    <section className="py-20 md:py-24 border-t border-black/5" id="about">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex flex-col lg:flex-row gap-12 lg:gap-16">
        {/* Left Column - Services List */}
        <div className="lg:w-[52%]">
          <RevealImageList />
        </div>

        {/* Right Column - About & Stack */}
        <div className="lg:w-[48%] flex flex-col gap-7">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-black/10 w-max"
          >
            <span className="relative w-2 h-2">
              <span className="absolute inset-0 rounded-full animate-ping opacity-70 bg-[#CCFF00]" />
              <span className="relative block w-2 h-2 rounded-full bg-[#CCFF00]" />
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-black/70">
              Open to internship / collaboration
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-[2.55rem] md:text-[3.8rem] font-black tracking-tight leading-[1.05] mb-5">
              Crafting digital experiences <br />
              solutions that <span className="text-[#0038FF]">matter.</span>
            </h2>
            <p className="text-black/65 text-[1.35rem] leading-relaxed max-w-lg">
              I am an Information Systems student with an interest in data
              analysis, process modeling, and system design, developed through
              academic projects and coursework.
            </p>
          </motion.div>

          {/* Tech Stack Pills */}
          <div className="mt-4">
            <h3 className="text-base font-bold tracking-widest uppercase text-black/40 mb-4">
              Core Skills
            </h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              className="flex flex-wrap gap-2.5"
            >
              {[
                {
                  icon: IoLogoTableau,
                  label: "Tableau",
                  bg: "bg-black",
                  color: "text-white",
                },
                {
                  icon: SiMysql,
                  label: "MySQL",
                  bg: "bg-[#0038FF]",
                  color: "text-white",
                },
                {
                  icon: SiPython,
                  label: "Python",
                  bg: "bg-black",
                  color: "text-white",
                },
                {
                  icon: SiSap,
                  label: "SAP",
                  bg: "bg-[#0038FF]",
                  color: "text-white",
                },
                {
                  icon: undefined,
                  label: "BPMN",
                  bg: "bg-black",
                  color: "text-white",
                },
              ].map((tech, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.08,
                    rotate: i % 2 === 0 ? 2 : -2,
                    boxShadow: "0px 10px 20px rgba(0,0,0,0.15)",
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full ${tech.bg} ${tech.color} shadow-sm cursor-pointer is-sticker`}
                >
                  {tech.icon && <tech.icon className="w-[17px] h-[17px]" />}
                  {!tech.icon && (
                    <span className="w-[17px] h-[17px] flex items-center justify-center font-bold text-[10px]">
                      BP
                    </span>
                  )}
                  <span className="text-sm font-bold">{tech.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
