import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, ArrowUpRight, Sparkles } from "lucide-react";

type Project = {
  title: string;
  category: string;
  description: string;
  code?: string;
  stack: string[];
  link?: string;
  liveUrl?: string;
  github?: string;
  image?: string;
  featured?: boolean;
  caseStudy?: boolean;
  features?: string[];
  achievement?: string;
  achievements?: string[];
  gradient?: string;
};

const projects: Project[] = [
  {
    title: "Green House Da Lat",
    category: "Hospitality Website • UI/UX • Frontend Development",
    description:
      "A premium website redesign concept created for Green House Da Lat to modernize its online presence and improve the guest booking experience. The design is inspired by nature, combining elegant typography, rich imagery, responsive layouts, and high-performance architecture. The project emphasizes usability, speed, accessibility, and a visually immersive experience across all devices.",
    stack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://greenhouse-gold.vercel.app/",
    featured: true,
    caseStudy: true,
    gradient: "from-emerald-500/20 via-teal-500/10 to-cyan-500/20",
    features: [
      "Responsive on all devices",
      "Premium UI inspired by nature",
      "Fast loading performance",
      "Modern booking-focused experience",
      "Clean architecture",
      "Optimized Lighthouse score",
    ],
    achievements: [
      "Nature-Inspired Design",
      "Booking UX Optimization",
      "High Performance",
      "Cross-Device Responsive",
    ],
  },
  {
    title: "Tigon Homestay",
    category: "Hospitality Website • UI/UX • Frontend Development",
    description:
      "A complete redesign concept for Tigon Homestay focused on creating a warm, elegant, and memorable digital experience. The website reflects the peaceful atmosphere of the property while improving navigation, storytelling, performance, and conversion through modern design principles and responsive development.",
    stack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://tigon-87.vercel.app/",
    featured: true,
    caseStudy: true,
    gradient: "from-amber-500/20 via-orange-500/10 to-rose-500/20",
    features: [
      "Boutique-inspired visual identity",
      "Fully responsive layout",
      "High-performance architecture",
      "Smooth micro-interactions",
      "Modern user experience",
      "Optimized Lighthouse score",
    ],
    achievements: [
      "Boutique Visual Identity",
      "Storytelling Experience",
      "High Performance",
      "Cross-Device Responsive",
    ],
  },
  {
    title: "Dev.ai",
    category: "AI SaaS / Developer Tools",
    description: "Dev.ai is a modern AI-powered SaaS platform built for developers. It provides intelligent code review, debugging assistance, code explanations, and development support through AI integration. The platform focuses on improving code quality, helping developers understand complex issues, and accelerating the development workflow.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "OpenRouter", "Vercel"],
    liveUrl: "https://dev-ai-git-main-aybdells-projects.vercel.app/",
    github: "https://github.com/Aybdell/dev.ai",
    featured: true,
    achievement: "Built a full-stack AI SaaS application using Next.js, Supabase, and OpenRouter.",
    achievements: [
      "Featured AI Project",
      "Full Stack SaaS Application",
      "AI Integration",
      "Production Deployment",
    ],
  },
  {
    title: "FreelanceCRM",
    category: "SaaS",
    description: "A CRM platform that helps freelancers manage clients, projects, invoices, and business operations from a unified dashboard.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Supabase", "Vercel"],
    liveUrl: "https://freelancer-cr.vercel.app/",
    featured: true,
  },
  {
    title: "Study Point",
    category: "Education / Hackathon",
    description: "An educational platform developed during a 24-hour hackathon to help students access learning resources and organize their studies.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    liveUrl: "https://study-point-by-breakfast.vercel.app/",
    featured: true,
  },
  {
    title: "EL-KARANIA",
    category: "Web App",
    description: "Full-stack ophthalmology consultation management system. Appointment scheduling, patient data, consultation tracking.",
    code: "const appointment = async () => { ... }",
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    link: "https://github.com/Aybdell",
  },
  {
    title: "PERT & GANTT Diagrams",
    category: "Web App",
    description: "Web-based project management tool with interactive diagrams and task scheduling.",
    code: "const gantt = new Chart(ctx, { ... })",
    stack: ["React", "JavaScript", "CSS3"],
    link: "https://github.com/Aybdell",
  },
  {
    title: "My Portfolio",
    category: "UI/UX",
    description: "Modern responsive developer portfolio with animations and immersive design.",
    stack: ["React", "Next.js", "Tailwind", "Framer Motion", "Vercel"],
    link: "https://ayoubdell.vercel.app/",
    liveUrl: "https://ayoubdell.vercel.app/",
  },
  {
    title: "To-Do App",
    category: "Full-Stack",
    description: "Task management app with REST API backend and CRUD operations.",
    code: "app.post('/tasks', auth, handler)",
    stack: ["Express.js", "Node.js", "MongoDB"],
    link: "https://github.com/Aybdell",
  },
  {
    title: "University System",
    category: "Web App",
    description: "University management mini-project with student and course management.",
    stack: ["PHP", "HTML", "CSS", "MySQL"],
    link: "https://github.com/Aybdell",
  },
];

