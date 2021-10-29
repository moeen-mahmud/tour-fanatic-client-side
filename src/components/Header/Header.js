import React from "react";
import { NavLink } from "react-router-dom";
import "../../../src/App.css";
import useAuth from "../../hooks/useAuth";
const Header = () => {
  const { user } = useAuth();

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
        <div className="flex gap-10">
          <NavLink
            activeClassName="text-indigo-600"
            className="text-xl text-gray-800 font-semibold"
            to="/home"
          >
            Home
          </NavLink>
          <NavLink
            activeClassName="text-indigo-600"
            className="text-xl text-gray-800 font-semibold"
            to="/login"
          >
            Login
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Header;
