'use client';

import React from 'react';
import { FaTag } from 'react-icons/fa';

const AdSection = () => {
  return (
   <div className="w-[90%] mx-auto my-12 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-700 text-white shadow-lg p-10 text-center">
        <FaTag className="text-5xl mx-auto mb-4 drop-shadow-md text-yellow-400" />
        <h2 className="text-2xl sm:text-4xl font-extrabold drop-shadow-md">
            Book Early & Save Big ✈️
        </h2>
        <p className="mt-2 mb-6 text-white/90">
            Unlock exclusive travel deals for your next adventure.
        </p>
      <button className="px-6 py-2 bg-white text-blue-700 font-semibold rounded-full shadow-md hover:bg-gray-100 transition">
        Explore Deals
      </button>
    </div>
  );
};

export default AdSection;
