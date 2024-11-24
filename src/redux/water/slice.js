import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  dayWater: [],
  monthWater: [],
  isLoading: false,
  error: null,
};

const waterSlice = createSlice({
  name: "water",
  initialState: INITIAL_STATE,
  // extraReducers: (builder) => builder.addCase(),
});

export const waterReducer = waterSlice.reducer;
