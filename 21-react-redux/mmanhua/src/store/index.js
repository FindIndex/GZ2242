import { configureStore } from "@reduxjs/toolkit";
import shelfSlice from "./shelfSlice.js";

const store = configureStore({
  reducer: {
    shelf: shelfSlice.reducer,
  },
});

export default store;
