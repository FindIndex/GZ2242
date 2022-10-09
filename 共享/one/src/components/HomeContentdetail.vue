<template>
    <li class="card">
        <!-- `${personalize.picUrl}?imageView=1&type=webp&thumbnail=370x0` -->

        <!--  -->
        <div class="read" @click="gotoactive(neirong.item_id,category,categoryName)">
            <div v-if="categoryName?.tag" class="read-lei">-{{categoryName?.tag?.title}}-</div>
            <div class="read-titletop" v-if="category===`1`&&!categoryName?.tag">-阅读-</div>
            <div class="read-titletop" v-if="category===`3`&&!categoryName?.tag">-问答-</div>
            <div class="read-titletop" v-if="category===`8`">-电台-</div>
            <div class="read-title">{{neirong.title}}</div>
            <div class="read-au">文/{{neirong.author.user_name}}</div>
            <div class="read-btn">{{neirong.forward}}</div>
            <div class="head-title">
                <img class="read-pic" v-if="neirong" :src="neirong?.img_url" alt="">
                <img class="play" v-if="category===`8`" src="../assets/图标/songlist_play_white.png" alt="">
            </div>


            <div class="bottom bottom2" v-if="category!==`8`">
                <div class="diz">
                    <img class="ax" src="../assets/图标/discover_laud_unselected.png" alt="">
                </div>
                <img class="fx" src="../assets/图标/discover_repost.png" alt="">
            </div>
            <div class="bottom" v-if="category==`8`">
                <div class="author">
                    <img v-if="neirong?.author" :src="neirong?.author?.web_url" alt="">
                    <span class="name">{{neirong?.author?.user_name}}</span>
                </div>
                <div class="fr">
                    <div class="diz">
                        <img class="ax" src="../assets/图标/discover_laud_unselected.png" alt="">
                    </div>
                    <img class="fx" src="../assets/图标/discover_repost.png" alt="">
                </div>

            </div>
        </div>

    </li>
</template>

<script>
import { stringify } from 'qs';


export default {
    props: {
        neirong: Object,
        index: Number,
        menu: Object,
        category: stringify,
    },
    computed: {
        categoryName() {
            // return this.menu.list[this.index].tag?.title;
            return this.menu.list[this.index - 1];
        },
    },
    methods: {

        gotoactive(id, n, categoryName) {
            this.$router.push({ path: '/HomeArticle', query: { id: id, index: n, categoryName: categoryName } })

        }
    }
}
</script>

<style lang="less" scoped>
.card {
    // padding: 10rem;
    // border: 1rem solid grey;
    width: 95%;

    .read {

        .read-lei,
        .read-titletop {
            margin: 15rem;
            font-size: 12rem;
            color: #999;
            text-align: center;
        }

        .read-title {
            font-size: 18rem;
            font-weight: bold;
            margin: 2rem 0;
        }

        .read-au {
            font-size: 12rem;
            color: #999;
        }

        .read-btn {
            margin-top: 10rem;
            font-size: 12rem;
            margin-bottom: 20rem;
            color: #777;
        }

        .read-pic {
            border-radius: 10rem;
        }

        .bottom {
            // display: flex;
            // justify-content: end;
            margin: 20rem 0;

            .author {
                display: flex;
                // justify-content: center;
                align-items: center;

                img {
                    border-radius: 50%;
                }

                .name {
                    color: grey;
                }
            }

            img {
                width: 20rem;
                height: 20rem;
                margin: 0 10rem;
            }

            .fr {
                display: flex;
                justify-content: end;
                margin-top: -20rem;

            }
        }

        .head-title {
            position: relative;
            .play {
                position: absolute;
                bottom: 20rem;
                right: 20rem;
                width: 30rem;
                height: 30rem;
            }
        }


        .bottom2 {
            display: flex;
            justify-content: end;
        }
    }



}
</style>