// pages/index/first.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info1:"游戏游戏游戏游戏",
    alarm:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },
  intoSystem:function(){
    wx.login({
      success: res => {
        if (res.code) {
          console.log(res.code)
          wx.request({
            url: getApp().globalData.address + '/wx/login',
            method: 'POST',
            header: {
              'Cache-Control': 'no-cache',
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: {
              code: res.code,
            },
            success: res => {
              if (res.statusCode == 200) {
                app.globalData.playerid = res.data
                console.log(app.globalData.playerid)
                wx.navigateTo({
                  url: './index',
                  success: function (res) { },
                  fail: function (res) { },
                  complete: function (res) { },
                })
              }
            },
            fail: res => {
              console.log("netwrror")
              console.log(res)
              this.setData({
                alarm: "登录失败"
              })
            }
          })
        } else {
          // this.setData({
          //   alarm: "微信授权失败"
          // })
          console.log(res + "微信授权失败")
        }
      },
      fail: res => {
        console.log(res + "wxlogin")
      }
    });
    
  }
})