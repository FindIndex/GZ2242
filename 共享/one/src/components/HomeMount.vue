<template>
    <div class="data">
        <ul ref="testdiv" class="datafff">
            <li v-for="(e,index) in  eveyday" :key="index" :class="{active: e.date ==  month }"  @click="$emit('change-data',e.date)" >
                <img v-if="e.cover" :src="e.cover" alt="">
                <div class="content">{{e.date.split("-").join("/")}}</div>
            </li>
        </ul>
        <div class="choosedata" @click="showxz = true">
            <div class="data11" v-if="!data&&eveyday">
                {{eveyday[0]?.date.substring(0,4)}}年{{eveyday[0]?.date.substring(5,
                7)}}月</div>
            <div v-else>{{data?.substring(0,4)}}年{{data?.substring(5, 7)}}月</div>
        </div>
        <div class="data-show" @click.stop="showxz=false" v-if="showxz">
            <van-datetime-picker v-model="currentDate" type="year-month" title="选择日期" :min-date="minDate"
                :max-date="maxDate" :formatter="formatter" ref="xz" confirm-button-text=" " cancel-button-text=" " />
            <p @click.stop="showxz = false; isquer = true">确认</p>
        </div>
    </div>
</template>

<script>
import { stringify } from "qs";
import { mapMutations, mapState } from "vuex";
export default {
    props:{
        month:stringify
    },
    data() {
        return {
            yearmonth: "",
            eveyday: [],
            data: "",
            showxz: false,
            minDate: new Date(2012, 0, 1),
            maxDate: new Date(2022, 9, 1),
            currentDate: new Date(),
            jiaodata: ""
        }
    },
    methods: {
        // changdata(n) {
            // console.log(n);
            // this.$router.push({
            //     path: "/",
            //     query: { "data": n }
            // });
            // this.$emit("change")
        // },
        ...mapMutations(["nowtime"]),
        getMounth(data) {
            let qing = 0;
            this.isDao = false
            this.axios
                .get(` https://apis.netstart.cn/one/feeds/list/${data}`)
                .then((res) => {
                    qing++
                    var childDiv1_1 = document.createElement("h2");
                    childDiv1_1.style.textAlign = "center"
                    childDiv1_1.style.fontSize = "14rem"
                    childDiv1_1.style.color = "#999"
                    childDiv1_1.style.width = "375rem"
                    childDiv1_1.className = "h2"
                    childDiv1_1.innerText = this.yearmonth.substring(5, 7) + '月'
                    if (this.$refs.testdiv != undefined) {
                        this.$refs.testdiv.appendChild(childDiv1_1);
                    }

                    this.eveyday = [...this.eveyday, ...res.data.data]
                    if (this.eveyday.length < 7) {
                        // this.prevMonth(data)  
                        this.prevMonth(data)
                        this.getMounth(this.yearmonth)

                    }
                    if (qing > 0) {
                        this.isDao = true
                    } else {
                        this.isDao = false
                    }
                })
            if (qing > 0) {
                this.isDao = true
            } else {
                this.isDao = false
            }
        },
        getnewMounth(data) {
            this.isquer = false
            this.showlocading = true
            this.axios
                .get(` https://apis.netstart.cn/one/feeds/list/${data}`)
                .then((res) => {
                    // this.picing = res.data.data
                    this.eveyday = res.data.data
                    this.showlocading = false


                    // $("picPage")
                })
        },
        prevMonth(yearmonth) {
            let currentDate = new Date(yearmonth);
            let lastDate = currentDate.setMonth(currentDate.getMonth() - 1); // 输出日期格式为毫秒形式1551398400000
            lastDate = new Date(lastDate);
            let lastYear = lastDate.getFullYear();
            let lastMonth = lastDate.getMonth() + 1; // 因日期中的月份表示为0-11，所以要显示正确的月份，需要 + 1
            if (lastMonth < 10) {
                lastMonth = "0" + lastMonth;
            }
            this.data = lastYear + '-' + lastMonth;
            this.yearmonth = lastYear + '-' + lastMonth;
        },
        pageScroll() {
            let scrollTop = document.documentElement.scrollTop
            let scrollHeight = document.documentElement.scrollHeight
            let clienHeight = document.documentElement.clientHeight
            // console.log(parseInt(scrollTop + clienHeight - scrollHeight));
            if (parseInt(scrollTop + clienHeight - scrollHeight) >= 0) {
                console.log("到底了");
                if (this.isDao == true) {
                    this.prevMonth(this.yearmonth)
                    this.getMounth(this.yearmonth)
                }
            }
        },
        formatter(type, val) {
            if (type === 'year') {
                return `${val}年`;
            } else if (type === 'month') {
                return `${val}月`;
            }
            return val;
        },
    },
    computed: {
        ...mapState(["time"]),
    },
    created() {
        this.nowtime()
        // this.yearmonth = this.time.substring(0, 7)
        this.yearmonth = this.month.substring(0,7)
        // console.log(this.$route.query.month);

    },
    mounted() {
        this.getMounth(this.yearmonth)
        window.onscroll = this.pageScroll
        this.$watch(() => {
            if (this.showxz) {
                this.data = this.$refs.xz.value
                    .toLocaleDateString()
                    .split("/")
                    .slice(0, 2)
                    .map(o => (o >= 10 ? o : "0" + o))
                    .join("-");
            }
            if (this.isquer) {
                for (let i = 0; i < this.$refs.testdiv.children.length; i++) {
                    this.$refs.testdiv.childNodes.forEach((o) => {
                        // console.log(o.className);
                        if (o.className == `h2`) {
                            this.$refs.testdiv.removeChild(o);
                        }
                    });
                }
                this.yearmonth = this.data
                this.eveyday = []
                var childDiv1_1 = document.createElement("h2");
                childDiv1_1.style.textAlign = "center"
                childDiv1_1.style.fontSize = "14rem"
                childDiv1_1.style.color = "#999"
                childDiv1_1.style.width = "375rem"
                childDiv1_1.className = "h2"
                childDiv1_1.innerText = this.yearmonth.substring(5, 7) + '月'
                this.$refs.testdiv.appendChild(childDiv1_1);
                this.getnewMounth(this.data)
            }
        })
    },
    watch: {
        // $route: {
        //     handler: function (route) {
        //         route
        //         // console.log("跳转回参数页面", route.query.redirect);
        //         // console.log("luyoubianh", route.query.id);

        //         var day = this.$route.query.month.split("-")[2]
        //         var year = this.$route.query.month.split("-")[0]
        //         var month = this.$route.query.month.split("-")[1]
        //         if (day < 10) {
        //             day = '0' + day
        //         }
        //         // this.$route.query.month  = day
        //         // console.log(day);
        //         this.jiaodata = year + '-' + month + '-' + day
        //         // this.redirect = route.query && route.query.redirect;
        //     },
        //     immediate: true,

        // },
    }
}
</script>

