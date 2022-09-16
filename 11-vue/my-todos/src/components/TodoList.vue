<template>
  <ul>
    <TodoItem
      v-for="(todo, index) in todos"
      :key="index"
      :todo="todo"
      @toggle-todo-list-item="$emit('toggle-todo-app-list', $event)"
    />
    <!-- $event 自定义事件的指向  $emit 携带的参数 -->
  </ul>
</template>

<script>
import TodoItem from "@/components/TodoItem.vue";
// @固定代表 src目录 这样既不需要关心组件的目录关系

export default {
  components: {
    TodoItem,
  },
  props: {
    todos: Array,
  },
};
</script>

<style lang="less" >
</style>