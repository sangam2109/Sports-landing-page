// EventList.tsx

import React, { useEffect, useState } from "react";

interface EventListProps {
  gender: "Male" | "Female";
}

const EventList: React.FC<EventListProps> = ({ gender }) => {
  const [events, setEvents] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Assume that events.json is in the same directory as this component
        const response = await fetch("../../Data/EventList.json");
        const data = await response.json();
        setEvents(data[`${gender} Events`]?.LIST || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [gender]);

  return (
    <div className="flex flex-col items-center md:flex-row md:space-x-8">
      {/* Logo and Heading */}
      <div className="mb-4 md:mb-0">
        {/* Assume that male-logo.png and female-logo.png are in the same directory */}
        <img
          src={gender === "Male" ? "./male-logo.png" : "./female-logo.png"}
          alt={`${gender} Logo`}
          className="w-16 h-16 md:w-20 md:h-20 rounded-full mb-2"
        />
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
