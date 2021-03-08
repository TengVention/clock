// pages/user/user.js
const app = getApp()
Page({

  data: {
    userInfo:'',
    loginState: false,
    defaultHeaderUrl: 'https://images.nowcoder.com/head/827m.png'
  },
  onLoad: function (options) {
    const userInfo = app.globalData.userInfo
    const loginState = app.globalData.loginState
    this.setData({
      userInfo: userInfo,
      loginState: loginState
    })
  },
  getUserInfo(e) {
    // console.log(e)
    wx.setStorageSync('userInfo', e.detail.userInfo)
    this.setData({
      userInfo: e.detail.userInfo
    })
    console.log(this.data.userInfo)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})