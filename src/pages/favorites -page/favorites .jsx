import React from "react";
import { Coffee, Heart } from "lucide-react";

const favorites = [
  {
    id: 1,
    name: "Caramel Latte",
    mood: "Happy",
    image: "/img/latte-coffee-cup.jpg",
  },
  {
    id: 2,
    name: "Double Espresso",
    mood: "Tired",
    image: "/img/closeup-cup-delicious-latte-saucer.jpg",
  },
  {
    id: 3,
    name: "Mocha",
    mood: "Sad",
    image: "/img/delicious-coffee-beans-cup.jpg",
  },
];

const Favorites = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#FFF8E1] to-[#FFEBCD]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#4E342E] text-center mb-12 drop-shadow-md">
          ❤️ Your Favorites
        </h2>

        {favorites.length === 0 ? (
          <div className="text-center text-[#5D4037]/80">
            <p className="text-xl mb-4">You haven’t added any favorites yet ☕</p>
            <p>Start exploring coffees and blogs to save your favorites here!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {favorites.map((item) => (
              <div
                key={item.id}
                className="relative bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover rounded-2xl mb-4"
                />
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold text-[#3E2723]">
                    {item.name}
                  </h3>
                  <Heart size={24} className="text-[#D32F2F] hover:scale-110 transition-transform duration-300 cursor-pointer" />
                </div>
                <p className="text-sm text-[#5D4037]/80">{item.mood}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Favorites;
