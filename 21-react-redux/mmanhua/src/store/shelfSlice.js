import { createSlice } from "@reduxjs/toolkit";

const shelfSlice = createSlice({
  name: "shelf",
  initialState: {
    books: [],
  },
  reducers: {
    add: (state) => {
      state.books;
    },
    remove: (state) => {
      state.books;
    },
  },
});
export const { add, remove } = shelfSlice.actions;
export const selectBooks = (state) => state.shelf.books;

export default shelfSlice;
