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

useHead({
    title: 'post page',
    meta: [
        { name: 'description', content: 'xxxxxxxxxxx.' }
    ],
    bodyAttrs: {
        class: 'test'
    },
    script: [{ children: 'console.log(\'Hello world\')' }, {
        src: 'https://third-party-script.com',
        body: true
    }],
    link: [
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap',
            crossorigin: ''
        }
    ]
})




const route = useRoute()
// When accessing /posts/1, route.params.id will be 1
console.log('post/:id route.params.id', route.params.id)
</script>

<style lang="scss" scoped>

</style>