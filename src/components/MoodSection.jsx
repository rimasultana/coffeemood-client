import React from "react";
import { Coffee, Smile, Frown, Zap, Moon } from "lucide-react";

const moods = [
  { id: 1, mood: "Tired", coffee: "Double Espresso", icon: <Zap size={28} /> },
  { id: 2, mood: "Happy", coffee: "Caramel Latte", icon: <Smile size={28} /> },
  { id: 3, mood: "Sad", coffee: "Mocha", icon: <Frown size={28} /> },
  { id: 4, mood: "Focused", coffee: "Americano", icon: <Coffee size={28} /> },
  { id: 5, mood: "Relaxed", coffee: "Cappuccino", icon: <Moon size={28} /> },
];

const MoodSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-[#FFF8E1] to-[#FFEBCD]">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#3E2723] mb-12 drop-shadow-md">
          Find Your Coffee by Mood
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {moods.map((item) => (
            <div
              key={item.id}
              className="bg-white/90 p-6 rounded-2xl shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-[#6D4C41]/20 text-[#6D4C41]">
                {item.icon}
              </div>
              <h3 className="font-semibold text-xl text-[#3E2723] mb-1">{item.mood}</h3>
              <p className="text-[#3E2723]/80 text-sm">{item.coffee}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoodSection;
