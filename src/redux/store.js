import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/productsSlice";
import cartReducer from "./slices/cartSlice"; 
import selectedPetReducer from "./slices/selectedPetSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    selectedPet: selectedPetReducer,
  },
});
