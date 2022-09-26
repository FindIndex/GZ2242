<template>
  <div class="search">
    <div class="search-top">
      <i class="search-icon"></i>
      <input
        type="text"
        class="search-input"
        v-model="value"
        placeholder="搜索歌曲、歌手、专辑"
        ref="input"
        @focus="searchDetails = null"
      />
      <i v-if="value" class="delete-icon" @click="deleteInfo"></i>
    </div>

    <div v-show="loading" class="loadingImg">
      <img
        src="data:image/gif;base64,R0lGODlhKAAoAIABANM6Mf///yH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkI2QURFODRFRkZBRTExRTU4NTg0QTdFMUQ4QkI2MTI1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkI2QURFODRGRkZBRTExRTU4NTg0QTdFMUQ4QkI2MTI1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QjZBREU4NENGRkFFMTFFNTg1ODRBN0UxRDhCQjYxMjUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QjZBREU4NERGRkFFMTFFNTg1ODRBN0UxRDhCQjYxMjUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQJCgABACwAAAAAKAAoAAACeIyPqcvtD6OctNoD8rUZ7Np9VChKZAmdqKOuTOsqcIzMtGHfuaxxfbRrBGu/UfExXCRxxwRsGdg9m0IqpgmVYq1KbnTrMXmnYeAYzCtf1em2E11lf+VkFpxIP+f37td93dfF9zboVwhIaHfItJjoiBd4IzlJWalQAAAh+QQJCgABACwAAAAAKAAoAAACfIyPqcvtD6OctNqLs94WeB55AAiJ5GOeTaoubJu8nBzQGm0zuYF/0l7zIYAxocvIQzqAvVHROVRGoYemgqm0PpfZLjX53YqnV2nVWw5j1ejxkQ1Pc+Nu8FxeD4bJea2uzRf4hidotwJ4RvenmEg42IfoaFioB2N5iZmZUAAAIfkECQoAAQAsAAAAACgAKAAAAn+Mj6nL7Q+jnLRaCPK1GezafVTIaRIJmhE6qpg7sY98wg692g3+egnNm9mAup6C6EslD8hL8zcsGp4I6sI6jS6PWu42EAR3od8wVlyWor1s8m1chV/l2fQ3bm/j33m3n3F2tvfHREdYp1d4p5iIePgYqBbZB2goKIKZqbnJ+VAAACH5BAUKAAEALAAAAAAoACgAAAJ8jI+py+0PIwRUWkbB3Sjz731bKFpkGZ1mJaktm8KX29CT/Ng57ug9XwPeNC/iSLjwBY1DEFKhxDwTLl/0UH1eDVkmlNf9eqng8thqFquX606aTT6/pfJ6OznH5u/cfQBtF8cnSOgWSDcYBmeYqOWniFiod4hSaXmJmWlRAAA7"
        alt=""
      />
    </div>
    <!-- 热门搜索 -->
    <SearchHot
      v-show="!searchRes?.length"
      :hotTags="hotTags"
      @tagChangeValue="tagValue"
    ></SearchHot>
    <SearchHistory
      v-show="!searchRes?.length"
      :history="history"
      @deleteHistory="changeHistory"
      @searchHistory="searchHistory"
    ></SearchHistory>
    <!-- 搜索建议 -->
    <SearchInfo
      v-if="searchRes?.length && !searchDetails"
      :searchRes="searchRes"
      :value="value"
      @changeSuggest="changeSuggest"
    ></SearchInfo>
    <!-- 搜索详细 -->
    <SearchDetail
      v-if="searchDetails"
      :searchDetails="searchDetails"
      :searchBest="searchBest"
    ></SearchDetail>
  </div>
</template>

