import Vue from "vue";
import "./plugins/axios";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

Vue.filter("imageView", function (value, size = 247) {
  if (!value) {
    return "";
  }
  return `${value}?imageView=1&type=webp&thumbnail=${size}x0`;
});

Vue.prototype.xxx = function () {
  return Math.random();
};

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
