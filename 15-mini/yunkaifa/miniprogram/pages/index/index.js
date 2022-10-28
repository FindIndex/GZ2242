// 1. 获取数据库引用
const db = wx.cloud.database()
// 2 获取集合
const users = db.collection('users')

const _ = db.command

// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    age: '',
    gender: 1,
    tempFiles: [],
    uploadFiles: []
  },

  radioChange(event) {
    // console.log(event);
    this.setData({
      gender: event.detail.value
    })
  },

  adduser() {
    users.add({
      data: {
        name: this.data.name,
        age: this.data.age,
        gender: this.data.gender
      },
      success: (res) => {
        console.log('插入新数据成功', res);
      }
    })
  },

  chooseImage() {
    wx.chooseMedia({
      success: (res) => {
        // console.log('选择图片成功', res.tempFiles);
        this.setData({
          tempFiles: res.tempFiles
        })
      }
    })
  },
  // {tempFilePath: "http://tmp/2kgyj3Pt3UKxa927500678482e4303b865922340a3f0.jpg", size: 24750, fileType: "image"}

  uploadFile() {
    // wx.cloud.uploadFile({
    //   // cloudPath: 'my-photo.png',
    //   cloudPath: this.data.tempFiles[0].tempFilePath.replace('http://tmp/', ''),
    //   // 指定要上传的文件的小程序临时文件路径
    //   filePath: this.data.tempFiles[0].tempFilePath,
    //   // 成功回调
    //   success: res => {
    //     console.log('上传成功', res)
    //   },
    // })

    Promise.all(this.data.tempFiles.map(o => {
      return wx.cloud.uploadFile({
        cloudPath: o.tempFilePath.replace('http://tmp/', ''),
        filePath: o.tempFilePath,
      })
    })).then(res => {
      console.log('上传多张完成', res);
      this.setData({
        uploadFiles: res
      })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // // 查询所有用户
    // users.where({}).get({
    //   success: (res) => {
    //     console.log(res);
    //   }
    // })


    // 查询某个用户
    // users.where({
    //   name: "nicholas"
    // }).get({
    //   success: (res) => {
    //     console.log(res);
    //   }
    // })

    // 查询年龄小于20岁
    users.where({
      age: _.lt(18)
    }).get({
      success: (res) => {
        console.log(res);
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