import React from "react";
import { NavLink } from "react-router-dom";
import "../../../src/App.css";
import useAuth from "../../hooks/useAuth";
import { FaUser } from "react-icons/fa";
const Header = () => {
  const { user, logOut } = useAuth();

  return (
    <div className="px-10 py-5">
      <nav className="flex flex-col lg:flex-row justify-center lg:justify-between items-center">
        <div>
          <NavLink to="/">
            <h1 className="brand-title font-bold text-indigo-600 text-5xl">
              Tour Fanatic
            </h1>
          </NavLink>
        </div>
        <div className="my-4 lg:m-0 flex flex-col lg:flex-row gap-2 lg:gap-10 items-center">
          <NavLink
            activeClassName="text-indigo-600"
            className="text-gray-800 font-semibold text-center text-xl lg:text-left"
            to="/home"
          >
            Home
          </NavLink>
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
                <span className="cursor-pointer flex items-center gap-3  py-3 px-6 rounded bg-indigo-600 text-white font-semibold">
                  {/* TODO:Will try to add a user dashboard */}
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
