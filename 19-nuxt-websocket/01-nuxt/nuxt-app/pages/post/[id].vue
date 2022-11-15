<template>
    <div>
        <PostPublic />
        <hr>
        post/:id page {{ route.params.id }}
    </div>
</template>

<script setup>
definePageMeta({
    validate: async (route) => {
        const nuxtApp = useNuxtApp()
        // Check if the id is made up of digits
        return /^\d+$/.test(route.params.id)
    }
})



const route = useRoute()
// When accessing /posts/1, route.params.id will be 1
console.log('post/:id route.params.id', route.params.id)
</script>

<style lang="scss" scoped>

</style>