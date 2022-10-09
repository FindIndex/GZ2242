<template>
    <li @click="gotoactive(video.id,video.category)">
        <div class="top">
            <img class="big" v-if="video" :src="video.cover" alt="">
            <div class="mask"></div>
            <div class="qi">
                <img src="../../assets/图标/one_radio_icon.png" alt="">
                <span>{{video.volume}}</span>
            </div>
            <div class="title">{{video.title}}</div>
            <div class="video"><img src="../../assets/图标/songlist_play_gray.png" alt=""></div>
        </div>
        <div class="bottom">
            <div class="author">
                <img v-if="video" :src="video.author.web_url" alt="">
                <div class="name">{{video.author.user_name}}</div>
            </div>
            <div class="dz" @click="dzzzzz">
                <img v-if="!isdz" src="../../assets/图标/discover_laud_unselected.png" alt="">
                <img v-else src="../../assets/图标/feeds_laud_selected.png" alt="">
                <div class="nb">{{dz}}</div>
            </div>
            <img src="../../assets/图标/feeds_share.png" alt="" class="fx">
        </div>
    </li>
</template>

<script>
export default {
    data() {
        return {
            isdz: false,
            dz:this.video.like_count
        }
    },
    props: {
        video: Object,
    },
    methods: {
        dzzzzz() {
            // console.log(n);
            this.isdz = !this.isdz
            if (this.isdz) {
                this.dz++
            } else {
               this.dz--
            }
        },
        gotoactive(id, n) {
            this.$router.push({ path: '/HomeArticle', query: { id: id, index: n } })

        }
    }
}
</script>

<style lang="less" scoped>
li {
    border-radius: 7rem;
    padding: 15rem;

    .top {
        position: relative;

        .big {
            border-radius: 7rem;
        }

        .mask {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 7rem;
            background-color: rgba(32, 32, 32, 0.2);
        }

        .qi {
            position: absolute;
            top: 10rem;
            left: 10rem;
            display: flex;
            justify-content: center;
            align-items: center;

            img {
                height: 12rem;
            }

            span {
                display: block;
                font-size: 12rem;
                color: rgb(210, 210, 210);
                margin-left: 3rem;
                margin-top: 2rem;
            }
        }

        .title {
            position: absolute;
            bottom: 15rem;
            left: 10rem;
            font-size: 16rem;
            font-weight: 500;
            color: white;
        }

        .video {
            position: absolute;
            right: 10rem;
            bottom: 10rem;

            img {
                width: 30rem;
                height: 30rem;
            }
        }
    }

    .bottom {
        display: flex;
        justify-content: space-between;
        margin-top: 15rem;

        .author {
            display: flex;
            align-items: center;

            img {
                width: 20rem;
                height: 20rem;
                border-radius: 50%;
            }

            .name {
                font-size: 12rem;
                color: #999;
                margin-left: 5rem;
            }

        }

        .dz {
            display: flex;
            align-items: center;

            img {
                width: 20rem;
                height: 20rem;
            }

            .nb {
                font-size: 10rem;
                color: #999;
                margin-left: 3rem;
            }
        }

        .fx {
            width: 20rem;
            height: 20rem;
        }
    }
}
</style>