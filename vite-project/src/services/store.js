// store.js
import { configureStore } from '@reduxjs/toolkit';
import countReducer from './countSlice';
import { apiSlice } from './apiSlice';
const store = configureStore({
  reducer: {
    count: countReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware)
});

export default store;
