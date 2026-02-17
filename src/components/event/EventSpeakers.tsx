import { Card, CardContent } from "@/components/ui/card";

const speakers = [
  { name: "Dr. Sarah Johnson", title: "Dean of CS", org: "XYZ University", emoji: "👩‍🏫" },
  { name: "Prof. Alan Chen", title: "AI Researcher", org: "MIT Labs", emoji: "👨‍🔬" },
  { name: "Emily Davis", title: "Senior Engineer", org: "Google", emoji: "👩‍💻" },
  { name: "Mike Roberts", title: "Cloud Architect", org: "AWS", emoji: "👨‍💻" },
  { name: "Priya Sharma", title: "Product Designer", org: "Figma", emoji: "👩‍🎨" },
  { name: "James Wilson", title: "CTO", org: "TechStartup Inc.", emoji: "🧑‍💼" },
];

const EventSpeakers = () => {
  return (
    <section id="speakers" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-display text-center mb-4">
          Our <span className="text-gradient">Speakers</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Learn from the best minds in the industry.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {speakers.map((speaker, i) => (
            <Card key={speaker.name} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <CardContent className="p-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4 text-4xl">
                  {speaker.emoji}
                </div>
                <h3 className="font-display font-semibold text-lg">{speaker.name}</h3>
                <p className="text-sm text-primary font-medium">{speaker.title}</p>
                <p className="text-sm text-muted-foreground">{speaker.org}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventSpeakers;
