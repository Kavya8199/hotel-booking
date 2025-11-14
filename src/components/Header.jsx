import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

const Header = () => {
  const navigate = useNavigate();
  const { isLoggedIn, user, logoutUser } = useContext(AuthContext);

  return (
    <header className="bg-white border-b border-gray-200 fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          <div
            className="flex items-center cursor-pointer"
            onClick={() => navigate("/")}
          >
            <h1 className="font-poppins font-medium text-4xl text-dark">
              <span style={{ color: "#3256EB" }}>Deccan</span>
              <span className="text-dark-blue">Stay.</span>
            </h1>
          </div>

          <nav className="hidden md:flex space-x-8">
            <button onClick={() => navigate("/")}>Home</button>
            <button onClick={() => navigate("/hotels")}>Hotels</button>
            <button onClick={() => navigate("/about")}>About</button>
            <button onClick={() => navigate("/contact")}>Contact</button>
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigate("/admin-dashboard")}
              className="bg-blue-700 text-white px-6 py-2 rounded-lg"
            >
              Admin Dashboard
            </button>

            {isLoggedIn ? (
              <>
                <span className="text-gray-700 font-medium">
                  Welcome, {user?.name}
                </span>

                <button
                  onClick={logoutUser}
                  className="bg-red-600 text-white px-6 py-2 rounded-lg"
                >
                  Logout
                </button>
              </>
            ) : (
              <button
                onClick={() => navigate("/login")}
                className="bg-blue-700 text-white px-6 py-2 rounded-lg"
              >
                Login
              </button>
            )}
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
