import { configureStore } from "@reduxjs/toolkit";
import authSlice, { gitPp } from "./auth";
import cartSlice from "./cart";
import afilator from "./afilator";
const preloadedState = {
  user: {
    profilePhoto: localStorage.getItem("userProfilePicture") || "", // Retrieve from localStorage
  },
};
const store = configureStore({
  reducer: {
    authSlice,
    cartSlice,
    afilator,
    preloadedState,
  },
});
if (preloadedState.user.profilePhoto) {
  store.dispatch(gitPp(preloadedState.user.profilePhoto));
}
export default store;
