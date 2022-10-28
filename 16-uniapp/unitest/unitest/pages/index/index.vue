<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title" @click="clickHandler">{{title}}</text>
		</view>

		<xxx-yyy msg="一切反动派" @custom-event="customEvent">插槽内容</xxx-yyy>

		<YyyZzz />

		<uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" styleType="text"
			activeColor="#4cd964"></uni-segmented-control>
		<view class="content">
			<view v-show="current === 0">
				选项卡1的内容
			</view>
			<view v-show="current === 1">
				选项卡2的内容
			</view>
			<view v-show="current === 2">
				选项卡3的内容
			</view>
		</view>

		<uni-rate :touchable="false" :value="5" />

		<view class="charts-box">
			<qiun-data-charts type="column" :chartData="chartData" />
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello uni',
				items: ['选项1', '选项2', '选项3'],
				current: 0,
				chartData: {},
			}
		},
		onLoad() {

			setTimeout(() => {
				let res = {
					categories: ["2016", "2017", "2018", "2019", "2020", "2021"],
					series: [{
							name: "目标值",
							data: [35, 36, 31, 33, 13, 34]
						},
						{
							name: "完成量",
							data: [18, 27, 21, 24, 6, 28]
						}
					]
				};
				this.chartData = JSON.parse(JSON.stringify(res));
			}, 500);

		},
		methods: {
			clickHandler() {
				// console.log(123, this, this.title);
				this.title = Date.now()

			},
			customEvent(n) {
				console.log(n);
			},
			onClickItem(e) {
				if (this.current != e.currentIndex) {
					this.current = e.currentIndex;
				}
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
