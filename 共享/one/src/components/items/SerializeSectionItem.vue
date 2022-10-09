<template>
    <li :class="{active: i == id}" @click.stop="gotoactive(i)">
        {{index+1}}
    </li>
</template>

<script>
import { stringify } from 'qs';

export default {
    props: {
        index: Number,
        i: stringify,
        list: Array,
        id:stringify,
    },
    methods: {
        gotoactive(id) {
            console.log(id);
            // console.log(123);
            // this.$router.push({ path: '/HomeArticle', query: { id: id, index: 2, list: this.list } })
            this.$emit('choose-id',id)
        }
    }
}
</script>

<style lang="less" scoped>
li {
    &.active{
        color: red;
    }
    width: 20rem;
    height: 20rem;
    font-size: 14rem;
    margin: 10rem;
}
</style>