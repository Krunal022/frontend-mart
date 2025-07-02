import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { asyncLoginUser } from "../store/actions/userAction";

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const LoginHandler = (user) => {
    dispatch(asyncLoginUser(user));
    navigate("/products");
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
          <div>
            <input
              {...register("email", { required: "Email is required" })}
              type="email"
              placeholder="Email"
              className="text-sm p-3 rounded bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-400 w-full"
            />
            {errors.email && (
              <p className="text-red-400 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <input
              {...register("password", { required: "Password is required" })}
              type="password"
              placeholder="Password"
              className="text-sm p-3 rounded bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-400 w-full"
            />
            {errors.password && (
              <p className="text-red-400 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="text-sm font-medium bg-blue-500 hover:bg-blue-600 text-white rounded p-3 transition"
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
