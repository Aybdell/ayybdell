import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";

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
};

const projects: Project[] = [
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

const filters = ["All", "SaaS", "Education / Hackathon", "Web App", "Mobile", "UI/UX", "Full-Stack"];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState("All");

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

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl overflow-hidden hover-glow-cyan group"
            >
              {/* Category badge */}
              <div className="relative p-6 pb-4">
                <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-mono">
                  {project.category}
                </span>

                {project.featured && (
                  <span className="inline-block px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-mono mb-3">
                    ★ Featured
                  </span>
                )}
                <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>

                {/* Code snippet */}
                {project.code && (
                  <div className="bg-secondary/80 rounded-lg px-4 py-3 mb-4 font-mono text-xs text-muted-foreground border border-border/50">
                    {project.code}
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.stack.map((s) => (
                    <span key={s} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono">
                      {s}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/25"
                      style={{ background: "linear-gradient(135deg, hsl(175 100% 41%), hsl(25 95% 53%))" }}
                    >
                      Live Demo <ExternalLink size={14} />
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold glass transition-all hover:shadow-lg hover:shadow-primary/25 hover:bg-primary/10"
                    >
                      View Project <ExternalLink size={14} />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold glass transition-all hover:shadow-lg hover:shadow-primary/25 hover:bg-primary/10"
                    >
                      <Github size={14} /> View Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
