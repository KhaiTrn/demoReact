import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const getAllShoesApi = createAsyncThunk(
  "shoes/getAllShoesApi",
  async (data, thunkAPI) => {
    const result = await axios({
      mothod: "GET",
      url: "https://shop.cyberlearn.vn/api/Product",
    });
    return result.data.content;
  }
);
const initialState = {
  listShoes: [],
};

const shoesSlice = createSlice({
  name: "shoes",
  initialState,
  reducers: {
    getAllShoes(state, action) {
      state.listShoes = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllShoesApi.fulfilled, (state, action) => {
      state.listShoes = action.payload;
    });
    builder.addCase(getAllShoesApi.rejected, (state, action) => {
      console.log(action.payload);
    });
  },
});

export const { getAllShoes } = shoesSlice.actions;

export default shoesSlice.reducer;
