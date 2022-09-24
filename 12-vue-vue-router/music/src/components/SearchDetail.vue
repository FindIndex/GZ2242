<template>
  <div class="details">
    <div class="de-best">
      <div class="best-title">最佳匹配</div>
      <!-- 最佳匹配有多个 -->
      <div class="best-info" v-if="searchBest.artist">
        <img :src="searchBest.artist[0].img1v1Url" alt="" />
        <h4 class="name">
          {{ searchBest.artist[0].occupation }}:
          {{ searchBest.artist[0].name }}
          <span v-if="searchBest.artist[0].alias[0]"
            >({{ searchBest.artist[0].alias[0] }})</span
          >
        </h4>
        <div class="best-icon"></div>
      </div>
      <div class="best-info" v-if="searchBest.playlist">
        <img :src="searchBest.playlist[0].coverImgUrl" alt="" />
        <h4 class="name songname">
          歌单:
          {{ searchBest.playlist[0].name }}
          <span class="playlistNickname">
            by {{ searchBest.playlist[0].creator.nickname }}
          </span>
        </h4>
        <div class="best-icon"></div>
      </div>
      <div class="best-info" v-if="searchBest.album">
        <img :src="searchBest.album[0].blurPicUrl" alt="" />
        <h4 class="name songname">
          {{ searchBest.album[0].type }}:
          {{ searchBest.album[0].name }}
          <span class="albumName">
            {{ searchBest.album[0].artists[0].name }}
          </span>
        </h4>
        <div class="best-icon"></div>
      </div>
    </div>
    <ul class="others">
      <li
        class="other-item"
        v-for="searchDetail in searchDetails"
        :key="searchDetail.id"
      >
        <div class="others-song">{{ searchDetail.name }}</div>
        <div class="others-name">
          <div class="others-sq" v-if="searchDetail.sq"></div>
          <span v-for="(art, index) in searchDetail.ar" :key="art.id + index">{{
            art.name
          }}</span>
          - {{ searchDetail.al.name }}
        </div>
        <div class="others-play"></div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    searchRes: Array,
    searchDetails: Array,
    searchBest: Object,
    // value: String,
    // inSearch:Boolean
  },
};
</script>

<style lang="less" scoped>
.details {
  .de-best {
    padding: 8rem 0 4rem;
    .best-title {
      font-size: 12rem;
      margin-left: 10rem;
      color: #666666;
    }
    .best-info {
      margin-left: 10rem;
      padding: 8rem 10rem 8rem 0;
      display: flex;
      align-items: center;
      border-bottom: 1rem solid rgba(0, 0, 0, 0.1);
      img {
        width: 50rem;
        margin-right: 15rem;
      }
      h4 {
        font-size: 17rem;
        color: #333333;
        flex-grow: 1;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      h4.songname {
        display: flex;
        flex-direction: column;
        .playlistNickname {
          font-size: 12rem;
          color: #999999;
        }
        .albumName {
          font-size: 12rem;
          // color: #507daf;
        }
      }
      .best-icon {
        background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAyNiI+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjOWI5YjliIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTIuOTM5IDIzLjkzOUwxMy44NzkgMTMgMi45MzkgMi4wNjEiLz48L3N2Zz4=);
        width: 8rem;
        height: 13rem;
        margin-right: 8rem;
        margin-left: 10rem;
      }
    }
  }
  ul.others {
    li.other-item {
      // padding-left: 10rem;
      margin-left: 10rem;
      padding: 6rem 0 6rem;
      border-bottom: 1rem solid rgba(0, 0, 0, 0.1);
      position: relative;
      .others-song {
        font-size: 17rem;
        // color: #507daf;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 90%;
      }
      .others-name {
        font-size: 12rem;
        width: 90%;
        color: #888888;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        .others-sq {
          background-image: url(https://s3.music.126.net/mobile-new/img/index_icon_2x.png?5207a28c3767992ca4bb6d4887c74880=);
          background-size: 166px 97px;
          width: 12rem;
          height: 8rem;
          margin-right: 4rem;
          display: inline-block;
        }
        span {
          &::after {
            content: " / ";
          }
          &:last-child {
            &::after {
              content: "";
            }
          }
        }
      }
      .others-play {
        background-image: url(https://s3.music.126.net/mobile-new/img/index_icon_2x.png?5207a28c3767992ca4bb6d4887c74880=);
        background-size: 166px 97px;
        background-position: -24px 0;
        width: 22rem;
        height: 22rem;
        position: absolute;
        right: 10rem;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }
}
</style>