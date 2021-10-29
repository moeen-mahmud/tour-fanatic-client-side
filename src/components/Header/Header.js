import React from "react";
import { NavLink } from "react-router-dom";
import "../../../src/App.css";
import useAuth from "../../hooks/useAuth";
import { FaUser } from "react-icons/fa";
const Header = () => {
  const { user, logOut } = useAuth();

  return (
    <div className="px-10 py-5">
      <nav className="flex justify-between items-center">
        <div>
          <NavLink to="/">
            <h1 className="brand-title font-bold text-indigo-600 text-5xl">
              Tour Fanatic
            </h1>
          </NavLink>
        </div>
        <div className="flex gap-10 items-center">
          <NavLink
            activeClassName="text-indigo-600"
            className="text-lg text-gray-800 font-semibold"
            to="/home"
          >
            Home
          </NavLink>
          {user.email ? (
            <div className="flex items-center gap-10">
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
              <div className="flex items-center gap-3 ">
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
