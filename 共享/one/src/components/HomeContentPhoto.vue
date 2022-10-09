<template>
    <li>
        <div class="protos">
            <img v-if="neirong" :src="neirong?.img_url" alt="" @click=" previewImage">
            <div class="content">
                <div class="photography">{{neirong.title}}|{{neirong.pic_info}}</div>
                <div class="ctn">{{neirong.forward}}</div>
                <div class="photographys">{{neirong.words_info}}</div>
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
    </li>
</template>

<script>
import { ImagePreview } from 'vant';



export default {
    // components: {
    //     [ImagePreview.Component.name]: ImagePreview.Component,
    // },
    props: {
        neirong: Object,

    },
    methods: {
        previewImage() {
            // this.$preview({
            //     urls: [this.neirong.img_url],
            // });
            ImagePreview([this.neirong?.img_url]);
        },


    }
}
</script>

<style lang="less" scoped>
li {
    margin-top: 40rem;
    width: 95%;

    .protos {
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
                display: flex;
                justify-content: center;
                align-items: center;

                span {
                    // position: absolute;
                    // top: 4px;
                    // left: 22px;
                    margin-left: 10rem;
                }
            }

            .right {
                // margin-left: 130rem;
                margin-top: -20rem;
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