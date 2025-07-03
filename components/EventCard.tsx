"use client";

import React from "react";
import Link from "next/link";
import { Calendar, MapPin, Users, Tag } from "lucide-react";

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  venue: string;
  briefDescription: string;
  image: string;
  category: string;
  price: string;
  capacity: number;
  tags: string[];
}

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <Link
      href={`/events/${event.id}`}
      className="group block bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
    >
      <div className="relative overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-800">
          {event.category}
        </div>
        <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
          {event.price}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
          {event.title}
        </h3>

        <div className="flex items-center text-gray-600 mb-2">
          <Calendar size={16} className="mr-2" />
          <span className="text-sm">
            {formatDate(event.date)} at {event.time}
          </span>
        </div>

        <div className="flex items-center text-gray-600 mb-3">
          <MapPin size={16} className="mr-2" />
          <span className="text-sm">
            {event.venue}, {event.location}
          </span>
        </div>

        <p className="text-gray-700 text-sm leading-relaxed mb-4">
          {event.briefDescription}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {event.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700"
            >
              <Tag className="h-3 w-3 mr-1" />
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center text-gray-500 text-sm">
            <Users size={16} className="mr-1" />
            <span>{event.capacity} capacity</span>
          </div>
          <span className="text-blue-600 font-medium text-sm group-hover:text-blue-700">
            Learn more →
          </span>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
