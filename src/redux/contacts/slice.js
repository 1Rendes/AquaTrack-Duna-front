import { createSlice } from "@reduxjs/toolkit";
import {
  apiDeleteContact,
  apiGetAllContacts,
  apiPostContact,
} from "./operations";
import { logOut } from "../auth/operations";

const INITIAL_STATE = {
  items: [],
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: INITIAL_STATE,
  extraReducers: (builder) => {
    builder
      .addCase(apiGetAllContacts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(apiGetAllContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(apiGetAllContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(apiPostContact.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(apiPostContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(apiPostContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(apiDeleteContact.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(apiDeleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      })
      .addCase(apiDeleteContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.items = [];
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
