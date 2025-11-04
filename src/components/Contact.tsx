import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";
import { useInView } from "react-intersection-observer";
import ContactForm from "./ContactForm";
import Scene3DVariant from "./Scene3DVariant";

const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  const socials = [
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      href: "https://github.com",
      color: "hover:text-foreground"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      href: "https://linkedin.com",
      color: "hover:text-secondary"
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      label: "Twitter",
      href: "https://twitter.com",
      color: "hover:text-primary"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      href: "mailto:bilal@example.com",
      color: "hover:text-accent"
    }
  ];

  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden">
      {/* 3D Background */}
      <Scene3DVariant />
      
      <div ref={ref} className="container mx-auto max-w-5xl relative z-10">
        <h2 className={`text-5xl md:text-6xl font-black mb-16 text-center transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Get In <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact Info */}
          <div className={`space-y-6 transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <Card className="bg-card/60 backdrop-blur-xl border-2 border-primary/20 p-8 shadow-glow-cyan">
              <h3 className="text-2xl font-bold mb-6">Let's Collaborate! 🚀</h3>
              <p className="text-lg text-foreground/80 font-body mb-8 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>

              {/* Direct Email */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-primary">
                  <Mail className="w-5 h-5" />
                  <a href="mailto:bilal@example.com" className="hover:text-secondary transition-colors">
                    bilal@example.com
                  </a>
                </div>
              </div>
            </Card>

            {/* Social Links */}
            <Card className="bg-card/60 backdrop-blur-xl border-2 border-primary/20 p-6 shadow-glow-blue">
              <h4 className="text-lg font-bold mb-4">Connect With Me</h4>
              <div className="grid grid-cols-2 gap-4">
                {socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 border border-border hover:border-primary/50 transition-all hover:shadow-glow-cyan group"
                  >
                    <div className={`${social.color} transition-colors`}>
                      {social.icon}
                    </div>
                    <span className="font-semibold text-sm">{social.label}</span>
                  </a>
                ))}
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{ transitionDelay: '0.2s' }}>
            <ContactForm />
          </div>
        </div>

        {/* Footer */}
        <div className={`mt-16 text-center transition-all duration-700 ${inView ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '0.4s' }}>
          <p className="text-muted-foreground font-body">
            © 2025 Bilal. Built with React, TypeScript & Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
