<template>
    <div class="playBar" @click="$emit('change-show')">
        <div class="content">
            <div class="top">{{title}}</div>
            <input class="progressBar" type="range" name="" id="" :max="duration" :value=" tmpCurrentTime"
                @input.stop="draging = true"
                @change.stop=" draging = false;  $emit('update-time', $event.target.value );">
            <div class="author">{{author}}</div>
            <!-- String(parseInt(currentTime / 60)).padStart(2, "0")}}:{{String(parseInt(currentTime%60)).padStart(2,"0") -->
            <div class="time">
                {{String(parseInt((duration-currentTime)/60)).padStart(2,"0")}}'{{String(parseInt((duration-currentTime)%60)).padStart(2,"0")}}'
            </div>
            <div class="control">
                <div class="prev">
                    <img src="@/assets/图标/last_disable.png" alt="">
                </div>
                <div class="play">
                    <img v-if="!palying" src="@/assets/图标/player_play.png" alt=""
                        @click.stop="$store.commit('changePlay')">
                    <img v-else src="../assets/图标/player_pause.png" alt="" @click.stop="$store.commit('changePlayf')">
                </div>
                <div class="next">
                    <img src="@/assets/图标/next_disable.png" alt="">
                </div>
            </div>

            <div class="tz" @click="gotoactive(acticle.id, acticle.category)"><img
                    src="@/assets/图标/fm_info.png" alt=""></div>
        </div>
    </div>
</template>

<script>
import { stringify } from 'qs';
import { mapState } from "vuex";
export default {
    props: {
        title: stringify,
        duration: Number,
        currentTime: Number,
        author: stringify,
        acticle: Object,
    },
    data() {
        return {
            tmpCurrentTime: this.currentTime,
            draging: false,
            // updatetime:0,
        }
    },
    methods: {

        gotoactive(id, n) {
            this.$router.push({ path: '/HomeArticle', query: { id: id, index: n } })

        }
    },
    watch: {
        currentTime(newcurrentTime) {
            if (!this.draging) {
                this.tmpCurrentTime = newcurrentTime;
            }
        }
    },
    computed: {
        ...mapState(["palying"])
    },

}
</script>

<style lang="less" scoped>
.playBar {
    position: fixed;
    top: 0;
    z-index: 999;
    width: 100%;
    height: 100%;
    // height: 200rem;
    background-color: rgba(50, 50, 50, 0.326);

    .content {
        position: absolute;
        width: 100%;
        height: 200rem;
        background-color: rgb(250, 250, 250);

        input.progressBar {
            position: relative;
            z-index: 10;
            width: 94%;
            height: 4rem;
            background: grey;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            border-radius: 15rem;
            outline: none;
            overflow: hidden;
            margin: 20rem 12rem;
        }

        input::-webkit-slider-thumb {
            appearance: none;
            width: 5rem;
            height: 10rem;
            background: black;
            border-radius: 50%;
            box-shadow: calc(-50vh - 4rem) 0 0 50vh black, inset 0 0 5rem black;
        }

        input::-webkit-slider-thumb:hover {
            // background: #2ed573;
            width: 20rem;
            height: 20rem;
        }

        .time {
            position: absolute;
            right: 10rem;
            top: 80rem;
        }

        .author {
            text-align: center;
            color: #999;
            font-size: 10rem;
        }

        .control {
            display: flex;
            justify-content: space-around;
            margin-top: 20rem;
            width: 200rem;
            margin-left: 88rem;

            img {
                width: 30rem;
                height: 30rem;
            }
        }

        .tz {
            position: absolute;
            bottom: 20rem;
            right: 20rem;
            width: 20rem;
            height: 20rem;
        }


    }

    .top {
        text-align: center;
        font-size: 14rem;
        padding: 15rem;
        color: #999;
    }


}
</style>