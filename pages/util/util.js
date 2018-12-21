
var app = getApp();

function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}


function showErrorToast(msg) {
  wx.showToast({
    title: msg,
    image: './img/icon_error.png',
    duration: 2000,
    mask: true
  })
}



function showOKToast(msg) {
  wx.showToast({
    title: msg,
    image: './img/icon_error.png'
  })
}

function showa(msg){
  wx.showToast({
    title: '暂未开放',//提示文字
    duration: 2000,//显示时长
    mask: true,//是否显示透明蒙层，防止触摸穿透，默认：false  
    // icon: 'success', //图标，支持"success"、"loading"  
    image: '../img/icon_error.png',
    success: function () { },//接口调用成功
    fail: function () { },  //接口调用失败的回调函数  
    complete: function () { } //接口调用结束的回调函数  
  })
}

module.exports = {
  showa:showa,
  showOKToast: showOKToast,
  showErrorToast: showErrorToast
}