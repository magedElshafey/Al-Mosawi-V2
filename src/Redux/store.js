import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth";
import cartSlice from "./cart";
import afilator from "./afilator";
const store = configureStore({
  reducer: {
    authSlice,
    cartSlice,
    afilator,
  },
});
export default store;
