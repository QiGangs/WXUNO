// pages/index/room.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    roomid:'',
    palyers:[],
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

  },
  dealJson:function(res){
    //解析JSON
    var messJson = JSON.parse(res.data)

    if(messJson.type == 1){
      this.roomdeal(messJson)
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
    //var msg = { type: -1, data: '' }
    // wx.sendSocketMessage({
    //   data: JSON.stringify(msg)
    // })
    wx.closeSocket()
 
    wx.onSocketClose(function (res) {
      console.log('已经退出房间')
      wx.navigateTo({
        url: './index',
      })
    })
  }
})