"use client";

import React from 'react';
import { ChevronDown } from 'lucide-react';

interface EventFilterProps {
  selectedLocation: string;
  onLocationChange: (location: string) => void;
  locations: string[];
}

const EventFilter: React.FC<EventFilterProps> = ({ 
  selectedLocation, 
  onLocationChange, 
  locations 
}) => {
  return (
    <div className="mb-8">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Upcoming Events</h2>
          <p className="text-gray-600">Discover amazing events happening near you</p>
        </div>
        
        <div className="relative">
          <select
            value={selectedLocation}
            onChange={(e) => onLocationChange(e.target.value)}
            className="appearance-none bg-white border-2 border-gray-200 rounded-lg px-4 py-2 pr-10 text-gray-700 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 cursor-pointer hover:border-gray-300"
          >
             <option value="">All Locations</option>
            {locations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
          <ChevronDown 
            size={20} 
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
          />
        </div>
      </div>
    </div>
  );
};

export default EventFilter;
