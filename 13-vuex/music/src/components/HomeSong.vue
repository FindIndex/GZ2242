<template>
  <ul>
    <li
      class="song-item"
      :class="{ active: song.id === songId }"
      v-for="song in newsongs"
      :key="song.id"
      @click="
        $emit('update-song', song);
        $emit('update-song-list', newsongs);
      "
    >
      <div class="newsong-title">{{ song.name }}</div>
      <div class="newsong-info">
        <i class="newsong-sq" v-if="song.song.sqMusic"></i>
        {{ song.song.artists[0].name }} - {{ song.song.album.name }}
      </div>
      <div v-if="song.id !== songId" class="newsong-play"></div>
      <div v-else class="newsong-play active" :class="{ playing: playing }">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <!-- <div v-if="song.id !== songId" class="newsong-play"></div>
      <img
        v-else
        class="newsong-play"
        src="data:image/gif;base64,R0lGODlhKAAoAIABANM6Mf///yH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkI2QURFODRFRkZBRTExRTU4NTg0QTdFMUQ4QkI2MTI1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkI2QURFODRGRkZBRTExRTU4NTg0QTdFMUQ4QkI2MTI1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QjZBREU4NENGRkFFMTFFNTg1ODRBN0UxRDhCQjYxMjUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QjZBREU4NERGRkFFMTFFNTg1ODRBN0UxRDhCQjYxMjUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQJCgABACwAAAAAKAAoAAACeIyPqcvtD6OctNoD8rUZ7Np9VChKZAmdqKOuTOsqcIzMtGHfuaxxfbRrBGu/UfExXCRxxwRsGdg9m0IqpgmVYq1KbnTrMXmnYeAYzCtf1em2E11lf+VkFpxIP+f37td93dfF9zboVwhIaHfItJjoiBd4IzlJWalQAAAh+QQJCgABACwAAAAAKAAoAAACfIyPqcvtD6OctNqLs94WeB55AAiJ5GOeTaoubJu8nBzQGm0zuYF/0l7zIYAxocvIQzqAvVHROVRGoYemgqm0PpfZLjX53YqnV2nVWw5j1ejxkQ1Pc+Nu8FxeD4bJea2uzRf4hidotwJ4RvenmEg42IfoaFioB2N5iZmZUAAAIfkECQoAAQAsAAAAACgAKAAAAn+Mj6nL7Q+jnLRaCPK1GezafVTIaRIJmhE6qpg7sY98wg692g3+egnNm9mAup6C6EslD8hL8zcsGp4I6sI6jS6PWu42EAR3od8wVlyWor1s8m1chV/l2fQ3bm/j33m3n3F2tvfHREdYp1d4p5iIePgYqBbZB2goKIKZqbnJ+VAAACH5BAUKAAEALAAAAAAoACgAAAJ8jI+py+0PIwRUWkbB3Sjz731bKFpkGZ1mJaktm8KX29CT/Ng57ug9XwPeNC/iSLjwBY1DEFKhxDwTLl/0UH1eDVkmlNf9eqng8thqFquX606aTT6/pfJ6OznH5u/cfQBtF8cnSOgWSDcYBmeYqOWniFiod4hSaXmJmWlRAAA7"
        alt=""
      /> -->
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    newsongs: Array,
    songId: [Number, String],
    playing: Boolean,
  },
};
</script>

<style lang="less" scoped>
@keyframes playingrunning {
  from {
    transform: rotateX(15deg);
  }
  to {
    transform: rotateX(60deg);
  }
}
li.song-item {
  // padding-left: 10rem;
  padding: 6rem 10rem;
  position: relative;
  .newsong-title {
    font-size: 17rem;
    color: #333;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .newsong-info {
    font-size: 12rem;
    color: #888888;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    i.newsong-sq {
      display: inline-block;
      width: 12rem;
      height: 8rem;
      margin-right: 4rem;
      background-image: url("https://s3.music.126.net/mobile-new/img/index_icon_2x.png?5207a28c3767992ca4bb6d4887c74880=");
      background-size: 166px 97px;
    }
  }
  .newsong-play {
    background-image: url("https://s3.music.126.net/mobile-new/img/index_icon_2x.png?5207a28c3767992ca4bb6d4887c74880=");
    background-position: -24px 0;
    background-size: 166px 97px;
    width: 22rem;
    height: 22rem;
    position: absolute;
    right: 10rem;
    top: 50%;
    transform: translateY(-50%);
    &.active {
      background-image: none;
      display: flex;
      justify-content: space-around;
      span {
        width: 11%;
        height: 100%;
        background: red;
        animation: playingrunning 0.8s infinite alternate;
        animation-play-state: paused;
        transform-origin: bottom;
        &:nth-child(1) {
          animation-delay: 0s;
        }
        &:nth-child(2) {
          animation-delay: -0.2s;
        }
        &:nth-child(3) {
          animation-delay: -0.4s;
        }
        &:nth-child(4) {
          animation-delay: -0.6s;
        }
      }

      &.playing {
        span {
          animation-play-state: running;
        }
      }
    }
  }
}
</style>