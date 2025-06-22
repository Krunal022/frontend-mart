import axios from "../api/axiosconfig"; // Adjust the path as necessary
import { loaduser } from "./userSlice";

export const asyncgetusers = () => async (dispatch, getState) => {
  try {
    console.log("Current State:", getState());
    const response = await axios.get("/users");
    dispatch(loaduser(response.data));
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};
