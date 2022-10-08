import Vue from "vue";

// console.log(Vue.axios);

const getHomeNewlist = ({ new1, readarticles } = {}) =>
  Vue.axios.get("https://apis.netstart.cn/qiushi/article/newlist", {
    params: {
      new: new1,
      ...(readarticles ? { readarticles } : null),
    },
  });

export { getHomeNewlist };
