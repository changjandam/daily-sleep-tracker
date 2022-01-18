import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
  colorMode: 'light',
};

const colorSlice = createSlice({
  name: 'color',
  initialState,
  reducers: {
    change: (state) => {
      state.colorMode = current(state).colorMode === 'light' ? 'dark' : 'light';
    },
  },
});

export const { change } = colorSlice.actions;

export default colorSlice.reducer;
