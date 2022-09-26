<template>
  <div class="playlist">
    <ul class="card">
      <li
        v-for="song in songlist"
        :key="song.id"
        :style="{ color: song.id === songId ? 'red' : '' }"
        @click="$emit('update-song', song)"
      >
        {{ song.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    songlist: Array,
    songId: [Number, String],
  },
};
</script>

<style lang="less" scoped>
.playlist {
  width: 100%;
  height: 60vh;

  position: fixed;
  bottom: 60rem;
  left: 0;
  z-index: 9999;
  padding: 15rem;
  .card {
    background-color: rgba(195, 195, 195, 1);
    min-height: calc(60vh - 30rem);
    border-radius: 15rem;
    padding: 15rem;
  }
}
</style>