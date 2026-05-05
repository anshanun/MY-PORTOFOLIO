"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { createPortal } from "react-dom";
import { X, Play } from "lucide-react";

type MediaItemType = {
  id: number;
  type: "image" | "video";
  title: string;
  desc: string;
  url: string;
  span: string;
};

const mediaItems: MediaItemType[] = [
  { id: 1, type: "image", title: "Sales Dashboard",  desc: "Problem: Unclear KPIs. Process: Data visualization. Outcome: 30% faster reporting.",
    url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60",
    span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2" },
  { id: 2, type: "video", title: "Process Automation",  desc: "Streamlining workflow operations",
    url: "https://cdn.pixabay.com/video/2024/07/24/222837_large.mp4",
    span: "md:col-span-2 md:row-span-2 col-span-1 sm:col-span-2 sm:row-span-2" },
  { id: 3, type: "image", title: "System Architecture",     desc: "Problem: Scalability. Process: Microservices design. Outcome: 99.9% uptime.",
    url: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=800&auto=format&fit=crop&q=60",
    span: "md:col-span-1 md:row-span-3 sm:col-span-2 sm:row-span-2" },
  { id: 4, type: "image", title: "Data Flow Diagram",     desc: "Optimized data pipelines",
    url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60",
    span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2" },
  { id: 5, type: "video", title: "Real-time Analytics",       desc: "Live business monitoring",
    url: "https://cdn.pixabay.com/video/2020/07/30/46026-447087782_large.mp4",
    span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2" },
  { id: 6, type: "image", title: "Business Strategy", desc: "Problem: Market alignment. Process: Gap analysis. Outcome: 15% revenue bump.",
    url: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=60",
    span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2" },
  { id: 7, type: "video", title: "Supply Chain Model", desc: "Logistics process optimization",
    url: "https://cdn.pixabay.com/video/2020/05/25/40130-424930032_large.mp4",
    span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2" },
];

export function InteractiveBentoGallery() {
  const [selectedItem, setSelectedItem] = useState<MediaItemType | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => { document.body.style.overflow = "auto"; };
  }, [selectedItem]);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 auto-rows-[160px] gap-4">
        {mediaItems.map((item) => (
          <motion.div
            layoutId={`media-${item.id}`}
            key={item.id}
            onClick={() => setSelectedItem(item)}
            className={`relative overflow-hidden rounded-3xl cursor-pointer group ${item.span}`}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {item.type === "image" ? (
              <img src={item.url} alt={item.title} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full relative">
                <video src={item.url} autoPlay muted loop playsInline className="w-full h-full object-cover" />
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center">
                  <Play className="w-4 h-4 text-white ml-0.5" />
                </div>
              </div>
            )}
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h3 className="text-white font-bold text-lg">{item.title}</h3>
              <p className="text-white/70 text-sm">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedItem && (
          <GalleryModal item={selectedItem} onClose={() => setSelectedItem(null)} onSelect={setSelectedItem} />
        )}
      </AnimatePresence>
    </>
  );
}

function GalleryModal({ item, onClose, onSelect }: { item: MediaItemType, onClose: () => void, onSelect: (i: MediaItemType) => void }) {
  const content = (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[99999] flex items-center justify-center p-4 md:p-10"
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={onClose} />
      
      <motion.div
        layoutId={`media-${item.id}`}
        className="relative w-full max-w-6xl h-[85vh] rounded-[2.5rem] overflow-hidden bg-black border border-white/10 flex flex-col md:flex-row shadow-2xl"
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Main Media */}
        <div className="flex-1 relative bg-black/50">
          {item.type === "image" ? (
            <img src={item.url} alt={item.title} className="w-full h-full object-contain" />
          ) : (
            <video src={item.url} autoPlay loop playsInline controls className="w-full h-full object-contain" />
          )}
        </div>

        {/* Sidebar Info */}
        <div className="w-full md:w-80 bg-[#111] p-8 flex flex-col gap-6 border-t md:border-t-0 md:border-l border-white/10 shrink-0 overflow-y-auto">
          <div>
            <h2 className="text-2xl font-black text-white mb-2">{item.title}</h2>
            <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
          </div>

          <div className="h-px w-full bg-white/10" />

          <div>
            <h4 className="text-white/40 text-xs font-bold uppercase tracking-widest mb-4">More Works</h4>
            <div className="grid grid-cols-2 gap-2">
              {mediaItems.filter(m => m.id !== item.id).slice(0, 4).map(m => (
                <div 
                  key={m.id} 
                  onClick={() => onSelect(m)}
                  className="aspect-square rounded-xl overflow-hidden cursor-pointer opacity-60 hover:opacity-100 transition-opacity relative group"
                >
                  {m.type === "image" ? (
                    <img src={m.url} className="w-full h-full object-cover" />
                  ) : (
                    <video src={m.url} className="w-full h-full object-cover" />
                  )}
                  {m.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                      <Play className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );

  return createPortal(content, document.body);
}
