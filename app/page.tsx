"use client";

import React, { useState, useEffect } from "react";
import Head from "next/head";
import EventCard from "../components/EventCard";
import EventFilter from "../components/EventFilter";
import Header from "../components/Header";
import eventsData from "../data/events.json";

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

const EventsList: React.FC = () => {
  const [events] = useState<Event[]>(eventsData);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>(events);
  const [selectedLocation, setSelectedLocation] = useState<string>("");

  // Get unique locations for filter
  const locations = Array.from(
    new Set(events.map((event) => event.location))
  ).sort();

  useEffect(() => {
    if (selectedLocation === "") {
      setFilteredEvents(events);
    } else {
      setFilteredEvents(
        events.filter((event) => event.location === selectedLocation)
      );
    }
  }, [selectedLocation, events]);

  return (
    <>
      <Head>
        <title>Events Explorer - Discover Amazing Events</title>
        <meta
          name="description"
          content="Explore and discover amazing events happening near you. From tech conferences to creative workshops, find your next inspiration."
        />
        <meta
          name="keywords"
          content="events, conferences, workshops, networking, tech, business, design"
        />
        <meta
          property="og:title"
          content="Events Explorer - Discover Amazing Events"
        />
        <meta
          property="og:description"
          content="Explore and discover amazing events happening near you. From tech conferences to creative workshops, find your next inspiration."
        />
        <meta property="og:type" content="website" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <Header />

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Discover Amazing Events
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              From tech innovations to creative workshops, find events that
              inspire and connect you with like-minded people.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105">
                Browse Events
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200">
                Host Your Event
              </button>
            </div>
          </div>
        </section>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <EventFilter
            selectedLocation={selectedLocation}
            onLocationChange={setSelectedLocation}
            locations={locations}
          />
          {filteredEvents.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No events found
              </h3>
              <p className="text-gray-600">
                Try selecting a different location or check back later for new
                events.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          )}
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2">
                <h3 className="text-xl font-bold mb-4">Events Explorer</h3>
                <p className="text-gray-400 mb-4">
                  Connecting people through amazing experiences. Discover,
                  attend, and create memorable events.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Browse Events
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Host Event
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Support</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Terms of Service
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2024 Events Explorer. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default EventsList;
