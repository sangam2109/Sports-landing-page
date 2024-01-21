// EventList.tsx

import React, { useEffect, useState } from "react";
import eventData from "../../Data/EventList.json"; 

interface EventListProps {
  gender: "Male" | "Female";
}

const EventList: React.FC<EventListProps> = ({ gender }) => {
  const [events, setEvents] = useState<string[]>([]);

  useEffect(() => {
    // Use the imported JSON data directly
    setEvents(eventData[`${gender} Events`]?.LIST || []);
  }, [gender]);

  return (
    <div className="flex flex-col items-center md:flex-row md:space-x-8">
      {/* Logo and Heading */}
      <div className="mb-4 md:mb-0">
        {/* <img
          src={gender === "Male" ? "./male-logo.png" : "./female-logo.png"}
          alt={`${gender} Logo`}
          className="w-16 h-16 md:w-20 md:h-20 rounded-full mb-2"
        /> */}
        <h2 className="text-xl font-bold text-gray-800">{gender} Events</h2>
      </div>

      {/* Event List */}
      <div className="flex flex-col">
        {events.map((event, index) => (
          <div key={index} className="mb-2">
            {event}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventList;
