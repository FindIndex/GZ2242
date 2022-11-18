<template>
    <div>
        <section>
            <van-swipe class="my-swipe" :autoplay="5000" indicator-color="white">
                <van-swipe-item class="swiper-item" v-for="banner in latest.top_stories" :key="banner.id">
                    <nuxt-link :to="`/story/${banner.id}`">
                        <van-image width="750rem" height="750rem" :src="banner.image" :show-loading="false" />

                        <h5 :style="{ backgroundColor: banner.image_hue.replace('0x', '#') }">{{ banner.title }}</h5>
                    </nuxt-link>
                </van-swipe-item>
            </van-swipe>
        </section>

        <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad" :offset="50"
            :immediate-check="false">



            <section class="dailyStories" v-for="daily in dailyStories" :key="daily.date">
                <h6>{{ daily.date }}</h6>
                <ul class="stories">
                    <nuxt-link v-for="story in daily.stories" :key="story.id" :to="`/story/${story.id}`">

                        <li>
                            <van-image width="250rem" height="250rem" :src="story.images[0]" :show-loading="false" />
                            <div class="info">
                                <h3>{{ story.title }}</h3>
                                <h5>{{ story.hint }}</h5>
                            </div>
                        </li>
                    </nuxt-link>
                </ul>
            </section>
        </van-list>
    </div>
</template>

<script setup>
const dailyStories = useState('dailyStories', () => [])

const { data: latest, pending, refresh, error } = await useLazyFetch('https://apis.netstart.cn/zhihudaily/stories/latest?a=1')
// dailyStories.value = [...dailyStories.value, latest.value]
dailyStories.value.push(latest.value)
// console.log('dailyStories.value', dailyStories.value);

// console.log(dailyStories.value);

const loading = useState('loading', () => false);
const finished = useState('finished', () => false);

// const onLoad = () => {
//     console.log(Date.now());
//     // loading.value = true;

//     useLazyFetch('/' + Date.now())


//     setTimeout(() => {

//         // 加载状态结束
//         loading.value = false;

//     }, 1000);
// }

const onLoad = async () => {
    loading.value = true;
    console.log('触底', dailyStories.value[dailyStories.value.length - 1].date);

    const { data } = await useLazyFetch('https://apis.netstart.cn/zhihudaily/stories/before/' + dailyStories.value[dailyStories.value.length - 1].date, { server: false })
    // console.log(data);
    dailyStories.value.push(data.value)

    loading.value = false;
    if (dailyStories.value.length >= 10) {
        finished.value = true;
    }
}

</script>

<style lang="scss" scoped>
.my-swipe {
    .swiper-item {
        h5 {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 750rem;
            font-size: 24rem;
            line-height: 3em;
            margin: 0;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            color: white;
            padding: 0 30rem;
        }
    }
}

.dailyStories {
    h6 {}

    .stories {
        li {
            display: flex;

            .info {
                flex: 1;
            }
        }
    }
}
</style>