import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push(action.payload);
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    removeFromCart: (state, action) => {
      const newsItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartItems = newsItems;
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    addAllProductToCart: (state, action) => {
      state.cartItems = action.payload;
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
  },
});

export const { addToCart, removeFromCart, addAllProductToCart } =
  cartSlice.actions;
export default cartSlice.reducer;
