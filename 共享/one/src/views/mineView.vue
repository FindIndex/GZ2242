<template>
    <div>
        <img class="top" src="@/assets/图标/indi_head_day.png" alt="">
        <img class="dl" src="@/assets/图标/sign_up.png" alt="">
        <div class="content">
            <div class="zc">还没有账号？立即注册</div>
            <div class="bt">
                <img src="../assets/图标/white_circle_bg.png" alt="">
                我已阅读并同意 <span>《用户服务协议》</span>和<span>《隐私政策》</span></div>
        </div>
        <div class="qt">其他方式登录</div>
        <div class="fs">
            <img src="../assets/图标/bubble_wechat.png" alt="">
            <img src="../assets/图标/bubble_qq.png" alt="">
            <img src="../assets/图标/bubble_weibo.png" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
div{
    background-color: #f4f3f7;
    .dl{
        width: 80rem;
        height: 80rem;
        margin-left: 150rem;
    }
    .content{
        text-align: center;
        .zc{
            font-weight: bold;
            margin: 10rem 0;

        }
        .bt{
            img{
                width: 10rem;
                height: 10rem;
                margin-right: 5rem;
            }
            span{
                font-weight: bold;
            }

        }
    }
    .qt{
        text-align: center;
        margin-top: 40rem;
        color: #999;
    }
    .fs{
        display: flex;
        justify-content: space-between;
        margin-bottom: 10rem;
        padding: 15rem;
        img{
            width: 40rem;
            height: 40rem;
        }
    }
}
</style>