import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLogin: JSON.parse(localStorage.getItem("isLogin")) || false,
  user: JSON.parse(localStorage.getItem("userId")) || null,
  name: JSON.parse(localStorage.getItem("userName")) || "",
  profilePhoto: "",
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
      localStorage.setItem("userName", JSON.stringify(action.payload));
      state.name = action.payload;
    },
    gitPp: (state, action) => {
      state.profilePhoto = action.payload;
      localStorage.setItem("userProfilePicture", action.payload);
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
