<template>
    <div class="spical">
        <div v-if="showlocading" class="locadingmask">
            <div class="locading"></div>
        </div>
        <ul>

            <!-- $router.push({ path: '/FindSpaic', query: {id:li.content_id} }) -->
            <li v-for="li in list" :key="li.id"
                @click="$router.push({ path: '/FindSpicalPage', query: {id: li.content_id} })">
                <img v-if="li" :src="li.cover" alt="">
                <div class="title">{{li.title}}</div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: [],
            showlocading: false,
        }
    },
    created() {
        this.showlocading = true
        this.axios
            .get(` https://apis.netstart.cn/one/banner/list/4`)
            .then((res) => {
                this.showlocading = false
                // this.reading = res.data.data
                this.list = res.data.data
            })
    }
}
</script>

<style lang="less" scoped>
.spical {
    margin-top: 30rem;
    padding: 25rem;
    margin-bottom: 20rem;

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

    li {
        position: relative;
        margin-bottom: 20rem;
        // box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
        box-shadow: 0rem 8rem 5rem rgb(0 0 0 / 15%);
        border-radius: 7rem;

        img {
            border-radius: 7rem;
        }


        .title {
            padding-left: 10rem;
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 35rem;
            background-color: rgb(244, 244, 244);
            border-radius: 0 0 7rem 7rem;
            font-size: 14rem;
            font-weight: 600;
            line-height: 35rem;
            text-align: left;
        }
    }

}
</style>