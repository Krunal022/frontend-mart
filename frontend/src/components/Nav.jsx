import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { asyncCurrentUser, asyncLogOutUser } from "../store/actions/userAction";

const Nav = () => {
  const user = useSelector((state) => state.userReducer.users);
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(asyncLogOutUser());
    navigate("/");
  };
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
        to="/cart-product"
        className={({ isActive }) =>
          isActive
            ? "text-blue-400 font-medium"
            : "hover:text-blue-300 transition"
        }
      >
        Carts
      </NavLink>
      {user?.isAdmin ? (
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
      <button
        onClick={logoutHandler}
        className={`px-4 py-2 rounded text-sm text-black font-medium bg-red-400    transition"
          }`}
      >
        Log Out
      </button>

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
