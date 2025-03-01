import React from "react";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
interface Event {
  image: string;
  title: string;
  date: string;
  description: string;
}

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <div className="max-w-lg mx-auto bg-white shadow-lg rounded-2xl overflow-hidden p-5">
      <img src={event.image} alt={event.title} className="w-full h-56 object-cover rounded-lg" />
      <h2 className="text-2xl font-bold text-gray-800 mt-4">{event.title}</h2>
      <p className="text-gray-600 text-sm mt-2"><Calendar className=" space-gap h-5 w-6 text-black-600 dark:text-gray-400" /> {event.date}</p>
      <p className="text-gray-700 mt-3">{event.description}</p>
    </div>
  );
};

const UpcomingEvent: React.FC = () => {
  const events: Event[] = [
    {
      image: "https://via.placeholder.com/400", // Replace with actual image URL
      title: "Tech Conference 2025",
      date: "March 15, 2025",
      description: "Join us for an exciting tech conference featuring industry leaders and networking opportunities.",
    },
    {
      image: "https://via.placeholder.com/400", // Replace with actual image URL
      title: "Community Outreach",
      date: "April 20, 2025",
      description: "Serving our local community through various initiatives.",
    },
    {
      image: "https://via.placeholder.com/400", // Replace with actual image URL
      title: "Youth Conference",
      date: "April 15-17, 2025",
      description: "Three days of worship, teaching, and fellowship for young adults.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-5 space-y-8">
      {events.map((event, index) => (
        <EventCard key={index} event={event} />
      ))}
    </div>
  );
};

export default UpcomingEvent;