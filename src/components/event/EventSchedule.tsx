import { useState } from "react";
import { Button } from "@/components/ui/button";

const schedule = {
  "Day 1 — March 15": [
    { time: "9:00 AM", title: "Opening Ceremony", speaker: "Dr. Sarah Johnson" },
    { time: "10:00 AM", title: "Keynote: Future of AI", speaker: "Prof. Alan Chen" },
    { time: "11:30 AM", title: "Workshop: React Masterclass", speaker: "Emily Davis" },
    { time: "1:00 PM", title: "Lunch & Networking", speaker: "" },
    { time: "2:00 PM", title: "Hackathon Kickoff", speaker: "Tech Team" },
    { time: "4:00 PM", title: "Panel: Women in Tech", speaker: "Industry Leaders" },
  ],
  "Day 2 — March 16": [
    { time: "9:00 AM", title: "Workshop: Cloud Architecture", speaker: "Mike Roberts" },
    { time: "11:00 AM", title: "Startup Pitch Competition", speaker: "Various Teams" },
    { time: "1:00 PM", title: "Lunch Break", speaker: "" },
    { time: "2:00 PM", title: "Hackathon Demos", speaker: "Participants" },
    { time: "3:30 PM", title: "Awards Ceremony", speaker: "Organizing Committee" },
    { time: "5:00 PM", title: "Closing Keynote", speaker: "Dr. Sarah Johnson" },
  ],
};

const days = Object.keys(schedule) as (keyof typeof schedule)[];

const EventSchedule = () => {
  const [activeDay, setActiveDay] = useState(0);

  return (
    <section id="schedule" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-display text-center mb-4">
          Event <span className="text-gradient">Schedule</span>
        </h2>
        <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
          Two action-packed days of learning and innovation.
        </p>

        {/* Day tabs */}
        <div className="flex justify-center gap-2 mb-10">
          {days.map((day, i) => (
            <Button key={day} variant={activeDay === i ? "default" : "outline"} onClick={() => setActiveDay(i)}>
              {day}
            </Button>
          ))}
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto space-y-0">
          {schedule[days[activeDay]].map((item, i) => (
            <div key={i} className="flex gap-4 group">
              {/* Timeline line */}
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-primary mt-2" />
                {i < schedule[days[activeDay]].length - 1 && (
                  <div className="w-0.5 flex-1 bg-border" />
                )}
              </div>
              {/* Content */}
              <div className="pb-8">
                <p className="text-sm font-medium text-primary font-display">{item.time}</p>
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                {item.speaker && (
                  <p className="text-sm text-muted-foreground">{item.speaker}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventSchedule;
