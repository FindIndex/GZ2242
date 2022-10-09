<template>
    <div class="seactions">
        <div class="head">
            <div class="stage">
                <ul class="sectiton">
                    <li v-for=" da in  data" :key=" da.id">
                        <div class="father" :class="{active:(activeIndex == da.id)}">
                            <a href.praret="" @click="activeIndex=da.id">{{da.ctn}}</a>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="search">
                <img src="../assets/图标/search.png" alt="">
            </div>
        </div>
        <SerializeContent :index="activeIndex" />
    </div>
</template>

<script>
import SerializeContent from '@/components/SerializeContent.vue'
export default {
    components: {
        SerializeContent,
    },
    data() {
        return {
            data: [
                { "id": 2022, "ctn": "2022" },
                { "id": 2021, "ctn": "2021" },
                { "id": 2020, "ctn": "2020" },
                { "id": 2019, "ctn": "2019" },
                { "id": 2018, "ctn": "2018" },
                { "id": 2017, "ctn": "2017" },
                { "id": 2016, "ctn": "2016" },
            ],
            activeIndex: JSON.parse(window.localStorage.getItem("whichyear") || '2022')
        }
    },
    watch: {
        activeIndex() {
            window.localStorage.setItem("whichyear", JSON.stringify(this.activeIndex))
        }
    },
    // destroyed() {
    //     // console.log("xiaohui");
    //     window.localStorage.removeItem('whichyear');
    //     this.activeIndex = 2022
    // }
}
</script>

<style lang="less" scoped>
.seactions {
    width: 375rem;
    height: 100%;
    overflow: hidden;

    .head {
        width: 375rem;
        display: flex;
        position: fixed;
        top: 0;
        left: 0;
        background-color: white;
        z-index: 99;

        .stage {
            width: 100%;
            height: 45rem;
            border-color: white;
            position: relative;

            .sectiton {
                display: flex;
                width: 340rem;
                height: 100%;
                align-items: center;
                justify-content: center;
                overflow-x: auto;

                &::-webkit-scrollbar {
                    display: none;
                }

                li {
                    width: 15%;
                    flex-shrink: 0;
                    margin: 0 8rem;

                    &:nth-child(7) {
                        margin-right: 45rem;
                    }

                    &:nth-child(1) {
                        margin-left: 175rem;
                    }

                    .father {
                        width: 50rem;
                        height: 29rem;
                        // background-color: red;
                        border-radius: 30rem;
                        display: flex;
                        justify-content: center;
                        align-items: center;

                        a {
                            text-decoration: none;
                            color: rgb(117, 117, 117);
                            font-size: 12rem;
                            font-weight: 600;

                            // display: block;


                        }

                        &.active {
                            // font-size: 20rem;
                            background-color: rgb(44, 44, 44);

                            a {
                                color: white;
                            }

                            // color: black;
                        }
                    }

                }
            }
        }

        .search {
            width: 40rem;
            height: 45rem;
            display: flex;
            justify-content: center;
            align-items: center;

            img {
                width: 20rem;
                height: 20rem;
                // display: flex;

            }
        }

    }


}
</style>