<template>
  <!-- <div class="cardInfo" v-if="playlist"> -->
  <div class="cardInfo">
    <div
      class="top"
      :style="playlist && `background-image: url(${playlist.coverImgUrl})`"
    >
      <div class="noblur">
        <span class="listType">歌单</span>
        <span class="count">{{ count }}</span>
        <img class="listImg" :src="playlist?.coverImgUrl | imageView" alt="" />
      </div>
      <div class="listRight">
        <div class="listTitle">{{ playlist?.name }}</div>
        <div class="creator">
          <img
            :src="playlist?.creator?.avatarUrl | imageView(50)"
            alt=""
            class="creatorImg"
          />
          <span class="creatorName">
            {{ playlist?.creator?.nickname }}
          </span>
        </div>
      </div>
    </div>
    <h3 class="songListTag">歌曲列表</h3>
    <ul class="songList">
      <li
        v-for="(songItem, index) in playlist?.tracks"
        :key="songItem.id"
        class="songItem"
      >
        <div class="itemSort">{{ index + 1 }}</div>
        <div class="itemInfo">
          <div class="itemName">{{ songItem.name }}</div>
          <div class="itemDetail">
            {{ songItem.ar[0].name }} - {{ songItem.al.name }}
          </div>
        </div>
        <div class="itemPlay"></div>
      </li>
    </ul>
    <h4 class="songListTag">精彩评论</h4>
  </div>
</template>

<script>
export default {
  data() {
    return {
      playlist: null,
    };
  },
  computed: {
    count: function () {
      if (this.playlist) {
        return this.playlist.playCount > 100000000
          ? `${(this.playlist.playCount / 100000000).toFixed(1)}亿`
          : this.playlist.playCount > 10000
          ? `${(this.playlist.playCount / 10000).toFixed(1)}万`
          : this.playlist.playCount;
      } else {
        return null;
      }
    },
  },
  methods: {
    getPlayList: function (id) {
      this.axios
        .get("playlist/detail", {
          params: { id },
        })
        .then((res) => {
          // this.playlist = res.data.playlist;
          this.playlist = res.data.playlist;
          // console.log(res);
        });
    },
  },
  created: function () {
    this.getPlayList(this.$route.query.id);
    // console.log(this.$route.query.id);

    console.log("this.xxx()", this.xxx());
  },
  // beforeRouteUpdate(to, from, next) {
  //   // 在当前路由改变，但是该组件被复用时调用
  //   // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
  //   // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
  //   // 可以访问组件实例 `this`
  //   // console.log(to.query.id);
  //   // this.getPlayList(to.query.id);
  //   console.log(to.query.id);
  //   next();
  // },
};
</script>

