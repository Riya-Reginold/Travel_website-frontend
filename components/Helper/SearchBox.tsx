"use client";

import React from "react";
import { FaMapMarkerAlt, FaCalendarAlt, FaUserFriends, FaMap } from "react-icons/fa";
import { MdSearch } from "react-icons/md";

const SearchBox = () => {
  return (
    <div className="mt-16 w-full max-w-5xl mx-auto bg-white/20 backdrop-blur-md rounded-2xl shadow-lg p-6 flex flex-col md:flex-row items-center gap-6">
      
      {/* Location */}
      <div className="flex flex-col flex-1">
        <label className="flex items-center gap-2 text-base font-semibold  text-white mb-1">
          <FaMapMarkerAlt className="text-blue-400" /> Location
        </label>
        <input
          type="text"
          placeholder="Where are you going?"
          className="w-full rounded-lg px-3 py-2 bg-transparent border border-white/40 text-white placeholder-white/60 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
      </div>

      {/* Start Date */}
      <div className="flex flex-col flex-1">
        <label className="flex items-center gap-2 text-base font-semibold text-white mb-1">
          <FaCalendarAlt className="text-blue-400" /> Start Date
        </label>
        <input
          type="date"
          className="w-full rounded-lg px-3 py-2 bg-transparent border border-white/40 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
      </div>

      {/* End Date */}
      <div className="flex flex-col flex-1">
        <label className="flex items-center gap-2 text-base font-semibold text-white mb-1">
          <FaCalendarAlt className="text-blue-400" /> End Date
        </label>
        <input
          type="date"
          className="w-full rounded-lg px-3 py-2 bg-transparent border border-white/40 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
      </div>

      {/* Guests */}
      <div className="flex flex-col flex-1">
        <label className="flex items-center gap-2 text-sm font-semibold text-white mb-1">
          <FaUserFriends className="text-blue-400" /> Guests
        </label>
        <input
          type="number"
          min="1"
          defaultValue={1}
          className="w-full rounded-lg px-3 py-2 bg-transparent border border-white/40 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
      </div>
       {/* Search Button */}
      <div className="flex flex-col justify-end">
        <button className="flex items-center justify-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-600 transition shadow-md">
          <MdSearch className="w-5 h-5" /> Search
        </button>
      </div>


    
     
    </div>
  );
};

export default SearchBox;
