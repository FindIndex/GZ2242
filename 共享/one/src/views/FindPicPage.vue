<template>
    <div class="PicPage">
        <div class="xq-head">
            <img src="../assets/图标/return_image_4_0.png" alt="" @click="$router.go(-1)">
            <span>{{$route.query.data}}</span>
            <img src="../assets/图标/share_image.png" alt="">
        </div>
        <div class="protos">
            <img v-if="picxq" :src="picxq.img_url" alt="" @click=" previewImage">
            <div class="content">
                <div class="photography">{{picxq.title}}|{{picxq.pic_info}}</div>
                <div class="ctn">{{picxq.forward}}</div>
                <div class="photographys">{{picxq.words_info}}</div>
            </div>
            <div class="bottom">
                <div class="xiaoji"><img class="xiao" src="../assets/图标/discovery.png" alt=""><span>小记</span> </div>
                <div class="right">
                    <img class="bi" src="../assets/图标/diary_icon.png" alt="">
                    <img class="biq" src="../assets/图标/favourite_gray.png" alt="">
                    <div class="diz">
                        <img class="ax" src="../assets/图标/discover_laud_unselected.png" alt="">
                    </div>
                    <img class="fx" src="../assets/图标/discover_repost.png" alt="">
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import { ImagePreview } from 'vant';
export default {
    data() {
        return {
            picxq: []
        }
    },
    methods: {
        getpic(data) {
            this.axios
                .get(`  https://apis.netstart.cn/one/hp/bydate/${data}`)
                .then((res) => {
                    // this.reading = res.data.data
                    this.picxq = res.data.data
                })
        },

        previewImage() {

            ImagePreview([this.neirong?.img_url]);
        },


    },

    created() {
        this.getpic(this.$route.query.data)
    }
}
</script>

<style lang="less" scoped>
div {
    .xq-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 5rem;
        height: 40rem;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 10;
        width: 100%;
        background-color: white;

        span {
            font-size: 16rem;
            font-weight: 600;
        }

        img {
            width: 20rem;
            height: 20rem;
        }

        border-bottom: 1rem solid rgba(223, 221, 221, 0.384);
    }

    .protos {
        padding: 15rem;
        margin-top: 40rem;

        img {
            border-radius: 5rem 5rem 0 0;
        }

        .content {
            margin-top: -3rem;

            // &.photo {
            border-radius: 0 0 5rem 5rem;
            // box-shadow: 0 0 15rem rgba(0, 0, 0, 0.15);
            border-left: 1rem solid #dbd5d5;
            border-right: 1rem solid #dbd5d5;
            border-bottom: 1rem solid #dbd5d5;
            // }

            .photography,
            .photographys {
                text-align: center;
                color: #999;
                padding: 10rem;
            }

            .ctn {
                margin-top: 20rem;
                font-size: 14rem;
                font-weight: 550;
                padding: 10rem 10rem 60rem 10rem;
            }
        }

        .bottom {
            // display: flex;
            margin: 20rem 0;

            // justify-content: space-around;
            img {
                width: 20rem;
                height: 20rem;
            }

            .xiaoji {
                margin-left: 5rem;
                position: relative;
                width: 57rem;

                span {
                    position: absolute;
                    top: 4px;
                    left: 22px;
                }
            }

            .right {
                // margin-left: 130rem;
                margin-top: -25rem;
                display: flex;
                justify-content: end;

                img {
                    margin: 0 10rem;
                }
            }
        }
    }
}
</style>