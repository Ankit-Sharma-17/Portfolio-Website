import { Button } from "@/components/ui/button";
import { CalendarDays, MapPin, Zap } from "lucide-react";
import { useEffect, useState } from "react";

const EventHero = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  // Countdown target (event date)
  const target = new Date("2026-03-15T09:00:00");
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    const tick = () => setTimeLeft(Math.max(0, target.getTime() - Date.now()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  return (
    <section id="event-hero" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20" />
      <div className="absolute top-10 left-10 w-96 h-96 bg-primary/25 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="animate-fade-in-up max-w-4xl mx-auto">
            <br></br>
            <br></br>
            <br></br>
          <p className="text-primary font-display font-semibold text-lg mb-4 tracking-wider uppercase">
            College Tech Fest 2026
          </p>
          <h1 className="text-5xl md:text-8xl font-bold font-display mb-3 text-foreground leading-tight">
            Innovation<br /><span className="text-gradient">Summit 2026</span>
          </h1>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <CalendarDays size={18} className="text-primary" />
              <span>March 15-16, 2026</span>
            </div>
            <span className="hidden sm:inline">•</span>
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-primary" />
              <span>Silver Oak University, Aryabhata Auditorium</span>
            </div>
          </div>
          <div className="mb-12 flex flex-col items-center gap-6">
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-2">
              Two days of cutting-edge workshops, hackathons, and networking with industry leaders. Be part of the future of technology.
            </p>
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-muted to-muted/80 px-6 py-3 rounded-full border border-primary/20 shadow-md">
              <div className="text-center px-3">
                <div className="text-3xl font-bold text-primary">{days}</div>
                <div className="text-xs text-muted-foreground">Days</div>
              </div>
              <div className="w-px h-8 bg-border" />
              <div className="text-center px-3">
                <div className="text-3xl font-bold text-primary">{hours}</div>
                <div className="text-xs text-muted-foreground">Hours</div>
              </div>
              <div className="w-px h-8 bg-border" />
              <div className="text-center px-3">
                <div className="text-3xl font-bold text-primary">{minutes}</div>
                <div className="text-xs text-muted-foreground">Min</div>
              </div>
              <div className="w-px h-8 bg-border" />
              <div className="text-center px-3">
                <div className="text-3xl font-bold text-primary">{seconds}</div>
                <div className="text-xs text-muted-foreground">Sec</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button size="lg" className="text-lg px-8 py-6" onClick={() => scrollTo("#register")}>
                <Zap className="mr-2 h-5 w-5" />
                Register Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6"
                onClick={() => scrollTo("#highlights")}
              >
                Explore Highlights
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventHero;
