<template>
	<view>
		xxx-yyy组件内容 {{msg}}
		<view @click="$emit('custom-event', Date.now())">
			<slot></slot>
		</view>
	</view>
</template>

<script>
	export default {
		name:"xxx-yyy",
		props: ['msg'],
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="less">

</style>