<template>
  <footer>
    <p>left {{ leftTodosCount }} items</p>
    <ul>
      <li
        v-for="f in filters"
        :key="f"
        :class="{ active: f === currentFilter }"
        @click="$emit('change-filter', f)"
      >
        {{ f }}
      </li>
    </ul>
    <button @click="$emit('clear-complated-todos')">clear</button>
  </footer>
</template>

<script>
export default {
  props: {
    filters: Array,
    leftTodosCount: Number,
    currentFilter: String,
  },
};
</script>

<style lang="less" >
.active {
  color: red;
}
</style>