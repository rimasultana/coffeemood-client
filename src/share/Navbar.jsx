import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Coffee } from "lucide-react";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useAuth();
  console.log(user);
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

            {user ? (
              <div className="flex items-center gap-2">
                {user.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt={user.displayName || "User"}
                    className="w-8 h-8 rounded-full object-cover border-2 border-amber-500"
                  />
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-[#FFD180] rounded-full border-2 border-amber-500"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 2a5 5 0 1 1 -5 5l.005 -.217a5 5 0 0 1 4.995 -4.783z" />
                    <path d="M14 14a5 5 0 0 1 5 5v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1a5 5 0 0 1 5 -5h4z" />
                  </svg>
                )}
                <button
                  onClick={() =>
                    logOut().then(() => toast.success("Logout successfully!"))
                  }
                  className="bg-gradient-to-r from-[#6D4C41] to-[#8D6E63] px-4 py-1 rounded-full font-semibold shadow-md hover:opacity-90 transition-all duration-300"
                >
                  LogOut
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="bg-gradient-to-r from-[#6D4C41] to-[#8D6E63] px-4 py-1 rounded-full font-semibold shadow-md hover:opacity-90 transition-all duration-300"
              >
                Login
              </Link>
            )}
          </div>

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
