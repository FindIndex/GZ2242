<template>
    <li @click="$router.push({ path: '/FindPicPage', query: {data:pic.maketime.substring(0, 10)} })">
        
        <img :src="pic.cover" alt="">
        <div class="data">
            {{pic.maketime.substring(0, 10)}}
        </div>
    </li>
</template>

<script>
    export default {
        props:{
            pic:Object
        }
    }
</script>

<style lang="less" scoped>
li{
    width: 44%;
    margin: 10rem;
    img{
        border-radius: 7rem 7rem 0 0 ;
        
    }
    .data{
        width: 100%;
        height: 35rem;
        text-align: center;
        line-height: 35rem;
        // border: 1rem solid grey;
        box-shadow: 0 0 15rem rgba(0, 0, 0, 0.2);
        margin-top: -5rem;
        border-radius:  0 0 7rem 7rem;
        color: #999;
    }
}
</style>