<template>
  <div>PlayListView</div>
</template>

<script>
export default {
  data: function () {
    return {
      id: null,
    };
  },

  // 首次进入 获取路由参数  created beforeRouteEnter
  // 进入路由之前
  beforeRouteEnter(to, from, next) {
    // ...
    // console.log("beforeRouteEnter", to, this);
    // 获取不到this  因为路由进入之前 组件还没有创建

    // 使用回调函数的 vm 提替代 this
    next((vm) => {
      vm.id = to.params.id;
    });
  },
  created() {
    // console.log("PlayListView 创建");
    // console.log("created", this.$route);
    // this.id = this.$route.params.id;
    this.timer = setInterval(() => {
      console.log(`${this.id} now is ${Date.now()}`);
    }, 1000);
  },

  // 路由更新 获取路由参数  watch beforeRouteUpdate

  // 路由更新【参数变化】之前
  beforeRouteUpdate(to, from, next) {
    // ...
    // console.log("beforeRouteUpdate", to);
    this.id = to.params.id;
    next();
  },
  // watch: {
  //   $route: function (to) {
  //     console.log(to);
  //   },
  // },
  updated() {},

  beforeRouteLeave(to, from, next) {
    // ...
    console.log("beforeRouteLeave");
    clearInterval(this.timer);

    next();
  },

  // destroyed() {
  //   console.log("PlayListView 销毁");

  //   clearInterval(this.timer);
  // },
};
</script>

<style lang="scss" scoped>
</style>