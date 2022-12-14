const db = wx.cloud.database()
const xinqings = db.collection('xinqings')

// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // xinqings.where({}).get({
    //   success: (res) => {
    //     // console.log(res);
    //     this.setData({
    //       items: res.data
    //     })
    //   }
    // })

    wx.cloud.callFunction({
      name: "find_all_xinqings",
      data: {
        limit: 3,
        skip: 3
      },
      success:(res)=> {
        // console.log('查找所有xinqings', res);
        this.setData({
          items: res.result.list
        })
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