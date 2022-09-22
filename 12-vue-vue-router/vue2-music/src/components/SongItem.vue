<template>
  <li class="song-item" @click="clickHandler">
    {{ song.name }}
  </li>
</template>

<script>
export default {
  props: {
    song: Object,
  },
  methods: {
    clickHandler: function () {
      // console.log(456);
      this.$emit("updata-song", this.song);
    },
  },
};
</script>

<style lang="less" scoped>
</style>