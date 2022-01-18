import { configureStore } from '@reduxjs/toolkit';
import colorReducer from './slices/colorSlice';
import dataReducer from './slices/dataSlice';

export const store = configureStore({
  reducer: {
    color: colorReducer,
    data: dataReducer,
  },
});
