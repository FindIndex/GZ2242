<template>
    <div>
        <div class="head">
            <img class="radio-return" src="../assets/图标/return_image_4_0.png" alt="" @click.stop="$router.go(-1)">
            <div class="type">
                <div class="content" @click="show=!show">
                    {{$route.query.content}}</div>
                <img src="../assets/图标/arrow_down_black.png" alt="">
            </div>
        </div>
        <div class="mask" v-if="show" @click.self="show=!show">
            <ul class="list">
                <li v-for="n in neir" :key="n.id" :class="{active:$route.query.content == n.ctn}"
                    @click="change(n.ctn)">{{n.ctn}}</li>
            </ul>
        </div>
        <FindRead v-if="$route.query.content ==`阅读` " />
        <FindPic v-if="$route.query.content ==`图文` " />
        <FindQuestions v-if="$route.query.content ==`问答` " />
        <FindFilm v-if="$route.query.content ==`影视` " />
        <FindRadio v-if="$route.query.content ==`电台` " />
    </div>
</template>

<script>
import FindRead from '@/components/FindRead.vue'
import FindPic from '@/components/FindPic.vue'
import FindQuestions from '@/components/FindQuestions.vue'
import FindFilm from '@/components/FindFilm.vue'
import FindRadio from '@/components/FindRadio.vue'
import merge from 'webpack-merge';
export default {
    components: {
        FindRead,
        FindPic,
        // FindSpaic,
        // FindExample,
        FindQuestions,
        FindFilm,
        FindRadio,
    },
    data() {
        return {
            neir: [
                { "id": 1, "ctn": "图文" },
                { "id": 2, "ctn": "阅读" },
                { "id": 3, "ctn": "问答" },
                { "id": 4, "ctn": "影视" },
                // { "id": 5, "ctn": "连载" },
                { "id": 6, "ctn": "电台" },
            ],
            show: false,
        }
    },
    methods: {
        change(n) {
            console.log(n);
            this.$router.push({
                query: merge(this.$route.query, { 'content': n })
            })
            this.show=false
            this.$router.go(0)
        }
    },
    // watch: {
    //     $route: {
    //         handler: function (route) {
    //             route
    //             // if (this.$route.query.index == 2) {
    //                 // this.getSerial(this.$route.query.id)
    //             // }
    //             console.log("bianbian");
    //         },
    //         immediate: true,

    //     },
    // },

}
</script>

<style lang="less" scoped>
div {
    .head {
        padding: 15rem;
        display: flex;
        border-bottom: 1rem solid rgba(229, 229, 229, 0.463);
        position: fixed;
        z-index: 99;
        height: 44rem;
        top: 0;
        left: 0;
        width: 100%;
        background-color: white;

        img {
            width: 20rem;
            height: 20rem;
        }

        .type {
            margin-left: 90rem;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 120rem;


            .content {
                text-align: center;
                font-size: 16rem;
                color: #999;
                width: 50rem;

            }

            img {
                width: 10rem;
                height: 10rem;
            }
        }


    }

    .mask {
        width: 100%;
        height: 100%;
        background-color: rgba(47, 47, 47, 0.421);
        position: fixed;
        z-index: 100;
        top: 60rem;
        left: 0;

        .list {
            width: 100%;
            height: 50%;
            position: fixed;
            z-index: 100;
            top: 60rem;
            left: 0;
            background-color: white;
            text-align: center;
            font-size: 14rem;

            li {
                margin: 30rem 0;

                &.active {
                    color: red;
                }
            }

            // z-index: 100;
        }
    }
}
</style>