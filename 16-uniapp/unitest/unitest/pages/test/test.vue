<template>
	<view v-if="allDate.length">
		<swiper class="swiper" circular>
			<swiper-item v-for="banner in allDate[0].top_stories" :key="banner.id">
				<view class="swiper-item uni-bg-red">
					<image :src="banner.image" mode="widthFix"></image>
				</view>
			</swiper-item>
		</swiper>

		<view v-for="(someDay,index) in allDate" :key="index">
			<view class="list" v-for="item in someDay.stories" :key="item.id" @click="navToDetail(item.id)">
				<image :src="item.images[0]" mode="widthFix"></image>
				<view class="title">
					{{item.title}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				allDate: [],
				daoshu: 0
			};
		},
		onLoad() {
			console.log('test 加载 onLoad');

		},
		created() {
			console.log('test 创建 created');
			uni.request({
				url: "https://apis.netstart.cn/zhihudaily/stories/latest",
				success: (res) => {
					// console.log(res);
					this.allDate = [...this.allDate, res.data]
				}
			})
		},
		onReady() {
			console.log('test 渲染 onReady');
		},
		mounted() {
			console.log('test 挂载 mounted');
		},
		methods: {
			navToDetail(id) {
				// console.log(id);
				uni.navigateTo({
					url: "/pages/detail/detail?id=" + id
				})
			}
		},
		onReachBottom() {
			console.log('触底');

			let d = new Date()
			d.setDate(d.getDate() - this.daoshu)

			uni.showLoading({
				title: '加载中'
			})
			uni.request({
				url: `https://apis.netstart.cn/zhihudaily/stories/before/${d.getFullYear()}${String(d.getMonth() + 1).padStart(2,'0')}${String(d.getDate() ).padStart(2,'0')}`,
				success: (res) => {
					this.allDate = [...this.allDate, res.data];
					this.daoshu++;
				},
				complete() {
					uni.hideLoading()
				}
			})


		}
	}
</script>

<style lang="less">

</style>
