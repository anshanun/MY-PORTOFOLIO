import { motion } from 'framer-motion'
import { Code2, Zap, Rocket, ArrowUpRight, CheckCircle2 } from 'lucide-react'
import profileImg from "@/assets/profile.png" // We can use a generic icon if profileImg fails to import, but it should be available since it's in hero

const features = [
  {
    icon: <Zap className="w-8 h-8 text-[#CCFF00]" />,
    title: "BUILD Fast UIs",
    description: "Creating lightning-fast user interfaces that provide exceptional user experiences.",
    tech: ["React", "Next.js", "Framer Motion"]
  },
  {
    icon: <Code2 className="w-8 h-8 text-[#0038FF]" />,
    title: "CLEAN Codebase",
    description: "Writing maintainable, scalable, and clean code that your team will love.",
    tech: ["TypeScript", "Tailwind CSS", "shadcn/ui"]
  },
  {
    icon: <Rocket className="w-8 h-8 text-pink-500" />,
    title: "SHIP On Time",
    description: "Delivering high-quality products on schedule with agile methodologies.",
    tech: ["Node.js", "Git", "Vercel"]
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
}

const Features = () => {
  return (
    <section className="py-24 bg-transparent relative z-20 overflow-hidden font-sans">
      <div className="container mx-auto px-6 max-w-[1440px]">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white/[0.03] border border-white/10 p-8 md:p-10 rounded-[2rem] backdrop-blur-md flex flex-col items-center text-center group transition-all duration-300 hover:bg-white/[0.05] hover:border-white/20 shadow-2xl relative overflow-hidden"
            >
              {/* Animated Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Title Section */}
              <div className="mb-4">
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight leading-none mb-2" style={{ fontFamily: '"Arial Black", Impact, sans-serif' }}>
                  {feature.title.split(' ')[0]} <br/>
                  {feature.title.split(' ').slice(1).join(' ')}
                </h3>
              </div>
              
              <p className="text-sm font-medium text-gray-400 mb-12 max-w-[250px] leading-relaxed">
                {feature.description}
              </p>

              {/* Interactive Stickers Section */}
              <div className="mt-auto w-full h-32 relative flex items-center justify-center">
                
                {/* Variant 1: Build Fast UIs (Blue Pill + Yellow Pill) */}
                {idx === 0 && (
                  <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    whileHover={{ scale: 1.05 }}
                    className="relative flex items-center z-10 cursor-pointer"
                  >
                    <div className="bg-[#0038FF] text-white rounded-full flex items-center px-4 py-2.5 shadow-[0_10px_30px_rgba(0,56,255,0.4)] z-20 border border-white/20">
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-3 overflow-hidden">
                        <Zap className="w-4 h-4 text-[#CCFF00]" fill="#CCFF00" />
                      </div>
                      <div className="flex flex-col items-start mr-8">
                        <span className="text-xs font-black leading-tight tracking-wide">{feature.tech[0]}</span>
                        <span className="text-[10px] text-white/70 font-bold">{feature.tech[1]}</span>
                      </div>
                    </div>
                    <motion.div 
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute -right-12 bg-[#CCFF00] text-black font-black text-[10px] md:text-xs px-4 py-2 rounded-full shadow-xl border border-black/10 z-10 whitespace-nowrap"
                    >
                      {feature.tech[2]}
                    </motion.div>
                  </motion.div>
                )}

                {/* Variant 2: Clean Codebase (Blue Pill + Yellow Arrow) */}
                {idx === 1 && (
                  <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    whileHover={{ scale: 1.05 }}
                    className="relative flex items-center justify-center z-10 cursor-pointer w-full"
                  >
                    <div className="bg-[#0038FF] text-white rounded-full flex items-center shadow-[0_10px_30px_rgba(0,56,255,0.4)] z-10 border border-white/20 overflow-hidden relative">
                      <div className="px-5 py-3 font-black text-sm border-r border-white/20">
                        {feature.tech[0]}
                      </div>
                      <div className="px-5 py-3 font-bold text-sm bg-blue-600/50">
                        {feature.tech[1]}
                      </div>
                    </div>
                    <motion.div 
                      whileHover={{ rotate: 45 }}
                      className="absolute -bottom-4 right-8 md:right-12 bg-[#CCFF00] text-black p-2.5 rounded-full shadow-xl z-20"
                    >
                      <ArrowUpRight className="w-5 h-5 stroke-[3]" />
                    </motion.div>
                  </motion.div>
                )}

                {/* Variant 3: Ship On Time (Yellow Speech Bubble) */}
                {idx === 2 && (
                  <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    whileHover={{ scale: 1.05, rotate: -2 }}
                    className="relative flex flex-col items-center justify-center z-10 cursor-pointer"
                  >
                    <div className="bg-[#CCFF00] text-black px-8 py-5 rounded-[2rem] rounded-bl-md shadow-[0_15px_35px_rgba(204,255,0,0.3)] relative border border-black/10">
                      <p className="text-[10px] font-bold tracking-widest uppercase mb-1 text-black/60">Tech Stack</p>
                      <div className="text-xl font-black uppercase flex items-center gap-2">
                        {feature.tech[0]} <span className="text-blue-600">+</span> {feature.tech[2]}
                      </div>
                      {/* Triangle for speech bubble */}
                      <div className="absolute -bottom-3 left-4 w-6 h-6 bg-[#CCFF00] rotate-45 border-r border-b border-black/10" style={{ clipPath: "polygon(100% 0, 0 100%, 100% 100%)" }} />
                    </div>
                    <motion.div 
                      animate={{ y: [-5, 5, -5] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute -top-4 -right-4 bg-white text-black p-2 rounded-full shadow-lg"
                    >
                      <CheckCircle2 className="w-6 h-6 text-green-500" fill="#fff" />
                    </motion.div>
                  </motion.div>
                )}

              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Features
