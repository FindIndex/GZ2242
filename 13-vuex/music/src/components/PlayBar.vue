<template>
  <div class="playbar">
    <img
      :class="{ playing: playing }"
      :src="song ? `${song.picUrl}?imageView=1&type=webp&thumbnail=30x0` : ''"
      alt=""
    />
    <h3>{{ song?.name }}</h3>
    <p>{{ currentTime }} / {{ duration }}</p>
    <div class="xxx">
      <button v-if="!playing" @click.stop="$emit('song-play')">▶</button>
      <button v-else @click.stop="$emit('song-pause')">⏸</button>
      <canvas ref="canvas" width="50" height="50"></canvas>
    </div>
    <button @click="$emit('toggle-showPlayList')">列</button>
    <!-- <input key="aaa" type="range" :value="50"> -->
    <input key="aaa" type="text" :value="50">
  </div>
</template>

<script>
export default {

  methods: {
    handler: function () {
      console.log('xxxxxxxxxxxxxx');
    }
  },
  props: {
    song: Object,
    playing: Boolean,
    duration: Number,
    currentTime: Number,
  },

  computed: {
    persontage: function () {
      return this.currentTime / this.duration;
    },
  },

  watch: {
    persontage: function (n) {
      // console.log(n);

      var canvas = this.$refs.canvas;
      var context = canvas.getContext("2d");

      context.clearRect(0, 0, 50, 50);

      context.beginPath();
      context.arc(25, 25, 24, -0.5 * Math.PI, Math.PI * (2 * n - 0.5));
      // context.closePath();
      context.stroke();
    },
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
canvas {
  box-shadow: 0 0 3px 0 red;
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
.xxx {
  position: relative;
  button {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    // width: 10px;
    // height: 10px;
    background: transparent;
    border: none;
    outline: none;
  }
}
</style>