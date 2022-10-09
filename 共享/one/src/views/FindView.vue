<template>
  <div class="seactions">
    <div class="head">
      <div class="stage">
        <ul class="sectiton">
          <li v-for=" section in  sections" :key=" section.id">
            <a href.praret="" @click="activeIndex=section.id"
              :class="{active:(activeIndex == section.id)}">{{section.ctn}}</a>
            <!-- {{section.ctn}} -->
          </li>
        </ul>
      </div>
      <div class="search">
        <!-- <router-link to="/SeachPage"> -->
        <!-- @click="$router.push({path:'/SeachPage',query:{which:`find`}})" -->
        <img src="../assets/图标/search.png" alt="" @click="ff">
        <!-- </router-link> -->
      </div>
      <SeachPage v-show=" show " @change-show="show = false" />
    </div>
    <FindRead v-if="activeIndex==1&&!show" />
    <FindPic v-if="activeIndex == 2&&!show" />
    <FindSpaic v-if="activeIndex == 3&&!show" />
    <FindExample v-if="activeIndex == 4&&!show" />
    <FindQuestions v-if="activeIndex == 5&&!show" />
    <FindFilm v-if="activeIndex == 6&&!show" />
    <FindRadio v-if="activeIndex == 7&&!show" />
  </div>
</template>

<script>
import FindRead from '@/components/FindRead.vue'
import FindPic from '@/components/FindPic.vue'
import FindSpaic from '@/components/FindSpaic.vue'
import FindExample from '@/components/FindExample.vue'
import FindQuestions from '@/components/FindQuestions.vue'
import FindFilm from '@/components/FindFilm.vue'
import FindRadio from '@/components/FindRadio.vue'
import SeachPage from '@/components/SeachPage.vue'



export default {
  components: {
    FindRead,
    FindPic,
    FindSpaic,
    FindExample,
    FindQuestions,
    FindFilm,
    FindRadio,
    SeachPage,
  },
  data() {
    return {
      sections: [
        { "id": 1, "ctn": "阅读" },
        { "id": 2, "ctn": "图文" },
        { "id": 3, "ctn": "专题" },
        { "id": 4, "ctn": "热榜" },
        { "id": 5, "ctn": "问答" },
        { "id": 6, "ctn": "影视" },
        { "id": 7, "ctn": "电台" },
      ],
      activeIndex: JSON.parse(window.localStorage.getItem("whichfind") || '3'),
      // window.localStorage.setItem(whichfind,JSON.stringify(items))
      // activeIndex: 3
      show: false,
    }
  },
  watch: {
    activeIndex() {
      window.localStorage.setItem("whichfind", JSON.stringify(this.activeIndex))
    }
  },
  methods: {
    ff() {
      console.log(123);
      this.show = !this.show
    }
  }
  // destroyed(){
  //   // console.log("xiaohui");
  //   window.localStorage.removeItem('whichfind');
  //   this.activeIndex = 3
  // }
}
</script>

<style lang="less" scoped>
.seactions {
  width: 375rem;
  height: 100%;
  overflow: hidden;

  .head {
    width: 375rem;
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    background-color: white;
    z-index: 99;

    .stage {
      width: 100%;
      height: 45rem;
      border-color: white;
      position: relative;

      .sectiton {
        display: flex;
        width: 340rem;
        height: 100%;
        align-items: center;
        justify-content: center;
        overflow-x: auto;

        &::-webkit-scrollbar {
          display: none;
        }

        li {
          width: 15%;
          flex-shrink: 0;
          margin: 0 8rem;

          &:nth-child(7) {
            margin-right: 45rem;
          }

          &:nth-child(1) {
            margin-left: 178em;
          }

          a {
            text-decoration: none;
            color: rgb(117, 117, 117);
            font-size: 12rem;
            font-weight: 700;

            &.active {
              font-size: 20rem;
              color: black;
            }
          }
        }
      }
    }

    .search {
      width: 40rem;
      height: 45rem;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 20rem;
        height: 20rem;
        // display: flex;

      }
    }

  }


}
</style>