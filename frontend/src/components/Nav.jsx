import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { asyncCurrentUser } from "../store/actions/userAction";

const Nav = () => {
  const user = useSelector((state) => state.userReducer.users);
 
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
      {user ? (
        <>
          <NavLink
            to="/admin/create-product"
            className={({ isActive }) =>
              isActive
                ? "text-blue-400 font-medium"
                : "hover:text-blue-300 transition"
            }
          >
            Create Product
          </NavLink>
        </>
      ) : (
        <>
          {" "}
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
        </>
      )}

      {/* <NavLink
        to="/register"
        className={({ isActive }) =>
          isActive
        ? "text-blue-400 font-medium"
        : "hover:text-blue-300 transition"
        }
        >
        Register
        </NavLink> */}
    </nav>
  );
};

export default Nav;
