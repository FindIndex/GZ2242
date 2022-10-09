import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    time: "",
    // time:"2022-10-7",
    // beforetime: new Date(new Date().setDate(new Date().getDate() - 1)).toLocaleDateString(),
    // nextTime: new Date(new Date().setDate(new Date().getDate() + 1)).toLocaleDateString(),
    beforetime: "",
    nextTime: "",
    palying: false,
    playingD: "",
    // playingT:"",
    // nextTime:  
  },
  // getters: {
  //   changeStatue: function (Store) {
  //   //   this.playing = change
  //     if (Store.palying) {
  //       // this.$refs.audio.play()
  //       return true
  //     } else {
  //       // this.$refs.audio.pause()
  //       return false
  //     }
  //   },
  // },
  mutations: {
    nowtime(state) {
      let nowDate = new Date();
      let date = {
        year: nowDate.getFullYear(),
        month: nowDate.getMonth() + 1,
        date: nowDate.getDate(),
      };
      state.time = date.year + "-" + date.month + "-" + date.date;
    },
    prevDate(Store) {
      let odata = new Date(
        new Date(Store.time).getTime() - 24 * 60 * 60 * 1000
      )
      var date = new Date(odata);
      var y = date.getFullYear();
      var m = date.getMonth() + 1;
      var d = date.getDate();
      m = m < 10 ? "0" + m : m;
      d = d < 10 ? "0" + d : d;
      Store.time = y + "-" + m + "-" + d;
      Store.beforetime = Store.time
    },
    nextDate(Store) {
      let odata = new Date(
        new Date(Store.time).getTime() + 24 * 60 * 60 * 1000
      );
      var date = new Date(odata);
      var y = date.getFullYear();
      var m = date.getMonth() + 1;
      var d = date.getDate();
      m = m < 10 ? "0" + m : m;
      d = d < 10 ? "0" + d : d;
      Store.time = y + "-" + m + "-" + d;
      Store.nextTime = Store.time
    },
    changePlay(Store) {
      Store.palying = true
    },
    changePlayf(Store) {
      Store.palying = false
    },
    whichplagyingD(Store, { song }) {
      Store.playingD = song
      // Store.playingT = title
    }




  },
  actions: {
  },
  modules: {
  }
})
