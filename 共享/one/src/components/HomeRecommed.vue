<template>
    <li class="card" @click="gotorecommend(commend.content_id,commend.category)">
        <div class="fl">
            <div class="type">{{type}}</div>
        </div>
        <div class="fr">
            <div class="title">{{commend.title}}</div>
            <div class="author">{{commend.author_list[0].user_name}}</div>
        </div>
    </li>
</template>

<script>
const which = {
    1: "阅读",
    3: "问答",
    8: "电台",
}
export default {
    props: {
        commend: Object
    },
    data() {
        return {
            type: ""
        }
    },
    methods: {
        gotorecommend(id,n){
            console.log(id,n);
            this.$router.push({ path: '/HomeRecommendPage', query: { id: id, index: n} })
        }

    },
    created() {
        // whichtype() {
        this.type = which[this.commend.category]

        // },
    }
}
</script>

<style lang="less" scoped>
.card {
    display: flex;
    padding: 15rem 0rem;

    // justify-content: space-between;
    .fl {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 10rem;
        color: #999;
    }

    .fr {
        margin-left: 20rem;

        .title {
            font-size: 12rem;
        }

        .author {
            font-size: 10rem;
            color: #999;
        }
    }
}
</style>