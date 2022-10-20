// logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },

  navto() {
    // console.log(123);
    // wx.navigateTo({
    //   url: '/pages/test2/test2',
    // })

    wx.switchTab({
      url: '/pages/test/test',
    })
  },
  onLoad() {
    console.log('log 页面 加载');


    const app = getApp()
    // console.log(app.globalData.msg);
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return {
          date: util.formatTime(new Date(log)),
          timeStamp: log
        }
      })
    })
  },
  onUnload() {
    console.log('log 页面 卸载');

  }
})