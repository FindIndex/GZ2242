<template>
  <header>
    <input
      type="checkbox"
      :checked="isAllCheck"
      @change="$emit('toggle-all', $event.target.checked)"
    />
    <input type="text" v-model="value" @keyup.enter="addTodo" />
  </header>
</template>

<script>
export default {
  props: {
    isAllCheck: Boolean,
  },
  data: function () {
    return {
      value: "",
    };
  },
  methods: {
    addTodo: function () {
      // console.log(123);
      this.value && this.$emit("add-todo", this.value);
      this.value = "";
    },
  },
};
</script>

<style lang="less" >
</style>