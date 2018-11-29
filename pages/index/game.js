// pages/index/game.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tempcolor:"",
    colorshow:false,

    myid:-1,
    canPutPlayerId:-1,
    cardid:-1,
    cardPileNum:108,
    disCardPileNum:0,
    players:["asdasd"],
    card:{"type":"func","num":-1,"func":"stop"},
    rudge: [{ "id": 20, "type": "num", "num": 2, "func": "nofunc", "color": "red" }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.onSocketMessage(res => {
      //console.log(res.type+" "+res.data)
      this.dealgameinfo(res.data)
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
  // add:function(){测试用
  //   this.setData({
  //     rudge: [{ "id": 20, "type": "num", "num": 2, "func": "nofunc", "color": "red" },
  //     { "id": 89, "type": "func", "num": -1, "func": "stop", "color": "green" },
  //     { "id": 79, "type": "func", "num": -1, "func": "add2", "color": "blue" },
  //     { "id": 76, "type": "num", "num": 9, "func": "nofunc", "color": "red" },
  //     { "id": 9, "type": "num", "num": 1, "func": "nofunc", "color": "blue" },
  //     { "id": 52, "type": "num", "num": 6, "func": "nofunc", "color": "red" },
  //     { "id": 65, "type": "num", "num": 8, "func": "nofunc", "color": "blue" }]
  //   })
  // },
  cardclick:function(e){
    var cindex = parseInt(e.currentTarget.dataset.id)
    var funtpy = e.currentTarget.dataset.funtpy
    if (funtpy == "change" || funtpy == "trump"){
      this.setData({
        colorshow:true,
        cardid: cindex,
      })
    }else{
      this.setData({
        cardid: cindex,
        colorshow: false
      })
    }
    
  },
  putcard:function(e){
    if(this.data.cardid != -1){
      //type3表示为游戏信息
      //再次判断是否需要携带tempcolor
      var msg = { type: 3, data: { putcardid: this.data.cardid, putplayerid: app.globalData.playerid, tempcolor: this.data.tempcolor}} 
      wx.sendSocketMessage({
        data: JSON.stringify(msg)
      })
    }
  },
  getcard:function(e){
    //if (this.data.cardid != -1) {
      //type3表示为游戏信息
      var msg = { type: 3, data: { putcardid: -1, putplayerid: app.globalData.playerid } }
      wx.sendSocketMessage({
        data: JSON.stringify(msg)
      })
    //}
  },
  dealgameinfo:function(x){
    var jsonStr = x.replace(/\ufeff/g, "");//重点
    var e = JSON.parse(jsonStr);
    // console.log(e.data)
    if(e.type == 3){
      this.setData({
        myid: e.data.currentPlayer.playerId,
        rudge: e.data.currentPlayer.rudge,
        cardPileNum: e.data.cardPileNum,
        disCardPileNum: e.data.disCardPileNum,
        canPutPlayerId: e.data.canPutPlayerId,
        card: e.data.prevCard,
      })
    }else{

    }
  },
  ctor:function(){
    this.setData({
      tempcolor:"red"
    })
  },
  ctoy: function () {
    this.setData({
      tempcolor: "yellow"
    })
  },
  ctob: function () {
    this.setData({
      tempcolor: "blue"
    })
  },
  ctog: function () {
    this.setData({
      tempcolor: "green"
    })
  }
})