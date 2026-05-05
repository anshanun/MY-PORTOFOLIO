import { motion } from 'motion/react';
import { AnimatedLetterText } from './potfolio-text';

export function PortfolioTextSection() {
  return (
    <section className="py-32 flex flex-col items-center justify-center border-t overflow-hidden"
      style={{ borderColor: 'var(--clr-border)' }}>
      <div className="flex flex-col items-center gap-8 w-full max-w-6xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, x: -150 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as const }}>
          <AnimatedLetterText text="PORTFOLIO" letterToReplace="O"
            className="text-5xl sm:text-7xl md:text-[8rem] lg:text-[10rem]" />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }} transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg md:text-xl max-w-xl mx-auto leading-relaxed"
          style={{ color: 'var(--clr-text-muted)' }}>
          A curated selection of cases where complex systems meet clear data,
          highlighting the journey from problem identification to optimized outcomes.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }} whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: false }} transition={{ duration: 1, delay: 0.8 }}
          className="flex items-center gap-4 mt-8">
          <div className="h-px w-12 bg-black/10" />
          <span className="text-xs font-black uppercase tracking-widest opacity-50">Established 2024</span>
          <div className="h-px w-12 bg-black/10" />
        </motion.div>
      </div>
    </section>
  );
}
