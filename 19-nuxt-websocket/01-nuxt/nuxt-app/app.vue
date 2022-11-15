<template>
  <div>
    <img src="./public/ci-1.png" alt="">
    <img src="./assets/ci-2.png" alt="">
    <hr>
    <!-- <h3>app.vue</h3> -->
    <nuxt-link to="/">首页</nuxt-link> |
    <nuxt-link to="/about">关于</nuxt-link> |
    <nuxt-link to="/post">/post</nuxt-link> |
    <nuxt-link to="/post/123">/post/123</nuxt-link> |
    <nuxt-link to="/post/456">/post/456</nuxt-link> |
    <nuxt-link to="/post/abc">/post/abc</nuxt-link> |
    <hr>

    <!-- <NuxtLayout> -->
      <NuxtLoadingIndicator /> <!-- here -->
      <NuxtPage />
    <!-- </NuxtLayout> -->
    <!-- 路由出口 -->
    <!-- <NuxtPage /> -->
  </div>
</template>

<script setup>


</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all .3s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>