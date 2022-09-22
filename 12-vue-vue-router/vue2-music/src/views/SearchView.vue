<template>
  <div class="search">
    <hr />
    <input
      type="text"
      placeholder="搜索"
      v-model="value"
      @focus="searchRes = null"
      @keyup.enter="getSearchResult(value)"
    /><i
      v-show="value"
      @click="
        value = '';
        searchRes = null;
      "
      >X</i
    >

    <svg
      v-show="loading"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      style="margin: auto; background: #fff; display: block"
      width="200px"
      height="200px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <g transform="translate(80,50)">
        <g transform="rotate(0)">
          <circle cx="0" cy="0" r="6" fill="#ff727d" fill-opacity="1">
            <animateTransform
              attributeName="transform"
              type="scale"
              begin="-0.875s"
              values="1.5 1.5;1 1"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
            ></animateTransform>
            <animate
              attributeName="fill-opacity"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
              values="1;0"
              begin="-0.875s"
            ></animate>
          </circle>
        </g>
      </g>
      <g transform="translate(71.21320343559643,71.21320343559643)">
        <g transform="rotate(45)">
          <circle cx="0" cy="0" r="6" fill="#ff727d" fill-opacity="0.875">
            <animateTransform
              attributeName="transform"
              type="scale"
              begin="-0.75s"
              values="1.5 1.5;1 1"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
            ></animateTransform>
            <animate
              attributeName="fill-opacity"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
              values="1;0"
              begin="-0.75s"
            ></animate>
          </circle>
        </g>
      </g>
      <g transform="translate(50,80)">
        <g transform="rotate(90)">
          <circle cx="0" cy="0" r="6" fill="#ff727d" fill-opacity="0.75">
            <animateTransform
              attributeName="transform"
              type="scale"
              begin="-0.625s"
              values="1.5 1.5;1 1"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
            ></animateTransform>
            <animate
              attributeName="fill-opacity"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
              values="1;0"
              begin="-0.625s"
            ></animate>
          </circle>
        </g>
      </g>
      <g transform="translate(28.786796564403577,71.21320343559643)">
        <g transform="rotate(135)">
          <circle cx="0" cy="0" r="6" fill="#ff727d" fill-opacity="0.625">
            <animateTransform
              attributeName="transform"
              type="scale"
              begin="-0.5s"
              values="1.5 1.5;1 1"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
            ></animateTransform>
            <animate
              attributeName="fill-opacity"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
              values="1;0"
              begin="-0.5s"
            ></animate>
          </circle>
        </g>
      </g>
      <g transform="translate(20,50.00000000000001)">
        <g transform="rotate(180)">
          <circle cx="0" cy="0" r="6" fill="#ff727d" fill-opacity="0.5">
            <animateTransform
              attributeName="transform"
              type="scale"
              begin="-0.375s"
              values="1.5 1.5;1 1"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
            ></animateTransform>
            <animate
              attributeName="fill-opacity"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
              values="1;0"
              begin="-0.375s"
            ></animate>
          </circle>
        </g>
      </g>
      <g transform="translate(28.78679656440357,28.786796564403577)">
        <g transform="rotate(225)">
          <circle cx="0" cy="0" r="6" fill="#ff727d" fill-opacity="0.375">
            <animateTransform
              attributeName="transform"
              type="scale"
              begin="-0.25s"
              values="1.5 1.5;1 1"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
            ></animateTransform>
            <animate
              attributeName="fill-opacity"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
              values="1;0"
              begin="-0.25s"
            ></animate>
          </circle>
        </g>
      </g>
      <g transform="translate(49.99999999999999,20)">
        <g transform="rotate(270)">
          <circle cx="0" cy="0" r="6" fill="#ff727d" fill-opacity="0.25">
            <animateTransform
              attributeName="transform"
              type="scale"
              begin="-0.125s"
              values="1.5 1.5;1 1"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
            ></animateTransform>
            <animate
              attributeName="fill-opacity"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
              values="1;0"
              begin="-0.125s"
            ></animate>
          </circle>
        </g>
      </g>
      <g transform="translate(71.21320343559643,28.78679656440357)">
        <g transform="rotate(315)">
          <circle cx="0" cy="0" r="6" fill="#ff727d" fill-opacity="0.125">
            <animateTransform
              attributeName="transform"
              type="scale"
              begin="0s"
              values="1.5 1.5;1 1"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
            ></animateTransform>
            <animate
              attributeName="fill-opacity"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
              values="1;0"
              begin="0s"
            ></animate>
          </circle>
        </g>
      </g>
    </svg>

    <hr />

    <ul class="hots" v-show="!suggests.length">
      <h3>hots</h3>
      <li
        v-for="(o, i) in hots"
        :key="i"
        @click="
          value = o.first;
          getSearchResult(o.first);
        "
      >
        {{ o.first }}
      </li>
    </ul>

    <ul class="suggests" v-if="suggests.length && !searchRes">
      <h3>suggests</h3>
      <li
        v-for="(o, i) in suggests"
        :key="i"
        @click="
          getSearchResult(o.keyword);
          value = o.keyword;
        "
      >
        {{ o.keyword }}
      </li>
    </ul>

    <ul class="search" v-if="searchRes">
      <h3>search</h3>

      <li v-for="(o, i) in searchRes?.songs" :key="i">{{ o.name }}</li>
    </ul>
  </div>
</template>

<script>
import { getSearchHots } from "@/apis";
// var _ = require("lodash/fp/debounce");
var _ = require("lodash");
// console.log("debounce", debounce);
// const debouncedGetSearchSuggests = _.debounce(getSearchSuggests, 3000);
export default {
  data: function () {
    return {
      value: "",
      hots: [],
      suggests: [],
      searchRes: null,
      loading: false,
    };
  },

  methods: {
    // getSearchHots: function () {
    //   return this.axios.get("https://apis.netstart.cn/music/search/hot");
    // },
    getSearchSuggests: function (keywords) {
      this.loading = true;
      this.axios
        .get("https://apis.netstart.cn/music/search/suggest", {
          params: { keywords, type: "mobile" },
        })
        .then((res) => {
          // 如果修改删除的很快 从有值 快速删除到 空
          // 这个过程中如果出现一个ajax 很慢 比删完还慢
          // 删除完成之后 ajax才有结果
          this.loading = false;
          this.value
            ? (this.suggests = res.data.result.allMatch)
            : (this.suggests = []);
        });
    },

    getSearchResult: function (keywords) {
      this.loading = true;
      this.axios
        .get("https://apis.netstart.cn/music/search", {
          params: { keywords, limit: 10, offset: 0 },
        })
        .then((res) => {
          this.loading = false;
          console.log(res.data.result);
          this.searchRes = res.data.result;
        });
    },
  },

  created() {
    this.loading = true;
    getSearchHots().then((res) => {
      this.loading = false;
      this.hots = res.data.result.hots;
    });

    this.debouncedGetSearchSuggests = _.debounce(this.getSearchSuggests, 800);
  },

  watch: {
    value: function (n) {
      //   console.log(n);
      if (n) {
        // 如果存在就发送ajax
        this.debouncedGetSearchSuggests(n);
      } else {
        // 不存在
        this.suggests = [];
      }
    },
  },
};
</script>

<style lang="less" scoped>
.hots {
  display: flex;
  flex-wrap: wrap;
  li {
    border: 1px solid gray;
    padding: 0 10rem;
    line-height: 24rem;
    border-radius: 24rem;
    margin: 5rem;
  }
}
</style>