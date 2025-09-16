import React from 'react'
import Link from 'next/link'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer className="pt-16 pb-10 bg-gray-50 border-t">
      <div className="w-[85%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
        
      
        <div className="space-y-4">
          <h1 className="text-lg font-bold text-blue-950">Company</h1>
          <p className="text-gray-700 text-sm hover:text-blue-950 cursor-pointer">About Us</p>
          <p className="text-gray-700 text-sm hover:text-blue-950 cursor-pointer">Careers</p>
          <p className="text-gray-700 text-sm hover:text-blue-950 cursor-pointer">Press</p>
          <p className="text-gray-700 text-sm hover:text-blue-950 cursor-pointer">Partners</p>
        </div>

        <div className="space-y-4">
          <h1 className="text-lg font-bold text-blue-950">Support</h1>
          <p className="text-gray-700 text-sm hover:text-blue-950 cursor-pointer">Help Center</p>
          <p className="text-gray-700 text-sm hover:text-blue-950 cursor-pointer">FAQs</p>
          <p className="text-gray-700 text-sm hover:text-blue-950 cursor-pointer">Cancellation Policy</p>
          <p className="text-gray-700 text-sm hover:text-blue-950 cursor-pointer">Terms & Conditions</p>
          <p className="text-gray-700 text-sm hover:text-blue-950 cursor-pointer">Privacy Policy</p>
        </div>

        <div className="space-y-4">
          <h1 className="text-lg font-bold text-blue-950">Our Services</h1>
          <p className="text-gray-700 text-sm hover:text-blue-950 cursor-pointer">Hotel Booking</p>
          <p className="text-gray-700 text-sm hover:text-blue-950 cursor-pointer">Flight Booking</p>
          <p className="text-gray-700 text-sm hover:text-blue-950 cursor-pointer">Car Rentals</p>
          <p className="text-gray-700 text-sm hover:text-blue-950 cursor-pointer">Holiday Packages</p>
          <p className="text-gray-700 text-sm hover:text-blue-950 cursor-pointer">Travel Insurance</p>
        </div>

        
        <div className="space-y-4">
          <h1 className="text-lg font-bold text-blue-950">Popular Destinations</h1>
          <p className="text-gray-700 text-sm hover:text-blue-950 cursor-pointer">Paris</p>
          <p className="text-gray-700 text-sm hover:text-blue-950 cursor-pointer">New York</p>
          <p className="text-gray-700 text-sm hover:text-blue-950 cursor-pointer">Tokyo</p>
          <p className="text-gray-700 text-sm hover:text-blue-950 cursor-pointer">Dubai</p>
          <p className="text-gray-700 text-sm hover:text-blue-950 cursor-pointer">Sydney</p>
        </div>

      
        <div className="space-y-5">
          <h1 className="text-lg font-bold text-blue-950">Get in Touch</h1>
          <div>
            <h1 className="text-sm text-gray-600">Phone</h1>
            <p className="text-base font-semibold text-blue-950">+49 123 456 789</p>
          </div>
          <div>
            <h1 className="text-sm text-gray-600">Email</h1>
            <p className="text-base font-semibold text-blue-950">support@easevoyage.com</p>
          </div>
        </div>

      </div>

      <div className="mt-10 w-[85%] mx-auto border-t pt-6 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
        <p>© 2025 EaseVoyage. All rights reserved.</p>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <span className="hidden sm:inline">Follow us:</span>
          <Link href="#" className="text-gray-500 hover:text-blue-950"><FaFacebook size={18} /></Link>
          <Link href="#" className="text-gray-500 hover:text-blue-950"><FaTwitter size={18} /></Link>
          <Link href="#" className="text-gray-500 hover:text-blue-950"><FaInstagram size={18} /></Link>
          <Link href="#" className="text-gray-500 hover:text-blue-950"><FaLinkedin size={18} /></Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