<style lang="less" scoped>
.cardInfo {
  margin-top: -124rem;
  .top {
    padding: 30rem 10rem 30rem 15rem;
    display: flex;
    background-size: cover;
    background-position: center;
    position: relative;
    overflow: hidden;
    &::before {
      content: "";
      filter: blur(20rem);
      width: 100%;
      height: 100%;
      transform: scale(1.5);
      position: absolute;
      background: inherit;
      top: 0rem;
      left: 0rem;
      z-index: 0;
    }
    &::after {
      content: "";
      background-color: rgba(0, 0, 0, 0.25);
      width: 100%;
      height: 100%;
      transform: scale(1.5);
      position: absolute;

      top: 0rem;
      left: 0rem;
      z-index: 1;
    }
    .noblur {
      position: relative;
      width: 126rem;
      height: 126rem;
      // flex-grow: 1;
      flex-shrink: 0;
      span.listType {
        position: absolute;
        z-index: 10;
        top: 10rem;
        left: 0;
        padding: 0 8rem;
        height: 17rem;
        color: #fff;
        font-size: 10rem;
        text-align: center;
        line-height: 17rem;
        background-color: rgba(217, 48, 48, 0.8);
        border-top-right-radius: 17rem;
        border-bottom-right-radius: 17rem;
      }
      span.count {
        position: absolute;
        z-index: 10;
        right: 5rem;
        top: 2rem;
        padding-left: 13rem;
        color: #fff;
        font-size: 12rem;
        text-shadow: 1rem 0 0 rgb(0 0 0 / 15%);
        background-size: 11px 10px;
        background-position: 0;
        background-repeat: no-repeat;
        background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMiAyMCI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSIjMDQwMDAwIiBkPSJNMjIgMTYuNzc3YzAgMS4yMzMtMS4xMjEgMi4yMzMtMi41MDYgMi4yMzMtMS4zODQgMC0yLjUwNi0xLTIuNTA2LTIuMjMzdi0yLjU1M2MwLTEuMjM0IDEuMTIyLTIuMjMzIDIuNTA2LTIuMjMzLjE3NCAwIC4zNDMuMDE3LjUwNi4wNDZ2LTEuMzdoLS4wMzNjLjAxNy0uMjIuMDMzLS40NDEuMDMzLS42NjZhOCA4IDAgMCAwLTE2IDBjMCAuMjI1LjAxNi40NDYuMDM0LjY2Nkg0djEuMzdjLjE2My0uMDI5LjMzMy0uMDQ2LjUwNS0uMDQ2IDEuMzg0IDAgMi41MDYuOTk5IDIuNTA2IDIuMjMzdjIuNTUzYzAgMS4yMzMtMS4xMjIgMi4yMzMtMi41MDYgMi4yMzNTMiAxOC4wMTEgMiAxNi43Nzd2LTIuNTUzYzAtLjI1OC4wNTktLjUwMS4xNDgtLjczQS45ODIuOTgyIDAgMCAxIDIgMTMuMDAxdi0yLjY2N2MwLS4wMjMuMDEyLS4wNDMuMDEzLS4wNjctLjAwNC0uMDg4LS4wMTMtLjE3Ni0uMDEzLS4yNjYgMC01LjUyMyA0LjQ3Ny0xMCAxMC0xMHMxMCA0LjQ3NyAxMCAxMGMwIC4wOS0uMDA5LjE3OC0uMDE0LjI2Ni4wMDIuMDI0LjAxNC4wNDQuMDE0LjA2N3YyYS45ODguOTg4IDAgMCAxLS4zNi43NTNjLjIyNC4zMzQuMzYuNzIuMzYgMS4xMzh2Mi41NTIiIG9wYWNpdHk9Ii4xNSIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI2ZmZiIgZD0iTTIwIDE2Ljc3N2MwIDEuMjMzLTEuMTIxIDIuMjMzLTIuNTA2IDIuMjMzLTEuMzg0IDAtMi41MDYtMS0yLjUwNi0yLjIzM3YtMi41NTNjMC0xLjIzNCAxLjEyMi0yLjIzMyAyLjUwNi0yLjIzMy4xNzQgMCAuMzQzLjAxNy41MDYuMDQ2di0xLjM3aC0uMDMzYy4wMTctLjIyLjAzMy0uNDQxLjAzMy0uNjY2YTggOCAwIDAgMC0xNiAwYzAgLjIyNS4wMTYuNDQ2LjAzNC42NjZIMnYxLjM3Yy4xNjMtLjAyOS4zMzMtLjA0Ni41MDUtLjA0NiAxLjM4NCAwIDIuNTA2Ljk5OSAyLjUwNiAyLjIzM3YyLjU1M2MwIDEuMjMzLTEuMTIyIDIuMjMzLTIuNTA2IDIuMjMzUzAgMTguMDExIDAgMTYuNzc3di0yLjU1M2MwLS4yNTguMDU5LS41MDEuMTQ4LS43M0EuOTgyLjk4MiAwIDAgMSAwIDEzLjAwMXYtMi42NjdjMC0uMDIzLjAxMi0uMDQzLjAxMy0uMDY3LS4wMDQtLjA4OC0uMDEzLS4xNzYtLjAxMy0uMjY2IDAtNS41MjMgNC40NzctMTAgMTAtMTBzMTAgNC40NzcgMTAgMTBjMCAuMDktLjAwOS4xNzgtLjAxNC4yNjYuMDAyLjAyNC4wMTQuMDQ0LjAxNC4wNjd2MmEuOTg4Ljk4OCAwIDAgMS0uMzYuNzUzYy4yMjQuMzM0LjM2LjcyLjM2IDEuMTM4djIuNTUyIi8+PC9zdmc+");
      }
      img.listImg {
        position: absolute;
        z-index: 9;
      }
    }
    .listRight {
      margin-left: 16rem;
      padding-top: 3rem;
      position: relative;
      z-index: 9;
      // flex-grow: 1;
      // display: flex;
      // flex-direction: column;
      .listTitle {
        padding-top: 1rem;
        font-size: 17rem;
        line-height: 1.3;
        color: #fefefe;
        height: 44rem;
        display: -webkit-box; //限定超出两行省略
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
      .creator {
        display: flex;
        align-items: center;
        position: relative;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        .creatorImg {
          width: 30rem;
          height: 30rem;
          border-radius: 50%;
          margin-right: 5rem;
        }
        .creatorName {
          display: inline-block;
          color: hsla(0, 0%, 100%, 0.7);
          font-size: 14rem;
        }
      }
    }
  }
  .songListTag {
    font-size: 12rem;
    color: #666666;
    background-color: #efeff0;
    padding: 0 10rem;
    line-height: 23rem;
  }
  .songList {
    .songItem {
      display: flex;
      align-items: center;
      .itemSort {
        font-size: 17rem;
        color: #999999;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40rem;
      }
      .itemInfo {
        display: flex;
        flex-direction: column;
        padding: 6rem 0;
        width: 80%;
        .itemName {
          font-size: 17rem;
          line-height: 25.5rem;
          color: #333333;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .itemDetail {
          font-size: 12rem;
          line-height: 18rem;
          color: #888888;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
      .itemPlay {
        background-image: url(//s3.music.126.net/mobile-new/img/index_icon_2x.png?5207a28…=);
        background-repeat: no-repeat;
        background-size: 166px 97px;
        display: inline-block;
        width: 22rem;
        height: 22rem;
        background-position: -24px 0;
      }
    }
  }
}
</style>