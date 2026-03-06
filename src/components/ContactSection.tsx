import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Github, Globe, MapPin, Send, Linkedin } from "lucide-react";

const socialCards = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/ayoub-dell-003010337/", bg: "from-blue-600 to-blue-400" },
  { icon: Github, label: "GitHub", href: "https://github.com/DELLAOUIAyoub", bg: "from-gray-600 to-gray-400" },
  { icon: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" rx="5" stroke="white" strokeWidth="2"/><circle cx="12" cy="12" r="4" stroke="white" strokeWidth="2"/><circle cx="18" cy="6" r="1" fill="white"/></svg>, label: "Instagram", href: "https://www.instagram.com/ayb.del/", bg: "from-purple-600 to-pink-500" },
  { icon: () => <span className="text-xl font-bold text-white">f</span>, label: "Facebook", href: "https://web.facebook.com/ayoub.del.2025", bg: "from-blue-600 to-blue-500" },
];

const infoCards = [
  { icon: Mail, label: "EMAIL", value: "ayoub40dell@gmail.com", href: "mailto:ayoub40dell@gmail.com" },
  { icon: MapPin, label: "LOCATION", value: "Algeria", href: undefined },
];

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />

      <div ref={ref} className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-primary text-xs font-mono mb-4">
            🛰 TRANSMISSION
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            Let's <span className="text-gradient-cyan">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Crafting interactive experiences, I'm always excited to connect.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Left: Connect With Me */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">Connect With Me</h3>
            
            {/* Social cards grid */}
            <div className="grid grid-cols-2 gap-4">
              {socialCards.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass rounded-xl p-6 hover-glow-cyan group flex flex-col items-center gap-3 transition-all"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${s.bg} flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}>
                    <s.icon size={24} className="text-white" />
                  </div>
                  <span className="text-foreground text-sm font-medium">{s.label}</span>
                </a>
              ))}
            </div>

            {/* Info cards */}
            <div className="space-y-3 mt-4">
              {infoCards.map((item) => (
                <a
                  key={item.label}
                  href={item.href || "#"}
                  className="flex items-center gap-4 glass rounded-xl p-4 hover-glow-cyan group transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground font-mono uppercase">{item.label}</span>
                    <p className="text-foreground text-sm font-medium">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="glass rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-primary/40 rounded-tl-2xl" />
              <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-accent/40 rounded-tr-2xl" />
              <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-primary/40 rounded-bl-2xl" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-accent/40 rounded-br-2xl" />

              <form className="space-y-5 relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Message</label>
                  <textarea
                    placeholder="Tell me about your project..."
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                  />
                  <p className="text-xs text-muted-foreground mt-1">{form.message.length}/500 characters</p>
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 text-primary-foreground transition-shadow hover:shadow-lg hover:shadow-primary/25"
                  style={{ background: "linear-gradient(135deg, hsl(175 100% 41%), hsl(25 95% 53%))" }}
                >
                  Send Message
                  <Send size={16} />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
