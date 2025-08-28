import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navigation from './Navigation';


// About Page
export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-6">About HealthyBites</h1>
          <p className="text-gray-700 text-lg">
            For over four decades, HealthyBites has been serving nutritious, delicious meals that nourish both body and soul.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
          <div className="md:w-1/2">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <div className="w-full h-80 bg-green-200 flex items-center justify-center">
                <span className="text-green-800">Our Restaurant Image</span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-green-900 mb-6">Our Journey</h2>
            <p className="text-gray-700 mb-4">
              Founded in 1980 by nutritionist Maria Johnson, HealthyBites began as a small café with a big vision: to make healthy eating accessible and enjoyable for everyone.
            </p>
            <p className="text-gray-700 mb-6">
              What started as a single location has now grown to over 127 branches worldwide, but our commitment to quality ingredients and nutritious recipes has never changed.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-green-800">Quality Guarantee</h3>
                <p className="text-sm text-gray-600">All ingredients are locally sourced and organic</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission and Values */}
        <div className="bg-white rounded-2xl shadow-md p-8 md:p-12 mb-16">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl font-bold text-green-900 mb-6">Our Mission</h2>
              <p className="text-gray-700 mb-4">
                To provide delicious, nutritious meals that support our customers' health goals without compromising on taste or quality.
              </p>
              <p className="text-gray-700">
                We believe that eating well should be a joyful experience, not a restrictive one. That's why our chefs work tirelessly to create dishes that are both good for you and incredibly satisfying.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-green-900 mb-6">Our Values</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-700" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Sustainability: We prioritize eco-friendly practices and packaging</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-700" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Transparency: We're open about our ingredients and sourcing</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-700" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Community: We support local farmers and food initiatives</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* <Footer/> */}
    </div>

    
  );
}
