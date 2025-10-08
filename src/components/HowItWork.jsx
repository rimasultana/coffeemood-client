import React from "react";
import { Smile, Coffee, Zap, Heart } from "lucide-react";

const steps = [
  { id: 1, title: "Choose Mood", desc: "Pick your mood and find the perfect coffee.", icon: <Smile size={28} /> },
  { id: 2, title: "Pick Coffee", desc: "Explore our curated coffee suggestions.", icon: <Coffee size={28} /> },
  { id: 3, title: "Brew & Enjoy", desc: "Brew it your way and enjoy every sip.", icon: <Zap size={28} /> },
  { id: 4, title: "Relax & Repeat", desc: "Unwind and make it a daily ritual.", icon: <Heart size={28} /> },
];

const HowItWorks = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-[#FFF8E1] via-[#FFE0B2] to-[#D7CCC8] overflow-hidden">
      {/* Ambient Light Blobs */}
      <div className="absolute top-10 left-1/3 w-96 h-96 bg-[radial-gradient(circle,rgba(255,235,200,0.6)_0%,transparent_70%)] blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(109,76,65,0.25)_0%,transparent_70%)] blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#3E2723] mb-16 drop-shadow-lg">
          ☕ How It Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step, i) => (
            <div
              key={step.id}
              className="relative bg-white/60 backdrop-blur-xl rounded-3xl p-8 shadow-lg 
              hover:shadow-[0_10px_40px_rgba(0,0,0,0.15)] transition-all duration-500 
              hover:scale-105 group cursor-pointer border border-white/40"
            >
              {/* Step badge */}
              <div className="absolute -top-4 -left-4 w-11 h-11 bg-gradient-to-br from-[#6D4C41] to-[#8D6E63] 
              text-white rounded-full flex items-center justify-center font-bold shadow-md z-10">
                {i + 1}
              </div>

              {/* Icon */}
              <div className="relative w-20 h-20 mx-auto mb-5 flex items-center justify-center 
              rounded-full bg-gradient-to-tr from-[#6D4C41] to-[#8D6E63] text-white shadow-lg 
              group-hover:shadow-[0_0_25px_rgba(109,76,65,0.5)] transition-transform duration-500 
              group-hover:scale-110">
                <div className="animate-pulse-slow">{step.icon}</div>
                <div className="absolute inset-0 rounded-full border-4 border-white/20 animate-ring pointer-events-none"></div>
              </div>

              {/* Text */}
              <h3 className="text-xl font-bold text-[#3E2723] mb-2">{step.title}</h3>
              <p className="text-sm text-[#4E342E]/80 leading-relaxed">{step.desc}</p>

              {/* Glow overlay */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#FFE0B2]/50 to-[#FFF3E0]/20 blur-md"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Wave */}
      <div className="absolute bottom-0 left-0 w-full h-40 opacity-25">
        <svg viewBox="0 0 1440 320" className="w-full h-full">
          <path
            fill="#6D4C41"
            fillOpacity="0.2"
            d="M0,96L48,128C96,160,192,224,288,245.3C384,267,480,245,576,218.7C672,192,768,160,864,144C960,128,1056,128,1152,138.7C1248,149,1344,171,1392,181.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.85;
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        @keyframes ring {
          0% {
            transform: scale(1);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.3;
          }
          100% {
            transform: scale(1);
            opacity: 0.6;
          }
        }
        .animate-ring {
          animation: ring 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HowItWorks;
