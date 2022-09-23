<template>
  <div>
    <!-- <h3>homenav</h3> -->
    <nav>
      <router-link to="/home">/home/</router-link> |
      <router-link to="/home/hot">/home/hot</router-link> |
      <router-link to="/home/search">/home/search</router-link> |
    </nav>

    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>