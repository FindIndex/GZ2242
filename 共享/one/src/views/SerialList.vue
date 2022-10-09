<template>
    <div class="lists">
        <div class="head">
            <img class="radio-return" src="../assets/图标/return_image_4_0.png" alt="" @click="$router.go(-1)">
            <span v-if="slist">{{slist[slist.length - 1]?.title}}</span>
        </div>
        <div v-if="showlocading" class="locadingmask">
            <div class="locading"></div>
        </div>
        <ul class="list">
            <li v-for=" s in slist" :key="s.id" @click="gotoactive(s.id,s.category,s.serial_list)">
                <div class="fl">
                    <img :src="s.cover" alt="">
                </div>
                <div class="fr">
                    <div class="title">{{s.title}}</div>
                    <div class="author">{{s.subtitle}}</div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
// import router from '@/router'

export default {
    data() {
        return {
            slist: [],
            showlocading: false,
        }
    },
    created() {
        this.showlocading = true
        this.axios
            .get(` https://apis.netstart.cn/one/find/serial/list/${this.$route.query.id}`)
            .then((res) => {
                this.showlocading = false
                // this.reading = res.data.data
                this.slist = res.data.data
            })
    },
    methods: {

        gotoactive(id, n, list) {
            this.$router.push({ path: '/HomeArticle', query: { id: id, index: n, list: list } })

        }
    }
}
</script>

<style lang="less" scoped>
.lists {
    .head {
        display: flex;
        padding: 10rem;

        img {
            width: 20rem;
            height: 20rem;
        }

        span {
            font-size: 14rem;
            font-weight: 16rem;
            font-weight: 600;
            margin-left: 3rem;
        }
    }

    .locadingmask {
        position: fixed;
        top: 40rem;
        left: 0;
        width: 100%;
        height: 87%;
        background-color: #fff;
        z-index: 999;

        .locading {
            width: 154rem;
            height: 155rem;
            background-image: url("../assets/微信图片_20221007141751.jpg");
            background-repeat: no-repeat;
            animation-name: xxx;
            animation-duration: 1s;
            margin: 300rem auto;
            animation-iteration-count: infinite;
            /* animation-timing-function: linear; */
            animation-timing-function: steps(13, end);

        }
    }

    .list {
        li {
            display: flex;
            margin: 15rem;

            .fl {
                img {
                    width: 65rem;
                    height: 65rem;
                    border-radius: 7rem;
                }
            }

            .fr {
                margin-left: 20rem;
                width: 212rem;
                overflow: hidden;

                .title {
                    // width: 212rem;
                    height: 20rem;
                    overflow: hidden;
                    font-size: 14rem;
                    font-weight: 600;
                }

                .author {
                    width: 212rem;
                    height: 17rem;
                    overflow: hidden;
                    font-size: 12rem;
                    color: #999;
                    margin-top: 20rem;
                }
            }
        }
    }
}
</style>