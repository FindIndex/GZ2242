<template>
  <div id="app">
    <nav v-if="$route.meta.showNav">
      <router-link to="/">推荐音乐</router-link>
      <router-link to="/hot">热歌榜</router-link>
      <router-link to="/search">搜索</router-link>
    </nav>
    <router-view @updata-song="song = $event" />

    <audio
      v-if="song"
      :src="` https://music.163.com/song/media/outer/url?id=${song?.id}.mp3`"
      controls
      autoplay
    ></audio>
  </div>
</template>

<script>
export default {
  // created: function () {
  //   console.log("App this.$route", this.$route);
  // },
  data: function () {
    return {
      song: null,
    };
  },
};
</script>

<style lang="less" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  display: flex;
  justify-content: space-around;
  // border-bottom: 1rem solid blue;
  box-shadow: 0 0 2rem 0px rgb(208, 208, 208);

  a {
    color: #2c3e50;
    font-size: 15rem;
    text-decoration: none;
    height: 40rem;
    line-height: 40rem;
    padding: 0 5rem;

    &.router-link-exact-active {
      color: #dd001b;
      border-bottom: 3rem solid #dd001b;
    }
  }
}
</style>
