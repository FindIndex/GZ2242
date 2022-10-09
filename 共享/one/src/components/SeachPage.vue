<template>
    <div class="searchss">
        <form action="/">
            <van-search v-model="value" show-action placeholder="在这里写下想寻找的"
                @search=" sho=true;  getpicserult(value); getreadserult(value); getmusicresult(value);getmoviesult(value)"
                @cancel="onCancel" />
        </form>
        <SearchResult v-if="sho" :pic="pic" :read="read" :music="music" :movie="movie" :radio="radio" />
        <ul class="section" v-if="!sho">
            <!-- $router.push({ path: '/SearchDelites',query:{content:ctn}}) -->
            <li v-for="n in neir" :key="n.id" @click="$router.push({ path: '/SearchDelites',query:{content:n.ctn}})">
                {{n.ctn}}</li>
            <!-- <li v-for="n in neir" :key="n.id">{{n.ctn}}</li> -->
        </ul>
        <!-- <SearchDelites :content="n.ctn" /> -->
    </div>
</template>

<script>
import { ref } from 'vue';
// import { Toast } from 'vant';
import SearchResult from '@/components/SearchResult.vue'
// import SearchDelites from '@/components/SearchDelites.vue'


export default {
    components: {
        SearchResult,
        // SearchDelites

    },
    setup() {

        // const onSearch = (val) => val;
        // const onCancel = (() => {
        //     this.$emit("change-show")
        // });
        return {

            // onSearch,
            //   onCancel,

        };
    },
    data() {
        const value = ref('');
        return {
            neir: [
                { "id": 1, "ctn": "图文" },
                { "id": 2, "ctn": "阅读" },
                { "id": 3, "ctn": "问答" },
                { "id": 4, "ctn": "影视" },
                // { "id": 5, "ctn": "连载" },
                { "id": 6, "ctn": "电台" },
            ],
            sho: false,
            pic: [],
            value,
            read: [],
            music: [],
            movie: [],
            radio: [],
            from: "",
            time: []
        }
    },
    methods: {
        getpicserult(data) {
            this.axios
                .get(` https://apis.netstart.cn/one/search/hp/${data}/0`)
                .then((res) => {
                    // console.log(res.data);
                    this.pic = res.data.data.list
                })
        },
        getreadserult(data) {
            this.axios
                .get(` https://apis.netstart.cn/one/search/reading/${data}/0`)
                .then((res) => {
                    // console.log(res.data);
                    this.read = res.data.data.list
                })
        },
        getmusicresult(data) {
            this.axios
                .get(` https://apis.netstart.cn/one/search/music/${data}/0`)
                .then((res) => {
                    // console.log(res.data);
                    this.music = res.data.data.list
                })
        },
        getmoviesult(data) {
            this.axios
                .get(` https://apis.netstart.cn/one/search/movie/${data}/0`)
                .then((res) => {
                    // console.log(res.data);
                    this.movie = res.data.data.list
                })
            this.axios
                .get(` https://apis.netstart.cn/one/search/radio/${data}/0`)
                .then((res) => {
                    // console.log(res.data);
                    this.radio = res.data.data.list
                })
        },
        onCancel() {
            this.$emit("change-show")
        }


    },
    // beforeRouteEnter(to, from, next) {
    //     console.log("to", to);
    //     console.log("for", from);
    //     // vm.time++
    //     // console.log(vm.time);
    //     next(vm => {
    //         vm.from = from.fullPath,
    //         // vm.time = [...vm.tiem, from.fullPath]
    //         // vm.time.push({"first":from.fullPath})
    //         // vm.time++,
    //         console.log(vm.time)
    //     })

    //     next();
    // }

};
</script>

<style lang="less" scoped>
.searchss {
    position: absolute;
    top: 0;
    left: 0;
    width: 375rem;
    height: 100%;
    background-color: white;

    ul.section {
        text-align: center;
        margin-top: 100rem;

        li {
            text-align: center;
            margin: 40rem 0;
            color: rgb(132, 132, 132);
        }
    }
}
</style>