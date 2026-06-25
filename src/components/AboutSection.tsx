import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, FolderOpen, Cpu } from "lucide-react";
import avatarImg from "@/assets/avatar.jpeg";

const stats = [
  { value: "3+", label: "YEARS EXP", icon: Clock, color: "text-primary" },
  { value: "7+", label: "PROJECTS", icon: FolderOpen, color: "text-accent" },
  { value: "15+", label: "TECHNOLOGIES", icon: Cpu, color: "text-pink-400" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div ref={ref} className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Photo with geometric frame */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Corner brackets */}
              <div className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-primary/60 rounded-tl-lg" />
              <div className="absolute -top-4 -right-4 w-16 h-16 border-t-2 border-r-2 border-accent/60 rounded-tr-lg" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 border-b-2 border-l-2 border-accent/60 rounded-bl-lg" />
              <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-2 border-r-2 border-primary/60 rounded-br-lg" />
              
              {/* Hexagonal clip path photo */}
              <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden relative border-4 border-primary/30 shadow-lg shadow-primary/20">
                <img
                  src={avatarImg}
                  alt="Ayoub Dellaoui"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating decorative */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -right-6 top-1/3 w-12 h-12 rounded-xl bg-primary/20 backdrop-blur-sm border border-primary/30 flex items-center justify-center"
              >
                <Cpu size={20} className="text-primary" />
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -left-8 bottom-1/4 w-14 h-14 rounded-2xl bg-accent/20 backdrop-blur-sm border border-accent/30"
              />
            </div>
          </div>

          {/* Info */}
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-primary text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse_glow" />
              SYSTEM PROFILE
            </span>

            <h2 className="text-4xl sm:text-5xl font-bold">
              About <span className="text-gradient-cyan">Me</span>
            </h2>

            <p className="text-foreground leading-relaxed text-lg">
              I'm <span className="text-primary font-semibold">Ayoub Dell</span> — a Frontend Developer from Algeria building modern, scalable web apps with clean UI design and immersive experiences.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              I combine intuitive interfaces with performance-driven development using{" "}
              <span className="text-accent font-semibold">React</span>,{" "}
              <span className="text-primary font-semibold">Next.js</span>,{" "}
              <span className="text-primary font-semibold">Tailwind CSS</span>, and{" "}
              <span className="text-accent font-semibold">Framer Motion</span>.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Currently building AI-powered SaaS applications and developer tools using{" "}
              <span className="text-accent font-semibold">Next.js</span>,{" "}
              <span className="text-primary font-semibold">TypeScript</span>,{" "}
              <span className="text-primary font-semibold">Supabase</span>, and{" "}
              <span className="text-accent font-semibold">OpenRouter</span>.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {stats.map((stat) => (
                <div key={stat.label} className="glass rounded-xl p-4 text-center hover-glow-cyan">
                  <div className={`text-3xl font-bold ${stat.color}`}>{stat.value}</div>
                  <div className="text-xs text-muted-foreground font-mono mt-2 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
