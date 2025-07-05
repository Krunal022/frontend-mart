import { data, useNavigate } from "react-router-dom";
import axios from "../../api/axiosconfig";
import { loaduser, removeUser } from "../reducers/userSlice";
import { Flip, toast } from "react-toastify";

export const asyncCurrentUser = (user) => async (dispatch, getState) => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) dispatch(loaduser(user));
    else console.log("No user found in localStorage");
  } catch (error) {
    console.log(error);
  }
};

export const asyncLogOutUser = (user) => async (dispatch, getState) => {
  try {
    localStorage.removeItem("user");
    dispatch(removeUser());
    toast.error("Logged out successfully!", {
      position: "top-right",
      autoClose: 1000,
      transition: Flip,
    });
  } catch (error) {
    console.log(error);
  }
};
export const asyncUpdateUser = (id, user) => async (dispatch, getState) => {
  try {
    const { data } = await axios.patch(`/users/${id}`, user);
    localStorage.setItem("user", JSON.stringify(data));
    dispatch(asyncCurrentUser());
    toast.success("User Updated!", {
      position: "top-right",
      autoClose: 1000,
      transition: Flip,
    });
  } catch (error) {
    console.log(error);
  }
};

export const asyncLoginUser = (user) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(
      `/users?email=${user.email}&password=${user.password}`,
      user
    );
    localStorage.setItem("user", JSON.stringify(data[0]));
    dispatch(asyncCurrentUser())
    toast.success("Logged In successfully!", {
      position: "top-right",
      autoClose: 1000,
      transition: Flip,
    });
  } catch (error) {
    console.log(error);
  }
};

export const asyncRegisterUser = (user) => async (dispatch, getState) => {
  try {
    const res = await axios.post("/users", user);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

export const asyncDeleteUser = (id) => async (dispatch, getState) => {
  try {
    await axios.delete(`/users/${id}`);
    dispatch(asyncLogOutUser());
  } catch (error) {
    console.log(error);
  }
};
