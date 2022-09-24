<template>
  <div class="home">
    <h3>编辑推荐</h3>
    <ul class="card-list">
      <HomeCard
        v-for="card in personalizeds"
        :key="card.id"
        :card="card"
        @home-card-id="$emit('home-card-id-app', $event)"
      ></HomeCard>
    </ul>
    <h3>最新音乐</h3>

    <HomeSong
      :newsongs="newsongs"
      @update-song="$emit('update-song', $event)"
      :songId="songId"
      :playing="playing"
    ></HomeSong>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeCard from "@/components/HomeCard.vue";
import HomeSong from "@/components/HomeSong.vue";

export default {
  components: {
    HomeCard,
    HomeSong,
  },
  props: {
    songId: [String, Number],
    playing:Boolean
  },
  data() {
    return {
      personalizeds: [],
      newsongs: [],
    };
  },

  created: function () {
    Promise.all([
      this.axios.get("https://apis.netstart.cn/music/personalized", {
        params: {
          limit: 6,
        },
      }),
      this.axios.get("https://apis.netstart.cn/music/personalized/newsong"),
    ]).then(([p, n]) => {
      // console.log(p,n);
      this.personalizeds = p.data.result;
      this.newsongs = n.data.result;
    });
  },
};
</script>

<style lang="less">
.home {
  padding-top: 20rem;
  padding-bottom: 24rem;
  // margin-top: 80rem;
  h3 {
    border-left: 2rem solid red;
    padding-left: 9rem;
    font-size: 17rem;
    line-height: 20rem;
    margin-bottom: 14rem;
  }
  ul.card-list {
    // width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
