import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { Code2, Database, LineChart, Building2 } from "lucide-react";
import { useRef } from "react";

function TiltCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 200, damping: 20 });
  const springY = useSpring(y, { stiffness: 200, damping: 20 });

  const rotateX = useTransform(springY, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-6, 6]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 800,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function FeaturesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 48, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const focusAreas = [
    {
      title: "Software Development",
      icon: Code2,
      desc: "Building scalable and maintainable applications.",
    },
    {
      title: "Data",
      icon: Database,
      desc: "Transforming raw numbers into actionable insights.",
    },
    {
      title: "Business Process",
      icon: LineChart,
      desc: "Optimizing workflows for maximum efficiency.",
    },
    {
      title: "Enterprise Resource Planning",
      icon: Building2,
      desc: "Integrating core business processes seamlessly.",
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-10">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 w-full"
      >
        {focusAreas.map((area, idx) => (
          <motion.div key={idx} variants={itemVariants}>
            <TiltCard className="h-full">
              <motion.div
                whileHover={{ boxShadow: "0px 24px 48px rgba(0,0,0,0.10)" }}
                transition={{ duration: 0.3 }}
                className="bg-[#F8F9FA] rounded-[2rem] p-6 flex flex-col h-full cursor-pointer border border-black/5 relative overflow-hidden group"
              >
                {/* Subtle shimmer on hover */}
                <motion.div
                  initial={{ opacity: 0, x: "-100%" }}
                  whileHover={{ opacity: 1, x: "100%" }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none"
                />

                {/* Icon with pop animation */}
                <motion.div
                  whileHover={{ scale: 1.15, rotate: -6 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  className="w-12 h-12 rounded-2xl bg-[#0038FF] text-white flex items-center justify-center mb-6 shadow-md shrink-0"
                >
                  <area.icon className="w-6 h-6" />
                </motion.div>

                <h3 className="text-lg font-black tracking-tight mb-2 leading-tight uppercase">
                  {area.title}
                </h3>
                <p className="text-black/50 text-sm leading-relaxed mt-auto">
                  {area.desc}
                </p>
              </motion.div>
            </TiltCard>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
