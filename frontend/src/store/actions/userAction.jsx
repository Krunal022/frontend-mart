import { data, useNavigate } from "react-router-dom";
import axios from "../../api/axiosconfig";
import { loaduser, removeUser } from "../reducers/userSlice";


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
    console.log("User logged out successfully");
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
    console.log(data[0]);
    localStorage.setItem("user", JSON.stringify(data[0]));
    const navigate = useNavigate()
    navigate("/");
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
