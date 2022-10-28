const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'

const db = wx.cloud.database()
const users = db.collection('users')

// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatarUrl: defaultAvatarUrl,
    nickname: ""
  },
  onChooseAvatar(e) {
    const {
      avatarUrl
    } = e.detail
    this.setData({
      avatarUrl,
    })
  },
  zhuce() {
    // 先传头像
    wx.cloud.uploadFile({
      cloudPath: 'avatar/' + this.data.avatarUrl.replace('http://tmp/', ''),
      // 指定要上传的文件的小程序临时文件路径
      filePath: this.data.avatarUrl,
      // 成功回调
      success: res => {
        // console.log('上传成功', res.fileID)

        // 再存昵称+头像图片文件id

        users.add({
          data: {
            avatarFileID: res.fileID,
            nickname: this.data.nickname
          }
        })
      },
    })


  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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