import { Card } from "@/components/ui/card";
import { Briefcase, GraduationCap, Code } from "lucide-react";
import { useInView } from "react-intersection-observer";

const Timeline = () => {
  const timelineData = [
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Backend Engineer",
      company: "KisanOne",
      period: "2024 - Present",
      description: "Building scalable backend systems and AI-driven solutions using Python, FastAPI, and cloud technologies.",
      color: "primary"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full Stack Development",
      company: "Personal Projects",
      period: "2023 - 2024",
      description: "Developed multiple full-stack applications using MERN stack, implementing AI features and payment integrations.",
      color: "secondary"
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Computer Science Studies",
      company: "University",
      period: "2020 - 2024",
      description: "Focused on AI/ML, Data Structures, Algorithms, and Software Engineering. Completed 100+ LeetCode problems.",
      color: "accent"
    }
  ];

  return (
    <section id="timeline" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-5xl md:text-6xl font-black mb-16 text-center">
          My <span className="bg-gradient-primary bg-clip-text text-transparent">Journey</span>
        </h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent transform md:-translate-x-1/2"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineData.map((item, index) => {
              const { ref, inView } = useInView({
                threshold: 0.3,
                triggerOnce: true
              });

              return (
                <div
                  key={index}
                  ref={ref}
                  className={`relative transition-all duration-700 ${
                    inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-center gap-8 md:gap-12">
                    {/* Left side (desktop) */}
                    <div className="hidden md:block md:w-1/2 text-right">
                      {index % 2 === 0 && (
                        <Card className="bg-card/40 backdrop-blur-xl border-2 border-border hover:border-primary/50 p-6 transition-all duration-300 hover:shadow-glow-cyan">
                          <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                          <p className="text-primary font-semibold mb-2">{item.company}</p>
                          <p className="text-sm text-muted-foreground mb-3">{item.period}</p>
                          <p className="text-foreground/80 font-body">{item.description}</p>
                        </Card>
                      )}
                    </div>

                    {/* Center icon */}
                    <div className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-${item.color} shadow-glow-${item.color} border-4 border-background flex-shrink-0`}>
                      {item.icon}
                    </div>

                    {/* Right side (desktop) / All content (mobile) */}
                    <div className="flex-1 md:w-1/2">
                      {(index % 2 !== 0 || window.innerWidth < 768) && (
                        <Card className="bg-card/40 backdrop-blur-xl border-2 border-border hover:border-primary/50 p-6 transition-all duration-300 hover:shadow-glow-cyan">
                          <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                          <p className="text-primary font-semibold mb-2">{item.company}</p>
                          <p className="text-sm text-muted-foreground mb-3">{item.period}</p>
                          <p className="text-foreground/80 font-body">{item.description}</p>
                        </Card>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
