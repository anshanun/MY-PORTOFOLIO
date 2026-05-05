import { motion } from "motion/react";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa6";

export function Footer() {
  return (
    <footer
      className="w-full rounded-t-[2.5rem] md:rounded-t-[4rem] border-t relative overflow-hidden"
      style={{
        background:
          "radial-gradient(35% 128px at 50% 0%, color-mix(in srgb, var(--clr-primary) 6%, transparent), transparent)",
        borderColor: "var(--clr-border)",
      }}
    >
      {/* Top Glow Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-[200px]"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--clr-accent), transparent)",
        }}
      />

      <div className="max-w-6xl mx-auto px-8 py-16 md:py-24">
        {/* Main Row */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-8">
          {/* LEFT: Brand + Copyright */}
          <div className="flex flex-col justify-between gap-8 md:w-[280px] shrink-0">
            <div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-1.5 cursor-pointer mb-5"
              >
                <div className="bg-black text-white font-black tracking-tight text-xl px-5 py-2 rounded-2xl shadow-lg uppercase">
                  Anisa Hanun
                </div>
              </motion.div>
              <p className="text-black/50 text-base leading-relaxed">
                Information Systems student driving business value through
                data-driven insights and structured system design.
              </p>
            </div>
            <p className="text-black/40 text-base font-medium">
              &copy; {new Date().getFullYear()} Anisa Hanun. All rights
              reserved.
            </p>
          </div>

          {/* RIGHT: Nav Columns */}
          <div className="flex flex-wrap gap-16 flex-1 md:justify-end">
            {/* Navigation */}
            <div className="flex flex-col gap-3 min-w-[120px]">
              <h4 className="font-bold text-black uppercase tracking-widest text-sm mb-2">
                Navigation
              </h4>
              {["Work", "About", "Services", "Contact"].map((item, i) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 4, color: "var(--clr-primary)" }}
                  className="text-black/60 font-medium text-base transition-colors"
                >
                  {item}
                </motion.a>
              ))}
            </div>

            {/* Socials */}
            <div className="flex flex-col gap-3 min-w-[120px]">
              <h4 className="font-bold text-black uppercase tracking-widest text-sm mb-2">
                Socials
              </h4>
              {[
                {
                  icon: FaLinkedinIn,
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/in/anisahanun/",
                },
                {
                  icon: FaGithub,
                  label: "GitHub",
                  href: "https://github.com/anshanun",
                },
                {
                  icon: FaInstagram,
                  label: "Instagram",
                  href: "https://www.instagram.com/anshnn_nn/",
                },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: false }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 4, color: "var(--clr-primary)" }}
                  className="flex items-center gap-2 text-black/60 font-medium text-base transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                  {social.label}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-black/5 flex flex-wrap items-center justify-end gap-6">
          <a
            href="#"
            className="text-black/40 text-base font-medium hover:text-black transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-black/40 text-base font-medium hover:text-black transition-colors"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
