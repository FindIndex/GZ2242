<template>
  <div>
    <h3 class="title">Hello World {{ n }}</h3>
  </div>
  <hr>
  <ul>
    <li v-for="story in data.stories" :key="story.id">{{ story.title }}</li>
  </ul>
  <hr>
  <div>
    Counter: {{ counter }}
    <button @click="counter++">+</button>
    <button @click="counter--">-</button>
  </div>
  <hr>
  <button @click="clickHandler">测试事件</button>

  <hr>
  <AppAlert :counter="counter" @xxx-yyy="counter++"></AppAlert>
</template>

<script setup>
const n = 1 + 2

const counter = useState('counter', () => Math.round(Math.random() * 1000))

const {
  data,
  pending,
  refresh,
  error } = await useFetch('https://apis.netstart.cn/zhihudaily/stories/latest', {
    pick: ['stories'],
  })

console.log('========', Date.now());

// console.log(stories, "======", pending, "======", refresh, "======", error);
// console.log(data.value);

const clickHandler = async function () {
  console.log('click', counter.value);
  // refresh()
  const {
    data,
    pending,
    refresh,
    error } = await useFetch('https://apis.netstart.cn/zhihudaily/stories/latest', {
      pick: ['stories'],
    })
  console.log(data.value);
}

</script>

<style lang="scss" scoped>
.title {
  color: red
}
</style>
