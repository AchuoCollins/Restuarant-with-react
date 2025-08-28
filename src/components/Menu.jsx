import React from 'react';

import Navigation from './Navigation';


// Menu Page
function Menu() {
  const menuCategories = [
    {
      id: 1,
      name: "Breakfast",
      items: [
        { id: 1, name: "Avocado Toast", description: "Whole grain toast with smashed avocado, cherry tomatoes, and microgreens", price: "$9.99" },
        { id: 2, name: "Acai Bowl", description: "Acai blend topped with granola, banana, and honey", price: "$10.99" }
      ]
    },
    {
      id: 2,
      name: "Salads",
      items: [
        { id: 1, name: "Quinoa Salad", description: "Organic quinoa with roasted vegetables and lemon tahini dressing", price: "$12.99" },
        { id: 2, name: "Superfood Salad", description: "Kale, spinach, berries, nuts with balsamic vinaigrette", price: "$11.99" }
      ]
    },
    {
      id: 3,
      name: "Main Courses",
      items: [
        { id: 1, name: "Grilled Salmon", description: "Wild-caught salmon with steamed vegetables and quinoa", price: "$18.99" },
        { id: 2, name: "Plant-Based Bowl", description: "Brown rice, black beans, roasted sweet potatoes, and avocado", price: "$14.99" }
      ]
    },
    {
      id: 4,
      name: "Smoothies & Drinks",
      items: [
        { id: 1, name: "Green Detox Smoothie", description: "Spinach, kale, pineapple, banana, and ginger", price: "$7.99" },
        { id: 2, name: "Protein Power Shake", description: "Plant-based protein, almond butter, banana, and almond milk", price: "$8.99" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-6">Our Menu</h1>
          <p className="text-gray-700 text-lg">
            Discover our delicious, nutritionist-designed meals made with the freshest, organic ingredients.
          </p>
        </div>

        <div className="mb-12">
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-green-700 text-white px-4 py-2 rounded-md">All</button>
            <button className="bg-white text-green-800 px-4 py-2 rounded-md border border-green-200">Breakfast</button>
            <button className="bg-white text-green-800 px-4 py-2 rounded-md border border-green-200">Lunch</button>
            <button className="bg-white text-green-800 px-4 py-2 rounded-md border border-green-200">Dinner</button>
            <button className="bg-white text-green-800 px-4 py-2 rounded-md border border-green-200">Smoothies</button>
          </div>
        </div>

        <div className="space-y-16">
          {menuCategories.map((category) => (
            <div key={category.id} className="bg-white rounded-2xl shadow-md p-8">
              <h2 className="text-3xl font-bold text-green-900 mb-8">{category.name}</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {category.items.map((item) => (
                  <div key={item.id} className="flex justify-between items-start border-b border-green-100 pb-6">
                    <div>
                      <h3 className="font-semibold text-green-900 text-lg mb-2">{item.name}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                    <span className="font-bold text-green-700">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-green-800 text-white rounded-2xl p-10 text-center mt-16">
          <h2 className="text-3xl font-bold mb-4">Download Our Full Menu</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Get our complete menu with nutritional information for all our dishes.
          </p>
          <button className="bg-white text-green-800 px-6 py-3 rounded-md hover:bg-green-50 transition-colors font-medium">
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
}
export default Menu;