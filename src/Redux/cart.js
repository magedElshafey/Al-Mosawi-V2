import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
const initialState = {
  cartItems: JSON.parse(localStorage.getItem("cart")) || [],
};
const cartSlice = createSlice({
  initialState,
  name: "cartSlice",
  reducers: {},
});
