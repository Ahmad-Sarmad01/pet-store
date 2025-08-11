import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchDogs } from "@/utils/api";

export const getProducts = createAsyncThunk("products/getProducts", async () => {
  return await fetchDogs();
});

const productsSlice = createSlice({
  name: "products",
  initialState: { items: [], status: "idle" },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => { state.status = "loading"; })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(getProducts.rejected, (state) => { state.status = "failed"; });
  }
});

export default productsSlice.reducer;
