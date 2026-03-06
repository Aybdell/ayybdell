import { Github, Linkedin } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/ayoub-dell-003010337/", label: "in" },
  { icon: Github, href: "https://github.com/DELLAOUIAyoub", label: "gh" },
  { icon: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/><circle cx="18" cy="6" r="1" fill="currentColor"/></svg>, href: "https://www.instagram.com/ayb.del/", label: "ig" },
  { icon: () => <span className="text-xs font-bold text-muted-foreground group-hover:text-primary transition-colors">f</span>, href: "https://web.facebook.com/ayoub.del.2025", label: "fb" },
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
