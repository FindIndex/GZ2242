<template>
    <div>
        <ul class="head">
            <li v-for="(s,index) in section" :key="s.ctn" :class="{active:activeIndex === index}"
                @click="activeIndex=index"><a href.prevent="">{{s.ctn}}</a></li>
        </ul>
        <ul class="picture" v-if="activeIndex === 0 && pic.length != 0">
            <SearchPictureItem v-for=" pi in pic" :key="pi.id" :picture="pi" />
        </ul>
        <img class="nofind" v-if="activeIndex === 0 && pic.length == 0" src="../assets/图标/no_search_result.png" alt="">
        <ul class="picture" v-if="activeIndex === 1">
            <SearchPictureItem v-for=" pi in read" :key="pi.id" :picture="pi" />
        </ul>
        <img class="nofind" v-if="activeIndex === 1 && read.length == 0" src="../assets/图标/no_search_result.png" alt="">
        <ul class="picture" v-if="activeIndex === 2">
            <SearchPictureItem v-for=" pi in music" :key="pi.id" :picture="pi" />
        </ul>
        <img class="nofind" v-if="activeIndex === 2 && music.length == 0" src="../assets/图标/no_search_result.png" alt="">
        <ul class="picture" v-if="activeIndex === 3">
            <SearchPictureItem v-for=" pi in movie" :key="pi.id" :picture="pi" />
        </ul>
        <img class="nofind" v-if="activeIndex === 3 && movie.length == 0" src="../assets/图标/no_search_result.png" alt="">
        <ul class="picture" v-if="activeIndex === 4">
            <SearchPictureItem v-for=" pi in radio" :key="pi.id" :picture="pi" />
        </ul>
        <img class="nofind" v-if="activeIndex === 4 && radio.length == 0" src="../assets/图标/no_search_result.png" alt="">
    </div>
</template>

<script>
import SearchPictureItem from '@/components/items/SearchPictureItem.vue'
export default {
    components: {
        SearchPictureItem
    },
    data() {
        return {
            section: [
                { "id": 1, "ctn": "图文" },
                { "id": 2, "ctn": "阅读" },
                { "id": 3, "ctn": "音乐" },
                { "id": 4, "ctn": "影视" },
                { "id": 5, "ctn": "电台" }
            ],
            activeIndex: 0
        }
    },
    props: {
        pic: Array,
        read: Array,
        music: Array,
        movie: Array,
        radio: Array,
    }
}
</script>

<style lang="less" scoped>
.head {
    display: flex;

    li {
        margin: 20rem;

        a {
            font-size: 14rem;
            color: #999;
            text-decoration: none;
            border-bottom: 1rem solid transparent;
            padding-bottom: 10rem;
            font-weight: 600;
        }

        &.active {
            a {
                color: black;
                border-bottom: 2rem solid black;
            }

        }
    }

}

img.nofind {
    width: 288rem;
    height: 100%;
    margin: 42rem;
}
</style>