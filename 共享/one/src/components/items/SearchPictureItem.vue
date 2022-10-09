<template>
    <li class="item" @click="gotoactive(picture.content_id,picture.category,picture.date)">
        <div class="fr">
            <img v-if="picture" :src="picture.cover" alt="">
        </div>
        <div class="fl">
            <div class="title">{{picture.title}}</div>
            <div class="no">{{picture.subtitle}}</div>
        </div>
    </li>
</template>

<script>
export default {
    props: {
        picture: Object
    },
    methods: {

        gotoactive(id, n, data) {
            // console.log(n);
            if (n == 0) {
                // console.log(data);
                this.$router.push({ path: '/FindPicPage', query: { data: data.substring(0, 10) } })
            } else {
                this.$router.push({ path: '/HomeArticle', query: { id: id, index: n } })
            }


        }
    }
}
</script>

<style lang="less" scoped>
.item {
    display: flex;
    padding: 10rem;
    border-bottom: 1rem solid rgb(214, 214, 214);

    .fr {
        width: 50rem;
        height: 50rem;
    }

    .fl {
        margin-left: 10rem;

        .title {
            width: 260rem;
            font-size: 14rem;
            font-weight: bold;
            height: 20rem;
            overflow: hidden;
        }

        .no {
            font-size: 12rem;
            color: #999;
            margin-top: 15rem;
        }
    }
}
</style>