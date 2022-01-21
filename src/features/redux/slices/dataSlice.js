import { createSlice, current } from '@reduxjs/toolkit';

const sleepData = [
  { start: '2022-01-01T00:00:00.000Z', end: '2022-01-01T08:00:00.000Z' },
  { start: '2022-01-02T00:00:00.000Z', end: '2022-01-02T07:00:00.000Z' },
  { start: '2022-01-03T00:00:00.000Z', end: '2022-01-03T07:30:00.000Z' },
  { start: '2022-01-04T00:00:00.000Z', end: '2022-01-04T09:00:00.000Z' },
  { start: '2022-01-05T00:00:00.000Z', end: '2022-01-05T05:30:00.000Z' },
  { start: '2022-01-06T00:00:00.000Z', end: '2022-01-06T08:30:00.000Z' },
  { start: '2022-01-07T00:00:00.000Z', end: '2022-01-07T07:20:00.000Z' },
];

const data = new Array(100).fill('').map((_, index) => ({
  id: index,
  ...sleepData[Math.floor(Math.random() * 7)],
}));

const initialState = {
  data,
  page: 0,
  pageSize: 7,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    addData: (state, { payload }) => {
      state.data = [
        ...current(state).data,
        {
          id: current(state).data.length,
          start: payload.start,
          end: payload.end,
        },
      ];
    },
    deleteData: (state, { payload }) => {
      state.data = state.data.filter((data) => data.id !== payload.id);
    },
    nextPage: (state) => {
      if (state.data.length > (state.page + 1) * state.pageSize) {
        state.page += 1;
      }
    },
    prevPage: (state) => {
      if (state.page !== 0) {
        state.page -= 1;
      }
    },
    setPageSize: (state, { payload }) => {
      state.pageSize = payload.pageSize;
      state.page = 0;
    },
  },
});

export const { addData, deleteData, nextPage, prevPage, setPageSize } =
  dataSlice.actions;

export default dataSlice.reducer;
