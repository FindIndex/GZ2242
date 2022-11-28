import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 10,
    msg: "hello world",
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementWithParam: (state, action) => {
      state.value += action.payload;
      // console.log(state, action);
    },
  },
});

export const { increment, decrement, incrementWithParam } =
  counterSlice.actions;
export const selectCount = (state) => state.counter.value;

export default counterSlice;
