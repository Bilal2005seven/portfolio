import { Card } from "@/components/ui/card";
import { Award, Trophy, Sparkles, Star, Gift, Code } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import Scene3DVariant from "./Scene3DVariant";

const Achievements = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const achievements = [
    {
      icon: <Trophy className="w-10 h-10" />,
      title: "Hacktoberfest 2025 Super Contributor",
      subtitle: "Open Source Excellence",
      description: "Earned badge and T-shirt for impactful open-source contributions during Hacktoberfest 2025. Contributed to multiple projects, improving documentation, fixing bugs, and implementing new features that benefited the developer community.",
      tags: ["Open Source", "Community Impact", "Git"],
      gradient: "from-orange-500/20 via-red-500/20 to-pink-500/20",
      iconBg: "bg-gradient-to-br from-orange-500 to-red-500",
      glowColor: "shadow-[0_0_50px_rgba(249,115,22,0.4)]",
      year: "2025"
    },
    {
      icon: <Gift className="w-10 h-10" />,
      title: "Google Arcade Swags Winner",
      subtitle: "Google Cloud Champion",
      description: "Successfully completed Google Arcade challenges and earned exclusive Google Cloud swags. Demonstrated proficiency in cloud technologies, completed skill badges, and engaged with the Google Cloud ecosystem.",
      tags: ["Google Cloud", "Cloud Computing", "Skill Badges"],
      gradient: "from-blue-500/20 via-green-500/20 to-yellow-500/20",
      iconBg: "bg-gradient-to-br from-blue-500 to-green-500",
      glowColor: "shadow-[0_0_50px_rgba(59,130,246,0.4)]",
      year: "2025 "
    }
  ];

  return (
    <section id="achievements" className="py-24 px-4 relative overflow-hidden">
      {/* 3D Background */}
      <Scene3DVariant />
      
      <div ref={ref} className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6 backdrop-blur-sm">
            <Star className="w-4 h-4 text-accent animate-pulse" />
            <span className="text-sm font-medium text-accent">Recognition & Awards</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent">Achievements</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recognition for contributions to open source and cloud technology excellence
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {achievements.map((achievement, index) => (
            <Card 
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`relative overflow-hidden bg-card/50 backdrop-blur-xl border-2 border-border/50 p-8 transition-all duration-500 group ${
                hoveredIndex === index 
                  ? `${achievement.glowColor} -translate-y-3 border-accent/50 scale-[1.02]` 
                  : hoveredIndex !== null 
                    ? 'opacity-70 scale-[0.98]' 
                    : ''
              } ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              {/* Animated Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${achievement.gradient} opacity-0 group-hover:opacity-100 transition-all duration-500`}></div>
              
              {/* Floating Particles */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <Sparkles className="w-6 h-6 text-accent animate-pulse" />
              </div>

              {/* Year Badge */}
              <div className="absolute top-6 right-6 px-3 py-1 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full text-accent text-xs font-bold">
                {achievement.year}
              </div>

              <div className="relative z-10">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-20 h-20 ${achievement.iconBg} rounded-2xl mb-6 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg`}>
                  <div className="text-white">
                    {achievement.icon}
                  </div>
                </div>

                {/* Title & Subtitle */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="w-5 h-5 text-accent" />
                    <span className="text-sm font-semibold text-accent uppercase tracking-wider">{achievement.subtitle}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black mb-2 group-hover:text-accent transition-colors leading-tight">
                    {achievement.title}
                  </h3>
                  <div className="h-1 w-16 bg-gradient-to-r from-accent to-primary rounded-full transition-all duration-500 group-hover:w-full"></div>
                </div>

                {/* Description */}
                <p className="text-foreground/80 leading-relaxed mb-6">
                  {achievement.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {achievement.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1.5 text-xs font-semibold bg-background/80 backdrop-blur-sm border border-accent/20 rounded-full text-foreground/80 hover:bg-accent/10 hover:border-accent/40 hover:text-accent transition-all duration-300 cursor-default transform hover:scale-105"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tl-full"></div>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-700 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Card className="bg-card/50 backdrop-blur-xl border-2 border-border/50 p-6 text-center hover:border-accent/30 transition-all duration-300 hover:-translate-y-2 group">
            <div className="text-4xl font-black bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
              10+
            </div>
            <p className="text-sm text-muted-foreground">Open Source PRs</p>
          </Card>

          <Card className="bg-card/50 backdrop-blur-xl border-2 border-border/50 p-6 text-center hover:border-accent/30 transition-all duration-300 hover:-translate-y-2 group">
            <div className="text-4xl font-black bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
              5+
            </div>
            <p className="text-sm text-muted-foreground">Cloud Badges</p>
          </Card>

          <Card className="bg-card/50 backdrop-blur-xl border-2 border-border/50 p-6 text-center hover:border-accent/30 transition-all duration-300 hover:-translate-y-2 group">
            <div className="text-4xl font-black bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
              150+
            </div>
            <p className="text-sm text-muted-foreground">LeetCode Solved</p>
          </Card>

          <Card className="bg-card/50 backdrop-blur-xl border-2 border-border/50 p-6 text-center hover:border-accent/30 transition-all duration-300 hover:-translate-y-2 group">
            <div className="text-4xl font-black bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
              2
            </div>
            <p className="text-sm text-muted-foreground">Major Awards</p>
          </Card>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-700 delay-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent/10 to-primary/10 border-2 border-accent/20 rounded-full backdrop-blur-sm">
            <Code className="w-5 h-5 text-accent" />
            <span className="text-sm font-semibold text-foreground/90">Always learning, always contributing</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;