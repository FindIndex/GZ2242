<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import HelloTest from './components/HelloTest.vue'
import HelloTest3 from './components/HelloTest3.vue'
</script>

<template>
  <HelloWorld msg="Vite + Vue" ></HelloWorld>
  <hr />
  <HelloTest  msg="HelloTest"></HelloTest>
  <hr />
  <HelloTest3  msg="HelloTest"></HelloTest3>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
