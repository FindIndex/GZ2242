<template>
    <div class="aaa">
        <div v-if="showlocading" class="locadingmask">
            <div class="locading"></div>
        </div>
        <ul class="list">
            <!-- this.$router.push({ path: '/SerialList', query: { id:article.serial_id } }) -->
            <li v-for="article in articles " :key="article.id"
                @click="$router.push({ path: '/SerialList', query: { id:article.serial_id } })">
                <div class="top">
                    <img :src="article.cover" alt="">
                    <div v-if="article.finished" class="finish">#已完结</div>
                    <div class="title">《{{article.title}}》</div>
                    <div class="content">
                        <div class="forward">{{article.forward}}</div>
                        <div class="author">{{article.subtitle}}</div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
// import { watch } from 'vue'

export default {
    props: {
        index: Number
    },
    data() {
        return {
            articles: [],
            showlocading: false,
        }
    },
    methods: {
        getactive(data) {
            this.showlocading = true
            this.axios
                .get(`https://apis.netstart.cn/one/find/serial/byyear/${data}`)
                .then((res) => {
                    this.showlocading = false
                    // this.reading = res.data.data
                    this.articles = res.data.data
                })
        }
    },
    created() {
        this.getactive(this.index)
    },
    watch: {
        index(newindex) {
            this.getactive(newindex)
        }
    }
}
</script>

<style lang="less" scoped>
.aaa {
    margin: 70rem 0;

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
        overflow: hidden;

        li {
            // padding: 15rem;
            border-radius: 7rem;
            margin: 15rem;
            box-shadow: 0rem 8rem 5rem rgb(0 0 0 / 15%);

            .top {
                position: relative;

                img {
                    border-radius: 7rem;
                }

                .finish {
                    position: absolute;
                    top: 10rem;
                    left: 10rem;
                    color: white;
                    font-size: 12rem;
                }

                .title {
                    font-size: 16rem;
                    position: absolute;
                    bottom: 65rem;
                    color: white;
                    left: 2rem;
                }

                .content {
                    width: 100%;
                    height: 52rem;
                    background-color: white;
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    padding: 10rem;
                    border-radius: 0 0 7rem 7rem;

                    .forward {
                        width: 100%;
                        overflow: hidden;
                        height: 18rem;
                        font-size: 12rem;
                        color: #999;
                    }

                    .author {
                        color: rgb(212, 212, 212);
                    }

                }
            }
        }
    }
}
</style>