import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Palette, Code, Sparkles, Lightbulb } from "lucide-react";

const skillCategories = [
  {
    title: "UI/UX Design",
    icon: Palette,
    iconGradient: "from-blue-500 to-cyan-400",
    skills: ["Figma", "Prototyping", "Wireframing"],
    percent: 95,
    percentColor: "text-primary",
  },
  {
    title: "Frontend Development",
    icon: Code,
    iconGradient: "from-orange-500 to-pink-500",
    skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind", "Next.js"],
    percent: 98,
    percentColor: "text-accent",
  },
  {
    title: "Creative Coding & Animations",
    icon: Sparkles,
    iconGradient: "from-cyan-400 to-blue-500",
    skills: ["Spline", "GSAP", "Framer Motion"],
    percent: 90,
    percentColor: "text-primary",
  },
  {
    title: "Problem-Solving",
    icon: Lightbulb,
    iconGradient: "from-purple-500 to-pink-500",
    skills: ["Collaboration", "Innovation"],
    percent: 92,
    percentColor: "text-pink-400",
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative py-24">
      <div className="absolute inset-0 bg-grid-pattern opacity-15" />
      <div ref={ref} className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-accent text-xs font-mono mb-4">
            <span className="w-2 h-2 rounded-full bg-accent" />
            TECH STACK ANALYSIS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Skills & Expertise
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-6 hover-glow-cyan group"
            >
              {/* Gradient icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${cat.iconGradient} flex items-center justify-center mb-5 shadow-lg`}>
                <cat.icon size={26} className="text-white" />
              </div>

              <h3 className="font-bold text-lg mb-4 text-foreground">
                {cat.title}
              </h3>

              <div className="flex flex-wrap gap-2 mb-5">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full border border-border text-muted-foreground text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Percentage */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.5 + i * 0.1 }}
                className={`text-2xl font-bold ${cat.percentColor} font-mono`}
              >
                {cat.percent}%
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
