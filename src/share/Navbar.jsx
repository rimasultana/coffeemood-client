import { useState } from "react";
import { Link } from "react-router"; 
import { Coffee } from "lucide-react"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-[#3E2723] text-[#F3E5AB] shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo Section */}
          <Link
            to="/"
            className="flex items-center gap-2 font-bold text-2xl tracking-wide"
          >
            <Coffee size={26} className="text-[#D7CCC8]" />
            <span className="hover:text-[#FFF8E1] transition-colors duration-300">
              CoffeeMood
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 font-medium">
            <Link
              to="/"
              className="hover:text-[#FFF8E1] transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              to="/recommend"
              className="hover:text-[#FFF8E1] transition-colors duration-300"
            >
              Recommend
            </Link>
            <Link
              to="/blog"
              className="hover:text-[#FFF8E1] transition-colors duration-300"
            >
              Blog
            </Link>
            <Link
              to="/favorites"
              className="hover:text-[#FFF8E1] transition-colors duration-300"
            >
              Favorites
            </Link>
            <Link
              to="/login"
              className="bg-[#6D4C41] px-4 py-1 rounded-lg hover:bg-[#8D6E63] transition-all duration-300"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="focus:outline-none text-[#F3E5AB]"
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#4E342E] px-4 py-3 space-y-2 font-medium">
          <Link to="/" onClick={toggleMenu} className="block hover:text-[#FFF8E1]">
            Home
          </Link>
          <Link to="/recommend" onClick={toggleMenu} className="block hover:text-[#FFF8E1]">
            Recommend
          </Link>
          <Link to="/blog" onClick={toggleMenu} className="block hover:text-[#FFF8E1]">
            Blog
          </Link>
          <Link to="/favorites" onClick={toggleMenu} className="block hover:text-[#FFF8E1]">
            Favorites
          </Link>
          <Link
            to="/login"
            onClick={toggleMenu}
            className="block bg-[#6D4C41] px-4 py-1 rounded-lg hover:bg-[#8D6E63] transition-all"
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
