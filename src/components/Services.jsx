import { motion } from "framer-motion";
import {
  Palette,
  Layout,
  MonitorSmartphone,
  TrendingUp,
  Database,
  Workflow,
} from "lucide-react";
import {
  SiTableau,
  SiMysql,
  SiPython,
  SiSap,
  SiNodedotjs,
} from "react-icons/si";

const services = [
  {
    icon: <Palette className="w-6 h-6" />,
    title: "Branding",
    description:
      "Creating unique digital identities that resonate with your target audience.",
    gradient: "from-pink-500 to-rose-400",
  },
  {
    icon: <Layout className="w-6 h-6" />,
    title: "Web Design",
    description:
      "Designing beautiful, intuitive interfaces focused on user experience.",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    icon: <MonitorSmartphone className="w-6 h-6" />,
    title: "Illustration",
    description:
      "Crafting custom minimal illustrations to tell your brand's story.",
    gradient: "from-purple-500 to-indigo-400",
  },
];

const focusAreas = [
  {
    icon: <Database className="w-5 h-5" />,
    title: "Data Analysis",
    description: "Turning complex data into actionable insights",
  },
  {
    icon: <Workflow className="w-5 h-5" />,
    title: "Business Process",
    description: "Optimizing workflows and modeling processes",
  },
  {
    icon: <TrendingUp className="w-5 h-5" />,
    title: "System Design",
    description: "Architecting scalable, maintainable systems",
  },
];

const coreSkills = [
  { icon: SiTableau, name: "Tableau", color: "text-[#E97627]" },
  { icon: SiMysql, name: "MySQL", color: "text-[#4479A1]" },
  { icon: SiPython, name: "Python", color: "text-[#3776AB]" },
  { icon: SiSap, name: "SAP", color: "text-[#0FAAFF]" },
  { icon: SiNodedotjs, name: "BPMN", color: "text-[#339933]" },
];

const Services = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-[#0B0B1F] to-[#0F0F2A] relative z-10 overflow-hidden">
      {/* Background effects seperti gambar 2 */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6 max-w-7xl">
        {/* AVAILABLE FOR NEW PROJECTS BADGE - SEPERTI GAMBAR 2 */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex items-center gap-3 bg-accent/10 backdrop-blur-sm rounded-full px-6 py-3 border border-accent/30">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
            </span>
            <span className="text-white font-medium tracking-wide">
              AVAILABLE FOR NEW PROJECTS
            </span>
          </div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* LEFT SIDE - Our Services (dijaga seperti asli tapi font lebih gede) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/3 sticky top-32"
          >
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
              Our
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-500">
                Services
              </span>
            </h2>
            <p className="text-gray-400 leading-relaxed text-lg">
              We provide comprehensive digital solutions tailored to elevate
              your brand and engage your audience effectively.
            </p>

            {/* CORE SKILLS - dengan Tableau */}
            <div className="mt-10">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                Core Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {coreSkills.map((skill, idx) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/10 hover:border-accent/30 transition-all cursor-pointer"
                    >
                      <Icon className={`w-4 h-4 ${skill.color}`} />
                      <span className="text-sm text-white">{skill.name}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE - Service Cards + Focus Areas */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:w-2/3 space-y-8 w-full"
          >
            {/* EXISTING SERVICES - dipertahankan seperti asli */}
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                whileHover={{ x: 8 }}
                className="group p-6 md:p-8 rounded-3xl glass hover:bg-white/10 transition-all duration-300 flex gap-6 items-start border border-white/5 hover:border-accent/30"
              >
                <div
                  className={`p-4 rounded-2xl bg-gradient-to-br ${service.gradient} bg-white/5 text-white group-hover:scale-110 transition-all duration-300 shrink-0 shadow-lg`}
                >
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-base">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* FOCUS AREAS SECTION - DIGESER KE KIRI, FONT GEDE */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                  <span className="text-xl">🎯</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  FOCUS <span className="text-accent">AREAS</span>
                </h3>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                {focusAreas.map((area, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-accent/30 transition-all cursor-pointer"
                  >
                    <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center mb-3">
                      <div className="text-accent">{area.icon}</div>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-1">
                      {area.title}
                    </h4>
                    <p className="text-gray-400 text-sm">{area.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CRAFTING DATA-DRIVEN SOLUTIONS - SEPERTI GAMBAR 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-8 text-center p-6 rounded-2xl bg-gradient-to-r from-accent/10 to-purple-500/10 border border-accent/20"
            >
              <p className="text-white text-lg font-medium">
                ✨ Crafting{" "}
                <span className="text-accent font-bold">
                  data-driven solutions
                </span>{" "}
                that matter.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
