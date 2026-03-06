import { Github, Linkedin } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Testimonials", href: "#" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Linkedin, href: "#", label: "in" },
  { icon: Github, href: "https://github.com/DELLAOUIAyoub", label: "gh" },
  { icon: () => <span className="text-sm font-bold">🏀</span>, href: "#", label: "dr" },
  { icon: () => <span className="text-xs font-bold text-muted-foreground group-hover:text-primary transition-colors">Bē</span>, href: "#", label: "be" },
];

const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary">Ayoub Dell</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Frontend Developer crafting immersive digital experiences with modern web technologies.
            </p>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-primary text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse_glow" />
              Available for projects
            </span>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-foreground mb-4 font-mono">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-foreground mb-4 font-mono">
              Connect
            </h4>
            <div className="flex gap-3 mb-4">
              {socialLinks.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full glass flex items-center justify-center hover-glow-cyan group transition-all"
                >
                  <s.icon size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
            <p className="text-muted-foreground text-sm">
              Let's build something amazing together
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-muted-foreground text-sm">
            © 2026 <span className="text-primary">Ayoub Dell</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span>Privacy Policy</span>
            <span>•</span>
            <span>Terms of Service</span>
            <span>•</span>
            <span>Crafted with 💛</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
