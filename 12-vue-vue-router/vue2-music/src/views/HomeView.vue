<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <h3>编辑推荐</h3>
    <ul class="card-list">
      <HomeCard v-for="item in personalizeds" :key="item.id" :item="item" />
    </ul>
    <hr />
    <h3>最新音乐</h3>
    <ul>
      <SongItem v-for="song in newsongs" :key="song.id" :song="song" />
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import HomeCard from "@/components/HomeCard.vue";
import SongItem from "@/components/SongItem.vue";

export default {
  // name: 'HomeView',
  components: {
    // HelloWorld,
    HomeCard,
    SongItem,
  },
  data: function () {
    return {
      personalizeds: [],
      newsongs: [],
    };
  },

  created() {
    // console.log("this.axios", this.axios === window.axios);

    // this.axios
    //   .get("https://apis.netstart.cn/music/personalized", {
    //     params: { limit: 6 },
    //   })
    //   .then((res) => {
    //     // console.log(res);
    //     this.personalizeds = res.data.result;
    //   });
    // this.axios
    //   .get("https://apis.netstart.cn/music/personalized/newsong")
    //   .then((res) => {
    //     // console.log(res);
    //     this.newsongs = res.data.result;
    //   });

    Promise.all([
      this.axios.get("https://apis.netstart.cn/music/personalized", {
        params: { limit: 6 },
      }),
      this.axios.get("https://apis.netstart.cn/music/personalized/newsong"),
    ]).then(([p, n]) => {
      this.personalizeds = p.data.result;
      this.newsongs = n.data.result;
    });
  },
};
</script>

<style lang="less">
.home {
  h3 {
    border-left: 2rem solid red;
    margin: 10rem 0;
    padding-left: 10rem;
    font-size: 14rem;
    line-height: 15rem;
  }
  ul.card-list {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
