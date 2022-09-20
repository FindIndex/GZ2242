<template>
  <li class="home-card">
    <img :src="`${item.picUrl}?imageView=1&type=webp&thumbnail=370x0`" alt="" />
    <h5>{{ item.name }}</h5>
  </li>
</template>

<script>
export default {
  props: {
    item: Object,
  },
};
</script>

<style lang="less" scoped>
li.home-card {
  width: 30%;
  flex-grow: 1;
  &:nth-child(3n + 2) {
    margin: 0 5px;
  }
}
</style>