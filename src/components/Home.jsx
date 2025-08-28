import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';



export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100">
      <Navigation />

      <div className="container mx-auto px-4 py-12 md:py-24 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0 ml-10">
          <h1 className="text-4xl md:text-6xl font-bold text-green-900 mb-6 animate-bounce">
            Healthy Food<br />
            <span className="text-green-600">Good Life</span>
          </h1>
          <p className="text-gray-700 text-lg mb-8 max-w-md">
            This is a type of restaurant which typically serves food and drinks, in addition to light refreshment our design is awesome
          </p>

          <Link to="/menu" className="bg-green-700 text-white px-6 py-3 rounded-md hover:bg-green-600 transition-colors font-medium">
            Explore More
          </Link>

        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            <div className="w-80 h-80 bg-green-200 rounded-full overflow-hidden shadow-lg flex items-center justify-center">
              <span className="text-green-800 text-center">Healthy Food Image</span>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-md p-4 w-48">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-xs text-gray-500">Opening Hours</p>
                  <p className="text-sm font-medium">9:00 AM - 10:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-green-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-20">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">15K+</div>
              <div className="text-green-200">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">127+</div>
              <div className="text-green-200">Branches</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">42+</div>
              <div className="text-green-200">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">35+</div>
              <div className="text-green-200">Awards</div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}