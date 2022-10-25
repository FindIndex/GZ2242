"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      id: null,
      detail: null
    };
  },
  onLoad(options) {
    this.id = options.id;
    common_vendor.index.request({
      url: `https://apis.netstart.cn/zhihudaily/story/${this.id}`,
      success: (res) => {
        this.detail = res.data.story;
      }
    });
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.detail
  }, $data.detail ? {
    b: common_vendor.t($data.id),
    c: $data.detail.body
  } : {});
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/Courses/GZ2242/16-uniapp/unitest/unitest/pages/detail/detail.vue"]]);
wx.createPage(MiniProgramPage);
