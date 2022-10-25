"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      title: "Hello uni"
    };
  },
  onLoad() {
  },
  methods: {
    clickHandler() {
      this.title = Date.now();
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.title),
    b: common_vendor.o((...args) => $options.clickHandler && $options.clickHandler(...args))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/Courses/GZ2242/16-uniapp/unitest/unitest/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
