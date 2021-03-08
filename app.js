// app.js
App({
  onLaunch() {

    //从storage中取userInfo的值
    const userInfo = wx.getStorageSync('userInfo')
    if(userInfo) {//如果storage中有userInfo的值则赋值给全局变量userInfo
      this.globalData.userInfo = userInfo,
      this.globalData.loginState = true
      console.log(this.globalData.loginState)
    } else{
      console.log('Storage userInfo is null')
    }
    if(!wx.cloud) {
      console.error('请使用2.2.3或以上的基础库以确保云能力正常使用')
    } else {
      wx.cloud.init({
        env: 'tengvention-1gyehnx5815b754c',//云开发环境id
        traceUser: true
      })
    }
    
  },
  globalData:{
    userInfo:'',
    openId:'',
    loginState:false
  }
})
