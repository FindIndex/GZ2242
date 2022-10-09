<template>
    <div>test {{msg}} --- {{count}}--{{count2}}</div>
    <button @click="count++">count++</button>
</template>

<script>
export default {
    props: {
        msg: String
    },
    data: function () {
        return {
            count: 10
        }
    },
    computed: {
        count2: function () {
            return this.count * 2
        }
    },
    created() {
        console.log('this.count', this.count);
    }

}
</script>

<style>

</style>