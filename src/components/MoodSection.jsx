import React from "react";
import { Smile, Coffee, Zap, Frown, Moon } from "lucide-react";

const moods = [
  { id: 1, mood: "Tired", coffee: "Double Espresso", icon: <Zap size={28} /> },
  { id: 2, mood: "Happy", coffee: "Caramel Latte", icon: <Smile size={28} /> },
  { id: 3, mood: "Sad", coffee: "Mocha", icon: <Frown size={28} /> },
  { id: 4, mood: "Focused", coffee: "Americano", icon: <Coffee size={28} /> },
  { id: 5, mood: "Relaxed", coffee: "Cappuccino", icon: <Moon size={28} /> },
];

const MoodSection = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-[#fff5e0] via-[#ffe1c7] to-[#ffcfaa] overflow-hidden">
      {/* Soft radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,245,225,0.85)_0%,transparent_70%)] pointer-events-none"></div>

      <h2 className="relative text-4xl md:text-5xl font-extrabold text-center text-[#4E342E] mb-16 tracking-wide drop-shadow-sm">
        ☕ Find Your Coffee by Mood
      </h2>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden">
        <div className="flex gap-10 animate-marquee">
          {moods.concat(moods).map((item, index) => (
            <div
              key={index}
              className="relative group flex-shrink-0 w-60 p-6 rounded-3xl bg-white/60 backdrop-blur-xl 
              border-2 border-[#D7CCC8]/30 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer"
            >
              {/* Icon Container */}
              <div className="relative flex items-center justify-center w-20 h-20 mx-auto mb-4 rounded-full 
              bg-gradient-to-br from-[#6D4C41] to-[#8D6E63] text-white shadow-md 
              group-hover:shadow-[0_0_30px_rgba(109,76,65,0.6)] transition-all duration-500 animate-float">
                <div className="animate-pulse-slow">{item.icon}</div>

                {/* Glowing circle ring */}
                <span className="absolute inset-0 rounded-full border-4 border-[#D7CCC8]/40 animate-ring"></span>
              </div>

              <h3 className="text-xl font-semibold text-[#3E2723] text-center">{item.mood}</h3>
              <p className="text-sm text-[#5D4037]/80 text-center mt-1">{item.coffee}</p>

              {/* Glow Overlay */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#FFE0B2]/60 to-[#FFF3E0]/30 blur-md"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 25s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-6px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        @keyframes ring {
          0%, 100% {
            transform: scale(1);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.15);
            opacity: 0.4;
          }
        }
        .animate-ring {
          animation: ring 3.5s ease-in-out infinite;
        }

        @keyframes pulse-slow {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.08);
            opacity: 0.9;
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default MoodSection;
