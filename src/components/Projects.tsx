import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useInView } from "react-intersection-observer";

const Projects = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  const projects = [
    {
      title: "🧠 AI Platform",
      description: "Full-stack PERN app with Stripe integration, offering AI tools like article generation, image creation, background/object remover, and resume reviewer.",
      tech: ["PostgreSQL", "Express", "React", "Node.js", "Stripe", "OpenAI"],
      gradient: "from-primary/20 to-secondary/20"
    },
    {
      title: "💬 Y-Chat",
      description: "A YouTube chatbot powered by Google Gemini AI using RAG, featuring transcript analysis, vector search, and a modern Streamlit UI.",
      tech: ["Python", "Google Gemini", "RAG", "Streamlit", "Vector DB"],
      gradient: "from-secondary/20 to-accent/20"
    },
    {
      title: "🩺 Diabetes Prediction Model",
      description: "Logistic Regression model with 98% accuracy predicting diabetes risk using health parameters.",
      tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "ML"],
      gradient: "from-accent/20 to-primary/20"
    }
  ];

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div ref={ref} className="container mx-auto max-w-6xl">
        <h2 className={`text-5xl md:text-6xl font-black mb-16 text-center transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className={`bg-card/40 backdrop-blur-xl border-2 border-border hover:border-primary/50 p-8 transition-all duration-500 hover:shadow-glow-blue hover:-translate-y-2 group ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg`}></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-foreground/80 font-body mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 text-xs font-medium bg-muted/50 border border-primary/30 rounded-full text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <Button variant="glow" size="sm" className="flex-1">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 border-primary/50">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
