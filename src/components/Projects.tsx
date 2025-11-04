import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowRight, Sparkles } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import Scene3DVariant from "./Scene3DVariant";

const Projects = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  const projects = [
    {
      title: "AI Platform",
      emoji: "🧠",
      description: "Full-stack PERN app with Stripe integration, offering AI tools like article generation, image creation, background/object remover, and resume reviewer.",
      tech: ["PostgreSQL", "Express", "React", "Node.js", "Stripe", "OpenAI"],
      gradient: "from-violet-500/20 via-purple-500/20 to-fuchsia-500/20",
      glowColor: "shadow-[0_0_50px_rgba(168,85,247,0.4)]",
      featured: false
    },
    {
      title: "Y-Chat",
      emoji: "💬",
      description: "A YouTube chatbot powered by Google Gemini AI using RAG, featuring transcript analysis, vector search, and a modern Streamlit UI.",
      tech: ["Python", "Google Gemini","LangChain", "RAG", "Streamlit", "Vector DB"],
      gradient: "from-cyan-500/20 via-blue-500/20 to-indigo-500/20",
      glowColor: "shadow-[0_0_50px_rgba(59,130,246,0.4)]",
      featured: true
    },
    {
      title: "Diabetes Prediction",
      emoji: "🩺",
      description: "Logistic Regression model with 98% accuracy predicting diabetes risk using health parameters.",
      tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "ML"],
      gradient: "from-emerald-500/20 via-teal-500/20 to-cyan-500/20",
      glowColor: "shadow-[0_0_50px_rgba(16,185,129,0.4)]",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-24 px-4 relative overflow-hidden">
      {/* 3D Background */}
      <Scene3DVariant />
      
      <div ref={ref} className="container mx-auto max-w-7xl relative z-10">
        {/* Enhanced Header */}
        <div className={`text-center mb-20 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">Portfolio Highlights</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
            Featured <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Projects</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of innovative solutions showcasing expertise in AI, full-stack development, and machine learning
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group relative bg-card/50 backdrop-blur-xl border-2 border-border/50 overflow-hidden transition-all duration-500 ${
                hoveredIndex === index 
                  ? `${project.glowColor} -translate-y-3 border-primary/50 scale-[1.02]` 
                  : hoveredIndex !== null 
                    ? 'opacity-60 scale-[0.98]' 
                    : ''
              } ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              {/* Animated Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-all duration-500`}></div>
              
              {/* Gradient Border Animation */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-20 blur-xl"></div>
              </div>
              
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 z-20">
                  <div className="px-3 py-1 bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-bold rounded-full border border-primary/50 shadow-lg animate-pulse">
                    ⭐ Featured
                  </div>
                </div>
              )}
              
              <div className="relative z-10 p-8 h-full flex flex-col">
                {/* Icon & Title */}
                <div className="mb-6">
                  <div className="text-6xl mb-4 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                    {project.emoji}
                  </div>
                  <h3 className="text-2xl font-black mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="h-1 w-12 bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-300 group-hover:w-full"></div>
                </div>

                {/* Description */}
                <p className="text-foreground/70 font-body mb-6 leading-relaxed flex-grow text-sm">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1.5 text-xs font-semibold bg-background/80 backdrop-blur-sm border border-primary/20 rounded-full text-foreground/80 hover:bg-primary/10 hover:border-primary/40 hover:text-primary transition-all duration-300 cursor-default transform hover:scale-105"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-auto">
                  <Button 
                    variant="default" 
                    size="sm" 
                    className="flex-1 group/btn bg-primary hover:bg-primary/90 font-semibold shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-primary/20"
                    asChild
                  >
                    <a 
                      href="https://github.com/Bilal2005seven" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2 transition-transform duration-300 group-hover/btn:rotate-45" />
                      Demo
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1 opacity-0 group-hover/btn:opacity-100" />
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 border-2 border-border/50 hover:border-primary/50 hover:bg-primary/5 font-semibold transition-all duration-300 group/btn2"
                    asChild
                  >
                    <a 
                      href="https://github.com/Bilal2005seven" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 mr-2 transition-transform duration-300 group-hover/btn2:rotate-12" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>

              {/* Corner Accent */}
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tl-full"></div>
            </Card>
          ))}
        </div>

        {/* CTA Footer */}
        <div className={`text-center mt-16 transition-all duration-700 delay-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-muted-foreground mb-4">Interested in collaborating on a project?</p>
          <Button variant="outline" size="lg" className="group border-2 border-primary/30 hover:border-primary/60 hover:bg-primary/5">
            View All Projects
            <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;