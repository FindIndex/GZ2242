"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      allDate: [],
      daoshu: 0
    };
  },
  onLoad() {
    console.log("test \u52A0\u8F7D onLoad");
  },
  created() {
    console.log("test \u521B\u5EFA created");
    common_vendor.index.request({
      url: "https://apis.netstart.cn/zhihudaily/stories/latest",
      success: (res) => {
        this.allDate = [...this.allDate, res.data];
      }
    });
  },
  onReady() {
    console.log("test \u6E32\u67D3 onReady");
  },
  mounted() {
    console.log("test \u6302\u8F7D mounted");
  },
  methods: {
    navToDetail(id) {
      common_vendor.index.navigateTo({
        url: "/pages/detail/detail?id=" + id
      });
    }
  },
  onReachBottom() {
    console.log("\u89E6\u5E95");
    let d = new Date();
    d.setDate(d.getDate() - this.daoshu);
    common_vendor.index.showLoading({
      title: "\u52A0\u8F7D\u4E2D"
    });
    common_vendor.index.request({
      url: `https://apis.netstart.cn/zhihudaily/stories/before/${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, "0")}${String(d.getDate()).padStart(2, "0")}`,
      success: (res) => {
        this.allDate = [...this.allDate, res.data];
        this.daoshu++;
      },
      complete() {
        common_vendor.index.hideLoading();
      }
    });
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.allDate.length
  }, $data.allDate.length ? {
    b: common_vendor.f($data.allDate[0].top_stories, (banner, k0, i0) => {
      return {
        a: banner.image,
        b: banner.id
      };
    }),
    c: common_vendor.f($data.allDate, (someDay, index, i0) => {
      return {
        a: common_vendor.f(someDay.stories, (item, k1, i1) => {
          return {
            a: item.images[0],
            b: common_vendor.t(item.title),
            c: item.id,
            d: common_vendor.o(($event) => $options.navToDetail(item.id), item.id)
          };
        }),
        b: index
      };
    })
  } : {});
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/Courses/GZ2242/16-uniapp/unitest/unitest/pages/test/test.vue"]]);
wx.createPage(MiniProgramPage);
