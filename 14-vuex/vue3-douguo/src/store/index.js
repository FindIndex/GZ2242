import { createStore } from "vuex";

export default createStore({
  state: {
    count: 0,
    recipeFav: JSON.parse(window.localStorage.getItem("recipeFav")) || [],
    noteFav: JSON.parse(window.localStorage.getItem("noteFav")) || [],
  },
  getters: {},
  mutations: {
    addRecipeFav(state, { recipe }) {
      state.recipeFav = [...state.recipeFav, recipe];
    },
    removeRecipeFav(state, { recipeId }) {
      state.recipeFav = state.recipeFav.filter((o) => o.id !== recipeId);
    },

    addNoteFav(state, { note }) {
      state.noteFav = [...state.noteFav, note];
    },
    removeNoteFav(state, { noteId }) {
      state.noteFav = state.noteFav.filter((o) => o.id !== noteId);
    },
  },
  actions: {},
  modules: {},
});
