import { Users, Lightbulb, Trophy } from "lucide-react";

const stats = [
  { icon: Users, label: "Expected Attendees", value: "500+" },
  { icon: Lightbulb, label: "Workshops", value: "12+" },
  { icon: Trophy, label: "Speakers", value: "20+" },
];

const EventAbout = () => {
  return (
    <section id="about-event" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-display text-center mb-4">
          About The <span className="text-gradient">Event</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-3xl mx-auto leading-relaxed">
          Innovation Summit 2026 is the premier college tech fest bringing together students, developers, and industry leaders for two days of learning, building, and networking. From hands-on workshops to intense hackathons, this event is designed to inspire the next generation of innovators.
        </p>
        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {stats.map(({ icon: Icon, label, value }) => (
            <div key={label} className="text-center p-6 rounded-xl bg-card border border-border">
              <Icon className="mx-auto mb-3 text-primary" size={32} />
              <p className="text-3xl font-bold font-display text-foreground">{value}</p>
              <p className="text-sm text-muted-foreground">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventAbout;
