// pages/index/room.js
var utils = require('../util/util.js')
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    roomid:'0000000000',
    players:['001','007'],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.sendSocketMessage({
    //   data: "微信小程序 web socket"
    // })
    wx.onSocketMessage(res =>{
      //console.log(res.type+" "+res.data)
      this.dealJson(res)
    })
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
    wx.onSocketClose(function (res) {
      console.log('已经退出房间')
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
  onUnload: function (res) {

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
    if (app.globalData.roomid == null || app.globalData.roomid == "" || app.globalData.roomid == "000000"){
      return
    }
    // if (res.from === 'button') {
    //   // 来自页面内转发按钮
    //   console.log(res.target)
    // }
    return {
      title: '加入游戏吧',
      path: '/pages/index/first?roomid=' + app.globalData.roomid,
      imageUrl:'/pages/img/minigame.png',
      success: function (res) {
        utils.showOKToast("邀请成功")
      },
      fail: function (res) {
        utils.showErrorToast("邀请失败")
      }
    }
  },
  dealJson:function(res){
    //解析JSON
    var messJson = JSON.parse(res.data)

    if(messJson.type == 1){
      this.roomdeal(messJson)
    }else if(messJson.type == 110){
      //启动游戏的指令，挑战到游戏界面
      wx.redirectTo({
        url: './game',
      })
    }else if(messJson.type == -1){
      wx.closeSocket()
    }
  },
  roomdeal:function(messJson){
    app.globalData.roomid = messJson.data.roomId
    //获取玩家
    var _res = [];
    for (var i = 0; i < messJson.data.players.length; i++) {
      _res[i] = messJson.data.players[i].playerId
    }

    //设置信息
    this.setData({
      roomid: messJson.data.roomId,
      players: _res
    })
  }
  ,
  exitroom:function(){
    wx.showModal({
      title: '退出房间',
      content: '确定要退出该房间？',
      showCancel: true,//是否显示取消按钮
      cancelText: "否",//默认是“取消”
      //cancelColor: 'skyblue',//取消文字的颜色
      confirmText: "是",//默认是“确定”
      //confirmColor: 'skyblue',//确定文字的颜色
      success: function (res) {
        if (res.cancel) {
          //点击取消,默认隐藏弹框
        } else {
          var msg = { type: -1, data: app.globalData.playerid }
          wx.sendSocketMessage({
            data: JSON.stringify(msg)
          })
          wx.closeSocket()
        }
      },
      fail: function (res) { },//接口调用失败的回调函数
      complete: function (res) { },//接口调用结束的回调函数（调用成功、失败都会执行）
    })
   
  },
  startgame:function(){
    var msg = { type: 110, data: '' }
    wx.sendSocketMessage({
      data: JSON.stringify(msg)
    })
  },
  givetoone:function(){

  }
})