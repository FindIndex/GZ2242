import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

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

  // 异步
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        console.log("pending...");
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        console.log(action);
        state.value += action.payload;
      });
  },
});

export const { increment, decrement, incrementWithParam } =
  counterSlice.actions;

// 异步
export const incrementAsync = createAsyncThunk(
  "counter/incrementAsync",
  async (amount) => {
    return await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(amount * 2);
      }, 5000);
    });
  }
);
export const selectCount = (state) => state.counter.value;

export default counterSlice;
