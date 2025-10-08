import React from "react";
import { Coffee } from "lucide-react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#FFF8E1] to-[#FFE5B4] overflow-hidden px-4">
      {/* Background Floating Circles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <span
            key={i}
            className="absolute bg-white/20 rounded-full animate-float"
            style={{
              width: `${Math.random() * 25 + 15}px`,
              height: `${Math.random() * 25 + 15}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 12 + 6}s`,
            }}
          />
        ))}
      </div>

      {/* Card */}
      <div className="relative bg-white/80 backdrop-blur-xl p-12 rounded-3xl shadow-2xl border border-[#D7CCC8]/40 w-full max-w-md text-center hover:scale-105 transition-transform duration-500 z-10">
        {/* 404 */}
        <h1 className="text-6xl md:text-7xl font-extrabold text-[#6D4C41] mb-6 drop-shadow-md animate-pulse-slow">
          404
        </h1>

        {/* Coffee Icon */}
        <div className="flex justify-center mb-6 animate-float-slow">
          <Coffee size={52} className="text-[#6D4C41]" />
        </div>

        {/* Text */}
        <h2 className="text-2xl md:text-3xl font-semibold text-[#4E342E] mb-3">
          Oops! Page Not Found
        </h2>
        <p className="text-[#3E2723]/80 mb-6 text-sm md:text-base">
          The page you are looking for doesn’t exist or has been moved.
        </p>

        {/* Button */}
        <Link
          to="/"
          className="inline-block px-8 py-3 bg-[#6D4C41] hover:bg-[#8D6E63] text-[#FFEBCD] font-bold rounded-full shadow-lg transition-all duration-300 hover:scale-105"
        >
          Go Back Home
        </Link>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }

        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }
        .animate-float-slow {
          animation: float-slow 3s ease-in-out infinite;
        }

        @keyframes pulse-slow {
          0%,
          100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.9;
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default NotFound;
