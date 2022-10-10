<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
import { ref } from 'vue'
import { getAppConfig, getAppInit } from '@/apis'


const appConfig = ref(null)
getAppConfig().then(res => {
  appConfig.value = res.data.result
})


getAppInit().then(res => {
  console.log(res);
})



</script>

<template>
  <main>
    <!-- <TheWelcome /> -->
    <h1>home page</h1>
  </main>
</template>
