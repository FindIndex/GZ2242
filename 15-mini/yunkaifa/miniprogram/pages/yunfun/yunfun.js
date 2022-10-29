// pages/yunfun/yunfun.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

    console.log('开始调用', new Date());
    // wx.cloud.callFunction({
    //   name: "add",
    //   data: {
    //     a: 1,
    //     b: 2
    //   },
    //   success(res) {
    //     console.log(res, new Date());
    //   }
    //   // event.userInfo: {appId: "wxb4459439ae4d546f", openId: "o7W245Q9KJzG2jJjvZBrazAHVZnM"}
    // })

    wx.cloud.callFunction({
      name: "find_all_xinqings",
      data: {
        limit: 3,
        skip: 3
      },
      success(res) {
        console.log('查找所有xinqings', res);
      }
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

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