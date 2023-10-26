import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLogin: JSON.parse(localStorage.getItem("isLogin")) || false,
  user: JSON.parse(localStorage.getItem("userId")) || null,
  name: JSON.parse(localStorage.getItem("userName")) || "",
  profilePhoto: JSON.parse(localStorage.getItem("pp")) || null,
};
const authSlice = createSlice({
  initialState,
  name: "authSlice",
  reducers: {
    login: (state, action) => {
      state.isLogin = true;
      localStorage.setItem("isLogin", JSON.stringify(state.isLogin));
    },
    logout: (state) => {
      state.isLogin = false;
      localStorage.setItem("isLogin", JSON.stringify(state.isLogin));
    },
    gitName: (state, action) => {
      state.name = action.payload;
      localStorage.setItem("userName", JSON.stringify(state.name));
    },
    gitPp: (state, action) => {
      state.profilePhoto = action.payload;
      localStorage.setItem("pp", JSON.stringify(state.profilePhoto));
    },
    removePip: (state) => {
      state.profilePhoto = null;
      localStorage.removeItem("pp");
    },
    removeName: (state) => {
      state.name = null;
      localStorage.removeItem("userName");
    },
    gitUserId: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("userId", action.payload);
    },
    removeUserId: (state) => {
      state.user = null;
      localStorage.removeItem("userId");
    },
  },
});
export const {
  login,
  logout,
  gitName,
  gitPp,
  removePip,
  removeName,
  gitUserId,
  removeUserId,
} = authSlice.actions;
export default authSlice.reducer;
