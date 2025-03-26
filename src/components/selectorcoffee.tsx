"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { Coffee, Star, ShoppingCart } from "lucide-react";

export default function CoffeeSelector() {
  const [selected, setSelected] = useState("Latte");

  const coffees = [
    {
      name: "Chocolate Latte",
      category: "Latte",
      rating: 4.9,
      reviews: 360,
      price: 2.9,
      description: "Lorem ",
      image: "/hero/Rectangle 1461-1.png",
    },
    {
      name: "Mocha Latte",
      category: "Latte",
      rating: 5.0,
      reviews: 180,
      price: 2.7,
      description: "Scelerisque ",
      image: "/hero/Rectangle 1461-2.png",
    },
    {
      name: "Coffee Latte",
      category: "Latte",
      rating: 4.7,
      reviews: 250,
      price: 3.0,
      description: "Strong ",
      image: "/hero/Rectangle 1461-3.png",
    },
    {
      name: "Hazelnut Latte",
      category: "Latte",
      rating: 4.7,
      reviews: 250,
      price: 3.0,
      description: "Strong ",
      image: "/hero/Rectangle 1461.png",
    },
  ];

  const filteredCoffees = coffees.filter((coffee) => coffee.category === selected);
  const categories = ["Latte", "Robusta", "Arabica"];

  return (
    <div className="mt-10 flex flex-col items-center font-jakarta">
      {/* ⬇️ Tombol Pilih Kategori yang diubah */}
      <Tabs value={selected} onValueChange={setSelected} className="w-full flex justify-center mt-25">
        <TabsList className="bg-gray-100 p-3 rounded-full shadow-lg flex gap-4 w-fit mx-auto px-30 py-10">
          {categories.map((category) => (
            <TabsTrigger
              key={category}
              value={category}
              className={`px-8 py-4 rounded-full text-lg font-semibold transition-all flex items-center gap-2 ${
                selected === category ? "bg-[#5B221B] text-white shadow-lg scale-105" : "text-gray-700"
              }`}
            >
              <Coffee size={22} /> {category}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      {/* ⬇️ Daftar Produk */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 px-4">
        {filteredCoffees.map((coffee) => (
          <Card key={coffee.name} className="p-4 bg-gray-100 rounded-lg shadow px-20">
            <CardHeader>
              <Image
                src={coffee.image}
                alt={coffee.name}
                width={500}
                height={500}
                className="rounded-lg w-full"
              />
              
            </CardHeader>
            <CardContent>
            <CardTitle className="text-lg font-bold mt-2 mb-5">{coffee.name}</CardTitle>
              <p className="text-sm text-gray-800 flex items-center gap-1 font-bold mb-1">
                <Star size={18} className="text-yellow-500" /> {coffee.rating} ({coffee.reviews} reviews)
              </p>
              <p className="text-sm text-gray-500">{coffee.description}</p>
              <p className="font-semibold mt-5 text-2xl">${coffee.price}</p>
              <Button variant="outline" className="text-[#5B221B] font-bold font-button mt-20 hover:bg-[#5B221B] hover:text-white px-10 flex items-center gap-2">
                <ShoppingCart size={20} /> Add To Cart
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
