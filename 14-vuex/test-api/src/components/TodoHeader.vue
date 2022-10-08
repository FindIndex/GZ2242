<template>
  <div>
    <input type="checkbox" />
    <input type="text" @keyup.enter="addTodo({ text })" v-model="text" />
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data: function () {
    return {
      text: "",
    };
  },

  methods: {
    ...mapMutations(["addTodo"]),
  },
};
</script>

<style lang="less" scoped>
</style>