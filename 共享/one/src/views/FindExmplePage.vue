<template>
    <div class="exe">
        <div class="head">
            <img src="../assets/图标/return_image_4_0.png" alt="" @click="$router.go(-1)">
            <h3>{{$route.query.title}}</h3>
        </div>
        <ul>
            <li class="item" v-for="(exple,index) in explelist" :key="index"  @click="$router.push({ path: '/HomeArticle', query: { id:exple.id,index:exple.category} })">
                <div class="fl">
                    <img v-if="`${exple.cover}?imageView=1&type=webp&thumbnail=253x0`" :src="exple.cover" alt="">
                    <span :class="{active:index === 0, active2:index === 1}">No.{{index+1}}</span>
                </div>
                <div class="fr">
                    <div class="title">{{exple.title}}</div>
                    <div class="author">{{exple.subtitle}}</div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            explelist: []
        }
    },
    created() {
        this.axios
            .get(`https://apis.netstart.cn/one/find/rank/${this.$route.query.id}`)
            .then((res) => {
                // this.reading = res.data.data
                this.explelist = res.data.data
            })
    }
}
</script>

<style lang="less" scoped>
.exe {
    padding: 15rem;
    .head{
        display: flex;
        img{
            width: 20rem;
            height: 20rem;
        }
        h3{
            font-size: 14rem;
            font-weight: 600;
            margin-left: 10rem;
        }
    }
    ul {
        .item {
            display: flex;
            // justify-content: space-between;
            margin: 20rem 0;

            .fl {
                position: relative;
                width: 70rem;
                height: 70rem;

                img {
                    border-radius: 17rem;
                }

                span {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 45rem;
                    background-color: orange;
                    height: 20rem;
                    border-radius: 17rem 0 17rem 0;
                    color: white;
                    text-align: center;
                    line-height: 20rem;
                    font-size: 10rem;

                    // &:nth-of-type(1) {
                    //     background-color: red;

                    // }
                    &.active{
                        background-color: red;
                    }
                    &.active2{
                        background-color: rgb(255, 128, 0);
                    }
                }

            }

            .fr {
                margin-left: 20rem;

                .title {
                    font-size: 14rem;
                    font-weight: 600;
                }

                .author {
                    margin-top: 25rem;
                    color: #999;
                }
            }
        }
    }
}
</style>