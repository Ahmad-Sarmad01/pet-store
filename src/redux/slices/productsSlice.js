import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const dogNames = [
  { name: "MO502 - Poodle Tiny Yellow", gender: "Male", age: 2, price: 150, image: "/dog1.png" },
  { name: "MO102 - Poodle Tiny Sepia", gender: "Female", age: 1, price: 180, image: "/dog2.png" },
  { name: "MO512 - Alaskan Malamute Grey", gender: "Male", age: 3, price: 220, image: "/dog3.png" },
  { name: "MO210 - Siberian Husky White", gender: "Female", age: 2, price: 200, image: "/dog4.png" },
  { name: "MO315 - Golden Retriever Cream", gender: "Male", age: 4, price: 250, image: "/dog5.png" },
  { name: "MO120 - Beagle Tan Spot", gender: "Female", age: 1, price: 130, image: "/dog6.png" },
  { name: "MO432 - Labrador Chocolate", gender: "Male", age: 3, price: 240, image: "/dog7.png" },
  { name: "MO211 - Shih Tzu White Brown", gender: "Female", age: 2, price: 170, image: "/dog8.png" },
  { name: "MO104 - Chihuahua Tiny Tan", gender: "Female", age: 1, price: 120, image: "/dog2.png" },
  { name: "MO512 - Pomeranian Orange", gender: "Male", age: 2, price: 180, image: "/dog3.png" },
  { name: "MO210 - French Bulldog Fawn", gender: "Female", age: 3, price: 230, image: "/dog4.png" },
  { name: "MO315 - Boston Terrier Black", gender: "Male", age: 1, price: 140, image: "/dog5.png" },
  { name: "MO120 - Miniature Schnauzer Salt", gender: "Female", age: 2, price: 150, image: "/dog6.png" },
  { name: "MO432 - Cocker Spaniel Golden", gender: "Male", age: 3, price: 210, image: "/dog7.png" },
  { name: "MO211 - Shih Tzu White", gender: "Female", age: 2, price: 170, image: "/dog8.png" },
  { name: "MO502 - Poodle Tiny Yellow", gender: "Male", age: 2, price: 150, image: "/dog1.png" },
  { name: "MO102 - Poodle Tiny Sepia", gender: "Female", age: 1, price: 180, image: "/dog2.png" },
  { name: "MO512 - Alaskan Malamute Grey", gender: "Male", age: 3, price: 220, image: "/dog3.png" },
  { name: "MO210 - Siberian Husky White", gender: "Female", age: 2, price: 200, image: "/dog4.png" },
  { name: "MO315 - Golden Retriever Cream", gender: "Male", age: 4, price: 250, image: "/dog5.png" },
  { name: "MO120 - Beagle Tan Spot", gender: "Female", age: 1, price: 130, image: "/dog6.png" },
  { name: "MO432 - Labrador Chocolate", gender: "Male", age: 3, price: 240, image: "/dog7.png" },
  { name: "MO211 - Shih Tzu White Brown", gender: "Female", age: 2, price: 170, image: "/dog8.png" },
];

export const getProducts = createAsyncThunk("products/getProducts", async () => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return dogNames;
});

const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;
