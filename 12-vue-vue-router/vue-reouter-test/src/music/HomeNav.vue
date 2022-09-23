<template>
  <div>
    <!-- <h3>homenav</h3> -->
    <nav>
      <router-link to="/">/</router-link> |
      <router-link to="/hot">/hot</router-link> |
      <router-link to="/search">/search</router-link> |
    </nav>

    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>