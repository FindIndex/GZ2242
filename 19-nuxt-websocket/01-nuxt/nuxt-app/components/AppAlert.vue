<template>

    <span>
        <h5>AppAlert {{ counter }}</h5>
        <slot></slot>
        <button @click="changeCounter">change counter</button>
    </span>
</template>

<script setup>
const emit = defineEmits(['xxx-yyy'])

let { counter } = defineProps(['counter'])


const changeCounter = () => {
    console.log('changeCounter');
    // counter++
    emit('xxx-yyy')
}

</script>

<style lang="scss" scoped>

</style>