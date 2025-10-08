/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Coffee, Smile, Frown, Zap, Moon, Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const moods = [
  {
    id: 1,
    mood: "Tired",
    coffee: "Double Espresso",
    desc: "A strong and bold espresso to recharge your energy and awaken your senses.",
    icon: <Zap size={26} />,
    bg: "from-[#FBE9E7] to-[#FFCCBC]",
  },
  {
    id: 2,
    mood: "Happy",
    coffee: "Caramel Latte",
    desc: "Sweet, creamy, and joyful — perfect for matching your happy vibe!",
    icon: <Smile size={26} />,
    bg: "from-[#FFF8E1] to-[#FFE082]",
  },
  {
    id: 3,
    mood: "Sad",
    coffee: "Mocha",
    desc: "A comforting mocha with rich chocolate to lift your mood.",
    icon: <Frown size={26} />,
    bg: "from-[#E1F5FE] to-[#B3E5FC]",
  },
  {
    id: 4,
    mood: "Focused",
    coffee: "Americano",
    desc: "Simple yet powerful — perfect for long working sessions and deep focus.",
    icon: <Coffee size={26} />,
    bg: "from-[#E8F5E9] to-[#C8E6C9]",
  },
  {
    id: 5,
    mood: "Relaxed",
    coffee: "Cappuccino",
    desc: "Light and frothy with a hint of comfort — for your calm moments.",
    icon: <Moon size={26} />,
    bg: "from-[#F3E5F5] to-[#E1BEE7]",
  },
];

const Recommendation = () => {
  const [selectedMood, setSelectedMood] = useState(null);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#fff3e0] to-[#ffe0b2] text-[#4E342E] px-6 py-20">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-10 text-center drop-shadow-md">
        ☕ Find Your Perfect Coffee Match
      </h2>

      {/* Mood Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {moods.map((item) => (
          <button
            key={item.id}
            onClick={() => setSelectedMood(item)}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 
            shadow-md hover:scale-105 hover:shadow-lg ${
              selectedMood?.id === item.id
                ? "bg-[#6D4C41] text-[#FFF8E1]"
                : "bg-[#FFF] text-[#4E342E]"
            }`}
          >
            {item.icon}
            {item.mood}
          </button>
        ))}
      </div>

      {/* Coffee Suggestion Card */}
      <AnimatePresence mode="wait">
        {selectedMood && (
          <motion.div
            key={selectedMood.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            className={`w-full max-w-md p-8 rounded-3xl shadow-xl bg-gradient-to-br ${selectedMood.bg} text-center relative overflow-hidden`}
          >
            <div className="absolute inset-0 bg-white/30 backdrop-blur-md rounded-3xl"></div>
            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 120 }}
                className="flex justify-center mb-4"
              >
                <div className="p-4 bg-[#6D4C41] text-white rounded-full shadow-md">
                  {selectedMood.icon}
                </div>
              </motion.div>

              <h3 className="text-2xl font-bold mb-2">{selectedMood.coffee}</h3>
              <p className="text-[#3E2723]/80 mb-6 px-2">{selectedMood.desc}</p>

              <button
                onClick={() => setSelectedMood(null)}
                className="px-6 py-2 bg-[#6D4C41] text-[#FFF8E1] rounded-full hover:bg-[#8D6E63] transition-all duration-300 shadow-md"
              >
                Try Another Mood
              </button>

              <motion.div
                whileTap={{ scale: 1.2 }}
                className="absolute top-4 right-4 text-[#6D4C41] cursor-pointer hover:text-[#4E342E] transition-all"
              >
                <Heart size={24} />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Recommendation;
