import React from 'react'
import { BsEnvelope } from 'react-icons/bs'

const NewsLetter = () => {
  return (
    <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-950 py-16 px-6 flex items-center justify-center w-full">
      <div className="bg-white rounded-2xl shadow-lg p-10 max-w-2xl w-full text-center">
        <div className="flex justify-center">
          <BsEnvelope className="w-14 h-14 text-blue-900" />
        </div>
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mt-6 text-blue-950">
          Unlock Special Travel Offers ✈️
        </h1>
        <p className="mt-3 text-gray-600 text-sm sm:text-base">
          Subscribe and be the first to receive exclusive deals, travel guides, and discounts.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
          />
          <button className="px-6 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition duration-200 shadow-md w-full sm:w-auto">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  )
}

export default NewsLetter

