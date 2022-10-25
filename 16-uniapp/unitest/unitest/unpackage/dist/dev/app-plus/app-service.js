if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then((value) => promise.resolve(callback()).then(() => value), (reason) => promise.resolve(callback()).then(() => {
      throw reason;
    }));
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue) {
  "use strict";
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$3 = {
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
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
      vue.createElementVNode("image", {
        class: "logo",
        src: "/static/logo.png"
      }),
      vue.createElementVNode("view", { class: "text-area" }, [
        vue.createElementVNode("text", {
          class: "title",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.clickHandler && $options.clickHandler(...args))
        }, vue.toDisplayString($data.title), 1)
      ])
    ]);
  }
  var PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__file", "D:/Courses/GZ2242/16-uniapp/unitest/unitest/pages/index/index.vue"]]);
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  const _sfc_main$2 = {
    data() {
      return {
        allDate: [],
        daoshu: 0
      };
    },
    onLoad() {
      formatAppLog("log", "at pages/test/test.vue:31", "test \u52A0\u8F7D onLoad");
    },
    created() {
      formatAppLog("log", "at pages/test/test.vue:35", "test \u521B\u5EFA created");
      uni.request({
        url: "https://apis.netstart.cn/zhihudaily/stories/latest",
        success: (res) => {
          this.allDate = [...this.allDate, res.data];
        }
      });
    },
    onReady() {
      formatAppLog("log", "at pages/test/test.vue:45", "test \u6E32\u67D3 onReady");
    },
    mounted() {
      formatAppLog("log", "at pages/test/test.vue:48", "test \u6302\u8F7D mounted");
    },
    methods: {
      navToDetail(id) {
        uni.navigateTo({
          url: "/pages/detail/detail?id=" + id
        });
      }
    },
    onReachBottom() {
      formatAppLog("log", "at pages/test/test.vue:59", "\u89E6\u5E95");
      let d = new Date();
      d.setDate(d.getDate() - this.daoshu);
      uni.showLoading({
        title: "\u52A0\u8F7D\u4E2D"
      });
      uni.request({
        url: `https://apis.netstart.cn/zhihudaily/stories/before/${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, "0")}${String(d.getDate()).padStart(2, "0")}`,
        success: (res) => {
          this.allDate = [...this.allDate, res.data];
          this.daoshu++;
        },
        complete() {
          uni.hideLoading();
        }
      });
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return $data.allDate.length ? (vue.openBlock(), vue.createElementBlock("view", { key: 0 }, [
      vue.createElementVNode("swiper", {
        class: "swiper",
        circular: ""
      }, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.allDate[0].top_stories, (banner) => {
          return vue.openBlock(), vue.createElementBlock("swiper-item", {
            key: banner.id
          }, [
            vue.createElementVNode("view", { class: "swiper-item uni-bg-red" }, [
              vue.createElementVNode("image", {
                src: banner.image,
                mode: "widthFix"
              }, null, 8, ["src"])
            ])
          ]);
        }), 128))
      ]),
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.allDate, (someDay, index) => {
        return vue.openBlock(), vue.createElementBlock("view", { key: index }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(someDay.stories, (item) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              class: "list",
              key: item.id,
              onClick: ($event) => $options.navToDetail(item.id)
            }, [
              vue.createElementVNode("image", {
                src: item.images[0],
                mode: "widthFix"
              }, null, 8, ["src"]),
              vue.createElementVNode("view", { class: "title" }, vue.toDisplayString(item.title), 1)
            ], 8, ["onClick"]);
          }), 128))
        ]);
      }), 128))
    ])) : vue.createCommentVNode("v-if", true);
  }
  var PagesTestTest = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__file", "D:/Courses/GZ2242/16-uniapp/unitest/unitest/pages/test/test.vue"]]);
  const _sfc_main$1 = {
    data() {
      return {
        id: null,
        detail: null
      };
    },
    onLoad(options) {
      this.id = options.id;
      uni.request({
        url: `https://apis.netstart.cn/zhihudaily/story/${this.id}`,
        success: (res) => {
          this.detail = res.data.story;
        }
      });
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return $data.detail ? (vue.openBlock(), vue.createElementBlock("view", {
      key: 0,
      class: "content"
    }, [
      vue.createTextVNode(" detail-" + vue.toDisplayString($data.id) + " ", 1),
      vue.createElementVNode("view", {
        innerHTML: $data.detail.body
      }, null, 8, ["innerHTML"])
    ])) : vue.createCommentVNode("v-if", true);
  }
  var PagesDetailDetail = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "D:/Courses/GZ2242/16-uniapp/unitest/unitest/pages/detail/detail.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/test/test", PagesTestTest);
  __definePage("pages/detail/detail", PagesDetailDetail);
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:7", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:10", "App Hide");
    }
  };
  var App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "D:/Courses/GZ2242/16-uniapp/unitest/unitest/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue);