<script>
import SearchHot from "@/components/SearchHot.vue";
import SearchInfo from "@/components/SearchInfo.vue";
import SearchDetail from "@/components/SearchDetail.vue";
import SearchHistory from "@/components/SearchHistory.vue";
export default {
  components: {
    SearchHot,
    SearchInfo,
    SearchDetail,
    SearchHistory,
  },
  data() {
    return {
      hotTags: [],
      value: "",
      searchRes: [],
      searchDetails: null,
      searchBest: {},
      loading: false,

      history: JSON.parse(window.localStorage.getItem("history")) || [],
    };
  },
  methods: {
    //输入框删除搜索信息
    deleteInfo: function () {
      this.value = "";
      this.searchDetails = null;
    },
    // 建议
    getSearchRes: function (v) {
      this.loading = true;
      this.axios
        .get("https://apis.netstart.cn/music/search/suggest", {
          params: {
            keywords: v,
            type: "mobile",
          },
        })
        .then((res) => {
          this.loading = false;
          this.value
            ? (this.searchRes = res?.data?.result?.allMatch)
            : (this.searchRes = []);
        });
    },
    // 详细歌曲
    getSearchDetails: function (v) {
      this.loading = true;
      this.axios
        .get("https://apis.netstart.cn/music/cloudsearch", {
          params: {
            keywords: v,
          },
        })
        .then((res) => {
          this.loading = false;
          this.searchDetails = res?.data?.result?.songs;
        });
      this.history = [...new Set([v, ...this.history])];
    },
    // 最佳匹配
    getSearchBest: function (v) {
      this.loading = true;
      this.axios
        .get("https://apis.netstart.cn/music/search/multimatch", {
          params: {
            keywords: v,
          },
        })
        .then((res) => {
          this.loading = false;
          this.searchBest = res?.data?.result;
        });
    },
    //点击建议搜索跳转
    changeSuggest: function (newValue) {
      this.value = newValue;
      this.getSearchDetails(newValue);
      this.getSearchBest(newValue);
    },
    //点击热门搜索跳转
    tagValue: function (newValue) {
      this.value = newValue;
      this.getSearchDetails(newValue);
      this.getSearchBest(newValue);
      
    },
    // 删除历史记录
    changeHistory: function (delhistory) {
      // console.log(delhistory);
      this.history = this.history.filter((o) => o !== delhistory);
    },
    //搜索历史记录
    searchHistory: function (newValue) {
      this.value = newValue;
      this.getSearchDetails(newValue);
      this.getSearchBest(newValue);
    },
  },
  //初始
  created: function () {
    this.loading = true;
    this.axios.get("https://apis.netstart.cn/music/search/hot").then((res) => {
      this.hotTags = res.data.result.hots;
      this.loading = false;
    });
    this.$nextTick(function () {
      this.$refs.input.focus();
    });
  },
  watch: {
    value: function (n) {
      if (n) {
        this.getSearchRes(n);
      } else {
        this.searchRes = [];
        this.searchDetails = null;
      }
    },
    history: function (newHistory) {
      localStorage.setItem("history", JSON.stringify(newHistory));
    },
  },
};
</script>

<style lang="less" scoped>
.search {
  .search-top {
    padding: 15rem 10rem;
    position: relative;
    .search-icon {
      background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNiAyNiI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSIjYzljOWNhIiBkPSJNMjUuMTgxIDIzLjUzNWwtMS40MTQgMS40MTQtNy4zMTUtNy4zMTRBOS45NjYgOS45NjYgMCAwIDEgMTAgMjBDNC40NzcgMjAgMCAxNS41MjMgMCAxMFM0LjQ3NyAwIDEwIDBzMTAgNC40NzcgMTAgMTBjMCAyLjM0Mi0uODExIDQuNDktMi4xNiA2LjE5NWw3LjM0MSA3LjM0ek0xMCAyYTggOCAwIDEgMCAwIDE2IDggOCAwIDAgMCAwLTE2eiIvPjwvc3ZnPg==);
      width: 13rem;
      height: 13rem;
      position: absolute;
      left: 10rem;
      top: 50%;
      transform: translateY(-50%);
      margin: 0 8rem;
    }
    .search-input {
      width: 100%;
      height: 30rem;
      padding: 0 30rem;
      border-radius: 15rem;
      background: #ebecec;

      border: none;
      outline: none;
      line-height: 18rem;
      font-size: 14rem;
      &::placeholder {
        color: #c9c9c9;
      }
    }
    .delete-icon {
      background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyOCAyOCI+PGcgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBmaWxsPSIjYmNiZGJkIiBkPSJNMTQgMGM3LjczMiAwIDE0IDYuMjY4IDE0IDE0cy02LjI2OCAxNC0xNCAxNFMwIDIxLjczMiAwIDE0IDYuMjY4IDAgMTQgMHoiLz48cGF0aCBkPSJNMTkgOUw5IDE5TTkgOWwxMCAxMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZWJlY2ViIiBzdHJva2Utd2lkdGg9IjIuNSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIi8+PC9nPjwvc3ZnPg==);
      width: 14rem;
      height: 14rem;
      position: absolute;
      right: 10rem;
      top: 50%;
      transform: translateY(-50%);
      margin: 0 8rem;
    }
    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 1rem;
      bottom: 0rem;
      left: 0;
      background-color: #ccc;
    }
  }
  .loadingImg {
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 30%;
    background-color: #fff;
    img {
    }
  }
}
</style>