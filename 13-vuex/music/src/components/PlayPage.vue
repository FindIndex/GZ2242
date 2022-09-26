<template>
  <div class="playpage">
    <header>
      <h3>{{ song?.name }}</h3>
      <span @click="$parent.showPlayPage = false">X</span>
    </header>
    <section>
      <PlayDisc v-if="showDisc" @click.native="showDisc = false" />
      <PlayLyric v-else @click.native="showDisc = true" />
    </section>
    <footer>
      <input
        type="range"
        name=""
        id=""
        min="0"
        :max="duration"
        :value="tmpCurrentTime"
        @input="draging = true"
        @change="
          draging = false;
          $emit('update-time', $event.target.value);
        "
      />
      <br />
      <button @click="$emit('change-model')">{{ model }}</button>
      <button @click="$emit('change-song', 'prev')">上</button>
      <button>▶</button>
      <button @click="$emit('change-song', 'next')">下</button>
      <button>收</button>
      <button @click="$emit('toggle-showPlayList')">列</button>
    </footer>
  </div>
</template>

<script>
import PlayDisc from "@/components/PlayDisc.vue";
import PlayLyric from "@/components/PlayLyric.vue";
export default {
  components: {
    PlayDisc,
    PlayLyric,
  },
  props: {
    song: Object,
    playing: Boolean,
    duration: Number,
    currentTime: Number,
    model: String,
  },
  data: function () {
    return {
      showDisc: true,
      draging: false,
      tmpCurrentTime: this.currentTime,
    };
  },

  watch: {
    currentTime: function (n) {
      if (!this.draging) {
        this.tmpCurrentTime = n;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.playpage {
  width: 100%;
  height: 50vh;
  background-color: rgba(175, 175, 175, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  header {
    display: flex;
  }
  section {
    flex-grow: 1;
  }
  footer {
  }
}
</style>