import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Coffee } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Recommend", path: "/recommend" },
    { name: "Blog", path: "/blog" },
    { name: "Favorites", path: "/favorites" },
  ];

  return (
    <nav className="backdrop-blur-xl bg-[#3E2723] text-[#F3E5AB] sticky w-full top-0 z-50 shadow-[0_3px_15px_rgba(62,39,35,0.3)] transition-all duration-500">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 font-extrabold text-2xl tracking-wide group"
          >
            <Coffee
              size={26}
              className="text-[#D7CCC8] group-hover:rotate-12 transition-transform duration-300"
            />
            <span className="hover:text-[#FFF8E1] transition-colors duration-300">
              CoffeeMood
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 font-medium items-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-3 py-1 transition-all duration-300
                  ${
                    location.pathname === link.path
                      ? "text-[#FFD180] border-b-2 border-[#FFD180] rounded-2xl px-4"
                      : "border-b-2 rounded-2xl px-4 border-transparent hover:border-[#FFD180] hover:text-[#FFF8E1]"
                  }
                `}
              >
                {link.name}
              </Link>
            ))}

            <Link
              to="/login"
              className="bg-gradient-to-r from-[#6D4C41] to-[#8D6E63] px-4 py-1 rounded-full hover:opacity-90 font-semibold shadow-md transition-all duration-300"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="focus:outline-none text-[#F3E5AB] hover:text-[#FFF8E1] transition-all duration-300"
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-[#4E342E]/95 backdrop-blur-xl border-t border-[#D7CCC8]/20 
        transition-all duration-500 overflow-hidden ${
          isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-4 space-y-3 font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={toggleMenu}
              className={`block py-1 border-b-2 transition-all duration-300 ${
                location.pathname === link.path
                  ? "text-[#FFD180] border-[#FFD180] rounded-2xl px-4"
                  : "border-transparent rounded-2xl px-4 hover:border-[#FFD180] hover:text-[#FFF8E1]"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/login"
            onClick={toggleMenu}
            className="block bg-gradient-to-r from-[#6D4C41] to-[#8D6E63] px-6 py-4  rounded-full text-center text-[#FFEBCD] font-semibold hover:opacity-90 transition-all duration-300 shadow-md"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
