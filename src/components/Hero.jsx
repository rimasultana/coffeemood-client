import React from "react";
import img1 from "../../public/img/brown-coffee-droplets-fly-around-cup-chaotic-artistic-splash.jpg";

const Hero = () => {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${img1})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/70"></div>

      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <span
            key={i}
            className="absolute bg-white/20 rounded-full animate-float"
            style={{
              width: `${Math.random() * 6 + 4}px`,
              height: `${Math.random() * 6 + 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 8 + 6}s`,
            }}
          ></span>
        ))}
      </div>

      <div className="relative z-10 text-center px-4 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-extrabold text-[#FFEBCD] drop-shadow-xl animate-fadeIn">
          Welcome to CoffeeMood
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-[#F5EEDC] italic drop-shadow-md animate-fadeIn delay-200">
          Find your perfect cup, inspired by your mood ☕
        </p>
        <button className="mt-8 px-8 py-3 bg-[#6D4C41] hover:bg-[#8D6E63] text-[#FFEBCD] font-semibold rounded-full shadow-lg transition-all duration-300 animate-fadeIn delay-400">
          Explore Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
