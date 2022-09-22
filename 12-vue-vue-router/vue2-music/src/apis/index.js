import Vue from "vue";
// console.log(Vue.axios);

const getSearchHots = () =>
  Vue.axios.get("https://apis.netstart.cn/music/search/hot");

const getSearchSuggests = (keywords) =>
  Vue.axios.get("https://apis.netstart.cn/music/search/suggest", {
    params: { keywords, type: "mobile" },
  });

export { getSearchHots, getSearchSuggests };
