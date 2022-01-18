import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
  data: [
    { id: 1, start: '2022-01-01T00:00', end: '2022-01-01T08:00:00' },
    { id: 2, start: '2022-01-02T00:00', end: '2022-01-02T07:00:00' },
    { id: 3, start: '2022-01-03T00:00', end: '2022-01-03T07:30:00' },
    { id: 4, start: '2022-01-04T00:00', end: '2022-01-04T09:00:00' },
    { id: 5, start: '2022-01-05T00:00', end: '2022-01-05T05:30:00' },
    { id: 6, start: '2022-01-06T00:00', end: '2022-01-06T08:30:00' },
    { id: 7, start: '2022-01-07T00:00', end: '2022-01-07T07:20:00' },
  ],
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    addData: (state, { payload }) => {
      state.data = [
        ...current(state).data,
        {
          id: state.data.lastItem.id + 1,
          start: payload.start,
          end: payload.end,
        },
      ];
    },
    deleteData: (state, { payload }) => {
      state.data = state.data.filter((data) => data.id !== payload.id);
    },
  },
});

export const { addData, deleteData } = dataSlice.actions;

export default dataSlice.reducer;
