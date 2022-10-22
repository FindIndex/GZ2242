<template>
    <div>
        <!-- <p v-if="show">条件真</p>
        <p v-else>假</p> -->
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { getTest } from '@/apis/about.js'

// console.log(getTest);

getTest().then((result) => {
    console.log(result);
}).catch((err) => {

});


const show = ref(false)

</script>

<style lang="less" scoped>

</style>