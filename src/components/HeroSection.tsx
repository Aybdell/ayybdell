import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-subtle opacity-40" />

      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-accent/5 blur-3xl" />
        {/* Mobile background accent */}
        <div className="md:hidden absolute top-1/3 -left-20 w-60 h-60 rounded-full bg-primary/8 blur-2xl" />
        <div className="md:hidden absolute bottom-1/4 -right-20 w-48 h-48 rounded-full bg-accent/8 blur-2xl" />
      </div>

      {/* Decorative elements visible on both mobile and desktop */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top-right code bracket */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-24 right-8 md:top-32 md:right-16 w-10 h-10 border-l-2 border-t-2 border-primary/20 rounded-tl-lg"
        />
        {/* Bottom-left code bracket */}
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-32 left-8 md:bottom-40 md:left-16 w-10 h-10 border-r-2 border-b-2 border-accent/20 rounded-br-lg"
        />

        {/* Glass card element - visible on mobile behind content */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="md:hidden absolute top-1/4 right-4 w-24 h-24 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 shadow-sm"
        />
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="md:hidden absolute bottom-1/3 left-4 w-20 h-20 rounded-xl bg-card/40 backdrop-blur-sm border border-border/40 shadow-sm"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 w-full">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[70vh]">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-xl md:py-0 py-20"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/15 text-primary text-xs font-medium mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Frontend Developer
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 leading-[1.1]">
              Ayoub Dell
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-10 max-w-lg">
              I build modern, scalable web applications with React, Next.js, and TypeScript, focusing on clean architecture, performance, and exceptional user experiences.
            </p>

            {/* CTA */}
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:scale-[1.02] transition-all"
            >
              View My Work
              <ArrowRight size={16} />
            </a>
          </motion.div>

          {/* Right: Abstract Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="hidden md:flex items-center justify-center relative"
          >
            <div className="relative w-full max-w-md aspect-square">
              {/* Large blurred circle */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-72 h-72 rounded-full bg-primary/10 blur-2xl" />
              </div>

              {/* Grid card */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-72 h-56 rounded-2xl bg-card/70 backdrop-blur-sm border border-border/60 shadow-sm overflow-hidden">
                <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border/40">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
                </div>
                <div className="p-4 space-y-2.5">
                  {[80, 60, 90].map((w, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-sm bg-primary/30" />
                      <div className="h-2 rounded-full bg-muted" style={{ width: `${w}%` }} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating element top-right */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-8 right-4 w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 backdrop-blur-sm shadow-sm flex items-center justify-center"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
              </motion.div>

              {/* Floating element bottom-left */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-12 left-2 w-16 h-16 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/20 backdrop-blur-sm shadow-sm flex items-center justify-center"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </motion.div>

              {/* Small decorative dots */}
              <div className="absolute bottom-16 right-8 flex gap-1.5">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-primary/30"
                    style={{ opacity: 0.3 + i * 0.2 }}
                  />
                ))}
              </div>

              {/* Corner bracket decoration */}
              <div className="absolute top-12 left-6 w-8 h-8 border-l-2 border-t-2 border-primary/20 rounded-tl-lg" />
              <div className="absolute bottom-12 right-6 w-8 h-8 border-r-2 border-b-2 border-primary/20 rounded-br-lg" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
