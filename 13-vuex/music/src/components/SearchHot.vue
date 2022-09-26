<template>
  <div class="search-hot">
    <h3 class="search-title">热门搜索</h3>
    <ul class="tag-list">
      <li
        class="tag"
        v-for="hotTag in hotTags"
        :key="hotTag.first"
        @click="$emit('tagChangeValue', hotTag.first)"
      >
        {{ hotTag.first }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    hotTags: Array,
  },
  methods: {
    // tagSearch: function () {
    //   // this.$emit("tagChangeValue", this.hotTag.first);
    //   // console.log(this.hotTags);
    // },
  },
};
</script>

<style lang="less" scoped>
.search-hot {
  padding: 15rem 10rem 0;
  h3.search-title {
    font-size: 12rem;
    color: #666666;
  }
  .tag-list {
    margin: 10rem 0 7rem;
    .tag {
      display: inline-block;
      line-height: 32rem;
      margin: 0 8rem 8rem 0;
      padding: 0 14rem;
      border: 1rem solid #d3d4da;
      border-radius: 16rem;
      font-size: 14rem;
    }
  }
}
</style>

