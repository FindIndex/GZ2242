import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    msg: "hello world",
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});
export const { increment } = counterSlice.actions;
export const selectCount = (state) => state.counter.value;

export default counterSlice;
