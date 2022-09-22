<template>
  <div>
    <h3>{{ playlist.id }}</h3>
    <h3>{{ playlist.name }}</h3>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      playlist: [],
    };
  },
  methods: {
    getPlayList: function (id) {
      this.axios
        .get("https://apis.netstart.cn/music/playlist/detail", {
          params: { id },
        })
        .then((res) => {
          this.playlist = res.data.playlist;
        });
    },
  },

  created: function () {
    // console.log("PlayListView this.$route", this.$route.query.id);

    this.getPlayList(this.$route.query.id);
  },
  // beforeRouteEnter(to, from, next) {
  //   console.log(to);
  //   next((vm) => {
  //     // 通过 `vm` 访问组件实例
  //     vm;
  //   });
  // },
  // 确保路由更新的 /foo?id=123 /foo?id=456  /user/123  /user/456
  beforeRouteUpdate(to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
    // console.log(to.query.id);
    this.getPlayList(to.query.id);

    next();
  },
};
</script>

<style lang="less" scoped>
</style>