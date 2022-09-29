<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <TodoHeader />
    <TodoList />
    <TodoFooter />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import TodoHeader from "./components/TodoHeader.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";

export default {
  name: "App",
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
</style>