const filters = ["All", "Hospitality Website • UI/UX • Frontend Development", "AI SaaS / Developer Tools", "SaaS", "Education / Hackathon", "Web App", "Mobile", "UI/UX", "Full-Stack"];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState("All");
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const toggleExpand = (title: string) => {
    setExpandedProject(expandedProject === title ? null : title);
  };

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="relative py-24">
      <div className="absolute inset-0 bg-grid-pattern opacity-15" />
      <div ref={ref} className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            Featured <span className="text-gradient-cyan">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Every project I build combines design precision with interactive experiences.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                active === f
                  ? "bg-gradient-cyan text-primary-foreground shadow-lg shadow-primary/20"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Case Studies */}
        {filtered.some((p) => p.caseStudy) && (
          <div className="mb-12 space-y-8">
            {filtered
              .filter((p) => p.caseStudy)
              .map((project, i) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  whileHover={{ y: -4, transition: { duration: 0.3, ease: "easeOut" } }}
                  transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
                  className="glass rounded-2xl overflow-hidden hover-glow-cyan group"
                >
                  <div className="grid lg:grid-cols-2 gap-0">
                    {/* Browser Mockup Preview */}
                    <div className="relative overflow-hidden">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${
                          project.gradient || "from-primary/20 via-transparent to-accent/20"
                        }`}
                      />
                      <div className="relative p-6 pb-0">
                        {/* Browser frame */}
                        <div className="rounded-t-xl overflow-hidden border border-border/40 bg-card/80 backdrop-blur-sm shadow-2xl shadow-black/20">
                          {/* Browser chrome */}
                          <div className="flex items-center gap-2 px-4 py-2.5 bg-secondary/60 border-b border-border/30">
                            <div className="flex gap-1.5">
                              <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
                              <div className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
                            </div>
                            <div className="flex-1 mx-2">
                              <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-background/50 border border-border/30">
                                <svg
                                  className="w-3 h-3 text-muted-foreground/50"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                  />
                                </svg>
                                <span className="text-xs font-mono text-muted-foreground/60 truncate">
                                  {project.liveUrl?.replace("https://", "")}
                                </span>
                              </div>
                            </div>
                          </div>
                          {/* Page preview */}
                          <div className="relative h-48 sm:h-56 lg:h-64 bg-gradient-to-br from-background via-secondary/30 to-background overflow-hidden">
                            <div className="absolute inset-0 bg-grid-subtle opacity-30" />
                            {/* Simulated page content */}
                            <div className="absolute inset-0 p-6 flex flex-col">
                              <div className="w-20 h-3 rounded bg-primary/30 mb-4" />
                              <div className="w-3/4 h-2 rounded bg-foreground/10 mb-2" />
                              <div className="w-1/2 h-2 rounded bg-foreground/10 mb-6" />
                              <div className="grid grid-cols-3 gap-3 flex-1">
                                <div className="rounded-lg bg-primary/10 border border-primary/10" />
                                <div className="rounded-lg bg-accent/10 border border-accent/10" />
                                <div className="rounded-lg bg-primary/10 border border-primary/10" />
                              </div>
                              <div className="flex gap-2 mt-4">
                                <div className="px-4 py-1.5 rounded-full bg-primary/20 h-6 w-24" />
                                <div className="px-4 py-1.5 rounded-full bg-foreground/10 h-6 w-20" />
                              </div>
                            </div>
                            {/* Gradient overlay on hover */}
                            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          </div>
                        </div>
                      </div>
                      {/* Floating preview indicator */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-primary/90 text-primary-foreground backdrop-blur-sm shadow-lg shadow-primary/25 hover:bg-primary transition-colors"
                        >
                          View Live <ArrowUpRight size={12} />
                        </a>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative p-6 lg:p-8 flex flex-col justify-center">
                      {/* Category */}
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-3 py-1 rounded-full bg-primary/15 text-primary text-xs font-mono border border-primary/20">
                          {project.category}
                        </span>
                        <span className="text-amber-400">
                          <Sparkles size={14} />
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                        {project.description}
                      </p>

                      {/* Features grid */}
                      {project.features && (
                        <div className="grid grid-cols-2 gap-2 mb-5">
                          {project.features.map((f) => (
                            <div
                              key={f}
                              className="flex items-center gap-2 text-xs text-muted-foreground"
                            >
                              <div className="w-1 h-1 rounded-full bg-primary shrink-0" />
                              <span>{f}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Stack */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.stack.map((s) => (
                          <span
                            key={s}
                            className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono transition-all duration-200 hover:bg-primary/20 hover:scale-105"
                          >
                            {s}
                          </span>
                        ))}
                      </div>

                      {/* CTA */}
                      <div className="flex flex-wrap gap-3" onClick={(e) => e.stopPropagation()}>
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold text-primary-foreground transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
                            style={{
                              background:
                                "linear-gradient(135deg, hsl(175 100% 41%), hsl(25 95% 53%))",
                            }}
                          >
                            Live Demo <ExternalLink size={14} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        )}

        {/* Regular Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filtered
            .filter((p) => !p.caseStudy)
            .map((project, i) => {
              const isExpanded = expandedProject === project.title;
              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  whileHover={{ y: -6, transition: { duration: 0.2, ease: "easeOut" } }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                  className="glass rounded-2xl overflow-hidden hover-glow-cyan group cursor-pointer"
                  onClick={() => toggleExpand(project.title)}
                >
                  <div className="relative p-6 pb-4">
                    {/* Category badge */}
                    <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-mono">
                      {project.category}
                    </span>

                    {/* Badges */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.featured && (
                        <span className="text-amber-400 text-sm">★</span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>

                    {/* Description - truncated when collapsed */}
                    <p
                      className={`text-muted-foreground mb-4 leading-relaxed text-sm ${
                        !isExpanded ? "line-clamp-3" : ""
                      }`}
                    >
                      {project.description}
                    </p>

                    {/* Expanded content */}
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        transition={{ duration: 0.3 }}
                      >
                        {/* Achievement text */}
                        {project.achievement && (
                          <div className="bg-primary/10 border border-primary/20 rounded-lg px-4 py-3 mb-4 text-sm text-primary font-mono">
                            {project.achievement}
                          </div>
                        )}

                        {/* Stats */}
                        {project.achievements && (
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
                            {project.achievements.map((a) => (
                              <div
                                key={a}
                                className="bg-secondary/60 rounded-lg px-3 py-2 text-xs font-mono text-muted-foreground text-center border border-border/50"
                              >
                                {a}
                              </div>
                            ))}
                          </div>
                        )}
                      </motion.div>
                    )}

                    {/* Code snippet */}
                    {project.code && (
                      <div className="bg-secondary/80 rounded-lg px-4 py-3 mb-4 font-mono text-xs text-muted-foreground border border-border/50">
                        {project.code}
                      </div>
                    )}

                    {/* Stack tags */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.stack.map((s) => (
                        <span
                          key={s}
                          className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono transition-all duration-200 hover:bg-primary/20 hover:scale-105"
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-3" onClick={(e) => e.stopPropagation()}>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold text-primary-foreground transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
                          style={{ background: "linear-gradient(135deg, hsl(175 100% 41%), hsl(25 95% 53%))" }}
                        >
                          Live Demo <ExternalLink size={14} />
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold glass transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 hover:bg-primary/10"
                        >
                          <Github size={14} /> GitHub Repository
                        </a>
                      )}
                      {project.link && !project.github && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold glass transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 hover:bg-primary/10"
                        >
                          View Project <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
