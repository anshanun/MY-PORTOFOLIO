import { motion } from "motion/react";
import { useState } from "react";

const services = [
  {
    title: "Data Analysis",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400&auto=format&fit=crop",
    ],
  },
  {
    title: "Business Process",
    images: [
      "https://images.unsplash.com/photo-1531545514251-b159ce9450ce?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=400&auto=format&fit=crop",
    ],
  },
  {
    title: "System Design",
    images: [
      "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=400&auto=format&fit=crop",
    ],
  },
];

export function RevealImageList() {
  return (
    <div className="flex flex-col gap-0 w-full relative">
      <motion.h3
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        className="text-base md:text-lg font-bold tracking-widest uppercase text-black/40 mb-6"
      >
        Focus Areas
      </motion.h3>
      
      <div className="flex flex-col w-full">
        {services.map((service, index) => (
          <RevealImageListItem key={index} service={service} index={index} />
        ))}
      </div>
    </div>
  );
}

function RevealImageListItem({ service, index }: { service: typeof services[0], index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="group relative border-b border-black/10 py-6 md:py-7 cursor-pointer flex justify-between items-center w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h4 className="text-[2.35rem] md:text-[3.35rem] font-black tracking-tighter leading-[1.05] transition-colors duration-300 group-hover:text-[#0038FF]">
        {service.title}
      </h4>

      {/* Floating Images Container */}
      <div className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 items-center gap-4 pointer-events-none z-10">
        <motion.div
          animate={{ 
            opacity: isHovered ? 1 : 0, 
            x: isHovered ? 0 : 20,
            scale: isHovered ? 1 : 0.8,
            rotate: isHovered ? -4 : 0
          }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="w-32 h-40 rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
        >
          <img src={service.images[0]} alt="" className="w-full h-full object-cover" />
        </motion.div>
        
        <motion.div
          animate={{ 
            opacity: isHovered ? 1 : 0, 
            x: isHovered ? 0 : 40,
            scale: isHovered ? 1 : 0.8,
            rotate: isHovered ? 4 : 0
          }}
          transition={{ duration: 0.4, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="w-40 h-48 rounded-2xl overflow-hidden shadow-2xl border-4 border-white mt-8"
        >
          <img src={service.images[1]} alt="" className="w-full h-full object-cover" />
        </motion.div>
      </div>
      
      {/* Arrow Icon */}
      <motion.div 
        animate={{ x: isHovered ? 10 : 0, opacity: isHovered ? 1 : 0.3 }}
        className="w-10 h-10 rounded-full border border-black/20 flex items-center justify-center lg:hidden"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.div>
    </motion.div>
  );
}
