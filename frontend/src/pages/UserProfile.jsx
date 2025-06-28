import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  asyncDeleteUser,
  asyncLogOutUser,
  asyncUpdateUser,
} from "../store/actions/userAction";
import { loaduser } from "../store/reducers/userSlice";
import { Flip, toast } from "react-toastify";

const UserProfile = () => {
  const user = useSelector((state) => state.userReducer.users);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Load user and populate form
  useEffect(() => {
    dispatch(loaduser());
  }, []);

  useEffect(() => {
    if (user) {
      reset({
        name: user.name || "",
        email: user.email || "",
        password: user.password || "",
      });
    }
  }, [user, reset]);

  const LogoutUserHandler = () => {
    dispatch(asyncLogOutUser());

    navigate("/login");
  };

  const userDeleteHandler = () => {
    if (!user?.id) {
      console.error("User ID is missing");
      return;
    }
    dispatch(asyncDeleteUser(user.id));
    toast.error("User Deleted successfully!", {
      position: "top-right",
      autoClose: 1000,
      transition: Flip,
    });
    navigate("/login");
  };

  const updateUserHandler = (data) => {
    if (!user?.id) {
      console.error("User ID is missing");
      return;
    }
    dispatch(asyncUpdateUser(user.id, data));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 p-4">
      <div className="w-full max-w-sm bg-gray-800 rounded-xl shadow-lg p-6">
        <h2 className="text-white text-2xl font-medium text-center mb-6">
          User Profile
        </h2>
        <form onSubmit={handleSubmit(updateUserHandler)} className="space-y-4">
          <div>
            <label className="text-gray-400 text-sm">Name</label>
            <input
              {...register("name", { required: "Name is required" })}
              className="w-full p-3 text-sm rounded bg-gray-700 border border-gray-600 text-white"
              placeholder="Enter name"
            />
            {errors.name && (
              <p className="text-red-400 text-xs">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="text-gray-400 text-sm">Email</label>
            <input
              {...register("email", { required: "Email is required" })}
              type="email"
              className="w-full p-3 text-sm rounded bg-gray-700 border border-gray-600 text-white"
              placeholder="Enter email"
            />
            {errors.email && (
              <p className="text-red-400 text-xs">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="text-gray-400 text-sm">Password</label>
            <input
              {...register("password", { required: "Password is required" })}
              type="password"
              className="w-full p-3 text-sm rounded bg-gray-700 border border-gray-600 text-white"
              placeholder="Enter password"
            />
            {errors.password && (
              <p className="text-red-400 text-xs">{errors.password.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-3 pt-4">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded"
            >
              Update Profile
            </button>
            <button
              onClick={userDeleteHandler}
              type="button"
              className="bg-red-500 hover:bg-red-600 text-white text-sm font-medium px-4 py-2 rounded"
            >
              Delete Profile
            </button>
            <button
              type="button"
              onClick={LogoutUserHandler}
              className="bg-gray-600 hover:bg-gray-500 text-white text-sm font-medium px-4 py-2 rounded"
            >
              Logout
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
