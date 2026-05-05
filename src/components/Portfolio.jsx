import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const works = [
  {
    id: 1,
    title: "Visual Identity",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Abstract Motion",
    category: "Animation",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Architecture",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Nature Focus",
    category: "Photography",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Macro Life",
    category: "Illustration",
    image: "https://images.unsplash.com/photo-1555169062-013468b47731?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Coastal Serenity",
    category: "UI/UX",
    image: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?q=80&w=800&auto=format&fit=crop"
  }
]

const Portfolio = () => {
  return (
    <section className="py-32 bg-background relative z-10">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Works <br/><span className="text-gray-500">Collection</span></h2>
          </motion.div>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 font-medium"
          >
            View All Projects
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((work, idx) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative rounded-3xl overflow-hidden aspect-[4/5] cursor-pointer"
            >
              <img 
                src={work.image} 
                alt={work.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-accent text-sm font-bold uppercase tracking-wider mb-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {work.category}
                  </span>
                  <div className="flex justify-between items-center">
                    <h3 className="text-2xl font-bold text-white">{work.title}</h3>
                    <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300 delay-100">
                      <ArrowUpRight className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Portfolio
