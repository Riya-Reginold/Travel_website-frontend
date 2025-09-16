'use client';
import React, { useState }from 'react'
import { FaHeart } from 'react-icons/fa'
import Image from 'next/image'

type Props = {
  hotel: {
    id: number
    image: string
    name: string
    location: string
    rating: number
    reviews: string
    price: string
  }
}

const HotelCard = ({ hotel }: Props) => {
   const [liked, setLiked] = useState(false)
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer">
      <div className="relative h-[220px] w-full">
        <Image
          src={hotel.image}
          alt={hotel.name}
          width={500}
          height={500}
          className="h-full w-full object-cover"
        />
        <button
          onClick={() => setLiked(!liked)}
          className="absolute top-4 right-4 bg-white/90 hover:bg-red-100 p-2 rounded-full shadow-md transition"
        >
          <FaHeart
            className={`text-xl cursor-pointer transition-colors duration-300 ${
              liked ? 'text-red-500' : 'text-gray-400'
            }`}
          />
        </button>
      </div>

    
      <div className="p-4">
        <h1 className="text-lg font-semibold text-gray-900">{hotel.name}</h1>
        <p className="text-sm text-gray-600">{hotel.location}</p>

        <div className="flex items-center gap-2 mt-3">
          <span className="px-2 py-1 bg-blue-600 text-white rounded-md text-xs font-bold">
            {hotel.rating}
          </span>
          <span className="text-sm text-gray-700">Excellent</span>
          <span className="text-sm font-semibold text-gray-900">
            {hotel.reviews} reviews
          </span>
        </div>

        <p className="mt-3 text-gray-700">
          Starting from{' '}
          <span className="text-blue-600 font-bold">EUR {hotel.price}</span>
        </p>
      </div>
    </div>
  )
}

export default HotelCard
