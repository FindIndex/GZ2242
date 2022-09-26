<template>
  <div class="searchInfo" >
    <!-- <div v-if="!inSearch" class="suggest"> -->
    <div class="suggest">
      <h3 class="info-title" @click="$emit('changeSuggest', value)">
        搜索“{{ value }}”
      </h3>
      <ul class="info-list">
        <li
          class="info-item"
          @click="$emit('changeSuggest', info.keyword)"
          v-for="info in searchRes"
          :key="info.keyword"
        >
          <i class="item-icon"></i>
          <span class="item-key">{{ info.keyword }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    searchRes: Array,
    // searchDetails: Array,
    // searchBest: Object,
    value: String,
    // inSearch:Booleans
    // issuggest: Boolean,
  },
  data() {
    return {
      // inSearch: false,
      // suggest: this.issuggest,
      // xx: [],
    };
  },
  methods: {
    // searchsongs: function () {
    //   // this.inSearch = true;
    //   this.$emit("changeSuggest", this.suggest);
    // },
    // searchSuggest: function () {
    //   // this.inSearch = true;
    //   this.$parent.value = this.info.keyword;
    //   this.$emit("changeSuggest", this.suggest);
    // },
  },
  watch: {
    // searchDetails:function(){
    //   // this.xx =[...this.searchDetails]
    // }
    // issuggest: function () {
    //   this.suggest = this.issuggest;
    // },
  },
};
</script>

<style lang="less" scoped>
.searchInfo {
  .info-title {
    margin-left: 10rem;
    padding-right: 10rem;
    font-size: 15rem;
    line-height: 50rem;
    color: #507daf;
    border-bottom: 1rem solid rgba(0, 0, 0, 0.1);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .info-list {
    .info-item {
      padding-left: 10rem;
      display: flex;
      align-items: center;
      line-height: 45rem;
      font-size: 15rem;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      .item-icon {
        background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNiAyNiI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSIjYzljOWNhIiBkPSJNMjUuMTgxIDIzLjUzNWwtMS40MTQgMS40MTQtNy4zMTUtNy4zMTRBOS45NjYgOS45NjYgMCAwIDEgMTAgMjBDNC40NzcgMjAgMCAxNS41MjMgMCAxMFM0LjQ3NyAwIDEwIDBzMTAgNC40NzcgMTAgMTBjMCAyLjM0Mi0uODExIDQuNDktMi4xNiA2LjE5NWw3LjM0MSA3LjM0ek0xMCAyYTggOCAwIDEgMCAwIDE2IDggOCAwIDAgMCAwLTE2eiIvPjwvc3ZnPg==);
        width: 15rem;
        height: 15rem;
        margin-right: 7rem;

        // line-height: 45rem;
      }
      .item-key {
        display: inline-block;
        padding-right: 10rem;
        flex-grow: 1;
        border-bottom: 1rem solid rgba(0, 0, 0, 0.1);
      }
    }
  }
}
</style>