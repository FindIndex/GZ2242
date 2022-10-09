<template>
    <div class="father" :style="`background-color:${ztcard?.bg_color};color:${ztcard?.font_color}`">
        <img class="radio-return" src="../assets/图标/return_image_4_0.png" alt="" @click="$router.go(-1)">
        <div class="mask" v-if="ztcard?.json_content" :style="{backgroundImage:`
        url(${ztcard?.json_content?.special.cover}?imageView=1&type=webp&thumbnail=253x0`}"></div>
        <div class="head">
            <div class="title">{{ztcard.title}}</div>
            <div class="litte-title">{{ztcard?.share_list?.wx.desc}}</div>
        </div>
        <ul class="content">
            <SpicaItem v-for="(item,index) in ztcard?.json_content?.oneDataArticles" :key="index" :spical="item" />
        </ul>
        <div class="last" :style="`background-color:${ztcard?.bg_color};color:${ztcard?.font_color}`">
            <input type="text" placeholder="写下一个评论...">
            <div class="fr">
                <div class="dz" @click="dzzzzz">
                    <img v-if="!dzing" src="../assets/图标/feeds_laud_default.png" alt="">
                    <img v-if="dzing" src="../assets/图标/bottom_laud_selected.png" alt="">
                    <span>{{ztcard.praisenum}}</span>
                </div>
                <div class="pl"><img src="../assets/图标/comment_image.png" alt=""><span>{{ztcard.commentnum}}</span>
                </div>
                <img class="fx" src="../assets/图标/share_image.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
import SpicaItem from '@/components/items/SpicaItem.vue'
export default {
    components: {
        SpicaItem,
    },
    data() {
        return {
            ztcard: [],
            dzing: false,
        }
    },
    methods: {
        dzzzzz() {
            this.dzing = !this.dzing;
            if (!this.dzing) {
                this.ztcard.praisenum--

            } else {
                this.ztcard.praisenum++
            }
        },
        getxxcontent(id) {
            this.axios
                .get(`https://apis.netstart.cn/one/topic/htmlcontent/${id}`)
                .then((res) => {
                    // this.reading = res.data.data
                    this.ztcard = res.data.data
                })
        },


    },
    created() {
        this.getxxcontent(this.$route.query.id)
    }
}
</script>

<style lang="less" scoped>
.father {
    margin-bottom: 45rem;
    .mask {
        width: 375rem;
        height: 226rem;
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
    }

    // .radio-return {
    // position: absolute;
    // top: 0;
    // left: 0;
    // width: 100%;
    // display: flex;
    // justify-content: space-between;
    // padding: 10rem;

    img.radio-return {
        width: 20rem;
        height: 20rem;
        position: absolute;
        top: 10rem;
        left: 10rem;
    }

    // }

    .head {
        padding: 15rem;

        .title {
            font-size: 20em;
            font-weight: 600;
        }

        .little_title {
            font-size: 14rem;
        }
    }

    .last {
        width: 100%;
        display: flex;
        height: 45rem;
        // background-color: rgb(242, 242, 242);
        justify-content: space-between;
        padding: 15rem;
        position: fixed;
        bottom: 0;
        left: 0;

        input {
            width: 120rem;
            padding: 12rem;
            margin-top: -4rem;
            border-color: #999;
            border-radius: 6rem;
        }

        .fr {
            display: flex;

            img {
                width: 20rem;
                height: 20rem;
                margin: 0 10rem;
            }

            .dz,
            .pl {
                display: flex;

                // // justify-content: center;
                // align-items: center;
                span {
                    font-size: 10rem;
                    display: block;
                    line-height: 10rem;
                    color: #999;
                    // margin-left: -10rem;
                }
            }

            .fx {
                margin-top: -4rem;
            }
        }
    }
}
</style>