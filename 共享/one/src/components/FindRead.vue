<template>
  <div class="readpage">
    <van-list
      ref="vanlist"
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
      @scroll.native="scrollHandler"
      style="height: 50vh; overflow: auto"
    >
      <ul ref="testdiv" v-for="month in reading" :key="month.date">
        <!-- <van-divider style="margin-top:70rem">{{reading[0]?.maketime.substring(5, 7)}}月</van-divider> -->
        <h3>{{ month.yy }} - {{ month.mm * 1 }}</h3>
        <FindReadItem
          v-for="(read, index) in month.reads"
          :key="index"
          :read="read"
          :yearmonth="yearmonth"
          ref="readdata"
        />
      </ul>
    </van-list>
  </div>
</template>

<script>
import FindReadItem from "@/components/items/FindReadItem.vue";

import { mapMutations } from "vuex";
export default {
  components: {
    FindReadItem,
  },
  data() {
    return {
      reading: [],
      readingOffsetHeight: [],

      loading: false,
      finished: false,

      yy: new Date().getFullYear(),
      mm: String(new Date().getMonth()).padStart(2, "0"),
    };
  },
  methods: {
    ...mapMutations(["nowtime"]),
    getread(yy, mm) {
      this.axios
        .get(` https://apis.netstart.cn/one/find/bymonth/1/${yy}-${mm}`)
        // .get(`/test.json`)
        .then((res) => {
          this.showlocading = false;

          this.reading = [...this.reading, { reads: res.data.data, yy, mm }];

          this.loading = false;
        });
    },

    onLoad() {
      console.log("load");
      let d = new Date();
      d.setFullYear(this.reading[this.reading.length - 1].yy);
      d.setMonth(this.reading[this.reading.length - 1].mm - 1);

      this.getread(d.getFullYear(), String(d.getMonth()).padStart(2, "0"));
    },

    scrollHandler() {
      //   console.log("scroll");
      // console.log(this.$refs.vanlist.$el.scrollTop);

      let index = [...this.readingOffsetHeight]
        .reverse()
        .findIndex((o) => this.$refs.vanlist.$el.scrollTop + 70 >= o);
      console.log(
        this.reading[this.reading.length - 1 - index].yy +
          "-" +
          this.reading[this.reading.length - 1 - index].mm
      );
      //   console.log(
      //     this.$refs.vanlist.$el.scrollTop,
      //     this.reading.length - 1 - index
      //   );
    },
  },
  computed: {},
  created() {
    this.getread(this.yy, this.mm);
  },
  mounted() {},

  watch: {
    reading: function (newReading) {
      newReading;
      this.$nextTick(() => {
        console.log("this.$refs.testdiv", this.$refs.testdiv);
        this.readingOffsetHeight = this.$refs.testdiv.map((el) => el.offsetTop);
      });
    },
  },
};
</script>

<style lang="less" scoped>
.readpage {
  margin-top: 70rem;
  margin-bottom: 40rem;

  .locadingmask {
    position: fixed;
    top: 40rem;
    left: 0;
    width: 100%;
    height: 87%;
    background-color: #fff;
    z-index: 999;

    .locading {
      width: 154rem;
      height: 155rem;
      background-image: url("../assets/微信图片_20221007141751.jpg");
      background-repeat: no-repeat;
      animation-name: xxx;
      animation-duration: 1s;
      margin: 300rem auto;
      animation-iteration-count: infinite;
      /* animation-timing-function: linear; */
      animation-timing-function: steps(13, end);
    }
  }

  .choosedata {
    text-align: center;
    width: 100%;
    height: 30rem;
    color: gray;
    line-height: 30rem;
    position: fixed;
    top: 40rem;
    left: 0;
    background-color: white;
  }

  .van-datetime-picker {
    position: relative;
    // top: 37rem;
    top: 0;
    left: 0;
  }

  .data-show {
    position: fixed;
    background-color: grey;
    height: 100%;
    width: 100%;

    p {
      position: absolute;
      top: 216rem;
      left: 165rem;
      z-index: 30;
      text-align: center;
      font-size: 20rem;
      font-weight: bold;
    }
  }
}
</style>