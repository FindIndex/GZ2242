<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <TodoHeader @add-todo="addTodo" />
    <TodoList :todos="todos" @toggle-todo-app-list="toggleTodo" />
    <TodoFooter />
  </div>

  <!-- 

    App
        TodoHeader
        TodoList
            TodoItem
        TodoFooter

   -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import TodoHeader from "./components/TodoHeader.vue";
import TodoList from "./components/TodoList.vue";
// import TodoItem from './components/TodoItem.vue'
import TodoFooter from "./components/TodoFooter.vue";

export default {
  name: "App",
  components: {
    // HelloWorld
    TodoHeader,
    TodoList,
    TodoFooter,
  },
  data: function () {
    return {
      //  两个以上的子组件都要用到或者修改 某个状态 ，那么就应该把这个状态放到他们公共的父级
      todos: JSON.parse(localStorage.getItem("todos")) || [],
    };
  },
  methods: {
    addTodo: function (text) {
      // console.log(text);
      this.todos = [
        ...this.todos,
        {
          id: this.todos.length
            ? Math.max(...this.todos.map((o) => o.id)) + 1
            : 1,
          text,
          finish: false,
        },
      ];
    },
    toggleTodo: function ({ id, finish }) {
      // console.log("toggleTodo");
      this.todos = this.todos.map((o) => (o.id === id ? { ...o, finish } : o));
    },
  },

  watch: {
    todos: function (newTodos) {
      localStorage.setItem("todos", JSON.stringify(newTodos));
    },
  },
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>


