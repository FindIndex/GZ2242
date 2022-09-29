<template>
  <ul>
    <TodoItem v-for="todo in currentTodos" :key="todo.id" :todo="todo" />
  </ul>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import TodoItem from "@/components/TodoItem.vue";
export default {
  components: {
    TodoItem,
  },
  computed: {
    ...mapState(["todos", "filter"]),
    ...mapGetters(["activeTodos", "finishedTodos"]),
    currentTodos: function () {
      return this.filter === "All"
        ? this.todos
        : this.filter === "Active"
        ? this.activeTodos
        : this.finishedTodos;
    },
  },
};
</script>

<style lang="less" scoped>
</style>