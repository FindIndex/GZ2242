<template>
  <div id="app">

    <HelloWorld msg="Welcome to Your Vue.js App" :nums="[11,22,33]" />
    <hr>
    <TestZj :msg="Math.random()" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TestZj from './components/TestZj.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    TestZj
  }
}
</script>

<style>
#app {

  color: #2c3e50;

}
</style>
