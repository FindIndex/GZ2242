import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      {
        id: 1,
        finish: true,
        text: "学习vue",
      },
      {
        id: 2,
        finish: false,
        text: "学习vueX",
      },
      {
        id: 4,
        finish: true,
        text: "学习vueRout",
      },
    ],

    filter: "All",
  },
  getters: {
    activeTodos(state) {
      return state.todos.filter((o) => !o.finish);
    },
    finishedTodos(state) {
      return state.todos.filter((o) => o.finish);
    },
  },
  mutations: {
    addTodo(state, { text }) {
      text &&
        (state.todos = [
          ...state.todos,
          {
            id: state.todos.length
              ? Math.max(state.todos.map((o) => o.id)) + 1
              : 1,
            finish: false,
            text,
          },
        ]);
    },

    toggleTodo(state, { id, finish }) {
      state.todos = state.todos.map((o) => {
        // if (o.id === id) {
        //   return { ...o, finish };
        // } else {
        //   return o;
        // }

        return o.id === id ? { ...o, finish } : o;
      });
    },
    deleteTodo(state, { id }) {
      state.todos = state.todos.filter((o) => o.id !== id);
    },

    updateFilter(state, { f }) {
      state.filter = f;
    },
  },
  actions: {},
  modules: {},
});
