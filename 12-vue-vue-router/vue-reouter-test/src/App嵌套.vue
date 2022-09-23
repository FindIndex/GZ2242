<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <hr />

      <router-link to="/user">User</router-link> |
      <router-link to="/user?id=123">User123</router-link> |
      <router-link to="/user?id=456">User123</router-link> |

      <hr />
      <router-link to="/post">post</router-link> |
      <router-link to="/post/123">post123</router-link> |
      <router-link to="/post/456">post456</router-link> |
      <router-link to="/post/test">post/test</router-link> |
    </nav>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
