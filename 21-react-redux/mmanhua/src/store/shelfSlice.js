import { createSlice } from "@reduxjs/toolkit";

const shelfSlice = createSlice({
  name: "shelf",
  initialState: {
    books:
      JSON.parse(window.localStorage.getItem("shelfBooks")) || [],
  },
  reducers: {
    add: (state, action) => {
      console.log(state, action);
      state.books = [...state.books, action.payload];
    },
    remove: (state, action) => {
      // state.books;
      state.books = state.books.filter(
        (o) => o.id !== action.payload
      );
    },
  },
});
export const { add, remove } = shelfSlice.actions;
export const selectBooks = (state) => state.shelf.books;

export default shelfSlice;
