import React from "react";
import { useForm } from "react-hook-form";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { asyncRegisterUser } from "../store/actions/userAction";
const Register = () => {
  const { register, reset, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const RegisterHandler = (user) => {
    user.id = nanoid();
    user.isAdmin = false;
    dispatch(asyncRegisterUser(user));
    console.log(user);
    navigate("/login");
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 p-4">
      <div className="w-full max-w-xs bg-gray-800 rounded-xl shadow-md p-6">
        <h2 className="text-white text-xl font-medium text-center mb-4">
          Register
        </h2>
        <form
          onSubmit={handleSubmit(RegisterHandler)}
          className="flex flex-col gap-3"
        >
          <input
            {...register("name")}
            type="text"
            placeholder="Name"
            className="text-sm p-2 rounded bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
          />
          <input
            {...register("email")}
            type="email"
            placeholder="Email"
            className="text-sm p-2 rounded bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
          />
          <input
            {...register("password")}
            type="password"
            placeholder="Password"
            className="text-sm p-2 rounded bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
          />

          <button
            type="submit"
            className="text-sm font-medium bg-blue-500 hover:bg-blue-600 text-white rounded p-2 transition"
          >
            Register
          </button>
        </form>
        <p className="text-center text-xs text-gray-400 mt-4">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-400 cursor-pointer hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
