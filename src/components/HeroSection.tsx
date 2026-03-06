import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpeg";

const titles = [
  "Frontend Developer",
  "Full-Stack Web Developer",
  "React & Next.js Specialist",
  "Open to Work — Algeria 🇩🇿",
];

const HeroSection = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = titles[titleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 30);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, titleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/20" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />

      {/* Floating tech icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-[15%] left-[5%] text-accent/40 text-5xl font-bold">
          <svg width="50" height="50" viewBox="0 0 50 50" fill="none"><text x="5" y="38" fontSize="36" fontWeight="bold" fill="hsl(25 95% 53% / 0.5)">5</text><text x="0" y="18" fontSize="14" fontWeight="bold" fill="hsl(25 95% 53% / 0.5)">HTML</text></svg>
        </motion.div>
        <motion.div animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }} transition={{ duration: 8, repeat: Infinity }} className="absolute top-[20%] right-[8%]">
          <svg width="50" height="50" viewBox="0 0 50 50"><text x="5" y="35" fontSize="28" fontWeight="bold" fill="hsl(175 100% 41% / 0.5)">{"</>"}</text></svg>
        </motion.div>
        <motion.div animate={{ y: [0, -25, 0] }} transition={{ duration: 7, repeat: Infinity }} className="absolute bottom-[25%] left-[8%] text-yellow-500/40 text-3xl font-bold font-mono">
          JS
        </motion.div>
        <motion.div animate={{ y: [0, -18, 0], rotate: [0, -3, 0] }} transition={{ duration: 9, repeat: Infinity }} className="absolute top-[60%] right-[5%] text-primary/30 text-3xl font-mono">
          ⚛
        </motion.div>
        <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute bottom-[35%] right-[20%] text-primary/20 text-4xl font-mono">
          ⚙
        </motion.div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Name */}
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-6">
            <span className="text-foreground">Ayoub</span>{" "}
            <span className="text-gradient-cyan">DELLAOUI</span>
          </h1>

          {/* Typing text */}
          <div className="h-10 mb-8 flex items-center justify-center">
            <span className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-mono">
              {displayed}
              <span className="animate-pulse_glow text-primary">|</span>
            </span>
          </div>

          {/* Skill pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {["<HTML/>", "{ CSS }", "JavaScript( )"].map((tag) => (
              <span
                key={tag}
                className="px-5 py-2.5 rounded-full glass text-primary font-mono text-sm hover-glow-cyan"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-cyan text-primary-foreground font-semibold text-lg shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-shadow"
          >
            View My Work
            <ChevronRight size={20} />
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-primary/40 flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 8, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 rounded-full bg-primary"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
