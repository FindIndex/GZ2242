<template>
    <li class="item">
        <div class="top">
            <div class="fl">
                <img v-if="discus?.user" :src="discus?.user?.web_url " alt="">
                <span class="name">{{discus.user.user_name}}</span>
            </div>
            <div class="fr">
                <div class="data">{{discus.input_date}}</div>
            </div>
        </div>
        <div class="middle">
            {{ discus.content}}
        </div>
        <div class="bottom">
            <img src="../assets/图标/comment_image.png" alt="">
            <div class="dz">
                <img v-if="!isdz" src="../assets/图标/comment_laud.png" @click="dz" alt="">
                <img v-else src="../assets/图标/comment_laud_selected.png" @click="dz"
                    alt="">
                <div class="sl">{{dzn}}</div>
            </div>

        </div>
    </li>
</template>

<script>
export default {
    props: {
        discus: Object
    },
    data() {
        return {
            // isdz: this.discus.praisenum
            isdz:false,
            dzn:this.discus.praisenum
        }
    },
    methods: {
        dz() {
            this.isdz = !this.isdz
            if (this.isdz) {
                this.dzn++
            }else{
                this.dzn--
            }


            // localStorage.setItem('dz', JSON.stringify(this.isdz));
        }
    }

}
</script>

<style lang="less" scoped>
.item {
    padding: 15rem;

    .top {
        display: flex;
        justify-content: space-between;


        .fl {
            display: flex;
            justify-content: center;
            align-items: center;

            img {
                width: 20rem;
                height: 20rem;
                border-radius: 50%;

            }


            .name {
                font-size: 12rem;
                color: rgb(169, 169, 169);
                margin-left: 10rem;

            }

            .content {
                font-size: 12rem;
            }
        }

        .fr {
            color: rgb(169, 169, 169);


        }

    }

    .middle {
        padding: 10rem 31rem;
        font-size: 14rem;
    }

    .bottom {
        padding: 15rem;
        display: flex;
        justify-content: end;
        align-items: center;

        img {
            width: 20rem;
            height: 20rem;
            margin: 0 10rem;
        }

        .dz {
            display: flex;
            justify-content: center;
            align-items: center;

            .sl {
                color: rgb(169, 169, 169);
            }
        }

        border-bottom: 1rem solid rgba(201, 201, 201, 0.57);
    }
}
</style>