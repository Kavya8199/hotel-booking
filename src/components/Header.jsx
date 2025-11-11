

import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div
            className="flex items-center cursor-pointer"
            onClick={() => navigate("/")}
          >
           <h1 className="font-poppins font-medium text-4xl text-dark">
          <span className="text-secondary">Deccan</span>Stay.
        </h1>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => navigate("/")}
              className="text-primary font-normal hover:text-secondary transition"
            >
              Home
            </button>

            <button
              onClick={() => navigate("/hotels")}
              className="text-secondary font-normal hover:text-primary transition"
            >
              Hotels
            </button>

            <button
              onClick={() => navigate("/user-dashboard")}
              className="text-secondary font-normal hover:text-primary transition"
            >
              Dashboard
            </button>

            <button
              onClick={() => navigate("/about")}
              className="text-secondary font-normal hover:text-primary transition"
            >
              About
            </button>

            <button
              onClick={() => navigate("/contact")}
              className="text-secondary font-normal hover:text-primary transition"
            >
              Contact
            </button>
          </nav>

          {/* Login Button */}
<button
  onClick={() => navigate("/login")}
  className="bg-blue-700 text-white px-6 py-2 rounded-lg font-medium shadow-lg transition-colors"
>
  Login
</button>
        </div>
      </div>
    </header>
  );
};

export default Header;

