import EventNav from "@/components/event/EventNav";
import EventHero from "@/components/event/EventHero";
import EventAbout from "@/components/event/EventAbout";
import EventHighlights from "@/components/event/EventHighlights";
import EventSchedule from "@/components/event/EventSchedule";
import EventSpeakers from "@/components/event/EventSpeakers";
import EventRegistration from "@/components/event/EventRegistration";
import EventSponsors from "@/components/event/EventSponsors";
import EventFooter from "@/components/event/EventFooter";

const EventPage = () => {
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
    </div>
  );
};

export default EventPage;