<style lang="less" scoped>
.data {
    background-color: white;
    position: absolute;
    // width: 100%;
    height: 675rem;
    top: 50rem;
    // height: 675rem;
    // overflow-y: auto;
    // overflow: auto;
    left: 0;

    .datafff {
        background-color: white;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        li {
            width: 35%;
            margin: 10rem;

            &.active {
                .content {
                    border-color: black;
                }

            }
        }

        .content {
            width: 100%;
            height: 50rem;
            text-align: center;
            font-size: 14rem;
            line-height: 50rem;
            border: 1rem solid rgb(233, 233, 233);
            color: #999;
            margin-top: -5rem;
        }
    }

    .van-datetime-picker {
        position: relative;
        // top: 37rem;
        bottom: -359px;
        left: 0;

    }

    .choosedata {
        overflow: hidden;
        text-align: center;
        width: 100%;
        height: 30rem;
        color: gray;
        line-height: 30rem;
        position: fixed;
        bottom: 0rem;
        left: 0;
        background-color: white;
        // .data11{
        font-weight: 600;
        // }
    }

    .data-show {
        position: fixed;
        top: 0;
        left: 0;
        background-color: grey;
        height: 100%;
        width: 100%;

        p {
            position: absolute;
            top: 603rem;
            left: 165rem;
            z-index: 30;
            text-align: center;
            font-size: 20rem;
            font-weight: bold;
        }
    }
}
</style>