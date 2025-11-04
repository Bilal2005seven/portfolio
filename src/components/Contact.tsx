import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";

const Contact = () => {
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
    <section id="contact" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-5xl md:text-6xl font-black mb-16 text-center">
          Get In <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
        </h2>

        <Card className="bg-card/40 backdrop-blur-xl border-2 border-primary/20 p-8 md:p-12 shadow-glow-cyan animate-fade-in text-center">
          <p className="text-xl md:text-2xl text-foreground/90 font-body mb-12 leading-relaxed">
            Let's collaborate on exciting projects! Whether you have a question, a project idea, 
            or just want to connect, feel free to reach out.
          </p>

          {/* Social Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Card className="bg-muted/50 border-2 border-border hover:border-primary/50 p-6 transition-all duration-300 hover:shadow-glow-blue hover:-translate-y-2">
                  <div className={`text-muted-foreground ${social.color} transition-colors mb-3 flex justify-center`}>
                    {social.icon}
                  </div>
                  <p className="font-semibold text-sm">{social.label}</p>
                </Card>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => window.location.href = 'mailto:bilal@example.com'}
            className="group"
          >
            <Mail className="mr-2 group-hover:scale-110 transition-transform" />
            Send me an email
          </Button>
        </Card>

        {/* Footer */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground font-body">
            © 2025 Bilal. Built with React, TypeScript & Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
