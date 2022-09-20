<template>
  <li class="song-item">
    {{ song.name }}
  </li>
</template>

<script>
export default {
  props: {
    song: Object,
  },
};
</script>

<style lang="less" scoped>
</style>