import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = (state) => state.contacts.items;

export const selectNameFilter = (state) => state.filters.name;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (list, statusFilter) => {
    return list.filter((item) =>
      item.name.toLowerCase().includes(statusFilter.toLowerCase())
    );
  }
);
