import { configureStore } from "@reduxjs/toolkit";
import shelfSlice from "./shelfSlice.js";
import homeSlice from "./homeSlice.js";

const store = configureStore({
  reducer: {
    shelf: shelfSlice.reducer,
    home: homeSlice.reducer,
  },
});

export default store;
