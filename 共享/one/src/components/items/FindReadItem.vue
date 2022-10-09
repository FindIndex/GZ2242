<template>
    <li @click="gotoactive(read.id,read.category)" :class="yearmonth">
        <div class="fl"><img v-if="read.cover" :src="read.cover" alt=""></div>
        <div class="fr">
            <div class="title">{{read.title}}</div>
            <div class="author">{{read.subtitle}}</div>
        </div>
    </li>
</template>

<script>
import { stringify } from 'qs';

export default {
    props: {
        read: Object,
        yearmonth:stringify,
    },
    methods: {

        gotoactive(id, n) {
            this.$router.push({ path: '/HomeArticle', query: { id: id, index: n } })

        }
    }
}
</script>

<style lang="less" scoped>
h2 {
    text-align: center;

}

li {
    padding: 15rem;
    display: flex;
    overflow: hidden;


    .fl {
        img {
            width: 70rem;
            height: 70rem;
            border-radius: 10rem;
        }
    }

    .fr {
        margin-left: 20rem;

        .title {
            font-size: 14rem;
            font-weight: 600;
            height: 20rem;
            overflow: hidden;
        }

        .author {
            margin-top: 20rem;
            font-size: 12rem;
            color: gray;
            width: 243rem;
        }
    }
}
</style>