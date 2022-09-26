<template>
  <div class="hot">
    <!-- <h1>This is an about page</h1> -->
    <div class="hotop">
      <div class="hotInfo">
        <div class="hotLogo"></div>
        <div class="updateTime">更新时间: {{ updateTime }}</div>
      </div>
    </div>
    <ul>
      <HotSong
        v-for="(hotsong, index) in hotsongs"
        :key="hotsong.id"
        :hotsong="hotsong"
        :index="index"
      ></HotSong>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import HotSong from "@/components/HotSong.vue";

export default {
  components: {
    HotSong,
  },
  data() {
    return {
      // personalizeds: [],
      // newsongs: [],
      hotsongs: [],
      updateTime:
        String(new Date().getMonth() + 1).padStart(2, "0") +
        "月" +
        String(new Date().getDate()).padStart(2, "0") +
        "日",
    };
  },
  created: function () {
    this.axios
      .get("https://apis.netstart.cn/music/playlist/detail?id=3778678")
      .then((res) => {
        this.hotsongs = res.data.playlist.tracks.slice(0, 20);
      });

    this.axios.get("/test.json?xx=789").then((res) => {
      console.log(res);
    });
  },
};
</script>

<style lang="less" scoped>
.hot {
  .hotop {
    position: relative;
    padding-top: 38.9%;
    overflow: hidden;
    background: url(//s3.music.126.net/mobile-new/img/hot_music_bg_2x.jpg?f01a252…=)
      no-repeat;
    background-size: contain;
    &::after {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
      background-color: rgba(0, 0, 0, 0.2);
    }
    .hotInfo {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      z-index: 2;
      padding-left: 20rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .hotLogo {
        background: url(//s3.music.126.net/mobile-new/img/index_icon_2x.png?5207a28…=)
          no-repeat;
        background-size: 166px 97px;
        width: 142rem;
        height: 67rem;
        background-position: -24px -30px;
      }
      .updateTime {
        margin-top: 10rem;
        color: hsla(0, 0%, 100%, 0.8);
        font-size: 12rem;
      }
    }
  }
}
</style>
