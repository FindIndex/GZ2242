<template>
  <li>
    <input
      type="checkbox"
      :checked="todo.finish"
      @change="
        $emit('toggle-todo-list-item', {
          id: todo.id,
          finish: $event.target.checked,
        })
      "
      
    />
    <!-- $event.target.checked  $event 是在原生事件里面 指向DOM事件对象 -->
    <!-- <input type="checkbox" v-model="todo.finish" /> -->
    <span>{{ todo.text }}</span>
    <i> X</i>
  </li>
</template>

<script>
export default {
  props: {
    todo: Object,
  },
};
</script>

<style lang="less" >
</style>