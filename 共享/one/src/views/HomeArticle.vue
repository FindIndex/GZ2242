<template>
    <div class="xq">
        <div class="bgn" v-if="article.cover">
            <img class="bj" v-if="article.cover" :src="article?.cover" alt="">
            <div class="playing">
                <img src="../assets/图标/feeds_music_wave.png" alt="" class="feed1">
                <div class="which">
                    <img class="play" v-if="!palying" src="../assets/图标/feeds_radio_play.png" alt=""
                        @click="$store.commit('changePlay')">
                    <img class="pause" v-if="palying" src="../assets/图标/feeds_radio_pause.png" alt=""
                        @click="$store.commit('changePlayf')">
                </div>
                <!-- @play=" playing = true" @pause=" playing = false" -->
                <audio :src=article.radio_url autoplay ref="audio" @play="$store.commit('changePlay')"
                    @pause="$store.commit('changePlayf')"></audio>

                <img src="../assets/图标/feeds_music_wave.png" alt="" class="feed2">
            </div>
        </div>
        <div class="xq-head" v-if="$route.query.index != 8">
            <img src="../assets/图标/return_image_4_0.png" alt="" @click="$router.go(-1)">
            <div class="div" v-if="this.$route.query.categoryName">
                <span v-if="!this.$route.query.categoryName?.tag">{{type}}</span>
                <span v-if="this.$route.query.categoryName.tag">{{this.$route.query.categoryName.tag.title}}</span>
            </div>
            <span v-if="type === undefined">{{article?.title}}</span>
            <span v-if="!this.$route.query.categoryName">{{type}}</span>
            <img src="../assets/图标/favourite_gray.png" alt="">
        </div>
        <div v-if="showlocading" class="locadingmask">
            <div class="locading"></div>
        </div>
        <div class="radio-returns" v-if="$route.query.index == 8">
            <img class="radio-return" src="../assets/图标/return_image_4_0.png" alt="" @click="$router.go(-1)">
            <img src="../assets/图标/favourite_gray.png" alt="">
        </div>
        <div class="xq-title">{{article?.title}}</div>
        <div class="l-title" v-if="article?.simple_author&&$route.query.index != 2">{{article?.simple_author[0]}}</div>
        <div class="listf" v-if="$route.query.index == 2">
            <div class="l-title" v-if="article?.simple_author">{{article?.simple_author[0]}}
            </div>
            <div class="l-list" v-if="$route.query.index == 2" @click="isshowlist = true">
                <img src="../assets/图标/detail_content.png" alt="">
            </div>
        </div>
        <SerializeSection :article="article" :list="$route.query.list" v-show="isshowlist" :id="$route.query.id"
            @list-close="isshowlist= false" @choose-id="chooseId" />


        <div class="ll-title" v-if="article.question_brief">{{article.question_brief}}</div>
        <div class="lll-title" v-if="article?.simple_answerer">{{article.simple_answerer}}</div>
        <div v-html="article.content" class="xq-content"></div>
        <div class="xq-bottom">
            <!-- <div class="xq-two">{{article?.editor}}</div> -->
            <div class="xq-one">{{article?.copyright}}</div>
        </div>
        <!-- v-if="$route.query.index != 3" -->
        <div class="choosezj" v-if="$route.query.index == 2">
            <div class="prev" @click="prevzz"
                :class="{active: this.$route.query.list.findIndex(value => value == this.$route.query.id) === 0}">前一章节
            </div>
            <div class="next" @click="nextzz"
                v-if="this.$route.query.list.findIndex(value => value == this.$route.query.id) != $route.query.list.length-1 ">
                后一章节</div>
            <div class="next" style="color:grey"
                v-if="this.$route.query.list.findIndex(value => value == this.$route.query.id) == $route.query.list.length-1 ">
                已完结</div>
        </div>
        <div class="xq-author">
            <h2 v-if="$route.query.index != 8">作者</h2>
            <h2 v-if="$route.query.index == 8">主播</h2>
            <div class="hg"></div>
            <div class="content" v-if="author">
                <div class="fl"><img v-if="author?.web_url" :src="author?.web_url" alt=""></div>
                <div class="md">
                    <h3>{{author.user_name}}</h3>
                    <p>{{author.summary}}</p>
                </div>
                <div class="fr">
                    <div class="bk">关注</div>
                </div>
            </div>
        </div>
        <div class="recommend" v-if="$route.query.index != 8 && commends.length != 0">
            <h2>相关推荐</h2>
            <div class="hg"></div>
            <ul>
                <HomeRecommed v-for=" (commend,index) in  commends" :key=" index" :commend="commend" />
            </ul>
        </div>
        <div class="comment">
            <h2>评论列表</h2>
            <div class="hg"></div>
            <ul>
                <HomeDiscuss v-for="(discus,index) in discuss" :key="index" :discus="discus" />
            </ul>
        </div>
        <div class="last">
            <input type="text" placeholder="写下一个评论...">
            <div class="fr">
                <div class="dz" @click="dzzzzz ">
                    <img v-if="!dzing" src="../assets/图标/feeds_laud_default.png" alt="">
                    <img v-if="dzing" src="../assets/图标/bottom_laud_selected.png" alt="">
                    <span>{{dz}}</span>
                </div>
                <div class="pl"><img src="../assets/图标/comment_image.png" alt=""><span>{{pl}}</span></div>
                <img class="fx" src="../assets/图标/share_image.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import merge from 'webpack-merge';
