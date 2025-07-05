import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { asyncCurrentUser, asyncLogOutUser } from "../store/actions/userAction";
import { loaduser } from "../store/reducers/userSlice";

const Nav = () => {
  const user = useSelector((state) => state.userReducer.users);

  return (
    <nav className="flex justify-center items-center gap-8 bg-gray-800 text-white text-base p-4 shadow-md">
      // Using NavLink to highlight the active link // to / is the home page
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
      // to /products is the products page // It will show all the products
      available
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
      // to /CreateProduct is the create product page It will allow admin to
      create a new product to /admin/create-product is the admin page
      {user && user?.isAdmin && (
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
      )}
      // to /cart-product is the cart page It will show all the products added
      to the cart
      {user && (
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
      )}
      // to /admin/user-profile is the user profile page It will allow user to
      view and update their profile if they are logged in // to /login is the
      login page It will allow user to login if they are not logged in
      {user ? (
        <NavLink
          to="/admin/user-profile"
          className={({ isActive }) =>
            isActive
              ? "text-blue-400 font-medium"
              : "hover:text-blue-300 transition"
          }
        >
          Settings
        </NavLink>
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
