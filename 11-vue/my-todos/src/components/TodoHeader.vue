<template>
  <header>
    <input type="checkbox" />
    <input type="text" v-model="value" @keyup.enter="addTodo" />
  </header>
</template>

<script>
export default {
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