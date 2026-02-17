import { Code, Cpu, Network, Palette, Rocket, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const highlights = [
  { icon: Code, title: "Hackathon", desc: "24-hour coding challenge with amazing prizes" },
  { icon: Cpu, title: "AI/ML Workshop", desc: "Hands-on machine learning with industry experts" },
  { icon: Network, title: "Networking", desc: "Connect with 500+ developers and tech leaders" },
  { icon: Palette, title: "Design Sprint", desc: "UI/UX design challenge and portfolio review" },
  { icon: Rocket, title: "Startup Pitch", desc: "Present your ideas to real investors" },
  { icon: Zap, title: "Tech Talks", desc: "Lightning talks on cutting-edge technologies" },
];

const EventHighlights = () => {
  return (
    <section id="highlights" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-display text-center mb-4">
          Event <span className="text-gradient">Highlights</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          What makes Innovation Summit 2026 unmissable.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {highlights.map(({ icon: Icon, title, desc }, i) => (
            <Card key={title} className="group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon size={28} />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventHighlights;
