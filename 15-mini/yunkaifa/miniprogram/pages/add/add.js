const db = wx.cloud.database()
const xinqings = db.collection('xinqings')

const app = getApp()


// pages/add/add.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tempFiles: [],
    text: '',

  },
  addImage() {
    wx.chooseMedia({
      success: (res) => {
        // console.log(res);
        this.setData({
          tempFiles: [...this.data.tempFiles, ...res.tempFiles]
        })
      }
    })
  },

  addArticle() {

    if (this.data.tempFiles.length) {
      // 上传图片

      Promise.all(this.data.tempFiles.map(o => {
        return wx.cloud.uploadFile({
          cloudPath: 'xinqing/' + o.tempFilePath.replace('http://tmp/', ''),
          filePath: o.tempFilePath,
        })
      })).then(res => {
        console.log('上传图片成功', res);

        // 上传文字
        xinqings.add({
          data: {
            text: this.data.text,
            imges: res,
            userInfo: app.globalData.userInfo
          },
          success: (res) => {
            // console.log('发表');
            wx.showToast({
                title: '发布成功',
              }),
              this.setData({
                text: "",
                tempFiles: []
              })
          }
        })
      })
    } else {
      // 上传文字
      xinqings.add({
        data: {
          text: this.data.text,
          userInfo: app.globalData.userInfo
        },
        success: (res) => {
          // console.log('发表');
          wx.showToast({
              title: '发布成功',
            }),
            this.setData({
              text: "",
            })
        }
      })
    }


  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log('app.globalData', app.globalData)
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