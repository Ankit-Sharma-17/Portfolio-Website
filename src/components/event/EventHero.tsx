import { Button } from "@/components/ui/button";
import { CalendarDays, MapPin } from "lucide-react";

const EventHero = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="event-hero" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20" />
      <div className="absolute top-10 left-10 w-96 h-96 bg-primary/25 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="animate-fade-in-up max-w-4xl mx-auto">
          <p className="text-primary font-display font-semibold text-lg mb-4 tracking-wider uppercase">
            College Tech Fest 2026
          </p>
          <h1 className="text-5xl md:text-8xl font-bold font-display mb-6 text-foreground leading-tight">
            Innovation<br /><span className="text-gradient">Summit 2026</span>
          </h1>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <CalendarDays size={18} className="text-primary" />
              <span>March 15-16, 2026</span>
            </div>
            <span className="hidden sm:inline">•</span>
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-primary" />
              <span>XYZ University, Main Auditorium</span>
            </div>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Two days of cutting-edge workshops, hackathons, and networking with industry leaders. Be part of the future of technology.
          </p>
          <Button size="lg" className="text-lg px-10 py-6" onClick={() => scrollTo("#register")}>
            Register Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventHero;
