import { configureStore } from "@reduxjs/toolkit";
import inputSlice from "./slice/inputSlice";
import xiNgauSlice from "./slice/xiNgauSlice";
export const store = configureStore({
  reducer: {
    inputSlice,
    xiNgauSlice,
  },
});