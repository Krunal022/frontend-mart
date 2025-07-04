import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: null,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    loaduser: (state, action) => {
      state.users = action.payload;
    },
    removeUser: (state, action) => {
      state.users = null;
    },
  },
});

export default userSlice.reducer;
export const { loaduser, removeUser } = userSlice.actions;
