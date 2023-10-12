import { createSelector, createSlice } from '@reduxjs/toolkit';
import { selectContacts } from './contactSlice';

const selectFilter = state => state.filters;

export const filterNumbers = createSelector(
  [selectContacts, selectFilter],
  (contacts, filters) => {
    return contacts.filter(user =>
      user.name.toLowerCase().includes(filters.toLowerCase())
    );
  }
);

export const filterSlicer = createSlice({
  name: 'filters',
  initialState: '',
  reducers: {
    filterStatus(state, action) {
      return action.payload;
    },
  },
});
export const { filterStatus } = filterSlicer.actions;
export const filterReducer = filterSlicer.reducer;
