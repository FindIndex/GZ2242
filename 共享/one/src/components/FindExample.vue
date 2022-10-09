<template>
    <div>
        <ul class="exb">
            <div v-if="showlocading" class="locadingmask">
                <div class="locading"></div>
            </div>
            <!-- this.$router.push({ path: '/FindExample', query: { id: e.id, } }) -->
            <li class="eexb" v-for="(e,index) in exmple" :key="index"
                @click="$router.push({ path: '/FindExmplePage', query: { id: e.id, title:e.title} })">
                <div class="head">
                    <div class="title">
                        <h2>{{e.title}}</h2>
                    </div>
                    <span>
                        <div class="neir">完整表单</div>
                        <img src="../assets/图标/forward.png" alt="">
                    </span>
                </div>
                <div class="middle">
                    <div class="fl">
                        <img v-if="`${e.img_url}?imageView=1&type=webp&thumbnail=253x0`" :src="e.img_url" alt="">
                    </div>
                    <ul class="fr">
                        <!-- $router.push({ path: '/HomeArticle', query: { id:o.id,index:category} }) -->
                        <li class="one" v-for="( o,index ) in e.contents" :key="index" @click.stop="gotoactive(o)">
                            <div class="no">{{index+1}}.</div>
                            <span>{{o.title}}</span>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            exmple: [],
            showlocading: false,
        }
    },
    created() {
        this.showlocading = true
        this.axios
            .get(`https://apis.netstart.cn/one/find/rank`)
            .then((res) => {
                // this.reading = res.data.data
                this.showlocading = false
                this.exmple = res.data.data
            })
    },
    methods: {
        gotoactive(o) {
            console.log(111);
            if (o.serial_list) {
                this.$router.push({ path: '/HomeArticle', query: { id: o.id, index: o.category, list: o.serial_list } })
            } else {
                this.$router.push({ path: '/HomeArticle', query: { id: o.id, index: o.category } })
            }
        }
    }

}
</script>

<style lang="less" scoped>
.exb {
    margin-top: 50rem;
    margin-bottom: 30rem;

    .locadingmask {
        position: fixed;
        top: 40rem;
        left: 0;
        width: 100%;
        height:87%;
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

    .eexb {
        padding: 15rem;


        .head {
            display: flex;
            justify-content: space-between;

            .title {
                h2 {
                    font-size: 14rem;
                    font-weight: 600;
                }
            }

            span {
                display: flex;
                justify-content: center;
                align-items: center;

                .neir {
                    color: #999;
                    font-size: 14rem;
                }

                img {
                    width: 20rem;
                    height: 20rem;
                    margin-left: -4rem;
                }
            }

        }

        .middle {
            display: flex;
            margin-top: 20rem;

            // justify-content: space-between;
            .fl {
                img {
                    width: 80rem;
                    height: 80rem;
                    border-radius: 7rem;
                }
            }

            .fr {
                margin-left: 30rem;

                li {
                    display: flex;
                    // margin: 10rem;
                    margin-bottom: 13rem;

                    .no {
                        font-size: 12rem;
                    }

                    &:nth-last-of-type(3) {
                        color: red;
                    }

                    &:nth-last-of-type(2) {
                        color: orange;
                    }

                    &:nth-last-of-type(1) {
                        color: rgb(255, 179, 0);
                    }

                    span {
                        font-size: 12rem;
                        color: #999;
                        margin-left: 5rem;
                    }

                    // justify-content: center;
                    align-items: center;
                }
            }
        }
    }
}
</style>