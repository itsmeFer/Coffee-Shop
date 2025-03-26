"use client";
import { useState } from "react";

export default function CoffeeSelector() {
  const [selected, setSelected] = useState("Latte");

  const coffees = [
    {
        name: "Chocolate Latte",
        category: "Latte",     
        rating: 4.9,
        reviews: 360,
        price: 2.9,
        description: "Lorem ipsum dolor sit amet...",
        image: "/hero/Rectangle 1461-1.png"
      },
      {
        name: "Mocha Latte",
        category: "Latte",  
        rating: 5.0,
        reviews: 180,
        price: 2.7,
        description: "Scelerisque urna vel sit...",
        image: "/hero/Rectangle 1461-2.png"
      },
      {
        name: "Coffee Latte",
        category: "Latte",        
        rating: 4.7,
        reviews: 250,
        price: 3.0,
        description: "Strong coffee for strong people...",
        image: "/hero/Rectangle 1461-3.png"
      },
      {
        name: "Hazelnut Latte",
        category: "Latte",        
        rating: 4.7,
        reviews: 250,
        price: 3.0,
        description: "Strong coffee for strong people...",
        image: "/hero/Rectangle 1461.png"
      },
];


  // ⬇️ Filter kopi sesuai kategori
  const filteredCoffees = coffees.filter(coffee => coffee.category === selected);

  const categories = ["Latte", "Robusta", "Arabica"];

  return (
    <div className="mt-20 flex flex-col items-center">
      {/* ⬇️ Tombol Pilih Kategori */}
      <div className="flex bg-gray-100 rounded-full p-2 w-fit shadow-lg mb-10">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelected(category)}
            className={`px-29 py-8 rounded-full text-base font-semibold transition ${
              selected === category
                ? "bg-[#5B221B] text-white shadow"
                : "text-gray-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* ⬇️ Tampilkan Kopi Sesuai Kategori */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-4 font-jakarta">
        {filteredCoffees.map((coffee) => (
          <div key={coffee.name} className="p-4 bg-white rounded-lg shadow">
            <img src={coffee.image} alt={coffee.name} className="rounded-lg mb-2" />
            <h2 className="text-lg font-bold">{coffee.name}</h2>
            <p>⭐ {coffee.rating} ({coffee.reviews} reviews)</p>
            <p className="text-sm text-gray-500">{coffee.description}</p>
            <p className="font-semibold">${coffee.price}</p>
            <button className="bg-[#5B221B] text-white px-3 py-1 rounded mt-2">+</button>
          </div>
        ))}
      </div>
    </div>
  );
}
