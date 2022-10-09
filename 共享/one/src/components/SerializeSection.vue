<template>
    <div class="list-mask" v-if="$route.query.index == 2">
        <div class="list-kk">
            <div class="top">
                <img src="../assets/图标/close_gray.png" alt="" @click="$emit('list-close')">
                <div class="title">{{article.title}}</div>
            </div>
            <div class="bottom">
                <ul>
                    <!-- <li v-for=" (i,index) in  list" :key="index">{{index+1}}</li> -->
                    <SerializeSectionItem @choose-id="$emit('choose-id',$event)" v-for=" (i,index) in  list"
                        :key="index" :i="i" :index="index" :list="list" :id="id" />
                </ul>
            </div>
        </div>
    </div>

</template>

<script>
import SerializeSectionItem from '@/components/items/SerializeSectionItem.vue'
import { stringify } from 'qs';
export default {
    components: {
        SerializeSectionItem,
    },
    props: {
        article: Object,
        list: Array,
        id: stringify,
        // isshowlist:Boolean
    }
}
</script>

<style lang="less" scoped>
.list-mask {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: black;

    .list-kk {
        width: 375rem;
        height: 300rem;
        background-color: #fff;
        margin-top: 150rem;
        position: relative;

        .top {
            img {
                position: absolute;
                width: 20rem;
                height: 20rem;
                top: 10rem;
                left: 10rem;
            }

            .title {
                font-size: 14rem;
                text-align: center;
                padding: 20rem 0;
                border-bottom: 1rem solid rgb(200, 200, 200);
            }
        }

        .bottom {

            // padding: 10rem;
            ul {
                display: flex;
                // justify-content: space-around;
                flex-wrap: wrap;


            }
        }
    }
}
</style>