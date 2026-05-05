import { motion } from 'framer-motion'
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiFramer, SiNodedotjs } from 'react-icons/si'

const techStack = [
  { icon: SiReact, name: 'React', color: 'text-[#61DAFB]' },
  { icon: SiNextdotjs, name: 'Next.js', color: 'text-white' },
  { icon: SiTypescript, name: 'TypeScript', color: 'text-[#3178C6]' },
  { icon: SiTailwindcss, name: 'Tailwind', color: 'text-[#06B6D4]' },
  { icon: SiFramer, name: 'Framer Motion', color: 'text-[#0055FF]' },
  { icon: SiNodedotjs, name: 'Node.js', color: 'text-[#339933]' },
]

const About = () => {
  return (
    <section className="py-32 bg-surface relative z-10 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] -z-10" />
      
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
            Crafting digital experiences <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-500">
              that matter.
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-16 max-w-2xl mx-auto">
            I specialize in building exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products and performant user interfaces.
          </p>

          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            {techStack.map((tech, idx) => {
              const Icon = tech.icon
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="flex flex-col items-center gap-3 group cursor-pointer"
                >
                  <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center group-hover:bg-white/10 transition-colors">
                    <Icon className={`w-8 h-8 ${tech.color} opacity-80 group-hover:opacity-100 transition-opacity`} />
                  </div>
                  <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">{tech.name}</span>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
