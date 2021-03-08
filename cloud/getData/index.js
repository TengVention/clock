// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  //如果有多个云开发环境则需要指明环境id
  env: cloud.DYNAMIC_CURRENT_EVN
})

// 云函数入口函数
exports.main = async (event, context) => {
  return cloud.database().collection('goods').get()
}