<template>
    <nav>
        <RouterLink to="/ffeeds">关注</RouterLink>
        <RouterLink to="/">推荐</RouterLink>
        <RouterLink to="/notes">笔记</RouterLink>
        <RouterLink to="/videos">视频</RouterLink>
        <RouterLink to="/activitys">活动</RouterLink>
    </nav>
    <!-- <RouterView /> -->
    <router-view v-slot="{ Component }">
        <transition name="fade">
            <keep-alive>
                <component :is="Component" />
            </keep-alive>
        </transition>
    </router-view>
</template>




<script>
export default {

}
</script>

<style lang="less" scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

nav {
    a {
        padding: 0 10px;

        &.router-link-exact-active {
            color: red;
        }
    }
}
</style>