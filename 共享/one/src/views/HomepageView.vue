<template>
  <div class="home">
    <div class="top">
      <div class="fl">
        <span class="day">{{timecontent?.date?.substring(0, 10).split("-")[2]}}</span>
        <span class="mouth">{{ new Date(this.timecontent?.date?.substring(0, 10)).toDateString().split(" ")[1]}}.</span>
        <span class="year">{{timecontent?.date?.substring(0, 10).split("-")[0]}}</span>
        <span class="sj" @click="gotoHomemount"><img src="../assets/三角1.svg" alt=""></span>
      </div>
      <!-- <HomeMount v-show="!show" /> -->
      <div class="fr">
        {{timecontent?.weather?.city_name}} · {{timecontent?.weather?.climate}}
        <span>{{timecontent?.weather?.temperature}}c</span>
      </div>
    </div>
    <!-- <HomeContent :content="timecontent?.content_list" />
      <HomeContent :content="timecontent?.content_list" />
      <HomeContent :content="timecontent?.content_list" /> -->
    <div class="slicfter" v-if="!show">
      <div v-if="showlocading" class="locadingmask">
        <div class="locading"></div>
      </div>
      <div class="slie">
        <HomeContent v-for="(neirong,index) in timecontent?.content_list" :key="index" :neirong="neirong"
          :category="neirong.category" :menu="timecontent?.menu" :index="index" />
        <div class="kb">
        </div>
      </div>
    </div>
    <HomeMount v-if="show" @change-data="changeData" :month="this.timecontent?.date.substring(0, 10)" />

  </div>

</template>

<script>

