import { combineReducers } from 'redux';

import { contactsReducer } from './contactSlice';
import { filterReducer } from './filterSlice';

import { configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
