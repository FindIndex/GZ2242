<template>
  <div class="index">
    <!-- <h1>首页</h1>
    <p>{{ latest }}</p> -->

    <section>
      <van-swipe class="my-swipe" :autoplay="5000" indicator-color="white">
        <van-swipe-item class="swiper-item" v-for="banner in latest.top_stories" :key="banner.id">
          <nuxt-link :to="`/story/${banner.id}`">
            <van-image width="750rem" height="750rem" :src="banner.image" :show-loading="false" />

            <h5 :style="{ backgroundColor: banner.image_hue.replace('0x', '#') }">{{ banner.title }}</h5>
          </nuxt-link>
        </van-swipe-item>
      </van-swipe>
    </section>

    <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad" :offset="50"
      :immediate-check="false">
      <section class="dailyStories" v-for="daily in dailyStories" :key="daily.date">
        <h6>{{ daily.date }}</h6>
        <ul class="stories">
          <nuxt-link v-for="story in daily.stories" :key="story.id" :to="`/story/${story.id}`">

            <li>
              <van-image width="250rem" height="250rem" :src="story.images[0]" :show-loading="false" />
              <div class="info">
                <h3>{{ story.title }}</h3>
                <h5>{{ story.hint }}</h5>
              </div>
            </li>
          </nuxt-link>
        </ul>
      </section>
    </van-list>
  </div>
</template>

<script>
import axios from '@/plugins/axios'

export default {
  // async asyncData({ isDev, route, store, env, params, query, req, res, redirect, error }) {
  //   // console.log(isDev, route, store, env, params, query, req, res, redirect, error);
  //   let { data } = await axios.get('http://httpbin.org/get')

  //   console.log(data);
  //   return {
  //     data
  //   }
  //   // return {
  //   //   name: "nick",
  //   //   age: 17
  //   // }
  // },

  async asyncData({ isDev, route, store, env, params, query, req, res, redirect, error }) {
    // console.log(isDev, route, store, env, params, query, req, res, redirect, error);
    let { data: latest } = await axios.get('stories/latest')
    // console.log(latest);
    let dailyStories = [latest]
    return { latest, dailyStories }
  },

  data: function () {
    return {
      loading: false,
      finished: false
    }
  },
  methods: {
    onLoad: async function () {
      this.loading = true;
      console.log('触底', this.dailyStories.at(-1).date);

      const { data: daily } = await axios.get('stories/before/' + this.dailyStories.at(-1).date)
      // console.log(data);
      this.dailyStories.push(daily)

      this.loading = false;
      if (this.dailyStories.length >= 5) {
        this.finished = true;
      }
    }
  }

}
</script>

<style lang="less" scoped>
.my-swipe {
  .swiper-item {
    h5 {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 750rem;
      font-size: 24rem;
      line-height: 3em;
      margin: 0;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      color: white;
      padding: 0 30rem;
    }
  }
}

.dailyStories {
  h6 {}

  .stories {
    li {
      display: flex;

      .info {
        flex: 1;
      }
    }
  }
}
</style>