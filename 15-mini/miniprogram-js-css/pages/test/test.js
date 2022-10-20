const app = getApp()
console.log(app.globalData.msg);
app.globalData.msg = 'hahhha'
console.log(app.globalData.msg);


var common = require('../../utils/tools.js')
console.log('common', common);

common.sayHello('nick')
common.sayGoodbye('nick')

// var info = wx.getSystemInfoSync()
// console.log('getSystemInfoSync', info);

// wx.getSystemInfo({
//   success: (result) => {
//     console.log('getSystemInfo', result);
//   },
// })
wx.getSystemInfo().then(res => {
  console.log('getSystemInfoPromise', res);
})

// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg: "hello world",
    pos: null,
    list: []
  },

  eventParams(event) {
    console.log(123, event.currentTarget.dataset.xx);
  },
  clickHandler: function () {
    // console.log(123, this, this.data.msg);
    this.setData({
      msg: Math.random()
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log('test 页面加载', this);

    // 获取定位
    wx.getLocation({
      type: 'wgs84',
      success: (res) => {
        console.log('获取到位置', res, this);
        this.setData({
          pos: res
        })
      }
    })

    // 获取数据
    wx.showLoading({
      title: '加载中',
    })
    wx.request({
      url: 'https://www.baidu.com/sugrec',
      data: {
        ie: "utf-8",
        prod: "wise",
        wd: "华为"
      },
      success: (res) => {
        // console.log(res.data.g);
        this.setData({
          list: res.data.g
        })
      },
      complete: () => {
        wx.hideLoading()
      }

    })


  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    console.log('页面渲染完成');
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    console.log('页面显示');
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    console.log('test 页面 卸载');

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})