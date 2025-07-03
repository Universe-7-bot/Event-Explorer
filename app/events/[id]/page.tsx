"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  Calendar,
  MapPin,
  Users,
  Clock,
  ArrowLeft,
  Star,
  Tag,
} from "lucide-react";
import eventsData from "../../../data/events.json";
import { use } from "react";

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  venue: string;
  briefDescription: string;
  fullDescription: string;
  image: string;
  category: string;
  price: string;
  capacity: number;
  speakers: string[];
  tags: string[];
}

const EventDetail = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = use(params);
  const [event, setEvent] = useState<Event | null>(null);

  useEffect(() => {
    const foundEvent = eventsData.find((e) => e.id === id);
    setEvent(foundEvent || null);

    // Update document title for SEO
    if (foundEvent) {
      document.title = `${foundEvent.title} - Events Explorer`;

      // Update meta description
      const metaDescription = document.querySelector(
        'meta[name="description"]'
      );
      if (metaDescription) {
        metaDescription.setAttribute("content", foundEvent.briefDescription);
      }
    }
  }, [id]);

  if (!event) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Event Not Found
          </h1>
          <p className="text-gray-600 mb-6">
            The event you're looking for doesn't exist.
          </p>
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Events
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Events
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-opacity-40" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white">
              <div className="flex items-center mb-2">
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium mr-3">
                  {event.category}
                </span>
                <div className="flex items-center">
                  <Star size={16} className="text-yellow-400 mr-1" />
                  <span className="text-sm">Featured Event</span>
                </div>
              </div>
              <h1 className="text-4xl font-bold mb-4">{event.title}</h1>
              <p className="text-xl opacity-90">{event.briefDescription}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Event Details */}
          <article className="lg:col-span-2">
            <section className="bg-white rounded-xl shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                About This Event
              </h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed text-lg">
                  {event.fullDescription}
                </p>
              </div>

               <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
                Event Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {event.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                  >
                    <Tag className="h-3 w-3 mr-1" />
                    {tag}
                  </span>
                ))}
              </div>
            </section>

            {/* Speakers Section */}
            <section className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Featured Speakers
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {event.speakers.map((speaker, index) => (
                  <div
                    key={index}
                    className="text-center p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors duration-200"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-3 flex items-center justify-center text-white font-bold text-lg">
                      {speaker
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <h3 className="font-semibold text-gray-900">{speaker}</h3>
                    <p className="text-sm text-gray-600">Expert Speaker</p>
                  </div>
                ))}
              </div>
            </section>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-8 sticky top-8">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {event.price}
                </div>
                <p className="text-gray-600">per person</p>
              </div>
              <div className="space-y-4 mb-6">
                <div className="flex items-center text-gray-700">
                  <Calendar size={20} className="mr-3 text-blue-600" />
                  <div>
                    <div className="font-medium">{formatDate(event.date)}</div>
                    <div className="text-sm text-gray-600">at {event.time}</div>
                  </div>
                </div>

                <div className="flex items-center text-gray-700">
                  <MapPin size={20} className="mr-3 text-blue-600" />
                  <div>
                    <div className="font-medium">{event.venue}</div>
                    <div className="text-sm text-gray-600">
                      {event.location}
                    </div>
                  </div>
                </div>

                <div className="flex items-center text-gray-700">
                  <Users size={20} className="mr-3 text-blue-600" />
                  <div>
                    <div className="font-medium">
                      {event.capacity} attendees
                    </div>
                    <div className="text-sm text-gray-600">capacity</div>
                  </div>
                </div>

                <div className="flex items-center text-gray-700">
                  <Clock size={20} className="mr-3 text-blue-600" />
                  <div>
                    <div className="font-medium">Full Day Event</div>
                    <div className="text-sm text-gray-600">8+ hours</div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
                <h3 className="text-lg font-semibold mb-2">Ready to Join?</h3>
                <p className="text-blue-100 mb-4">
                  Don't miss out on this amazing event!
                </p>
                <button className="w-full bg-white text-gray-900 font-medium py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors">
                  Register Now
                </button>
              </div>

              <p className="text-xs text-gray-500 text-center my-4">
                Secure booking • Instant confirmation
              </p>

              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Share Event
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Spread the word about this event with your friends and
                  colleagues.
                </p>
                <div className="flex gap-2">
                  <button className="flex-1 bg-blue-600 text-white py-2 px-3 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                    Share
                  </button>
                  <button className="flex-1 bg-gray-100 text-gray-700 py-2 px-3 rounded-lg hover:bg-gray-200 transition-colors text-sm">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default EventDetail;