import HomeDiscuss from "@/components/HomeDiscuss.vue"
import HomeRecommed from "@/components/HomeRecommed.vue"
import SerializeSection from "@/components/SerializeSection.vue"
// import { query } from "express"

export default {
    components: {
        HomeDiscuss,
        HomeRecommed,
        SerializeSection,
        // merge
    },
    data() {
        return {
            article: {},
            type: "",
            discuss: [],
            author: {},
            commends: [],
            dz: "",
            pl: "",
            dzing: false,
            // dznum:"",
            which: {
                1: "阅读",
                3: "问答",
                8: "电台",
                5: "影视",
                // 2: "211",
                4: "一个音乐",
            },
            isshowlist: false,
            showlocading: false,
            // vShow:true,
        }
    },
    methods: {
        prevzz() {
            // console.log(this.$route.query.id);
            var ndex = this.$route.query.list.findIndex(value => value == this.$route.query.id)
            // console.log(ndex);
            if (ndex != 0) {
                ndex--
                this.$router.push({
                    query: merge(this.$route.query, { 'id': this.$route.query.list[ndex] })
                })
                this.$router.go(0)
            }
        },
        nextzz() {
            var ndex = this.$route.query.list.findIndex(value => value == this.$route.query.id)
            // console.log(ndex);
            if (ndex != this.$route.query.list - 1) {
                ndex++
                this.$router.push({
                    query: merge(this.$route.query, { 'id': this.$route.query.list[ndex] })
                })
                this.$router.go(0)
            }
        },
        chooseId(id) {
            console.log(id);
            console.log(this.$route.query.id);
            // this.$route.query.id = id
            this.$router.push({
                query: merge(this.$route.query, { 'id': id })
            })
            this.$router.go(0)

            this.isshowlist = false
        },
        dzzzzz() {
            this.dzing = !this.dzing;
            if (!this.dzing) {
                this.dz--

            } else {
                this.dz++
            }
        },
        getread(id) {
            this.showlocading = true
            this.axios
                .get(`https://apis.netstart.cn/one/essay/htmlcontent/${id}`)
                .then((res) => {
                    this.showlocading = false
                    this.article = res.data.data.json_content
                    this.author = res.data.data.author_list[0]
                    this.dz = res.data.data.praisenum
                    this.pl = res.data.data.commentnum
                })
            this.axios
                .get(`https://apis.netstart.cn/one/comment/praiseandtime/essay/${id}/0`)
                .then((res) => {
                    this.discuss = res.data.data.data

                    // this.article = res.data.data.json_content
                    // this.author = res.data.data.author_list[0]
                })
            this.axios
                .get(`https://apis.netstart.cn/one/relatedforwebview/essay/${id}`)
                .then((res) => {
                    // this.discuss = res.data.data.data
                    this.commends = res.data.data
                })
        },
        getquestions(id) {
            this.showlocading = true
            this.axios
                .get(`https://apis.netstart.cn/one/question/htmlcontent/${id}`)
                .then((res) => {
                    this.showlocading = false
                    this.article = res.data.data.json_content
                    this.author = res.data.data.author_list[0]
                    this.dz = res.data.data.praisenum
                    this.pl = res.data.data.commentnum
                })
            this.axios
                .get(`https://apis.netstart.cn/one/comment/praiseandtime/question/${id}/0`)
                .then((res) => {
                    this.discuss = res.data.data.data
                    // this.author = res.data.data.author_list[0]
                })
            this.axios
                .get(`https://apis.netstart.cn/one/relatedforwebview/question/${id}`)
                .then((res) => {
                    // this.discuss = res.data.data.data
                    this.commends = res.data.data
                })
        },
        // getquestionspl(id) {

        // },
        // gettl(id) {

        // },
        getrodio(id) {
            this.showlocading = true
            this.axios
                .get(`https://apis.netstart.cn/one/radio/htmlcontent/${id}`)
                .then((res) => {
                    this.showlocading = false
                    this.article = res.data.data.json_content
                    this.author = res.data.data.author_list[0]
                    this.dz = res.data.data.praisenum
                    this.pl = res.data.data.commentnum
                })
            this.axios
                .get(`https://apis.netstart.cn/one/comment/praiseandtime/radio/${id}/0`)
                .then((res) => {
                    this.discuss = res.data.data.data
                })
        },
        // getrodiopl(id) {

        // },
        getmove(id) {
            this.showlocading = true
            this.axios
                .get(`https://apis.netstart.cn/one/comment/praiseandtime/movie/${id}/0`)
                .then((res) => {

                    this.discuss = res.data.data.data
                })
            this.axios
                .get(`https://apis.netstart.cn/one/movie/htmlcontent/${id}`)
                .then((res) => {
                    this.showlocading = false
                    this.article = res.data.data.json_content
                    this.author = res.data.data.author_list[0]
                    this.dz = res.data.data.praisenum
                    this.pl = res.data.data.commentnum
                })
            this.axios
                .get(`https://apis.netstart.cn/one/relatedforwebview/movie/${id}`)
                .then((res) => {
                    // this.discuss = res.data.data.data
                    this.commends = res.data.data
                })
        },
        getSerial(id) {
            this.showlocading = true
            this.axios
                .get(`https://apis.netstart.cn/one/comment/praiseandtime/serial/${id}/0`)
                .then((res) => {

                    this.discuss = res.data.data.data
                })
            this.axios
                .get(`https://apis.netstart.cn/one/serialcontent/htmlcontent/${id}`)
                .then((res) => {
                    this.showlocading = false
                    this.article = res.data.data.json_content
                    this.author = res.data.data.author_list[0]
                    this.dz = res.data.data.praisenum
                    this.pl = res.data.data.commentnum
                })
        },
        getmisuic(id) {
            this.showlocading = true
            this.axios
                .get(`https://apis.netstart.cn/one/music/htmlcontent/${id}`)
                .then((res) => {
                    this.showlocading = false
                    this.article = res.data.data.json_content
                    this.author = res.data.data.author_list[0]
                    this.dz = res.data.data.praisenum
                    this.pl = res.data.data.commentnum
                })
            this.axios
                .get(`https://apis.netstart.cn/one/comment/praiseandtime/music/${id}/0`)
                .then((res) => {
                    this.discuss = res.data.data.data
                })
        },
        whichtype() {
            this.type = this.which[this.$route.query.index]
        },
        // changeStatue: function () {
        // this.playing = change
        // this.$store.commit('changePlay')
        // if (this.palying) {
        //     this.$refs.audio.play()
        // } else {
        //     this.$refs.audio.pause()
        // }
        // },
    },
    created() {
        if (this.$route.query.index == 1) {
            // console.log(1);
            this.getread(this.$route.query.id)
            // this.gettl(this.$route.query.id)
        }
        if (this.$route.query.index == 3) {
            // console.log(3);
            this.getquestions(this.$route.query.id)
            // this.getquestionspl(this.$route.query.id)
        }
        if (this.$route.query.index == 8) {
            this.getrodio(this.$route.query.id)
            // this.getrodiopl(this.$route.query.id)
        }
        if (this.$route.query.index == 5) {
            this.getmove(this.$route.query.id)
        }
        if (this.$route.query.index == 2) {
            this.getSerial(this.$route.query.id)
        }
        if (this.$route.query.index == 4) {
            this.getmisuic(this.$route.query.id)
        }
    },
    watch: {
        $route: {
            handler: function (route) {
                route
                // console.log("跳转回参数页面", route.query.redirect);
                // console.log("luyoubianh", route.query.id);
                if (this.$route.query.index == 2) {
                    this.getSerial(this.$route.query.id)
                }
                if (this.$route.query.index == 8) {
                    this.$store.commit('whichplagyingD', { song: this.$route.query.id })
                }

                // this.redirect = route.query && route.query.redirect;
            },
            immediate: true,

        },
        // "$store.state.palying"() {
        //     // this.drawer = this.$store.state.drawerStatus;
        //     if (this.$store.state.palying) {
        //         this.$refs.audio.play()
        //     } else {
        //         this.$refs.audio.pause()
        //     }
        //     // console.log(this.$store.state.palying);
        // }

        // palying(){
        //     console.log(palying);
        // }
    },
    mounted() {
        // console.log(this.$refs.content);
        // this.$refs.content.style.textAlign = "left";
        this.whichtype()

        // this.dznum = this.dz
    },
    computed: {
        ...mapState(["palying"]),


    }

}
</script>

