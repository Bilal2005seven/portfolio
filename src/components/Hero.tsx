import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail } from "lucide-react";
import Scene3D from "./Scene3D";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <Scene3D />
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background z-0"></div>

      {/* Floating orbs */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

      {/* Content */}
      <div ref={ref} className="relative z-10 container mx-auto px-4 text-center">
        <div className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Bilal
            </span>
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-secondary animate-fade-in">
            AI & Backend Engineer
          </h2>
          <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto mb-12 font-body leading-relaxed">
            Building intelligent systems and scalable backend solutions powered by AI.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-6 justify-center mb-16">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="group"
            >
              View Projects
              <ArrowDown className="ml-2 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button 
              variant="glow" 
              size="lg"
              onClick={() => window.open('#', '_blank')}
            >
              <Download className="mr-2" />
              Download Resume
            </Button>
            <Button 
              variant="glow" 
              size="lg"
              onClick={() => scrollToSection('contact')}
            >
              <Mail className="mr-2" />
              Contact Me
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ArrowDown className="w-8 h-8 mx-auto text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
