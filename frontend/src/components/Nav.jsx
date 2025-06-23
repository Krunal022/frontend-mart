import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="flex justify-center items-center gap-8 bg-gray-800 text-white text-base p-4 shadow-md">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-blue-400 font-medium"
            : "hover:text-blue-300 transition"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/products"
        className={({ isActive }) =>
          isActive
            ? "text-blue-400 font-medium"
            : "hover:text-blue-300 transition"
        }
      >
        Products
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) =>
          isActive
            ? "text-blue-400 font-medium"
            : "hover:text-blue-300 transition"
        }
      >
        Login
      </NavLink>
      <NavLink
        to="/register"
        className={({ isActive }) =>
          isActive
            ? "text-blue-400 font-medium"
            : "hover:text-blue-300 transition"
        }
      >
        Register
      </NavLink>
    </nav>
  );
};

export default Nav;
