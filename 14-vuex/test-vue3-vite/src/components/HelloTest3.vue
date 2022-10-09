<template>
    <div>test {{msg}} --- {{count}}--{{count2}}</div>
    <button class="increment" @click="countIncrement">count++</button>
    <!-- <button @click="count++">count++</button> -->

    <button @click="toggleShow">toggle</button>
    <div v-if="show" class="box">box</div>
</template>


<script setup>
import { ref, computed, watch, onMounted, onUpdated } from 'vue'

defineProps({
    msg: String
})


const count = ref(10)
const count2 = computed(() => count.value * 2)
const countIncrement = () => count.value++
watch(count, (n, o) => {
    console.log('监听到count变化了', n, o);
})
console.log('创建了', " count.value", count.value, document.querySelector('.increment'));
console.log('创建了', " count2.value", count2.value);
onMounted(() => {
    console.log('挂载成功 increment', document.querySelector('.increment'));
})



/* 222222222222222222222 */
const show = ref(true)
const toggleShow = () => show.value = !show.value
onMounted(() => {
    console.log('挂载成功 box', document.querySelector('.box'));
})
onUpdated(() => {
    console.log('视图更新 box', document.querySelector('.box'));
})


</script>

<style>

</style>