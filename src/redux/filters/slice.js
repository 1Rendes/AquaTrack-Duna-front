import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = { name: "" };

const filtersSlice = createSlice({
  name: "filters",
  initialState: INITIAL_STATE,
  reducers: {
    setStatusFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const { setStatusFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
