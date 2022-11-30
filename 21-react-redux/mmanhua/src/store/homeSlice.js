import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getHomeRecommend } from "@/api/index.js";

const homeSlice = createSlice({
  name: "home",
  initialState: {
    homeRecommend: [],
  },
  reducers: {},
  // 异步
  extraReducers: (builder) => {
    builder
      .addCase(getHomeRecommendThunkCreator.pending, (state) => {
        console.log("pending...");
      })
      .addCase(
        getHomeRecommendThunkCreator.fulfilled,
        (state, action) => {
          // console.log(action);
          state.homeRecommend = action.payload.data.list;
        }
      );
  },
});
export const {} = homeSlice.actions;

// 异步
export const getHomeRecommendThunkCreator = createAsyncThunk(
  "home/getHomeRecommend",
  async () => {
    let { data } = await getHomeRecommend();
    return data;
  }
);

export const selectHomeRecommend = (state) =>
  state.home.homeRecommend;

export default homeSlice;
