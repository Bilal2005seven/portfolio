import { Card } from "@/components/ui/card";
import { Code2, Database, Brain, TrendingUp } from "lucide-react";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });
  const skills = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Backend Development",
      description: "Python (FastAPI), MERN Stack"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Databases",
      description: "SQL, MongoDB, Redis"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI & ML",
      description: "Generative AI, Data Science"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Problem Solving",
      description: "100+ LeetCode Solutions"
    }
  ];

  return (
    <section id="about" className="py-24 px-4 relative">
      <div ref={ref} className="container mx-auto max-w-6xl">
        <h2 className={`text-5xl md:text-6xl font-black mb-16 text-center transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
        </h2>

        {/* Glass Card */}
        <Card className={`bg-card/40 backdrop-blur-xl border-2 border-primary/20 p-8 md:p-12 mb-12 shadow-glow-cyan transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-lg md:text-xl text-foreground/90 font-body leading-relaxed mb-6">
            Hey there 👋 I'm <span className="text-primary font-semibold">Bilal</span>, currently working at{" "}
            <span className="text-secondary font-semibold">KisanOne</span>, building scalable backend systems and AI-driven solutions.
          </p>
          <p className="text-lg md:text-xl text-foreground/90 font-body leading-relaxed mb-6">
            I work with Python (FastAPI), SQL, MongoDB, and the MERN stack, exploring Generative AI and Data Science.
          </p>
          <p className="text-lg md:text-xl text-foreground/90 font-body leading-relaxed">
            I've solved <span className="text-accent font-semibold">100+ LeetCode problems</span> and love optimizing algorithms and building impactful projects.
          </p>
        </Card>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card 
              key={index}
              className={`bg-card/40 backdrop-blur-xl border-2 border-border hover:border-primary/50 p-6 transition-all duration-500 hover:shadow-glow-cyan hover:-translate-y-2 group ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className="text-primary mb-4 group-hover:scale-110 transition-transform">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
              <p className="text-muted-foreground font-body">{skill.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
