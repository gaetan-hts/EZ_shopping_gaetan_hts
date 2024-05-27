// productsSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk("fetchProducts", async () => {
  const res = await axios.get("https://fakestoreapi.com/products");
  return res.data;
});

const initialState = {
  products: [],
  loading: "idle", // 'idle' | 'loading' | 'error'
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = "loading";
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loading = "idle";
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = "error";
        state.error = action.error.message;
      });
  },
});

export const { updateProduct } = productsSlice.actions;
export default productsSlice.reducer;
