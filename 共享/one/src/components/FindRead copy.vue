<template>
    <div class="readpage">
        <div class="choosedata" @click="showxz = true">
            <div class="data" v-if="!data">{{yearmonth?.substring(0,4)}}年{{yearmonth?.substring(5, 7)}}月</div>
            <div v-else>{{data?.substring(0,4)}}年{{data?.substring(5, 7)}}月</div>
        </div>
        <!-- <van-datetime-picker v-show="showxz" v-model="currentDate" type="year-month" title="选择日期" :min-date="minDate"
            :max-date="maxDate" :formatter="formatter" ref="xz" @cancel="showxz = false"
            @confirm="data = $refs.xz.data;showxz = false" /> -->
        <div class="data-show" @click.stop="showxz=false" v-if="showxz">
            <van-datetime-picker v-model="currentDate" type="year-month" title="选择日期" :min-date="minDate"
                :max-date="maxDate" :formatter="formatter" ref="xz" confirm-button-text=" " cancel-button-text=" " />
            <p @click="showxz = false; isquer = true">确认</p>
        </div>
        <div v-if="showlocading" class="locadingmask">
            <div class="locading"></div>
        </div>
        <ul ref="testdiv">
            <!-- <van-divider style="margin-top:70rem">{{reading[0]?.maketime.substring(5, 7)}}月</van-divider> -->
            <FindReadItem v-for="(read,index) in reading" :key="index" :read="read" :yearmonth="yearmonth"
                ref="readdata" />
        </ul>
    </div>
</template>

