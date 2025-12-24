import React from "react";

export default function FoodList() {
  // Example food data
  const foods = [
    { id: 1, name: "Pizza Margherita", price: 12, image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&q=80" },
    { id: 2, name: "Sushi Platter", price: 20, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80" },
    { id: 3, name: "Burger Deluxe", price: 10, image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=80" },
    { id: 4, name: "Caesar Salad", price: 8, image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=400&q=80" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-8">
      {foods.map((food) => (
        <div key={food.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform">
          <img src={food.image} alt={food.name} className="w-full h-48 object-cover" />
          <div className="p-4 flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-2">{food.name}</h2>
            <p className="text-lg font-bold text-green-600 mb-2">${food.price}</p>
            <button className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition">Order</button>
          </div>
        </div>
      ))}
    </div>
  );
}
