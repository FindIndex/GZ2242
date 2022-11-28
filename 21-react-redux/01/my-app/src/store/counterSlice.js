import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    msg: "hello",
  },
  reducers: {
    incremented: (state) => {
      state.value += 1;
    },
    decremented: (state) => {
      state.value -= 1;
    },
  },
});

export const selectCount = (state) => state.counter.value;
export const selectMsg = (state) => state.counter.msg;

export default counterSlice.reducer;
