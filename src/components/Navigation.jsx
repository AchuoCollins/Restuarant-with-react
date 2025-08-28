import React from 'react';
import { Link } from 'react-router-dom';


// Navigation Component (used across all pages)
export default function Navigation() {
  return (
    <nav className="flex justify-between items-center px-8 py-6">
      <Link to="/" className="text-2xl font-bold text-green-800">HealthyBites</Link>
      <div className="hidden md:flex space-x-8">
        <Link to="/" className="text-green-800 hover:text-green-600 font-medium">Home</Link>
        <Link to="/about" className="text-green-800 hover:text-green-600 font-medium">About us</Link>
        <Link to="/#" className="text-green-800 hover:text-green-600 font-medium">Testimonial</Link>
        <Link to="/#" className="text-green-800 hover:text-green-600 font-medium">Team</Link>
        <Link to="/menu" className="text-green-800 hover:text-green-600 font-medium">Menu</Link>
      </div>
      <div className="flex items-center space-x-4">
        <button className="text-green-800 hover:text-green-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
        <button className="bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors">
          Contact us
        </button>
      </div>
    </nav>
  );
}
