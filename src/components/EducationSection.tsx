import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Master's Degree – ISIA (M1)",
    school: "Hassiba Benbouali University",
    year: "2025–2026",
  },
  {
    degree: "Bachelor's Degree – Information Systems",
    school: "Hassiba Benbouali University",
    year: "2024–2025",
  },
];

const languages = [
  { name: "Arabic", level: "C2", label: "Native", percent: 100 },
  { name: "English", level: "B2", label: "Upper Intermediate", percent: 70 },
  { name: "French", level: "B1", label: "Intermediate", percent: 55 },
];

const EducationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-grid-pattern opacity-15" />
      <div ref={ref} className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8">
              <span className="text-gradient-cyan">Education</span>
            </h2>
            <div className="relative pl-8 border-l-2 border-primary/30 space-y-8">
              {education.map((edu) => (
                <div key={edu.degree} className="relative">
                  <div className="absolute -left-[25px] top-1 w-4 h-4 rounded-full bg-primary glow-cyan" />
                  <div className="glass rounded-xl p-5 hover-glow-cyan">
                    <div className="flex items-center gap-2 mb-2">
                      <GraduationCap size={18} className="text-primary" />
                      <h3 className="font-bold text-foreground">{edu.degree}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm">{edu.school}</p>
                    <p className="text-primary text-xs font-mono mt-1">{edu.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8">
              <span className="text-gradient-cyan">Languages</span>
            </h2>
            <div className="space-y-5">
              {languages.map((lang) => (
                <div key={lang.name} className="glass rounded-xl p-5 hover-glow-cyan">
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-bold text-foreground">{lang.name}</span>
                    <span className="text-xs font-mono text-primary">
                      {lang.level} — {lang.label}
                    </span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-secondary overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${lang.percent}%` } : {}}
                      transition={{ duration: 1, delay: 0.3 }}
                      className="h-full rounded-full bg-gradient-cyan"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
