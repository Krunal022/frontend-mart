import React from "react";
import { Link } from "react-router-dom";
import Register from "./Register";
import { useForm } from "react-hook-form";
import { asyncLoginUser } from "../store/actions/userAction";
import { useDispatch } from "react-redux";

const Login = () => {
  const { register, reset, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const LoginHandler = (user) => {
    // console.log(user);
    dispatch(asyncLoginUser(user));
    reset();
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 p-4">
      <div className="w-full max-w-xs bg-gray-800 rounded-xl shadow-md p-6">
        <h2 className="text-white text-xl font-medium text-center mb-4">
          Login
        </h2>
        <form
          onSubmit={handleSubmit(LoginHandler)}
          className="flex flex-col gap-3"
        >
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
            Login
          </button>
        </form>
        <p className="text-center text-xs text-gray-400 mt-4">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-blue-400 cursor-pointer hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
