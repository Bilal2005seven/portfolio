import { Card } from "@/components/ui/card";
import { Briefcase, GraduationCap, Code, Sparkles, Calendar, MapPin } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import Scene3DVariant from "./Scene3DVariant";

const Timeline = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const timelineData = [
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Backend Engineer",
      company: "KisanOne",
      location: "Remote",
      period: "2024 - Present",
      duration: "1+ year",
      description: "Building scalable backend systems and AI-driven solutions using Python, FastAPI, and cloud technologies.",
      tags: ["Python", "FastAPI", "AI/ML", "Cloud"],
      gradient: "from-blue-500/20 to-cyan-500/20",
      iconBg: "bg-blue-500",
      glowColor: "shadow-[0_0_40px_rgba(59,130,246,0.4)]",
      borderColor: "border-blue-500/30"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full Stack Development",
      company: "Personal Projects",
      location: "Freelance",
      period: "2023 - 2024",
      duration: "1 year",
      description: "Developed multiple full-stack applications using MERN stack, implementing AI features and payment integrations.",
      tags: ["MERN", "React", "Node.js", "Stripe"],
      gradient: "from-purple-500/20 to-pink-500/20",
      iconBg: "bg-purple-500",
      glowColor: "shadow-[0_0_40px_rgba(168,85,247,0.4)]",
      borderColor: "border-purple-500/30"
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Computer Science Studies (B.Tech) ",
      company: "Laxmi Narayan Institute of Technology ",
      location: "Campus",
      period: "2024 - 2028",
      duration: "4 years",
      description: "Focused on AI/ML, Data Structures, Algorithms, and Software Engineering. Completed 150+ LeetCode problems.",
      tags: ["AI/ML", "DSA", "Algorithms", "LeetCode"],
      gradient: "from-emerald-500/20 to-teal-500/20",
      iconBg: "bg-emerald-500",
      glowColor: "shadow-[0_0_40px_rgba(16,185,129,0.4)]",
      borderColor: "border-emerald-500/30"
    }
  ];

  return (
    <section id="timeline" className="py-24 px-4 relative overflow-hidden">
      {/* 3D Background */}
      <Scene3DVariant />
      
      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6 backdrop-blur-sm">
            <Calendar className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">Career Path</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
            My <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Journey</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From university to building AI-powered solutions in production
          </p>
        </div>

        <div className="relative">
          {/* Animated Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 transform md:-translate-x-1/2 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-primary via-secondary to-accent opacity-30"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-primary via-secondary to-accent animate-pulse"></div>
          </div>

          {/* Timeline Items */}
          <div className="space-y-16">
            {timelineData.map((item, index) => {
              const { ref, inView } = useInView({
                threshold: 0.3,
                triggerOnce: true
              });

              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  ref={ref}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`relative transition-all duration-700 ${
                    inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 0.2}s` }}
                >
                  <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                    {/* Left side (desktop only) */}
                    <div className={`hidden md:block md:w-1/2 ${isEven ? 'text-right' : ''}`}>
                      {isEven && (
                        <Card className={`relative overflow-hidden bg-card/50 backdrop-blur-xl border-2 ${item.borderColor} p-6 transition-all duration-500 group ${
                          hoveredIndex === index 
                            ? `${item.glowColor} -translate-x-4 scale-105 border-primary/50` 
                            : hoveredIndex !== null 
                              ? 'opacity-60' 
                              : ''
                        }`}>
                          {/* Gradient Background */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                          
                          <div className="relative z-10">
                            {/* Header */}
                            <div className="mb-4">
                              <h3 className="text-2xl font-black mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                              <div className="flex items-center justify-end gap-2 mb-2">
                                <Briefcase className="w-4 h-4 text-primary" />
                                <p className="text-primary font-bold">{item.company}</p>
                              </div>
                              <div className="flex items-center justify-end gap-4 text-sm text-muted-foreground">
                                <div className="flex items-center gap-1">
                                  <MapPin className="w-3 h-3" />
                                  <span>{item.location}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Calendar className="w-3 h-3" />
                                  <span>{item.duration}</span>
                                </div>
                              </div>
                            </div>

                            {/* Period Badge */}
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full mb-4">
                              <Sparkles className="w-3 h-3 text-primary" />
                              <span className="text-xs font-semibold text-primary">{item.period}</span>
                            </div>

                            {/* Description */}
                            <p className="text-foreground/80 leading-relaxed mb-4">{item.description}</p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 justify-end">
                              {item.tags.map((tag, i) => (
                                <span 
                                  key={i}
                                  className="px-3 py-1 text-xs font-semibold bg-background/80 backdrop-blur-sm border border-border rounded-full hover:border-primary/40 hover:bg-primary/10 transition-all duration-300"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </Card>
                      )}
                    </div>

                    {/* Center icon */}
                    <div className={`relative z-10 flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full ${item.iconBg} ${
                      hoveredIndex === index ? item.glowColor : 'shadow-lg'
                    } border-4 border-background flex-shrink-0 transition-all duration-500 ${
                      hoveredIndex === index ? 'scale-125 rotate-12' : ''
                    }`}>
                      <div className={`text-white transition-transform duration-500 ${hoveredIndex === index ? 'scale-110' : ''}`}>
                        {item.icon}
                      </div>
                      
                      {/* Pulse Ring */}
                      <div className={`absolute inset-0 rounded-full ${item.iconBg} opacity-0 group-hover:opacity-50 animate-ping`}></div>
                    </div>

                    {/* Right side (desktop) / All content (mobile) */}
                    <div className="w-full md:w-1/2">
                      {(!isEven || window.innerWidth < 768) && (
                        <Card className={`relative overflow-hidden bg-card/50 backdrop-blur-xl border-2 ${item.borderColor} p-6 transition-all duration-500 group ${
                          hoveredIndex === index 
                            ? `${item.glowColor} md:translate-x-4 scale-105 border-primary/50` 
                            : hoveredIndex !== null 
                              ? 'opacity-60' 
                              : ''
                        }`}>
                          {/* Gradient Background */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                          
                          <div className="relative z-10">
                            {/* Header */}
                            <div className="mb-4">
                              <h3 className="text-2xl font-black mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                              <div className="flex items-center gap-2 mb-2">
                                <Briefcase className="w-4 h-4 text-primary" />
                                <p className="text-primary font-bold">{item.company}</p>
                              </div>
                              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                <div className="flex items-center gap-1">
                                  <MapPin className="w-3 h-3" />
                                  <span>{item.location}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Calendar className="w-3 h-3" />
                                  <span>{item.duration}</span>
                                </div>
                              </div>
                            </div>

                            {/* Period Badge */}
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full mb-4">
                              <Sparkles className="w-3 h-3 text-primary" />
                              <span className="text-xs font-semibold text-primary">{item.period}</span>
                            </div>

                            {/* Description */}
                            <p className="text-foreground/80 leading-relaxed mb-4">{item.description}</p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2">
                              {item.tags.map((tag, i) => (
                                <span 
                                  key={i}
                                  className="px-3 py-1 text-xs font-semibold bg-background/80 backdrop-blur-sm border border-border rounded-full hover:border-primary/40 hover:bg-primary/10 transition-all duration-300"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </Card>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Timeline End Marker */}
          <div className="flex justify-center mt-12">
            <div className="w-4 h-4 rounded-full bg-gradient-to-r from-primary via-secondary to-accent animate-pulse shadow-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;