// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
}) // 使用当前云环境

const db = cloud.database()
const xinqings = db.collection('xinqings')
const users = db.collection('users')

// 云函数入口函数
exports.main = async (event, context) => {
  // return await xinqings.where({}).skip(event.skip || 0).limit(event.limit || 2).get()

  return await xinqings.aggregate().lookup({
      from: 'users',
      localField: '_openid',
      foreignField: '_id',
      as: 'author',
    })
    .end()

}