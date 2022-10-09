<template>
    <li @click="gotoactive(spical.content_id,spical.category)">
        <div class="mask">
            <img v-if="spical.img_url" :src="spical.img_url" alt="">
            <div class="maskson"></div>
            <div class="tittle">{{spical.title}}</div>
        </div>


        <div class="content">
            <div class="title-content">{{spical.forward}}</div>
            <div class="bottom">
                <div class="author">{{spical?.author.user_name}}</div>
                <div class="fr">
                    <div class="dz" @click.stop="dzzzzz">
                        <img v-if="!dzing" src="../../assets/图标/discover_laud_unselected.png" alt="">
                        <img v-else src="../../assets/图标/bottom_laud_selected.png" alt="">
                        <div class="sl">{{dznum}}</div>
                    </div>
                    <img src="../../assets/图标/share_image.png" alt="">
                </div>
            </div>
        </div>
    </li>
</template>

<script>
export default {
    data() {
        return {
            dzing: false,
            dznum: this.spical.like_count
        }
    },
    props: {
        spical: Object
    },
    methods: {
        dzzzzz() {
            this.dzing = !this.dzing;
            if (!this.dzing) {
                this.dznum--

            } else {
                this.dznum++
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
    position: relative;
    padding: 15rem;

    .mask {
        position: relative;

        .maskson {
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: rgba(40, 40, 40, 0.162);
            top: 0;
            left: 0;
        }

        .tittle {
            font-size: 16rem;
            color: white;
            position: absolute;
            bottom: 15rem;
            left: 20rem;
            font-weight: 600;
        }
    }

    .content {
        width: 100%;
        height: 100rem;
        background-color: white;
        margin-top: -4rem;
        padding: 20rem 20rem 10rem 20rem;

        .title-content {
            // text-align: center;
            font-size: 12rem;
            color: black;
        }

        .bottom {
            margin-top: 15rem;
            display: flex;
            justify-content: space-between;

            .author {
                font-size: 12rem;
                color: #999;
            }

            .fr {
                display: flex;
                justify-content: space-between;
                width: 80rem;

                img {
                    height: 18rem;
                    width: 18rem;
                }

                .dz {
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    .sl {
                        color: #999;
                        margin-left: 5rem;
                    }
                }
            }
        }
    }

}
</style>