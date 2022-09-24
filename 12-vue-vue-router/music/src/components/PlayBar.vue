<template>
  <div class="playbar">
    <img
      :class="{ playing: playing }"
      :src="song ? `${song.picUrl}?imageView=1&type=webp&thumbnail=30x0` : ''"
      alt=""
    />
    <h3>{{ song?.name }}</h3>
    <p>{{ currentTime }} / {{ duration }}</p>
    <button v-if="!playing" @click.stop="$emit('song-play')">▶</button>
    <button v-else @click.stop="$emit('song-pause')">⏸</button>
  </div>
</template>

<script>
export default {
  props: {
    song: Object,
    playing: Boolean,
    duration: Number,
    currentTime: Number,
  },
};
</script>

<style lang="less" scoped>
@keyframes rotate {
  form {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.playbar {
  width: 100%;
  height: 60rem;
  background-color: lightblue;
  position: fixed;
  bottom: 0;
  left: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10rem;

  img {
    border-radius: 50%;
    animation: rotate 8s linear infinite;
    animation-play-state: paused;
    &.playing {
      animation-play-state: running;
    }
  }
}
</style>