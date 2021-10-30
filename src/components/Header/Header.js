// Importing React
import React from "react";

// Importing modules from react rounter
import { NavLink } from "react-router-dom";

// Importing authentication module from the hook
import useAuth from "../../hooks/useAuth";

// Importing necessary icon
import { FaUser } from "react-icons/fa";

// Importing stylesheet
import "../../../src/App.css";

// Main Header Component
const Header = () => {
  //Get user data and logout function from the hook
  const { user, logOut } = useAuth();

  return (
    <div className="px-10 py-5">
      <nav className="flex flex-col lg:flex-row justify-center lg:justify-between items-center">
        <div>
          {/* Navbar Brand */}
          <NavLink to="/">
            <h1 className="brand-title font-bold text-indigo-600 text-5xl">
              Tour Fanatic
            </h1>
          </NavLink>
        </div>
        {/* General Navlink */}
        <div className="my-4 lg:m-0 flex flex-col lg:flex-row gap-2 lg:gap-10 items-center">
          <NavLink
            activeClassName="text-indigo-600"
            className="text-gray-800 font-semibold text-center text-xl lg:text-left"
            to="/home"
          >
            Home
          </NavLink>
          {/* Generating navlinks based on user */}
          {user.email ? (
            <div className="flex flex-col lg:flex-row items-center gap-10">
              <div className="flex flex-col lg:flex-row text-center gap-4 lg:gap-10 lg:text-lg">
                <NavLink
                  activeClassName="text-indigo-600"
                  className="  text-gray-800 font-semibold"
                  to="/my-packages"
                >
                  My Packages
                </NavLink>
                <NavLink
                  activeClassName="text-indigo-600"
                  className="  text-gray-800 font-semibold"
                  to="/manage-packages"
                >
                  Manage Packages
                </NavLink>
                <NavLink
                  activeClassName="text-indigo-600"
                  className="  text-gray-800 font-semibold"
                  to="/add-package"
                >
                  Add Package
                </NavLink>
              </div>
              <div className="flex items-center gap-3 flex-col lg:flex-row">
                {/* Showing user name */}
                <span className="cursor-pointer flex items-center gap-3  py-3 px-6 rounded bg-indigo-600 text-white font-semibold">
                  <FaUser /> {user.displayName}
                </span>
                <button
                  onClick={logOut}
                  className="py-3 px-6 rounded bg-indigo-600 text-white font-semibold"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            // Login
            <NavLink
              activeClassName="text-indigo-600"
              className="text-xl text-gray-800 font-semibold"
              to="/login"
            >
              Login
            </NavLink>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