import { mapMutations, mapState } from "vuex";
import HomeContent from '@/components/HomeContent.vue'
import HomeMount from '@/components/HomeMount.vue'
export default {
  components: {
    HomeContent,
    HomeMount,
  },
  data() {
    return {
      flag: true,
      timecontent: [],
      // new Date(this.timecontent?.weather?.date).toDateString().split(" ")[1]
      month: new Date(this.timecontent?.weather?.date).toDateString().split(" ")[1],
      // arr: [1, 2, 3],
      // cardIndex: 0,
      // cardWidth: 0,
      // startX: 0,
      // moveX: 0,
      show: false,
      showlocading: false,
      // changedata: JSON.parse(localStorage.getItem("changedata")) || ""
    };
  },
  methods: {
    changeData(n) {
      // this.$router.go(0)
      // console.log(n);
      // this.changedata = n
      // localStorage.setItem("changedata", JSON.stringify(n));
      // console.log(this.changedata);
      // this.$router.go(0)
      this.getcontent(n)
      // this.$router.go(0)
      this.show = false

    },
    ...mapMutations(["nowtime", "prevDate", "nextDate"]),
    // ...mapMutations(["prevDate", "nextDate"]),
    getcontent(data) {
      this.showlocading = true
      data
      this.axios
        .get(`https://apis.netstart.cn/one/channel/one/${data}`)
        .then((res) => {
          this.showlocading = false
          this.timecontent = res.data.data
        })
      // this.axios.get(`/data.json`).then((res) => {
      //   console.log(res);
      //   this.showlocading = false
      //   this.timecontent = res.data.data
      // })
    },
    gotoHomemount() {
      console.log(111);
      this.show = !this.show
      // this.$route.name == "HomeMount"
      if (!this.show) {
        // console.log(111);
        // this.$router.go(-1);
        this.show = false
      } else {
        // this.$router.push(`HomeMount`);
        // this.$router.push({ path: '/HomeMount', query: { month: this.timecontent?.date.substring(0, 10) } })
        this.show = true
        // this.$router.push(`/HomeMount?month=${this.month}&date=${this.nowtime}`);
      }
      // this.show=!this.show
    },

    // touchstart(event) {
    //   this.flag = true;
    //   if (this.flag) {
    //     this.startX = event.changedTouches[0].pageX;
    //     // console.log( this.startX);
    //   }
    // },
    // touchmove(event) {
    //   // console.log(12);
    //   if (this.flag) {
    //     this.moveX = event.targetTouches[0].clientX - this.startX;
    //     this.$refs.imgBox.style.transform = `translateX(${this.moveX + this.translateX}px)`;
    //     // console.log( this.moveX);
    //   }
    // },
    // touchend() {
    //   console.log(245);
    //   if (this.flag) {
    //     if (this.moveX > 80) {
    //       if (this.cardIndex <= 0) {
    //         console.log(11);
    //       } else {
    //         this.cardIndex--;
    //       }
    //     } else if (this.moveX < -80) {
    //       this.cardIndex++;
    //       // this.arr.push(1)
    //     }
    //     this.$refs.imgBox.style.transition = 'all .5s';
    //     this.$refs.imgBox.style.transform = `translateX(${this.translateX}px)`;


    //   }
    //   this.flag = false;
    // },
  },
  computed: {
    ...mapState(["time"]),
    translateX() {
      return -(this.cardWidth + this.cardWidth * this.cardIndex);
    },
  },
  mounted() {
    this.cardWidth = window.innerWidth;
    // this.cardIndex = this.$refs.swiper.active
    // this.$refs.imgBox.style.transform = `translateX(-${this.cardWidth}px)`;
  },
  created() {
    this.nowtime()
    // if (this.changedata) {
    // this.getcontent(this.changedata)
    // } else {
    this.getcontent(this.time)
    // }

  },
  updated() {
    document.documentElement.scrollTop = document.body.scrollTop = 0;
  },
  watch: {
    cardIndex(newcardIndex) {
      console.log(newcardIndex);
    },
    // $route(to, from) {
    //   // 监听路由是否变化
    //   from
    //   // console.log(to.query.data);
    //   // console.log(from);
    //   this.show = false
    //   if (to.query.data != this.time) {
    //     console.log(456);
    //     this.getcontent(to.query.data)
    //   }
    //   // if (to.query.data != from.query.key) {
    //   //   this.key = to.query.key;
    //   //   this.init(); //重新加载数据
    //   // }
    // },

    // $route: {
    //   handler: function (route) {
    //     route
    //     // if (this.$route.query.index == 2) {
    //     //   this.getSerial(this.$route.query.id)
    //     // }
    //     // if (this.$route.query.content) {
    //     //   // this.$store.commit('whichplagyingD', { song: this.$route.query.id })
    //     //   console.log(this.$route.query.content);
    //     // }

    //     // this.redirect = route.query && route.query.redirect;
    //   },
    //   immediate: true,

    // },
  },
  destroyed() {
    localStorage.removeItem("changedata");
  }
};
</script>

<style lang="less" >
@keyframes xxx {
  from {
    background-position-x: 0;
  }

  to {
    background-position-x: -2002px;
  }
}

.home {
  position: relative;
  width: 100%;
  height: 100%;

  .locadingmask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
    background-color: #fff;

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


  .top {
    // padding: 10rem;
    padding: 10rem 10rem 5rem 10rem;
    display: flex;
    justify-content: space-between;
    position: relative;
    position: fixed;
    height: 45rem;
    top: 0;
    left: 0;
    z-index: 999;
    background-color: #fff;
    width: 100%;

    .fl {
      .day {
        font-size: 28rem;
        font-weight: bold;
      }

      .sj {
        position: absolute;
        top: 26px;
        right: 269px;

        img {
          width: 10rem;
          height: 10rem;
        }
      }
    }

    .fr {
      line-height: 42rem;
      color: grey;
    }
  }

  .slicfter {
    width: 375rem;
    overflow: hidden;

    .slie {
      overflow: hidden;
      // display: flex;
      background-color: rgba(220, 218, 218, 0.364);

      .kb {
        width: 100%;
        height: 200rem;
        background-color: white;
        margin-top: 10rem;
      }

    }
  }

}
</style>
