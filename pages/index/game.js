// pages/index/game.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
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
    //暂时先注释掉
    // wx.onSocketMessage(res => {
    //   console.log(res.type+" "+res.data)
      
    // })
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
  add:function(){
    this.setData({
      rudge: [{ "id": 20, "type": "num", "num": 2, "func": "nofunc", "color": "red" },
      { "id": 89, "type": "func", "num": -1, "func": "stop", "color": "green" },
      { "id": 79, "type": "func", "num": -1, "func": "add2", "color": "blue" },
      { "id": 76, "type": "num", "num": 9, "func": "nofunc", "color": "red" },
      { "id": 9, "type": "num", "num": 1, "func": "nofunc", "color": "blue" },
      { "id": 52, "type": "num", "num": 6, "func": "nofunc", "color": "red" },
      { "id": 65, "type": "num", "num": 8, "func": "nofunc", "color": "blue" }]
    })
  },
  cardclick:function(){
    console.log("asd")
  }
})