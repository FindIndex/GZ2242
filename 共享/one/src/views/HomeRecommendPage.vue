<template>
    <div class="tj">
        <div class="tj-head" v-if="$route.query.index != 8">
            <img src="../assets/图标/return_image_4_0.png" alt="" @click="$router.go(-1)">
            <!-- v-if="!this.$route.query.categoryName.tag" -->
            <span>{{type}}</span>
            <!-- <span v-if="this.$route.query.categoryName.tag">{{this.$route.query.categoryName.tag.title}}</span> -->
            <img src="../assets/图标/favourite_gray.png" alt="">
        </div>
        <div class="tj-title">{{article?.title}}</div>
        <div class="tj11-title" v-if="article?.simple_author">{{article?.simple_author[0]}}</div>
        <div class="tjtj-title" v-if="article.question_brief">{{article.question_brief}}</div>
        <div class="tjtjtj-title" v-if="article?.simple_answerer">{{article.simple_answerer}}</div>
        <div v-html="article.content" class="tj-content"></div>
        <div class="tj-bottom">
            <div class="tj-two">{{article.editor}}</div>
            <div class="tj-one">{{article.copyright}}</div>
        </div>
        <div class="tj-author">
            <h2>作者</h2>
            <div class="hg"></div>
            <div class="content" v-if="author">
                <div class="fl"><img :src="author?.web_url" alt=""></div>
                <div class="md">
                    <h3>{{author.user_name}}</h3>
                    <p>{{author.summary}}</p>
                </div>
                <div class="fr">
                    <div class="bk">关注</div>
                </div>
            </div>
        </div>
        <div class="tj-comment">
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
import HomeDiscuss from "@/components/HomeDiscuss.vue"
const which = {
    1: "阅读",
    3: "问答",
    8: "电台",
}
export default {
    components: {
        HomeDiscuss,
    },
    data() {
        return {
            article: [],
            discuss: [],
            author: {},
            type: "",
            dz: "",
            pl: "",
            dzing: false,
        }
    },
    methods: {
        dzzzzz() {
            this.dzing = !this.dzing;
            if (!this.dzing) {
                this.dz--

            } else {
                this.dz++
            }
        },
        getread(id) {
            this.axios
                .get(`https://apis.netstart.cn/one/essay/htmlcontent/${id}`)
                .then((res) => {
                    this.article = res.data.data.json_content
                    this.author = res.data.data.author_list[0]
                    this.dz = res.data.data.praisenum
                    this.pl = res.data.data.commentnum
                })
        },
        getquestions(id) {
            this.axios
                .get(`https://apis.netstart.cn/one/question/htmlcontent/${id}`)
                .then((res) => {
                    this.article = res.data.data.json_content
                    this.author = res.data.data.author_list[0]
                    this.dz = res.data.data.praisenum
                    this.pl = res.data.data.commentnum
                })
        },
        getquestionspl(id) {
            this.axios
                .get(`https://apis.netstart.cn/one/comment/praiseandtime/question/${id}/0`)
                .then((res) => {
                    this.discuss = res.data.data.data
                    // this.author = res.data.data.author_list[0]
                })
        },
        gettl(id) {
            this.axios
                .get(`https://apis.netstart.cn/one/comment/praiseandtime/essay/${id}/0`)
                .then((res) => {
                    this.discuss = res.data.data.data

                    // this.article = res.data.data.json_content
                    // this.author = res.data.data.author_list[0]
                })
        },
        // whichtype() {

        // },
    },
    created() {
        if (this.$route.query.index == 1) {
            // console.log(1);
            this.getread(this.$route.query.id)
            this.gettl(this.$route.query.id)
        }
        if (this.$route.query.index == 3) {
            // console.log(3);
            this.getquestions(this.$route.query.id)
            this.getquestionspl(this.$route.query.id)
        }
        this.type = which[this.$route.query.index]
    }
}
</script>

<style lang="less" >
.tj {

    .tj-head {
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
        }

        img {
            width: 20rem;
            height: 20rem;
        }

        border-bottom: 1rem solid rgba(223, 221, 221, 0.384);
    }

    .tj-title {
        margin-top: 40rem;
        padding: 15rem;
        font-size: 20rem;
        font-weight: bold;
        margin-bottom: 20rem;

    }

    .tj11-title {
        padding: 15rem;
        margin-bottom: 20rem;
    }

    .tjtj-title {
        font-size: 16rem;
        font-weight: bold;
        padding: 8rem 15rem;
        margin-top: -20rem;
        border-bottom: 1rem solid rgba(199, 199, 199, 0.385);
    }

    .tjtjtj-title {
        font-size: 12rem;
        padding: 15rem;
    }

    .tj-bottom {
        padding: 15rem;
        font-size: 12rem;
        color: rgba(158, 158, 158, 0.838);
    }

    .tj-content {
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

    .tj-author {
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

    .tj-comment {
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