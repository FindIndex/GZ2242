import { createSlice, createSelector } from "@reduxjs/toolkit";

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

// getters 属性
export const selectShelfBooksCount = createSelector(
  [selectBooks],
  (books) => books.length
);

// getters 方法
export const selectBooksByKeyword = createSelector(
  [selectBooks, (state, keyword) => keyword],
  (books, keyword) =>
    keyword ? books.filter((o) => o.title.includes(keyword)) : []
);

export default shelfSlice;
