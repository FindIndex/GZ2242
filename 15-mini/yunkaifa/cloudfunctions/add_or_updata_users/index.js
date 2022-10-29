// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
}) // 使用当前云环境

const db = cloud.database()
const users = db.collection('users')

// 云函数入口函数
exports.main = async (event, context) => {
  // let {
  //   data: userFindRes
  // } = await users.where({
  //   _id: event.userInfo.openId
  // }).get()
  // if (userFindRes.length) {
  //   // 查找到 更新
  //   return await users.update

  // } else {
  //   // 没有用户  新增
  //   return await users.add({
  //     data: {
  //       _id: event.userInfo.openId,
  //       _openid: event.userInfo.openId,
  //       avatarFileID: event.avatarFileID,
  //       nickname: event.nickname,
  //     }
  //   })

  // }


  let {
    data: userFindRes
  } = await users.doc(event.userInfo.openId).get()
  if (userFindRes) {
    // 查找到 更新
    return await users.doc(event.userInfo.openId).update({
      data: {
        avatarFileID: event.avatarFileID,
        nickname: event.nickname,
      }
    })

  } else {
    // 没有用户  新增
    return await users.add({
      data: {
        _id: event.userInfo.openId,
        _openid: event.userInfo.openId,
        avatarFileID: event.avatarFileID,
        nickname: event.nickname,
      }
    })
  }
}