<style lang="less" >
.xq {
    .bgn {
        position: relative;

        .locadingmask {
            position: fixed;
            top: 40rem;
            left: 0;
            width: 100%;
            height: 87%;
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

        .playing {
            display: flex;
            position: absolute;
            bottom: 20rem;
            left: 0;
            width: 100%;
            justify-content: space-around;

            .feed1,
            .feed2 {
                width: 130rem;
            }

            .play,
            .pause {
                width: 30rem;
            }
        }
    }

    .xq-head {
        display: flex;
        align-items: center;
        // justify-content: space-between;
        
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
            margin-left: 150rem;
        }

        img {
            width: 20rem;
            height: 20rem;
        }

        border-bottom: 1rem solid rgba(223, 221, 221, 0.384);
    }

    .xq-title {
        margin-top: 40rem;
        padding: 15rem;
        font-size: 20rem;
        font-weight: bold;
        margin-bottom: 20rem;

    }

    .l-title {
        padding: 15rem;
        margin-bottom: 20rem;
    }


    .listf {
        display: flex;
        justify-content: space-between;

        .l-title {
            padding: 15rem;
            margin-bottom: 20rem;
        }

        .l-list {
            padding: 15rem;
            margin-bottom: 20rem;

            img {
                width: 20rem;
                height: 20rem;
            }
        }
    }

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
        }
    }

    .ll-title {
        font-size: 16rem;
        font-weight: bold;
        padding: 8rem 15rem;
        margin-top: -20rem;
        border-bottom: 1rem solid rgba(199, 199, 199, 0.385);
    }

    .lll-title {
        font-size: 12rem;
        padding: 15rem;
    }

    .radio-returns {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 10rem;

        img {
            width: 20rem;
            height: 20rem;
        }
    }


    .xq-content {
        text-align: left;
        font-size: 16rem;
        padding: 15rem;

        p {
            &:nth-of-type(1) {
                text-align: left !important;
            }

            margin-bottom: 10rem;
        }
    }

    .xq-bottom {
        padding: 15rem;
        font-size: 12rem;
        color: rgba(158, 158, 158, 0.838);
    }

    .choosezj {
        display: flex;
        justify-content: space-between;
        padding: 15rem;
        font-size: 16rem;
        font-weight: 600;

        .prev {
            &.active {
                color: #999;
            }
        }
    }

    .comment {
        padding: 15rem;

        h2 {
            font-size: 12rem;
            font-weight: 600;
        }

        .hg {
            margin-top: 10rem;
            width: 60rem;
            height: 3rem;
            background-color: black;
        }
    }

    .recommend {
        padding: 15rem;

        h2 {
            font-size: 12rem;
            font-weight: 600;
        }

        .hg {
            margin-top: 10rem;
            width: 60rem;
            height: 3rem;
            background-color: black;
        }
    }

    .xq-author {
        padding: 15rem;
        margin-bottom: 15rem;

        h2 {
            font-size: 12rem;
            font-weight: 600;
        }

        .hg {
            margin-top: 10rem;
            width: 60rem;
            height: 3rem;
            background-color: black;
        }

        .content {
            display: flex;
            margin-top: 20rem;
            justify-content: space-between;

            // justify-content: space-around;

            .fl {

                img {
                    width: 40rem;
                    height: 40rem;
                    border-radius: 50%;
                }
            }

            .md {

                h3 {
                    font-size: 16rem;
                    font-weight: 600;
                }

                p {
                    color: #999;

                }
            }

            .fr {
                display: flex;
                justify-content: center;
                align-items: center;

                .bk {
                    width: 40rem;
                    height: 20rem;
                    border: 1rem solid grey;
                    text-align: center;
                    // margin-top: 20rem;
                }
            }
        }

    }

    .last {
        width: 100%;
        display: flex;
        height: 45rem;
        background-color: rgb(242, 242, 242);
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