import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  requestSent: JSON.parse(localStorage.getItem("isAfilateReqSent")) || false,
  isAfilator: JSON.parse(localStorage.getItem("isAfilator")) || false,
  code: JSON.parse(localStorage.getItem("afilatorCode")) || "",
  afilatorId: JSON.parse(localStorage.getItem("afilatorId")) || "",
};
const afilateSlice = createSlice({
  initialState,
  name: "afilateSlice",
  reducers: {
    handleRequest: (state) => {
      state.requestSent = true;
      localStorage.setItem(
        "isAfilateReqSent",
        JSON.stringify(state.requestSent)
      );
    },
    handleAfilator: (state) => {
      state.isAfilator = true;
      localStorage.setItem("isAfilator", JSON.parse(state.isAfilator));
    },
    handleCode: (state, action) => {
      state.code = action.payload;
      localStorage.setItem("afilatorCode", JSON.stringify(state.code));
    },
    handleAfilatorId: (state, action) => {
      state.afilatorId = action.payload;
      localStorage.setItem("afilatorId", JSON.stringify(state.afilatorId));
    },
  },
});
export const { handleRequest, handleAfilator, handleCode, handleAfilatorId } =
  afilateSlice.actions;
export default afilateSlice.reducer;
