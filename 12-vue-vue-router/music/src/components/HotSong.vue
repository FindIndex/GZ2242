<template>
  <li class="hotsong-item">
    <div class="hotsong-index">{{ hotIndex }}</div>
    <div class="hotsong-title">{{ hotsong.name }}</div>
    <div class="hotsong-info">
      <i class="hotsong-sq" v-if="hotsong.sq"></i>
      {{ hotsong.ar[0].name }} - {{ hotsong.al.name }}
    </div>
    <div class="hotsong-play"></div>
  </li>
</template>

<script>
export default {
  props: {
    hotsong: Object,
    index: Number,
  },
  computed: {
    hotIndex: function () {
      return String(this.index + 1).padStart(2, "0");
    },
  },
};
</script>

<style lang="less" scoped>
li.hotsong-item {
  // padding-left: 10rem;
  //   padding: 6rem 10rem;
  padding: 6rem 10rem 6em 40rem;
  position: relative;

  .hotsong-index {
    position: absolute;
    font-size: 17rem;
    left: 10rem;
    top: 50%;
    transform: translateY(-50%);
    color: #999999;
  }
  &:nth-child(1),
  &:nth-child(2),
  &:nth-child(3) {
    .hotsong-index {
      color: #df3436;
    }
  }
  .hotsong-title {
    font-size: 17rem;
    color: #333;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .hotsong-info {
    font-size: 12rem;
    color: #888888;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    i.hotsong-sq {
      display: inline-block;
      width: 12rem;
      height: 8rem;
      margin-right: 4rem;
      background-image: url("https://s3.music.126.net/mobile-new/img/index_icon_2x.png?5207a28c3767992ca4bb6d4887c74880=");
      background-size: 166px 97px;
    }
  }
  .hotsong-play {
    background-image: url("https://s3.music.126.net/mobile-new/img/index_icon_2x.png?5207a28c3767992ca4bb6d4887c74880=");
    background-position: -24px 0;
    background-size: 166px 97px;
    width: 22rem;
    height: 22rem;
    position: absolute;
    right: 10rem;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>