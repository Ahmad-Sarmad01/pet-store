import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pet: null,
};

const selectedPetSlice2 = createSlice({
  name: "selectedPet2",
  initialState,
  reducers: {
    setSelectedPet2: (state, action) => {
      state.pet = action.payload;
    },
    clearSelectedPet2: (state) => {
      state.pet = null;
    },
  },
});

export const { setSelectedPet2, clearSelectedPet2 } = selectedPetSlice2.actions;
export default selectedPetSlice2.reducer;
