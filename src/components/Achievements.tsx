import { Card } from "@/components/ui/card";
import { Award, Trophy } from "lucide-react";
import { useInView } from "react-intersection-observer";
import Scene3DVariant from "./Scene3DVariant";

const Achievements = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <section id="achievements" className="py-24 px-4 relative overflow-hidden">
      {/* 3D Background */}
      <Scene3DVariant />
      
      <div ref={ref} className="container mx-auto max-w-4xl relative z-10">
        <h2 className={`text-5xl md:text-6xl font-black mb-16 text-center transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="bg-gradient-primary bg-clip-text text-transparent">Achievements</span>
        </h2>

        <Card className={`bg-card/60 backdrop-blur-xl border-2 border-primary/20 p-8 md:p-12 shadow-glow-purple hover:shadow-glow-cyan transition-all duration-500 group ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-start gap-6">
            <div className="p-4 bg-gradient-primary rounded-full group-hover:scale-110 transition-transform">
              <Trophy className="w-8 h-8 text-primary-foreground" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <Award className="w-6 h-6 text-accent" />
                <h3 className="text-2xl md:text-3xl font-bold">Hacktoberfest 2025 Super Contributor</h3>
              </div>
              <p className="text-lg text-foreground/80 font-body leading-relaxed">
                Earned badge and T-shirt for impactful open-source contributions during Hacktoberfest 2025. 
                Contributed to multiple projects, improving documentation, fixing bugs, and implementing new features 
                that benefited the developer community.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-accent/20 border border-accent/50 rounded-full text-accent font-semibold text-sm">
                  Open Source
                </span>
                <span className="px-4 py-2 bg-primary/20 border border-primary/50 rounded-full text-primary font-semibold text-sm">
                  Community Impact
                </span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Achievements;
