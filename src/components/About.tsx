import { Card } from "@/components/ui/card";
import { Code2, Database, Brain, TrendingUp, Sparkles, Zap, Heart, Rocket } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import Scene3DVariant from "./Scene3DVariant";

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Backend Development",
      description: "Python (FastAPI), Node.js",
      gradient: "from-blue-500/20 to-cyan-500/20",
      iconColor: "text-blue-500",
      glowColor: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Databases",
      description: "SQL, MongoDB, Redis",
      gradient: "from-emerald-500/20 to-teal-500/20",
      iconColor: "text-emerald-500",
      glowColor: "group-hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI & ML",
      description: "Langchain, LangGraph, RAG, LLMs, Tensorflow, Pytorch ",
      gradient: "from-purple-500/20 to-pink-500/20",
      iconColor: "text-purple-500",
      glowColor: "group-hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Problem Solving",
      description: "150+ LeetCode Solutions",
      gradient: "from-orange-500/20 to-red-500/20",
      iconColor: "text-orange-500",
      glowColor: "group-hover:shadow-[0_0_30px_rgba(249,115,22,0.3)]"
    },
  ];

  const highlights = [
    { icon: <Zap className="w-5 h-5" />, text: "Building AI-integrated backend systems", color: "text-yellow-500" },
    { icon: <Code2 className="w-5 h-5" />, text: "Solving complex challenges with Python & FastAPI", color: "text-blue-500" },
    { icon: <Brain className="w-5 h-5" />, text: "Exploring data pipelines, machine learning, and Gen AI models", color: "text-purple-500" },
    { icon: <Heart className="w-5 h-5" />, text: "Collaborating on projects that create real impact", color: "text-pink-500" },
  ];

  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden">
      {/* 3D Background */}
      <Scene3DVariant />

      <div ref={ref} className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">Get to Know Me</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
            About <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Me</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Main About Card - Takes 2 columns */}
          <Card
            className={`lg:col-span-2 bg-card/50 backdrop-blur-xl border-2 border-border/50 p-8 md:p-10 shadow-xl transition-all duration-700 hover:border-primary/30 group ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
            
            <div className="relative z-10">
              <div className="flex items-start gap-4 mb-8">
                <div className="text-6xl">👋</div>
                <div>
                  <h3 className="text-3xl font-black mb-2 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                    Hey there!
                  </h3>
                  <p className="text-muted-foreground">Let me introduce myself</p>
                </div>
              </div>

              <div className="space-y-6 text-base md:text-lg leading-relaxed">
                <p className="text-foreground/90">
                  I'm <span className="font-bold text-primary px-2 py-1 bg-primary/10 rounded">Bilal</span>, an{" "}
                  <span className="font-semibold text-secondary">AI & Backend Engineer</span> currently working at{" "}
                  <span className="font-semibold text-accent">KisanOne</span>, where I'm building scalable backend systems and exploring the power of AI-driven solutions to solve real-world problems.
                </p>

                <p className="text-foreground/90">
                  I'm passionate about creating clean, efficient, and reliable systems using{" "}
                  <span className="font-semibold text-primary">Python (FastAPI)</span>,{" "}
                  <span className="font-semibold text-primary">SQL</span>, and{" "}
                  <span className="font-semibold text-primary">MongoDB</span>, along with hands-on experience in the{" "}
                  <span className="font-semibold text-primary">MERN stack</span>. My curiosity drives me to dive deeper into{" "}
                  <span className="font-semibold text-accent">Generative AI </span> and{" "}
                  <span className="font-semibold text-accent">Data Science</span>, blending intelligent automation with robust backend logic.
                </p>

                <div className="flex items-center gap-3 p-4 bg-accent/10 border-l-4 border-accent rounded-lg">
                  <TrendingUp className="w-6 h-6 text-accent flex-shrink-0" />
                  <p className="text-foreground/90">
                    I've solved <span className="font-bold text-accent">150+ LeetCode problems</span>, sharpening my problem-solving mindset and love for optimizing algorithms.
                  </p>
                </div>

                <p className="text-foreground/90">
                  Whether it's designing APIs, training AI models, or fine-tuning systems for performance — I enjoy every bit of the process.
                </p>
              </div>
            </div>
          </Card>

          {/* Side Stats Card */}
          <Card className={`bg-card/50 backdrop-blur-xl border-2 border-border/50 p-8 shadow-xl transition-all duration-700 delay-100 hover:border-secondary/30 group ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <Rocket className="w-6 h-6 text-secondary" />
                <h3 className="text-2xl font-black text-foreground">Quick Facts</h3>
              </div>

              <div className="space-y-6">
                <div className="group/stat hover:scale-105 transition-transform duration-300">
                  <div className="text-4xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-1">
                    150+
                  </div>
                  <p className="text-sm text-muted-foreground">LeetCode Problems Solved</p>
                </div>

                <div className="h-px bg-border/50"></div>

                <div className="group/stat hover:scale-105 transition-transform duration-300">
                  <div className="text-4xl font-black bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent mb-1">
                    3+
                  </div>
                  <p className="text-sm text-muted-foreground">Years of Experience</p>
                </div>

                <div className="h-px bg-border/50"></div>

                <div className="group/stat hover:scale-105 transition-transform duration-300">
                  <div className="text-4xl font-black bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-1">
                    10+
                  </div>
                  <p className="text-sm text-muted-foreground">Projects Completed</p>
                </div>
              </div>

              <div className="mt-8 p-4 bg-primary/5 border border-primary/20 rounded-lg">
                <p className="text-sm text-foreground/80 text-center">
                  🚀 Always open to connecting with developers & AI enthusiasts
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* What I Love Section */}
        <Card className={`bg-card/50 backdrop-blur-xl border-2 border-border/50 p-8 md:p-10 mb-12 shadow-xl transition-all duration-700 delay-200 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <div className="flex items-center gap-3 mb-8">
            <Heart className="w-7 h-7 text-pink-500 animate-pulse" />
            <h3 className="text-2xl md:text-3xl font-black">What I Love</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 bg-background/50 border border-border/50 rounded-lg hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 group/item"
              >
                <div className={`${item.color} flex-shrink-0 mt-1 transition-transform duration-300 group-hover/item:scale-110 group-hover/item:rotate-6`}>
                  {item.icon}
                </div>
                <p className="text-foreground/90 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card
              key={index}
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
              className={`relative overflow-hidden bg-card/50 backdrop-blur-xl border-2 border-border/50 p-6 transition-all duration-500 hover:-translate-y-3 group ${
                skill.glowColor
              } ${
                hoveredSkill === index 
                  ? 'border-primary/50 scale-105' 
                  : hoveredSkill !== null 
                    ? 'opacity-60 scale-95' 
                    : ''
              } ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Animated Corner */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className={`${skill.iconColor} mb-4 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12`}>
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{skill.title}</h3>
                <div className="h-1 w-8 bg-gradient-to-r from-primary to-secondary rounded-full mb-3 transition-all duration-300 group-hover:w-full"></div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {skill.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;