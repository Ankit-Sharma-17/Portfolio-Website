import EventNav from "@/components/event/EventNav";
import EventHero from "@/components/event/EventHero";
import EventAbout from "@/components/event/EventAbout";
import EventHighlights from "@/components/event/EventHighlights";
import EventSchedule from "@/components/event/EventSchedule";
import EventSpeakers from "@/components/event/EventSpeakers";
import EventRegistration from "@/components/event/EventRegistration";
import EventSponsors from "@/components/event/EventSponsors";
import EventFooter from "@/components/event/EventFooter";
import { useEffect } from "react";
import ScrollToTop from "@/components/ScrollToTop";

const EventPage = () => {
  useEffect(() => {
    // ensure fresh start when navigating to event page
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <EventNav />
      <main>
        <EventHero />
        <EventAbout />
        <EventHighlights />
        <EventSchedule />
        <EventSpeakers />
        <EventRegistration />
        <EventSponsors />
      </main>
      <EventFooter />
      <ScrollToTop />
      {/* floating CTA */}
      <a href="#register" className="fixed right-6 bottom-6 z-50 bg-gradient-to-br from-primary to-accent text-foreground px-5 py-3 rounded-full shadow-xl hover:scale-105 transition-transform">
        Register Now
      </a>
    </div>
  );
};

export default EventPage;
