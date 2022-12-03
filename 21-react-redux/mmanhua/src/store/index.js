import { configureStore } from "@reduxjs/toolkit";
import shelfSlice from "./shelfSlice.js";
import homeSlice from "./homeSlice.js";

import { apiSlice } from "./apiSlice.js";

const store = configureStore({
  reducer: {
    shelf: shelfSlice.reducer,
    home: homeSlice.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
