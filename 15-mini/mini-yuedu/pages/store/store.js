// pages/store/store.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    gender: wx.getStorageSync('gender') || 1,
    navi: [],
    modules: [],
    active: 0,
  },

  onChange(event) {
    console.log(this.data.navi[event.detail.index].url);
    this.setData({
      active: event.detail.index
    })

    wx.showLoading({
      title: '加载中'
    })
    // 获取tab内容
    wx.request({
      url: 'https://apis.netstart.cn/yunyuedu' + this.data.navi[event.detail.index].url,
      success: (res) => {
        this.setData({
          modules: res.data.data.list
        })
      },
      complete: () => {
        wx.hideLoading()
      }
    })
  },

  toggleGender() {
    this.setData({
      gender: this.data.gender === 1 ? 2 : 1,
      active: 0
    })
    wx.setStorageSync('gender', this.data.gender)
    // 初次进入获取navi 并且获取精选
    wx.showLoading({
      title: '加载中'
    })
    wx.request({
      url: 'https://apis.netstart.cn/yunyuedu/store/navi.json',
      data: {
        gender: this.data.gender
      },
      success: (res) => {
        console.log(res);
        this.setData({
          navi: res.data.data.navi
        })

        // 获取精选
        wx.request({
          url: 'https://apis.netstart.cn/yunyuedu' + this.data.navi[0].url,
          success: (res) => {
            this.setData({
              modules: res.data.data.list
            })
          },
          complete: () => {
            wx.hideLoading()
          }
        })
      }
    })
  },

  // 子传父
  xxx(n) {
    console.log('n', n.detail);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

    // 初次进入获取navi 并且获取精选
    wx.showLoading({
      title: '加载中'
    })
    wx.request({
      url: 'https://apis.netstart.cn/yunyuedu/store/navi.json',
      data: {
        gender: this.data.gender
      },
      success: (res) => {
        console.log(res);
        this.setData({
          navi: res.data.data.navi
        })

        // 获取精选
        wx.request({
          url: 'https://apis.netstart.cn/yunyuedu' + this.data.navi[0].url,
          success: (res) => {
            this.setData({
              modules: res.data.data.list
            })
          },
          complete: () => {
            wx.hideLoading()
          }
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