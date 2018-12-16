// pages/index/first.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info1:"游戏游戏游戏游戏",
    alarm:"",
    disabled:false
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
    this.setData({
      alarm: "进入游戏",
      disabled: false
    })
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
  intoSystem:function(e){
    this.setData({
      disabled:true
    })
    wx.login({
      success: res => {
        this.setData({
          alarm: "登录中..."
        })
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
                alarm: "登录失败",
                disabled: false
              })
            }
          })
        } else {
          this.setData({
            alarm: "服务器错误",
            disabled: false
          })
        }
      },
      fail: res => {
        this.setData({
          alarm: "微信授权失败",
          disabled: true
        })
      }
    });
    
  }
})