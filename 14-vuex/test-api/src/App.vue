<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
  <van-swipe-item>1</van-swipe-item>
  <van-swipe-item>2</van-swipe-item>
  <van-swipe-item>3</van-swipe-item>
  <van-swipe-item>4</van-swipe-item>
</van-swipe>

    <TodoHeader />
    <TodoList />
    <TodoFooter />

    <van-rate class="xxx" v-model="value" color="#ff0" />

    <van-rate v-model="value" color="red" />
  </div>
</template>

<script>
// import qs from "qs";

// import HelloWorld from './components/HelloWorld.vue'
import TodoHeader from "./components/TodoHeader.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";

export default {
  name: "App",
  data: function () {
    return {
      value: 3,
    };
  },
  components: {
    // HelloWorld
    TodoHeader,
    TodoList,
    TodoFooter,
  },
  created() {
    // this.axios.post(
    //   "/twirp/comic.v1.Comic/HomeRecommend?device=h5&platform=web",
    //   {
    //     seed: 1,
    //     drag: 1,
    //     page_num: 1,
    //     platform: "h5",
    //   }
    // );
    // this.axios.post("/twirp/comic.v1.Comic/ComicDetail", {
    //   comic_id: 28133,
    // });

    // this.axios.post(
    //   "/hero/getmaintranklist",
    //   qs.stringify({
    //     refreshFeatureList: 1,
    //     position: 0,
    //     roleId: 1277867510,
    //     segment: 1,
    //   })
    // );

    this.axios.post("/wzyd/hero/getmaintranklist", {
      refreshFeatureList: 1,
      position: 0,
      roleId: 1277867510,
      segment: 1,
    });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.xxx.van-rate i.van-icon::before {
  color: #2c3e50;
}

.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
</style>
