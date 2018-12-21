// pages/index/index.js
var utils = require('../util/util.js')
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    roomid:'',
    info: '最是人间留不住\n朱颜辞镜花辞树'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    
    // wx.onSocketOpen(function (res) {
    //   console.log('WebSocket连接已打开！')
    // });

    // wx.onSocketError(function (res) {
    //   console.log('WebSocket连接打开失败，请检查！')
    // })

    // wx.onSocketMessage(function (res) {
    //   console.log(res.data)
    // })

  },

  // heiehi:res =>{
  //   wx.sendSocketMessage({
  //     data: "微信小程序 web socket"
  //   })
  // },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    //this.beginConnect()
    wx.onSocketClose(function (res) {
      console.log('已经退出房间 in index')
      wx.redirectTo({
        url: './first',
      })
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
  beginConnect: function() {
    wx.connectSocket({
      url: app.globalData.socketurl + '/websocket/' + app.globalData.roomid + '/' + app.globalData.playerid,
      method: 'GET',
      success: function () {
        isConnect: true
        console.log("连接成功...")
        wx.redirectTo({
          url: './room',
          success: function(res) {},
          fail: function(res) {},
          complete: function(res) {},
        })
      },
      fail: function () {
        isConnect: false
        console.log("连接失败...")
      }
    });
  },
  into:function(){
    if(this.data.roomid == "" || this.data.roomid == null){
      //util.showErrorToast("需要输入房间号")
      return;
    }
    app.globalData.roomid = this.data.roomid
    this.beginConnect()
  },
  create:function(){
    console.log(app.globalData.playerid)
    this.beginConnect()
  },
  roomidInput:function(e){
    this.setData({
      roomid:e.detail.value
    })
  },
  notok:function(){
    utils.showa()
  }
  
})