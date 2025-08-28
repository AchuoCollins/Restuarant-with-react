import React from 'react';
import Navigation from './Navigation';

// Team Page
export default function Team() {
  const teamMembers = [
    {
      id: 1,
      name: "Maria Johnson",
      role: "Founder & Head Nutritionist",
      bio: "With over 40 years of experience in nutrition, Maria founded HealthyBites with a vision to make healthy eating accessible to everyone."
    },
    {
      id: 2,
      name: "James Wilson",
      role: "Executive Chef",
      bio: "James brings 20 years of culinary expertise, creating delicious recipes that prioritize nutrition without compromising on taste."
    },
    {
      id: 3,
      name: "Sophia Martinez",
      role: "Head of Operations",
      bio: "Sophia ensures that every HealthyBites location maintains our high standards of quality and customer service."
    },
    {
      id: 4,
      name: "David Kim",
      role: "Head of Sustainability",
      bio: "David leads our initiatives to reduce environmental impact and support local farming communities."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100">
      <Navigation />

      <div className="container mx-auto px-4 py-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-6">Meet Our Team</h1>
          <p className="text-gray-700 text-lg">
            Our dedicated team of nutritionists, chefs, and professionals are committed to providing you with the healthiest and most delicious meals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-white rounded-xl shadow-md overflow-hidden text-center">
              <div className="h-56 bg-green-200 flex items-center justify-center">
                <span className="text-green-800">Team Member Photo</span>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-green-900 text-xl mb-2">{member.name}</h3>
                <p className="text-green-700 mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-md p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-green-900 mb-6">Join Our Team</h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Are you passionate about healthy food and making a difference? We're always looking for talented individuals to join the HealthyBites family.
          </p>
          <button className="bg-green-700 text-white px-6 py-3 rounded-md hover:bg-green-600 transition-colors font-medium">
            View Open Positions
          </button>
        </div>
      </div>
    </div>
  );
}
