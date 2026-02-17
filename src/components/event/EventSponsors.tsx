const sponsorTiers = [
  {
    tier: "Gold Sponsors",
    sponsors: ["TechCorp", "InnovateLabs", "CloudFirst"],
  },
  {
    tier: "Silver Sponsors",
    sponsors: ["DataFlow", "CodeNest", "ByteWorks", "PixelPro"],
  },
  {
    tier: "Bronze Sponsors",
    sponsors: ["StartupHub", "DevTools", "WebScale", "AppForge", "SmartAI"],
  },
];

const EventSponsors = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-display text-center mb-4">
          Our <span className="text-gradient">Sponsors</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Innovation Summit 2026 is made possible by our generous sponsors.
        </p>
        <div className="space-y-10 max-w-4xl mx-auto">
          {sponsorTiers.map(({ tier, sponsors }) => (
            <div key={tier}>
              <h3 className="font-display font-semibold text-center text-primary mb-4">{tier}</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {sponsors.map((name) => (
                  <div
                    key={name}
                    className="px-6 py-4 rounded-lg bg-card border border-border text-center font-display font-medium text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
                  >
                    {name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventSponsors;