<script>
import FindReadItem from '@/components/items/FindReadItem.vue'
// import { watch } from 'vue';
import { mapMutations, mapState } from "vuex";
export default {
    components: {
        FindReadItem
    },
    data() {
        return {
            reading: [],
            yearmonth: "",
            minDate: new Date(2012, 0, 1),
            maxDate: new Date(2022, 9, 1),
            currentDate: new Date(),
            showxz: false,
            data: "",
            // prevMonth:""
            isDao: false,
            isquer: false,
            showlocading: false,
        }
    },
    methods: {
        ...mapMutations(["nowtime"]),
        getread(data) {
            let qing = 0;
            this.isDao = false
            this.showlocading = true
            this.axios
                .get(` https://apis.netstart.cn/one/find/bymonth/1/${data}`)
                .then((res) => {
                    this.showlocading = false
                    qing++
                    var childDiv1_1 = document.createElement("h2");
                    childDiv1_1.style.textAlign = "center"
                    childDiv1_1.style.fontSize = "14rem"
                    childDiv1_1.style.color = "#999"
                    childDiv1_1.className = "h2"
                    childDiv1_1.innerText = this.yearmonth.substring(5, 7) + '月'
                    if (this.$refs.testdiv) {
                        this.$refs.testdiv.appendChild(childDiv1_1);
                    }
                    this.reading = [...this.reading, ...res.data.data]
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
        getnewread(data) {
            this.isquer = false
            this.showlocading = true
            // document.getElementById("testdiv").innerHTML=" "
            this.axios
                .get(` https://apis.netstart.cn/one/find/bymonth/1/${data}`)
                .then((res) => {
                    this.showlocading = false
                    // this.reading = res.data.data
                    // this.reading=[]
                    // this.reading=[...this.reading,res.data.data]
                    // var childDiv1_1 = document.createElement("h2");
                    // childDiv1_1.style.textAlign = "center"
                    // childDiv1_1.style.fontSize = "14rem"
                    // childDiv1_1.style.color = "#999"
                    // childDiv1_1.innerText = this.yearmonth.substring(5, 7) + '月'
                    // document.getElementById("testdiv").appendChild(childDiv1_1);
                    this.reading = res.data.data
                })
        },
        formatter(type, val) {
            if (type === 'year') {
                return `${val}年`;
            } else if (type === 'month') {
                return `${val}月`;
            }
            return val;
        },
        show() {
            this.showxz = true
        },
        pageScroll() {
            let scrollTop = document.documentElement.scrollTop
            let scrollHeight = document.documentElement.scrollHeight
            let clienHeight = document.documentElement.clientHeight
            // console.log(document.documentElement);
            // console.log("srollTop",scrollTop,"clienHeight",clienHeight,"scrollHeight",scrollHeight);
            // console.log(parseInt(scrollTop + clienHeight - scrollHeight));
            // console.log(this.$refs.testdiv[li]);
            if (this.$refs.testdiv) {
                this.$refs.testdiv.childNodes.forEach((o) => {
                    // console.log(o.className);
                    if (o.className != `h2`) {
                        // this.$refs.testdiv.removeChild(o); 
                        // console.log("元素高度", o.scrollTop);
                        // 元素高度
                        // console.log("keshiquyu",o.getBoundingClientRect().top);
                        // console.log("==========================================");
                        // console.log(o.scrollHeight);
                        // console.log(scrollTop - o.scrollHeight);
                        // console.log(o.offsetTop);
                        if (o.offsetTop == o.getBoundingClientRect().top) {
                            console.log(o.className);
                        }

                    }

                });
            }

            // console.log(this.$refs.readdata);
            if (parseInt(scrollTop + clienHeight - scrollHeight) >= 0) {
                // console.log("到底了", this.isDao);

                // if (this.getread(this.yearmonth)) {
                // setTimeout(() => {
                if (this.isDao == true) {
                    this.prevMonth(this.yearmonth)
                    this.getread(this.yearmonth)
                }

                // })

            }
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
            this.yearmonth = lastYear + '-' + lastMonth;
            this.data = lastYear + '-' + lastMonth;
        }
    },
    computed: {
        ...mapState(["time"]),
    },
    created() {
        this.nowtime()
        this.yearmonth = this.time.substring(0, 7)
        this.getread(this.yearmonth)
    },
    mounted() {
        // console.log(this.$refs.xz);
        // this.$refs.xz.cancel
        // console.log(window.onscroll);
        window.onscroll = this.pageScroll
        // if (!this.$refs.data.value) {
        this.$watch(() => {
            if (this.showxz) {
                this.data = this.$refs.xz.value
                    .toLocaleDateString()
                    .split("/")
                    .slice(0, 2)
                    .map(o => (o >= 10 ? o : "0" + o))
                    .join("-");
                // this.yearmonth = this.data
                // document.getElementById("testdiv").innerHTML=""

                //
            }

            if (this.isquer) {
                // console.log(this.$refs.testdiv.children.length);
                for (let i = 0; i < this.$refs.testdiv.children.length; i++) {
                    this.$refs.testdiv.childNodes.forEach((o) => {
                        // console.log(o.className);
                        if (o.className == `h2`) {
                            this.$refs.testdiv.removeChild(o);
                        }
                    });
                }
                this.yearmonth = this.data
                this.reading = []
                var childDiv1_1 = document.createElement("h2");
                childDiv1_1.style.textAlign = "center"
                childDiv1_1.style.fontSize = "14rem"
                childDiv1_1.style.color = "#999"
                // childDiv1_1.style.width = "375rem"
                childDiv1_1.className = "h2"
                childDiv1_1.innerText = this.yearmonth.substring(5, 7) + '月'
                this.$refs.testdiv.appendChild(childDiv1_1);
                this.getnewread(this.data)
            }
            // console.log(this.$refs.xz.value);

        })
        // console.log(this.$refs.xz.data.value);
        // }
        // this.$refs.testdiv.childNodes.forEach((o) => {
        //     console.log(o.className);
        //     if (o.className != `h2`) {
        //         // this.$refs.testdiv.removeChild(o); 
        //         console.log("元素高度", o.scrollHeight);
        //         // 元素高度
        //         console.log(o.offsetTop);
        //     }
        //     // console.log(this.$refs.xz.data.value);
        //     // }

        // })

        // console.log(this.$refs.testdiv.childNodes); 

    },




}
</script>

<style lang="less" scoped>
.readpage {
    margin-top: 70rem;
    margin-bottom: 40rem;

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

    .choosedata {
        text-align: center;
        width: 100%;
        height: 30rem;
        color: gray;
        line-height: 30rem;
        position: fixed;
        top: 40rem;
        left: 0;
        background-color: white;
    }

    .van-datetime-picker {
        position: relative;
        // top: 37rem;
        top: 0;
        left: 0;

    }

    .data-show {
        position: fixed;
        background-color: grey;
        height: 100%;
        width: 100%;

        p {
            position: absolute;
            top: 216rem;
            left: 165rem;
            z-index: 30;
            text-align: center;
            font-size: 20rem;
            font-weight: bold;
        }
    }


}
</style>