import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  xiNgau1: 5,
  xiNgau2: 3,
  xiNgau3: 6,
  banChon: true,
  tongSoBanChoi: 0,
  tongSoBanThang: 0,
  ketQua: true,
};

const xiNgauSlice = createSlice({
  name: "xiNgau",
  initialState,
  reducers: {},
});

export const {} = xiNgauSlice.actions;

export default xiNgauSlice.reducer;
