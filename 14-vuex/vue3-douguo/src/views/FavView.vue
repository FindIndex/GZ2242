<template>
    <div>

    </div>
</template>

<script setup>

import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()

const recipeFav = computed(() => store.state.recipeFav)
const noteFav = computed(() => store.state.noteFav)

</script>

<style lang="less" scoped>

</style>