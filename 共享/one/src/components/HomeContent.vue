<template>
    <ul>
        <!-- <component :is="comp" /> -->
        <HomeContentPhoto v-if="this.category == 0" :neirong="neirong" />
        <HomeContentdetail v-if="this.category != 0"  :neirong="neirong" :category="category" :menu="menu" :index="index" />
    </ul>
</template>

<script>
import { mapMutations } from "vuex";
import HomeContentdetail from '@/components/HomeContentdetail.vue'
import HomeContentPhoto from '@/components/HomeContentPhoto.vue'
export default {
    components: {
        HomeContentdetail,
        HomeContentPhoto,
    },
    props: {
        neirong: Object,
        // cardIndex:Number,
        menu: Object,
        category:String,
        index:Number,
    },
    data() {
        return {
            // cardIndex: 0,
            // cardWidth: 0,
            // startX: 0,
            // moveX: 0,
            // flag: true,
        }
    },
    methods: {
        ...mapMutations(["prevDate", "nextDate"]),
        // touchstart(event) {
        //     if (this.flag) {
        //         this.startX = event.changedTouches[0].pageX;
        //         // console.log( this.startX);
        //     }
        // },
        // touchmove(event) {
        //     // console.log(12);
        //     if (this.flag) {
        //         this.moveX = event.targetTouches[0].clientX - this.startX;
        //         this.$refs.imgBox.style.transform = `translateX(${this.moveX}px)`;
        //         // console.log( this.moveX);
        //     }
        // },
        // touchend() {
        //     if (this.flag) {
        //         if (this.moveX > 40) {
        //             console.log(1);
        //             // console.log( this.$refs.imgBox.classList);
        //             if (this.$refs.imgBox.classList.value == " active") {
        //                 console.log(1);
        //             }
        //             this.$refs.imgBox.style.transition = 'all .5s';
        //             this.$refs.imgBox.style.transform = `translateX(${this.ftranslateX}px)`
        //             this.nextDate()
        //         } else if (this.moveX < -40) {
        //             console.log(2);
        //             this.$refs.imgBox.classList.value = this.$refs.imgBox.classList.value + 'active';
        //             console.log(this.$refs.imgBox.classList);
        //             this.$refs.imgBox.style.transition = 'all .5s';
        //             this.$refs.imgBox.style.transform = `translateX(${this.translateX}px)`
        //             this.prevDate()
        //         }
        //     }

        // }
    },
    // computed: {
    //     comp() {
    //         return this.category == 0 ? "HomeContentPhoto" : " HomeContentdetail";
    //     },
    // },
    // computed: {
    //     translateX() { // 计算图片ul当前距离
    //         return -(this.cardWidth + this.cardWidth * this.cardIndex);
    //     },
    //     ftranslateX() { // 计算图片ul当前距离
    //         return (this.cardWidth + this.cardWidth * this.cardIndex);
    //     }
    // },
    // mounted() {
    //     this.cardWidth = window.innerWidth;
    // }
}
</script>

<style lang="less" scoped>
ul {
    // position: absolute;
    // top: 0;
    // left: 0;
    margin-top: 10rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background-color: white;
    // z-index: -1;
    



}
</style>