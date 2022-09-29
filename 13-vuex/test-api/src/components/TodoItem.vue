<template>
  <li>
    <input
      type="checkbox"
      :checked="todo.finish"
      @change="toggleTodo({ id: todo.id, finish: $event.target.checked })"
    />
    <p>{{ todo.text }}</p>
    <span @click="deleteTodo({ id: todo.id })">X</span>
  </li>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  props: ["todo"],

  methods: {
    ...mapMutations(["toggleTodo", "deleteTodo"]),
  },
};
</script>

<style  scoped>
li {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>