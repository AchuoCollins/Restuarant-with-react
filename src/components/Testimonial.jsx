import React from 'react';

import Navigation from './Navigation';

// Testimonial Page
function Testimonial() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Regular Customer",
      content: "HealthyBites has completely transformed my eating habits. Their meals are not only nutritious but also incredibly delicious! I've been a loyal customer for over 5 years.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Fitness Instructor",
      content: "As a fitness professional, I recommend HealthyBites to all my clients. The macro-balanced meals help them stay on track with their fitness goals without sacrificing flavor.",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Food Blogger",
      content: "I've tried countless healthy restaurants, but none compare to HealthyBites. Their commitment to using fresh, organic ingredients really shines through in every dish.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-6">What Our Customers Say</h1>
          <p className="text-gray-700 text-lg">
            Don't just take our word for it - hear from our satisfied customers who have experienced the HealthyBites difference.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
              <div>
                <h3 className="font-semibold text-green-900">{testimonial.name}</h3>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-green-800 text-white rounded-2xl p-10 text-center">
          <h2 className="text-3xl font-bold mb-4">Share Your Experience</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Have you enjoyed our meals? We'd love to hear about your experience with HealthyBites!
          </p>
          <button className="bg-white text-green-800 px-6 py-3 rounded-md hover:bg-green-50 transition-colors font-medium">
            Add Your Testimonial
          </button>
        </div>
      </div>
    </div>
  );
}
export default Testimonial;