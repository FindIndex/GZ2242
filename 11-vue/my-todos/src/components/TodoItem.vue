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
    <!-- 错误写法 不能直接修改props -->
    <!-- <input
      v-if="editing"
      type="text"
      v-model="value"
      @keyup.esc="editing = false"
      @keyup.enter="x.text = value"
    /> -->

    <input
      v-if="editing"
      type="text"
      v-model="value"
      @keyup.esc="editing = false"
      @keyup.enter="
        $emit('update-todo', { id: todo.id, text: value });
        editing = false;
      "
    />
    <span
      v-else
      @dblclick="
        editing = true;
        value = todo.text;
      "
      >{{ todo.text }}</span
    >
    <i @click="$emit('delete-todo', todo.id)"> X</i>
  </li>
</template>

<script>
export default {
  props: {
    todo: Object,
  },
  data: function () {
    return {
      editing: false,
      value: this.todo.text,
    };
  },

  // 错误写法
  // created() {
  //   this.x = this.todo;
  // },
};
</script>

<style lang="less" >
</style>