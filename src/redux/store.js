import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/productsSlice";
import cartReducer from "./slices/cartSlice"; 
import selectedPetReducer from "./slices/selectedPetSlice";
import selectedPetReducer2 from "./slices/selectedPetSlice2";
import searchReducer from "./slices/searchSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    selectedPet: selectedPetReducer,
    selectedPet2: selectedPetReducer2,
    search: searchReducer,
  },
});
