import { createSlice } from "@reduxjs/toolkit";

const selectedPetSlice = createSlice({
  name: "selectedPet",
  initialState: {
    pet: null,
  },
  reducers: {
    setSelectedPet: (state, action) => {
      state.pet = action.payload;
    },
    clearSelectedPet: (state) => {
      state.pet = null;
    },
  },
});

export const { setSelectedPet, clearSelectedPet } = selectedPetSlice.actions;
export default selectedPetSlice.reducer;
